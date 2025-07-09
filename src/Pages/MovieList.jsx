import { MovieCard } from "../Components/MovieCard";
import { useTitle } from "../hooks";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  const pageTitle = useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
