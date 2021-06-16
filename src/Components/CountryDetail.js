import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const CountryDetail = () => {
    const {name} = useParams()

    const [country, setCountry] = useState([]);
    
    
    useEffect (() => {
        const url ='https://restcountries.eu/rest/v2/name/';
          axios.get(`${url}${name}`)
        .then(function (response){
            setCountry(response.data)
            
            
             
        })


    },[name])
    

   

     const renderedList  = country.map((single)  =>{
         return <Card style={{ width: '18rem', margin: 'auto',border : '3px solid green', padding : '10px' }}>
         <Card.Img variant="top" src={single.flag} style ={{width : '150px',margin: '15px'}} />
         <Card.Body>
           <Card.Title>NativeName : {single.nativeName}</Card.Title>
           <Card.Text>
             Capital : <strong>{single.capital}</strong>
             <hr></hr>
             Region : <strong>{single.region}</strong>
             <hr></hr>
             SubRegion : <strong>{single.subregion}</strong>
           </Card.Text>
           
         </Card.Body>
       </Card>

         

     })
    
    
    
    
    
    
    return (
        <div> 
            {renderedList}
        </div>
    );
};

export default CountryDetail;