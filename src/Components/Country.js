import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Country = (props) => {
  console.log(props)
    const {name,flag, population,area,nativeName } = props.country
    return (
        <div className = "sm={12}, md={6}, lg={3} " style ={{ margin : '10px',paddingTop: '10px'}}>
            <Card   style={{ width: '18rem' ,  height : '100%'}}>
  <Card.Img variant="top " style={{width: '200px' ,marginLeft: '15px',marginTop: '10px'}} src={flag} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     nativeName : <strong>{nativeName}</strong><br></br>
      population : <strong>{population}</strong><br></br>
      Area : <strong>{area}</strong>
    </Card.Text>
    <Button variant="primary">More Info</Button>
  </Card.Body>
</Card>
        </div>
    );
};
export default Country;