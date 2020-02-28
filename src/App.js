import React from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Route>
        <WelcomePage />
      </Route>
      <Route>
        <Header />
      </Route>
      <Route>
      {/* <Route exact path="/character/:characterID"> */}
        <CharacterList />
      </Route>
    </main>
  );
}
