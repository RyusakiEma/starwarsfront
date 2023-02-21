import { useState } from "react";

// Mui Imports
import { Box, Paper, Typography } from "@mui/material";

import { IPeople } from "../../api/types";
import { PeopleContainer, PersonName } from "./people.style";

interface Props {
  person: IPeople;
}

const CharacterCard = ({ person }: Props) => {
  const [showName, setShowName] = useState(false);

  return (
    <PeopleContainer>
      <Paper
        elevation={showName ? 4 : 0}
        sx={{ backgroundColor: "transparent" }}
      >
        <Box className='people-img-container'>
          <img
            className='person-image'
            src={person.image}
            onLoad={() => setShowName(true)}
          />
        </Box>
        {showName && (
          <PersonName variant='h5' className='person-name'>
            {person.name}
            {person?.world && (
              <Typography>Homeworld: {person.world.name}</Typography>
            )}
          </PersonName>
        )}
      </Paper>
    </PeopleContainer>
  );
};

export default CharacterCard;
