import React, {  } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function ErrorFallback({error, componentStack,resetErrorBoundary}) {

   return (
      <Container>
         <Alert variant='danger'>
            <Alert.Heading>
               Sorry, we encountered error!
            </Alert.Heading>
            <p>{error.message}</p>
            <p>{componentStack}</p>
            <hr />
            <Container className='d-flex justify-content-end'>
               <Button onClick={() => {
                  resetErrorBoundary();
               }} variant='outline-danger'>
                  Try again!
               </Button>
            </Container>
         </Alert>      
      </Container>
   )
}
