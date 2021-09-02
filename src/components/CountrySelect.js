import React from 'react'

const CountrySelect =({countries, onCountrySelected}) => {

    const CountriesOptions = countries.map((countries,index,style) => {
        return<option value={index} key={index} data-icon={countries.flag}  >{countries.name} <img src={countries.flag}/> </option>

    })


    const handleChange = function (event) {
        const choosenCountry = countries[event.target.value]
        onCountrySelected(choosenCountry)
    }

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Country</option>
            {CountriesOptions}
        </select>
    )


}

export default CountrySelect