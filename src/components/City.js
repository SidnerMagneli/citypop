import React, { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { separateThousands } from '../utils'

const cityColumn = {
   padding: '0px',
   minWidth: '150px',
   maxWidth: '750px'
}

export default function City(props) {

   const [showPopulation, setShowPopulation] = useState(false);

   let geoLoc = props.geoLoc;

   return (
      <Col className='p-1' style={cityColumn} >
         <Card onClick={() => setShowPopulation(!showPopulation)} className='shadow-lg bg-white rounded'>
            <Card.Body>
               { showPopulation 
                     ?  <Row className='d-flex justify-content-between align-content-center'>
                           <Col>
                              <h5>{geoLoc.toponymName}</h5>
                              <p className='mb-0'>Population: <strong>{separateThousands(geoLoc.population, ',')}</strong></p>
                           </Col>
                        </Row>
                     : <h5>{geoLoc.toponymName}</h5>
               }
            </Card.Body>
         </Card>
      </Col>
   );
}