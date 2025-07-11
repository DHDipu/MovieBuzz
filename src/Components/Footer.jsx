import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white border  shadow-sm dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Movie Buzz Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Buzz
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://x.com/mddedarulhasan1"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Twitter - X
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hasanrpir/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@md.dedarulhasan9251"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DHDipu"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Movie Buzz
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
