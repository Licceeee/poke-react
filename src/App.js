import React, {useState, useEffect } from 'react'
import './App.css';
import { getApiData } from './api'
import { Switch, Route } from "react-router-dom";
import MainView from './components/MainView/MainView'
import DetailView from './components/DetailView/DetailView'
import SearchBar from './components/SearchBar/SearchBar'
// import Footer from './components/Footer/Footer'

// const backendUrl = "https://poke-express-api.herokuapp.com/api/pokemon"
const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=20"

function App() {


    return (
      <div className="App">

        <div className="text-center">
          POKE FIGHT IMG PLACEHOLDER
        </div>

        <SearchBar />

        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>

          <Route exact path="/:id">
              <DetailView />
          </Route>

          <Route exact path="/fight">
              {/* Placeholder for POKEMON FIGHT */}
          </Route>

          <Route exact path="/scores">
              {/* Placeholder for SCORE */}
          </Route>

        </Switch>

        {/* Placeholder for FOOTER */}

      </div>
    );
}


export default App;