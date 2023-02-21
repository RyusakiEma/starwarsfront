import PageTemplate from "../layout/PageTemplate";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../hooks/useCharacter";
import SearchInput from "../SearchInput";

// Mui Imports
import { Grid, Box, Typography } from "@mui/material";

import { formatDate } from "../../utils/date";
import { filmsImgUrl } from "../../api/peopleApi";
import Loader from "../Loader";

const CharacterDetail = () => {
  const { name } = useParams();
  const { character, loading } = useCharacter(name || "");

  return (
    <PageTemplate>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchInput />
          {character && (
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <img src={character.image} style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h4'>{character.name}</Typography>
                <Box mt={2}>
                  <Typography>
                    <>
                      <strong>Birth year: </strong>
                      {character.birth_year}
                    </>
                  </Typography>
                  {character?.world && (
                    <Typography>
                      <>
                        <strong>Homeworld: </strong>
                        {character?.world.name}
                      </>
                    </Typography>
                  )}
                  <Typography>
                    <>
                      <strong>Gender: </strong>
                      {character.gender}
                    </>
                  </Typography>
                  <Typography>
                    <>
                      <strong>Last edition: </strong>
                      {formatDate(character.edited)}
                    </>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5' mb={2}>
                  Films
                </Typography>
                <Grid item container spacing={2}>
                  {character.films.map((film) => (
                    <Grid key={film} item lg={3}>
                      <img
                        style={{ width: "100%" }}
                        src={
                          film
                            .slice(0, film.length - 1)
                            .replace(
                              "https://swapi.dev/api/films/",
                              filmsImgUrl
                            ) + ".jpg"
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </PageTemplate>
  );
};

export default CharacterDetail;
