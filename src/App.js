
import { getAllByAltText } from '@testing-library/react';
import './App.css';
import CountriesContainer from './containers/CountriesContainer';

function App() {

  const countriesApi = [
    {
      name:"All",
      url: "https://restcountries.eu/rest/v2/all"
    }
  ]



  return (
    <CountriesContainer countriesApi={countriesApi}/>

  );
}

export default App;
