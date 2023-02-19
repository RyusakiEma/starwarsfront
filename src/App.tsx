import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import { Container } from "@mui/material";
import PeopleList from "./components/people";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/people/CharacterDetail";
import NoPageFound from "./components/NoPageFound";

//https://erikmartinjordan.com/toLocaleDateString

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PeopleList />} />
          <Route path='/character/:name' element={<CharacterDetail />} />
          <Route path='*' element={<NoPageFound />} />1
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
