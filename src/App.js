import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Search from './components/Search';

const center = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function App() {

  return (
    <Container style={center}>
      <Jumbotron style={{borderRadius: '15em'}}>
        <Search />
      </Jumbotron>
    </Container>
  );

}
