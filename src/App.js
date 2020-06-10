import React from 'react';
import Container from 'react-bootstrap/Container';

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
      my react app
    </Container>
  );
}

