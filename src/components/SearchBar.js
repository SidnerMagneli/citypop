import React, {} from 'react'
import Button from 'react-bootstrap/Button';
import {InputGroup, FormControl } from 'react-bootstrap';

export default function SearchBar({placeholder, input, clearedSearch, handleSubmit, handleChange, clearInput}) {
   return (
      <InputGroup 
      className="mb-3" 
      onSubmit={(e) => {e.preventDefault()}} //prevent 
      >
      <FormControl
         placeholder={placeholder}
         aria-label={placeholder}
         onChange={handleChange}
         value={input}
         onFocus={() => clearInput()} 
      />
      <InputGroup.Append>
         {clearedSearch // if search is cleared, show submit, else show clear
            ? <Button variant="dark" onClick={handleSubmit}>Submit</Button> 
            : <Button variant="light" onClick={clearInput}>Clear</Button>
         }
      </InputGroup.Append>
   </InputGroup>
   )
}