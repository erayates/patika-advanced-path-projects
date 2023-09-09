import React, { useEffect, useState } from "react";

function useFetch(bookName, startIndex) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookName}&startIndex=${startIndex}`
        );
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();

        setIsLoading(false);
        setData(json);
        setError(null);
      } catch (err) {
        setError(`Something went wrong! ${err}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [bookName, startIndex]);

  return { isLoading, data, error };
}

export default useFetch;
