import axios from 'axios';
import{ useState, useEffect } from 'react';

function UseFetch(URL) {
  const [result, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {     
      await axios.get(URL)
      
      .then((response) => {
        setData(response.data);
        
        setError("false")
      })
      
      .catch((err) => {
        setError(err); 
      })
      
      .finally(() => {
        setLoading(false);
      });
    }
    
    getData()

  }, [URL])

  
  return {result , error, loading};
}

  
export default UseFetch;
