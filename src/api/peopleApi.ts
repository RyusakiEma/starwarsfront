import API from "./api";
import axios from "axios";
// Types
import { IPeople, IPeopleResponse, IPlanet } from "./types";

const characterImgUrl =
  "https://starwars-visualguide.com/assets/img/characters/";

export const filmsImgUrl = "https://starwars-visualguide.com/assets/img/films/";

const getCharacterId = (character: IPeople) => {
  const urlSplitted = character.url.split("/");
  const id = urlSplitted[urlSplitted.length - 2];
  character.image = `${characterImgUrl}${id}.jpg`;
};

const getWorld = async (homeworld: string) => {
  try {
    const response = await axios.get<IPlanet>(homeworld);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPeople = async (page: number) => {
  try {
    const { data } = await API.get<IPeopleResponse>(`people/?page=${page}`);
    data.results.map((character) => getCharacterId(character));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetCharacter = async (name: string) => {
  try {
    const { data } = await API.get<IPeopleResponse>(`people/?search=${name}`);
    await Promise.all(
      data.results.map(async (character) => {
        getCharacterId(character);
        const world = await getWorld(character.homeworld);
        character.world = world;
      })
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
