import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './components/Search';
import SearchTypeSelection from './components/SearchTypeSelection';
import Title from './components/Title';
import { Button, Row } from 'react-bootstrap';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const center = {
  height: '100vh',
}

export default function App() {

  const [searchType, setSearchType] = useState(null);

  return (
    <Container fluid className='p-5 d-flex align-items-center justify-content-center' style={center}>
      <Row xs={1}  className='d-flex justify-content-center'>
        <Title />
        { searchType === null 
          ? <SearchTypeSelection setSearchType={setSearchType} />
          : <Container style={{width: '80vw'}}>
              <Row className='d-flex justify-content-center mb-4'>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Search type={searchType} fuzziness={0.9}/>
                </ErrorBoundary>
              </Row>
              <Row className='d-flex justify-content-center'>
                <Button onClick={() => setSearchType(null)}>Go back</Button>
              </Row>
            </Container> 
        }
      </Row>
    </Container>
  );

}
