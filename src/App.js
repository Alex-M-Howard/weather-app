import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {

  const [currentLocation, setCurrentLocation] = useState({ location: '19510' })//location: `48.8567,2.3508` })
  const [location, setLocation] = useState(currentLocation);
  
  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setCurrentLocation({location: `${latitude},${longitude}`});
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }, []);

  const handleSubmit = (searchLocation) => {
    setLocation(searchLocation);
  }

  console.log(currentLocation)
  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} />
      <Weather location={location.location} />
      
    </div>
  );
}

export default App;
