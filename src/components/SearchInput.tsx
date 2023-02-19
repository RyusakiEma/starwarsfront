import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchInput() {
  return (
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
      <IconButton sx={{ p: "10px" }} aria-label='menu'>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search character'
        inputProps={{ "aria-label": "search character" }}
      />
      <IconButton type='button' sx={{ p: "10px" }} aria-label='search'>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}
