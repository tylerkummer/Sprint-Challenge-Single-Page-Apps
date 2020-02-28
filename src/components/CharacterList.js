import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => { 
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const parameter = response.data.results.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
      setCharacter(parameter);
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
      <div className="character-card">
        <SearchForm
          handle={handleInputChange}
          value={query}
        />
        {character.map((char) => {
          return (
            <div className="characters" key={char.id}>
              <CharacterCard
                avatar={char.avatar}
                name={char.name}
                status={char.status}
                gender={char.gender}
              />
            </div>
          )
        })}
      </div>
    </section>
  );
}