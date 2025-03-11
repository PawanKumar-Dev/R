# Custom Hook

- Any Method we can make and export to reuse many times across the React app can be a Custom Hook.

- But according to naming convention is "use" keyword must be used.
- Custom hooks allow us to extract and reuse stateful logic across multiple components.
  ```
  import { useState, useEffect } from 'react';

  function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Reset state before making a new request
      setLoading(true);
      setError(null);
  
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [url]); // Effect re-runs only when the URL changes
  
    return { data, loading, error };
  }
  
  export default useFetch;
  ```

- Now we can use our own Hook just like any other React Hook
  ```
  import useFetch from './useFetch'

  function UserList() {
    const { data, loading, error } = useFetch('https://api.example.com/users')
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )
  }
  
  export default UserList
  ```
