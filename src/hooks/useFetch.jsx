import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_KEY_API_KEY
  }&query=${queryTerm}`;

  useEffect(() => {
    async function movieFetch() {
      const response = await fetch(url);
      const movieData = await response.json();
      setData(movieData.results);
    }
    movieFetch();
  }, [url]);

  return { data };
};
