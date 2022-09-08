import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      {/* <Route path="/countries/:id" element={<CountryDetails />} /> */}
    </div>
  );
}

export default App;
