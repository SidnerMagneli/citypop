import React from 'react'
import Row from 'react-bootstrap/Row'

export default function Title() {
   return (
      <Row className='d-flex justify-content-center mb-3 mb-sm-5'>
      <h1>
        <strong>
          <span style={{color: 'white'}}>City</span>
          <span style={{color: 'black'}}>Pop</span>
        </strong>
      </h1>
    </Row>
   )
}