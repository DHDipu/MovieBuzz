import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/abc.jpg";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found ${title}`;
  });
  return (
    <main>
      <section className="flex flex-col font-bold justify-center py-4 text-lg sm:text-4xl">
        <div className="flex flex-col items-center">
          <h2 className="text-gray-700 dark:text-teal-600 my-10">404, Oops!</h2>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 not found!"
            />
          </div>
        </div>
        <div>
          <Link className="flex justify-center my-4" to="/">
            <button className="text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white py-2.5 px-1.5">
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
