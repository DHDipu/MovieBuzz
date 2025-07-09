import { useEffect, useState } from "react";
import BackupImage from "../assets/BackupImage.jpg";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : BackupImage;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=617259ac60de85bbe2b235582bc98440`
      );
      const jsonData = await response.json();
      setMovie(jsonData);
    }
    fetchMovies();
  }, []);

  const pageTitle = useTitle(movie.title);

  return (
    <main>
      <section className="flex justify-evenly flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded-lg" src={image} alt={movie.original_title} />
        </div>
        <div className="max-w-2xl text-gray-500 text-lg dark:text-white">
          <h2 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h2>
          <p className="my-4">{movie.overview}</p>

          <p className="flex flex-wrap gap-2">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span
                  className="border border-teal-500 rounded-sm p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
          </p>

          <div className="flex items-center py-5">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movie.vote_count} Reviews
            </a>
          </div>

          <p className="mt-4">
            <span className="mr-2 font-bold">RealTime: </span>
            <span>{movie.runtime} min</span>
          </p>
          <p className="mt-4">
            <span className="mr-2 font-bold">Revenue: </span>
            <span>{movie.revenue} </span>
          </p>
          <p className="mt-4">
            <span className="mr-2 font-bold">Popularity: </span>
            <span>{movie.popularity} Likes</span>
          </p>
          <p className="mt-4">
            <span className="mr-2 font-bold">Release Date: </span>
            <span>{movie.release_date} </span>
          </p>
          <p className="mt-4">
            <span className="mr-2 font-bold">Status: </span>
            <span>{movie.status} </span>
          </p>
          <p className="mt-4">
            <span className="mr-2 font-bold">Imdb Id: </span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
