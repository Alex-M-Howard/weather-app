import React, { useState } from "react";


const Search = ({handleSubmit, location}) => {

  const [userInput, setUserInput] = useState({location: ""});

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserInput(data => ({ ...data, [name]: value }))
  };

  return (
    <form>
      <input
        id="location"
        type="text"
        name="location"
        placeholder="Enter city, zip code, or latitude and longitude"
        value={userInput.location}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
