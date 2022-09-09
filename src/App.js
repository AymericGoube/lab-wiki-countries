import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryList />

      <Routes>
        <Route path="/:cca3" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
