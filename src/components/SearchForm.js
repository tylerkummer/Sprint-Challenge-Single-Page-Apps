import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
     <div className="search-bar">
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
      </div>      
    </section>
  );
}
