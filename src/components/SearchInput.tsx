import React, { useState, KeyboardEvent } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { getCharacter } from "../api/peopleApi";
import { IPeople } from "../api/types";

import { useLocation, useNavigate } from "react-router-dom";
import SelectInput from "./SelectInput";

interface Props {
  setPeople?: React.Dispatch<React.SetStateAction<IPeople[]>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  getPeople?: () => Promise<void>;
}

export default function SearchInput({ setPeople, setPage, getPeople }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(location.state?.name || "");

  const searchCharacter = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (location.pathname.includes("character")) {
        navigate("/", { state: { name: searchValue } });
        return;
      }

      if (searchValue.length > 0) {
        try {
          const data = await getCharacter(searchValue);
          if (data && setPeople && setPage) {
            setPeople(data.results);
            setPage(0);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        getPeople && getPeople();
      }
    }
  };

  return (
    <>
      <Paper
        component='form'
        sx={{
          p: "0.5rem 1rem",
          mb: "1.5rem",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={searchValue}
          placeholder='Search character by name'
          inputProps={{ "aria-label": "search character" }}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={searchCharacter}
        />

        {searchValue.length > 0 && (
          <IconButton
            sx={{ p: "10px" }}
            onClick={async () => {
              if (getPeople) {
                await getPeople();
              }
              setSearchValue("");
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Paper>

      {!location.pathname.includes("character") && (
        <Box mt={2} mb={2}>
          <SelectInput
            setPeople={setPeople}
            setPage={setPage}
            getPeople={getPeople}
          />
        </Box>
      )}
    </>
  );
}
