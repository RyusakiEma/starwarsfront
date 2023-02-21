import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Loader from "./Loader";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IFilm, IPeople } from "../api/types";
import { getCharacterByFilm } from "../api/peopleApi";
import { useFilm } from "../hooks/useFilms";
import Skeleton from "@mui/material/Skeleton";

interface Props {
  setPeople?: React.Dispatch<React.SetStateAction<IPeople[]>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  getPeople?: () => Promise<void>;
}

export default function SelectInput({ setPeople, setPage, getPeople }: Props) {
  const [film, setFilm] = useState("");
  const { films, loading: loadingFilms } = useFilm();
  const [loading, setLoading] = useState(false);

  const handleChange = async (event: SelectChangeEvent) => {
    setFilm(event.target.value as string);
    if (event.target.value !== "all") {
      setLoading(true);

      const charactersUrl = event.target.value.split(",");
      const characters = await getCharacterByFilm(charactersUrl);
      if (characters) {
        setPeople && setPeople(characters);
        setPage && setPage(0);
      }
      setLoading(false);
    } else {
      getPeople && getPeople();
    }
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          borderColor: (theme) => theme.palette.primary.main,
        },
      }}
    >
      {!loadingFilms ? (
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Search By Film</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={film}
            label='Search by film'
            onChange={handleChange}
          >
            <MenuItem key='all' value='all'>
              All
            </MenuItem>
            {films.map((film: IFilm) => (
              <MenuItem key={film.title} value={film.characters.join(",")}>
                {film.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Skeleton animation='wave' width={"100%"} height={100} />
      )}

      {loading && <Loader />}
    </Box>
  );
}
