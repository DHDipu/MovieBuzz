import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../Components/MovieCard";
import { useTitle } from "../hooks";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const pageTitle = useTitle(`Search For ${queryTerm}`);

  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className="py-5 dark:text-white text-center sm:text-right max-w-7xl">
        <div className="sm:text-3xl text-lg font-bold ">
          {movies.length === 0
            ? `No Movie Found For '${queryTerm}'`
            : `Movie Found For '${queryTerm}'`}
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
