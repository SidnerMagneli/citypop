import {useState, useEffect} from 'react'; 

export default function useFetch(url) {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {

      const fetchData = async () => {
        setData(null);
        setLoading(true); // initiate load 
        try {
          const res = await fetch(url);
          const json = await res.json();
          setData(json.data);
          console.log(json);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }

      fetchData(url);

  },[url])

  return [data, loading, error]
}