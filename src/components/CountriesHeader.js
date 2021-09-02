import React from 'react'

const CountriesHeader = ({countries}) => {

    const worldPopulation = countries.reduce((totalPoulation,country) => {
        return totalPoulation + country.population
    }, 0)
    


    // Traveller.prototype.calculateTotalDistanceTravelled = function () {
    //     const total = this.journeys.reduce((runningTotal, journey) => {
    //       return runningTotal + journey.distance
    //     }, 0)
    //     return total}



    return(
        <>
        <h1>World Countries</h1>
        <h2>Total Population: {worldPopulation} and growing!</h2>
        </>
    )
}

export default CountriesHeader