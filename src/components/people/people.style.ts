import styled from "styled-components";

// Mui Imports
import { Box, Typography } from "@mui/material";

export const PeopleContainer = styled(Box)`
  cursor: pointer;
  max-width: 100%;
  line-height: 0;

  a {
    text-decoration: none;
  }

  &:hover .person-image {
    transform: scale3d(1, 1, 1);
  }

  .people-img-container {
    overflow: hidden;
    border-radius: 0;
  }

  .person-image {
    width: 100%;
    transform: scale3d(1.05, 1.05, 1);
    transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

export const PersonName = styled(Typography)`
  padding: 0.5rem 1rem;
  font-weight: 200;

  background: linear-gradient(to right, #283048, #859398);
`;
