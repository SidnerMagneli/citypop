import {useState, useEffect} from 'react'; 

export default function useFetch(preProcess) {
    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [shouldFetch, setShouldFetch] = useState(false)
  const [query, setQuery] = useState('');
  
  // trigger data fetching once
  function fetchNewData(query) { 
    setQuery(query)

    // reset state
    setData(null);
    setError(null);
    
    setShouldFetch(true);
  }

  useEffect(() => {

    const fetchData = async () => {
      
      setLoading(true); // start loading
      
      try {

        const res = await fetch(query);
        const json = await res.json();
        console.log('(useFetch) response:',json);

        let preProcessedData = preProcess(json);
        setData(preProcessedData);

      } catch (e) {
        setError(e);
        console.error(`useFetch error: ${e.message}`);
      } finally {
        setLoading(false); // stop loading
      }
    }
    
    // only fetch data on submission
    if(shouldFetch) {
      fetchData(query);
      setShouldFetch(false); // prevent further invocation of fetchData
    }

  }, [query, preProcess, shouldFetch]);

  return [data, loading, error, fetchNewData];

}