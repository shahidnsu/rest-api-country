import React from 'react';
import homeImage from '../Images/undraw_Creation_process_re_74on.svg';

const Home = () => {
     
    return <div>
         <h1 style ={{textAlign: 'center',color:'slategray'}}>Go to country Tab to know about the countries.</h1>
        <img src={homeImage} alt= "homePage" style ={{ display: 'block',
       marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '20%',
        width: '50%'}} />
    </div>

}

export default Home;