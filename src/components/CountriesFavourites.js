import React from 'react'

const CountriesFavourites = ({favouriteCountries}) => {
    console.log("This the array of favourite countries",favouriteCountries[0])


    const favouriteOptions = favouriteCountries.map((favouriteCountry,index) => {
        const name = favouriteCountries.name
        console.log("name of country" , favouriteCountries)
        return<p value={index} key={index}   >hello  there{name} </p>

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