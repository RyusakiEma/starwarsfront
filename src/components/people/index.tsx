import { Link } from "react-router-dom";
import PageTemplate from "../layout/PageTemplate";
import SearchInput from "../SearchInput";

// hooks imports
import { usePeople } from "../../hooks/usePeople";

// Mui Imports
import { Grid, Alert, Typography } from "@mui/material";

// Type imports
import { IPeople } from "../../api/types";

// Utils imports
import InfiniteScroll from "react-infinite-scroll-component";

import CharacterCard from "./CharacterCard";
import Loader from "../Loader";

const PeopleList = () => {
  const {
    loading,
    people,
    setPeople,
    page,
    setPage,
    loadMorePeople,
    getPeopleInfo,
  } = usePeople();

  return (
    <PageTemplate>
      <SearchInput
        setPeople={setPeople}
        setPage={setPage}
        getPeople={getPeopleInfo}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {people.length > 0 ? (
            <InfiniteScroll
              dataLength={people?.length}
              next={loadMorePeople}
              hasMore={page ? true : false}
              scrollThreshold={0.2}
              loader={<Loader />}
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
          ) : (
            <Alert variant='outlined' severity='warning'>
              <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
                We could not find a character with that name
              </Typography>
            </Alert>
          )}
        </>
      )}
    </PageTemplate>
  );
};

export default PeopleList;
