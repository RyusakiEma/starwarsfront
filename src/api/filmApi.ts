import API from "./api";
import axios from "axios";
// Types
import { IFilmResponse, IFilm } from "./types";

export const getFilms = async () => {
  try {
    const response = await API.get<IFilmResponse>("films/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
