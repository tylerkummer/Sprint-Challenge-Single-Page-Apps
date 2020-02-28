import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");
  const {characterID} = useParams();

  useEffect(() => {
    const id = characterID; 
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/1`)
    .then(response => {
      setCharacter(response.data);
      console.log("List: ", response.data);
    })
    .catch(error => {
      console.log("Error Found: ", error);
    })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2>
      {character.map((char) => {
        return (
          <div className = "characters" key={char.id}>
            <CharacterCard
              name={char.name}
              status={char.status}
              gender={char.gender}
            />

             <SearchForm
              handle={handleInputChange}
              value={query}
              />
          </div>
        )
      })} */}


      <CharacterCard
        name={character.name}
        status={character.status}
        gender={character.gender}
      />

      <SearchForm
        handle={handleInputChange}
        value={query}
      />

    </section>
  );
}