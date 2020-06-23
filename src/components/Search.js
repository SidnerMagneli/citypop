import React, { useState } from 'react';
import { isCity, getCountryCode } from '../utils'

// Components
import SearchBar from './SearchBar';
import City from './City';
import Loading from './Loading';
import useFetch from '../useFetch';
import { Container, Row, Alert } from 'react-bootstrap';


const API = 'http://api.geonames.org/searchJSON';

export default function Search(props) {

   const [input, setInput] = useState('');
   const [clearedSearch, setClearedSearch] = useState(true)
   const [noResult, setNoResult] = useState(false);
   const [data, loading, error, fetchData] = useFetch(dataPreProcess);

   // handle search field typing events
   const handleChange = (e) => { setInput(e.target.value); }

   // handle search submission
   async function handleSubmit() {

      // helper function. create URL object from query parameters
      const createQuery = () => {
         
         const url = new URL(API);

         const queryParams = {}

         // set search type specific query parameters
         if (props.type === 'city') {
            queryParams.maxRows = 1;
            /*
               fuzzy parameter changes how precise your searches need to be in order to match a location. 
               i.e it allows matching both Goteborg and Göteborg. high fuzziness might return incorrect results.
               -  float between 0 and 1 (default) where low values = high fuzziness, and high values = low fuzziness.
            */
            queryParams.fuzzy = props.fuzziness;
         }
      
         if (props.type === 'country') {
            queryParams.maxRows = 500;
            queryParams.country = getCountryCode(input); //set country param to matching country code
         }

         // set query parameters
         url.search = new URLSearchParams({
            q: input,
            type: 'json',
            username: 'citypop', 
            ...queryParams
         })

         return url;
      }

      let query = createQuery(); // create url object
      let queryString = query.toString()

      fetchData(queryString); // fetch data from query
      
      setClearedSearch(false) // reset cleared state after submission, to show results.
   }

   // pre-processes fetched data. This function is passed to and executed inside useFetch.
   function dataPreProcess(data) {
      
      let geolocs = [];

      try {
         geolocs = data.geonames
         .filter(geoLoc => isCity(geoLoc)) // filter non-city geo-locations
         .filter(geoLoc => geoLoc.population > 0) // remove cities with 0 population
         .sort((a, b) => b.population - a.population) // sort results
         .slice(0, 3) // get first 3 cities, if they exist!
      } catch (err) {
         throw err;
      }
      
      // check if no correct (cities with population > 0) results were returned
      let noCities = (geolocs.length === 0); // all none-city geoloc's are filtered in previous step
      if (noCities || !data.totalResultsCount) { 
         setNoResult(true) // set no results component state
         //throw new Error('no results');
      }

      return geolocs
   }

   function clearInput() {
      setInput('');
      setNoResult(false) // reset state
      setClearedSearch(true)
   }

   const noResultFallback = (
      <Row className='d-flex justify-content-center'>
         <Alert variant='dark'>
            <Alert.Heading>
               Sorry, could not find location <strong>{input}</strong>
            </Alert.Heading>
            { props.type === 'city' && <p>Are you sure {input} is a city?</p> }
            { props.type === 'country' && <p>Are you sure {input} is a country?</p> }
         </Alert>
      </Row>
   );

   //  throw error if component fail to fetch data
   if(error) {
      throw error;
   }

   return (
      <Container className='d-flex justify-content-center p-0'>
         <Row xs='1' className='d-flex justify-content-center' style={{width: '70%'}}>
            <Row xs='1' className="d-flex justify-content-center">
               <SearchBar 
                  placeholder={`Search ${props.type}`}
                  input={input}
                  setInput={setInput}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  clearedSearch={clearedSearch}
                  clearInput={clearInput}
               />
            </Row>
            <Row xs='1' className='d-flex justify-content-center'>
            { data && !noResult && !loading && !clearedSearch                
               ?  data.map(geoLoc =>
                     <City geoLoc={geoLoc} key={geoLoc.geonameId} />
                  )  
               :  <> 
                     { noResult 
                        ?  noResultFallback
                        :  <Loading loadingState={loading}/>
                     }
                  </>
            }
            </Row>
         </Row>
      </Container>
   );
}
