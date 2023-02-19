import { Link } from "react-router-dom";
import PageTemplate from "../layout/PageTemplate";

// hooks imports
import { usePeople } from "../../hooks/usePeople";

// Mui Imports
import { Grid, Box, CircularProgress, Paper } from "@mui/material";

// Type imports
import { IPeople } from "../../api/types";

// Utils imports
import InfiniteScroll from "react-infinite-scroll-component";

// Styled components import
import { PeopleContainer, PersonName } from "./people.style";
import CharacterCard from "./CharacterCard";

const PeopleList = () => {
  const { loading, people, page, loadMorePeople } = usePeople();

  return (
    <PageTemplate>
      {people.length > 0 && (
        <InfiniteScroll
          dataLength={people?.length}
          next={loadMorePeople}
          hasMore={page ? true : false}
          scrollThreshold={0.2}
          loader={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Grid container spacing={5}>
            {people?.map((person: IPeople) => (
              <Grid key={person.name} item xs={12} sm={6} md={4} xl={3}>
                <Link
                  to={`/character/${person.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <CharacterCard person={person} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      )}
    </PageTemplate>
  );
};

export default PeopleList;
