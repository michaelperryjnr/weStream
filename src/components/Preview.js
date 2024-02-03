import React from "react";
import movie from "../assets/movie.jpg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../Pages/Movies/[movieId]"


const Preview = () => {
    // const id = movieId;
  return (
    <>
      <div className="flex md:flex-col sm:flex-col max-md:flex-col justify-center items-center lg:flex-row">
        <div className="preview lg:w-4/6" id="preview">
          <img src={movie} alt="preview" className="w-full rounded-[16px]" />
        </div>
        <div className="options my-4 lg:w-2/6 lg:px-3">
          <Link to="/[movieid]" className="text-6xl font-bold" id="title">
            Title
          </Link>
          <h2 className="text-3xl text-gray-300">Subtitle</h2>
          <div className="rating flex flex-row gap-1">
            <div className="w-4 h-4 bg-yellow-600"></div>
            <div className="w-4 h-4 bg-yellow-600"></div>
            <div className="w-4 h-4 bg-yellow-600"></div>
            <div className="w-4 h-4 bg-yellow-600"></div>
            <div className="w-4 h-4 bg-yellow-600"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            placeat aspernatur reiciendis debitis rem? Necessitatibus suscipit
            illum, sit iusto amet atque porro sunt asperiores provident
            mollitia, quod numquam. Nesciunt, beatae?
          </p>
          <div className="flex flex-row max-sm:justify-center max-md:justify-center md:justify-center lg:justify-start items-center gap-4 py-5">
            <button
              className="cursor-pointer rounded-full bg-yellow-700 text-white px-3 py-3"
              onClick={() => toast.success("playing")}
              id="play"
            >
              Play
            </button>
            <button
              className="cursor-pointer rounded-full bg-yellow-700 text-white px-3 py-3"
              onClick={() => {
                toast.success("Added to like..");
              }}
            >
              Like
            </button>
            <button
              className="cursor-pointer rounded-full bg-yellow-700 text-white px-3 py-3"
              onClick={() => {
                toast.success("Added to bookmarks");
              }}
            >
              Bookmark
            </button>
            <button
              className="cursor-pointer rounded-full bg-yellow-700 text-white px-3 py-3"
              onClick={() => {
                toast.success("Added to favorites");
              }}
            >
              Add to favorites
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
