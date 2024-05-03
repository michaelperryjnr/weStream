import React, { useState, useEffect } from "react";
import movie from "../assets/movie.jpg";
import toast from "react-hot-toast";
import { Link, UNSAFE_ViewTransitionContext } from "react-router-dom";
import "../Pages/Movies/[movieId]";
import { getPopular, getDiscover } from "../helper/helper";
import PopularMovies from "./PopularItems";

const Preview = () => {
  const [discover, setDiscover] = useState({ results: [], page: 1 });
  const [popular, setPopular] = useState({ results: [], page: 1 });
  /**Discover Details */
  const [title, setTitle] = useState("Title");
  const [overview, setOverView] = useState("");
  const [discoverImg, setDiscoverImg] = useState(movie);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const discoverData = await getDiscover();
        console.log(discoverData);
        setDiscover(discoverData);
      } catch (error) {
        console.error("Error fetching discover data:", error);
        setDiscover(null);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (discover.results.length > 0) {
      const firstMovieTitle = discover.results[0].title || "Default Title";
      const firstMovieTitleOverView =
        discover.results[0].overview || "Overview";
      const firstMovieImg = discover.results[0].poster_path
        ? `https://image.tmdb.org/t/p/w500${discover.results[0].poster_path}`
        : movie;
      const firstMovieRating =
        Math.ceil(discover.results[0].vote_average / 2) || 0;
      setRating(firstMovieRating);
      setOverView(firstMovieTitleOverView);
      setTitle(firstMovieTitle);
      setDiscoverImg(firstMovieImg);
    } else {
      setTitle("Default Title");
      setOverView("Overview");
      setDiscoverImg(movie);
    }
  }, [discover]);

  const { results = [] } = discover || { results: [] };

  const renderRating = useEffect(() => {
    for (let i = 1; i <= rating; i++) {
      return <StarIcon className="w-5 h-5 fill-yellow-500" />;
    }
  }, [rating]);
  return (
    <>
      <section
        className="relative w-full h-[80vh] md:h-[80vh] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden mt-[8vh] max-sm:mt-[0]"
        style={{
          backgroundImage: `url(${discoverImg || movie})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 container px-4 md:px-6 h-full flex flex-col justify-end items-start gap-4 text-white lg:py-4 max-sm:py-4">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="max-w-[600px] text-lg md:text-xl">{overview}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">{renderRating}</div>
            <span className="text-lg font-medium">4.8</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 max-sm:flex-row">
            <button size="lg" variant="primary">
              <PlayIcon className="w-5 h-5 mr-2" />
              Play
            </button>
            <button size="lg" variant="outline">
              <BookmarkIcon className="w-5 h-5 mr-2" />
              Bookmark
            </button>
            <button size="lg" variant="outline">
              <HeartIcon className="w-5 h-5 mr-2" />
              Favorites
            </button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <PopularMovies />
      </section>
      <section className="py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trending Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Action"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Action
                  </h3>
                </div>
              </div>
            </Link>
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Comedy"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Comedy
                  </h3>
                </div>
              </div>
            </Link>
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Drama"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Drama
                  </h3>
                </div>
              </div>
            </Link>
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Sci-Fi"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Sci-Fi
                  </h3>
                </div>
              </div>
            </Link>
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Horror"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Horror
                  </h3>
                </div>
              </div>
            </Link>
            <Link className="group" href="#">
              <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md">
                <img
                  alt="Romance"
                  className="w-full h-auto object-cover"
                  height={200}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 group-hover:underline">
                    Romance
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Preview;
