import React,{useState,useEffect} from 'react';
import Country from './Country';
import axios from 'axios';

const CountryData = () => {
    const [countries ,setCountries] =  useState([])

    useEffect (() => {

        axios.get('https://restcountries.eu/rest/v2/all')
        .then( function(response) {
            //console.log(response.data)
            setCountries(response.data)
        })

    },[])
    const renderedCountry = countries.map (country => <Country key ={country.alpha2Code} country ={country}/>)
    return (
        <div className="container fluid row justify-content-center align-items-center ">
            {renderedCountry}
        </div>
    );
};

export default CountryData;