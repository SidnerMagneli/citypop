import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import useFetch from '../useFetch';

export default function Search() {
   const [search, setSearch] = useState("");
   const [data, loading, error] = useFetch("http://api.geonames.org/searchJSON?q=london&maxRows=10&username=demo");

   if (!loading)
      console.log(`data: ${data}\n loading: ${loading}\n error: ${error}`)

   const handleChange = (e) => {
      setSearch(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitting search: ${search}`);
   };

   return (
      <Container style={{width: '40vw'}}>
         <Form onSubmit={handleSubmit}>
            <Form.Control onChange={handleChange} as='input' size="lg" type="text" placeholder="Search city" style={{borderRadius: '20em', backgroundColor: 'black', color: 'white'}}/>
         </Form>
      </Container>
   );
}