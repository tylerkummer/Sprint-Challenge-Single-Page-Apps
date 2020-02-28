import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
      const para = response.data.results.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
      setCharacter(para);
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
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div className="search-bar">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
      </div>      
      
      <div className="character-card">
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