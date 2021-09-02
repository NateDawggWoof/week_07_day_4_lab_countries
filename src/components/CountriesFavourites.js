import React from 'react'
import { emoji } from '../util'

const CountriesFavourites = ({favouriteCountries}) => {
    // console.log("This the array of favourite countries",favouriteCountries[0])


    const favouriteOptions = favouriteCountries.map((favouriteCountry,index) => {
        console.log("name of country" , favouriteCountry.name)
        return<p value={index} key={index}   >{favouriteCountry.name} {emoji(favouriteCountry.alpha2Code)}</p>

    })




    return(
        <>
        <h2>Favourite Countries</h2>
        <ul>
        {favouriteOptions}
        </ul>
        </>
    )
}

export default CountriesFavourites