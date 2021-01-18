import React from "react"
import './App.css';
import Header from './components/Header'
import Recipe from './components/Recipe'
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState("");
  const [receipes, setReceipe] = useState([]);

  const App_ID = "0c13612b";
  const App_Key = "c30de65d1c02cc629ae08a1b98997470";


  const onInputChange = (e) => {
    setSearch(e.target.value)
  };

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange}/>
      <Recipe />
    </div>
  );
}

export default App;
