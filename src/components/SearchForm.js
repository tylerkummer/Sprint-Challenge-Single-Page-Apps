import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     // Add a search form here
     <form className="search">
        <input
          type="text"
          onChange={props.handle}
          value={props.value}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
     </form>
    </section>
  );
}
