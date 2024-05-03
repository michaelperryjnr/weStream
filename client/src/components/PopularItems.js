import React, { useState, useEffect } from "react";
import { getPopular } from "../helper/helper";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularData = async () => {
      try {
        const popularData = await getPopular();
        setPopularMovies(popularData.results.slice(1, 10));
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPopularData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-6">
      {popularMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieCard = ({ movie }) => {
  const { title, poster_path, genre_ids, vote_average } = movie;

  const getGenres = (genreIds) => {
    // Helper function to get genre names from genre IDs
    const genres = ["Action", "Adventure", "Drama"]; // Replace with actual genre data
    return genres.filter((genre, index) => genreIds.includes(index));
  };

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <StarIcon
              key={`full-${index}`}
              className="w-5 h-5 fill-yellow-500"
            />
          ))}
        {hasHalfStar && (
          <StarIcon className="w-5 h-5 fill-yellow-500 stroke-yellow-500" />
        )}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <StarIcon
              key={`empty-${index}`}
              className="w-5 h-5 fill-gray-500 stroke-gray-500"
            />
          ))}
      </>
    );
  };

  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Link className="absolute inset-0 z-10" href={`/movie/${movie.id}`}>
        <span className="sr-only text-black">View {title}</span>
      </Link>
      <img
        alt={title}
        className="object-cover w-full h-[400px] sm:h-[500px]"
        height={600}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        style={{ aspectRatio: "400/600", objectFit: "cover" }}
        width={400}
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-semibold text-lg md:text-xl text-black">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {getGenres(genre_ids).join(", ")}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {getStarRating(vote_average)}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

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

export default PopularMovies;
