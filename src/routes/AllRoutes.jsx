import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../Pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-900">
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath="movie/now_playing" title={"Home"} />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title={"TopRated"} />}
        />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title={"Popular"} />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title={"Upcoming"} />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
