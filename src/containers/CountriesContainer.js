import React, { useEffect, useState } from 'react'
import CountriesFavourites from '../components/CountriesFavourites'
import CountriesHeader from '../components/CountriesHeader'
import CountriesList from '../components/CountriesList'
import CountryDetails from '../components/CountryDetails'
import CountrySelect from '../components/CountrySelect'


const CountriesContainer = ({countriesApi}) => {
    
    const[countries, setCountries] = useState([]);
    const[favouriteCountries, setFavouriteCountries] = useState([]);
    const[SelectedCountry, setSelectedCountry] = useState(null)

 

    const getCountries = function(){
        fetch(countriesApi[0].url)
        .then(res => res.json())
        .then(countries => setCountries(countries));
        console.log(countries)}


    useEffect(() => {
        getCountries()
    }, [])

    // useEffect(() =>
    // {
	// if(favouriteCountries){
    //         ();
	// }
    // },[handleAddFavourite]);

     const onCountrySelected = function(country){
         setSelectedCountry(country)
     }


     const handleAddFavourite = (event) => {
        //  console.log(event.target.value)
         const updatedFavourites = [...favouriteCountries, event.target.value]
        setFavouriteCountries(updatedFavourites);
      } 


 







    return(
        <>
        <CountriesHeader countries={countries}/>
        <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
        
        {SelectedCountry ? <CountryDetails country={SelectedCountry} handleAddFavourite={handleAddFavourite}/>  : null}

        {favouriteCountries ? <CountriesFavourites favouriteCountries={favouriteCountries} /> :null}

        </>
    )
}

export default CountriesContainer