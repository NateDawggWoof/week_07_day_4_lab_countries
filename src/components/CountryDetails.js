import React from 'react'
const CounrtyDetails = ({country, handleAddFavourite}) => {
    const url = country.flag

    return (
        <>
        <div>
                <h4>Country Details</h4>
                <p>Name: {country.name}</p>
                <p>Population: {country.population}</p>
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
           
            <span>
            <p> Flag:</p><img src={url} id="flag" width="128" height="170"/>
            </span>
            
            
        </div>
        <div>
            <button onClick={handleAddFavourite}>Add To Favourites</button>
            
        </div>
        </>
    )

}

export default CounrtyDetails