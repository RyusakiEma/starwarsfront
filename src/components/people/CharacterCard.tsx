// Mui Imports
import { Grid, Box, CircularProgress, Paper } from "@mui/material";

import { IPeople } from "../../api/types";
import { PeopleContainer, PersonName } from "./people.style";

interface Props {
  person: IPeople;
}

const CharacterCard = ({ person }: Props) => {
  return (
    <PeopleContainer>
      <Paper elevation={4}>
        <Box className='people-img-container'>
          <img className='person-image' src={person.image} />
        </Box>
        <PersonName variant='h5' className='person-name'>
          {person.name}
        </PersonName>
      </Paper>
    </PeopleContainer>
  );
};

export default CharacterCard;
