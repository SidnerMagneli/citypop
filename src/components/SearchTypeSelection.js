import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default function SearchTypeSelection({setSearchType}) {

   return (
      <Row xs={1} sm={2} style={{}}>
         <Col className='d-flex justify-content-center' style={{height: '10rem', width: '20rem'}}>
            <Button variant="light" className='btn-block m-1' onClick={() => setSearchType('city')}>
               <h3>Search city</h3>
            </Button>
         </Col>
         <Col className='d-flex justify-content-center' style={{height: '10rem', width: '20rem'}}>
            <Button variant="dark" className='btn-block m-1' onClick={() => setSearchType('country')}>
               <h3>Search country</h3> 
            </Button>
         </Col>
      </Row>
   );
}