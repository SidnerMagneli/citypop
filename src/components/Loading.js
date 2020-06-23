import React from 'react'
import Loader from 'react-spinners/BarLoader';
import Row from 'react-bootstrap/Row';

export default function Loading({loadingState}) {

   return (
      <Row className='d-flex justify-content-center m-1'>
         <Loader loading={loadingState} /> 
      </Row>  
   )
}