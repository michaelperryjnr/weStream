import React, {useState, useEffect} from "react";
import movie from "../assets/movie.jpg";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../Pages/Movies/[movieId]"
import getDiscover from "../helper/helper";


const Preview = () => {
  const [discover, setDiscover] = useState({ results: [], page: 1 });

  const [title, setTitle] = useState("Title");
  const [overview, setOverView] =useState("");
  const [discoverImg, setDiscoverImg] = useState(movie)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const discoverData = await getDiscover();
        console.log(discoverData)
        setDiscover(discoverData);
      } catch (error) {
        console.error("Error fetching discover data:", error);
        setDiscover(null)
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(discover.results.length > 0) {
      const firstMovieTitle = discover.results[0].title || "Default Title";
      const firstMovieTitleOverView = discover.results[0].overview || "Overview";
      const firstMovieImg = discover.results[0].poster_path
        ? `https://image.tmdb.org/t/p/w500${discover.results[0].poster_path}`
        : movie;
;
      setOverView(firstMovieTitleOverView);
      setTitle(firstMovieTitle);
      setDiscoverImg(firstMovieImg)
    } else{
      setTitle("Default Title")
      setOverView('Overview')
      setDiscoverImg(movie)
    }

  }, [discover])

  const { results = [] } = discover || {results: []};

  return (
    <>
      <div className="flex md:flex-col sm:flex-col max-md:flex-col justify-center items-center lg:flex-row">
        <div className="preview" id="preview">
          <img src={discoverImg || movie} alt="preview" className="rounded-[16px]" width={500} height={500} />
        </div>
        <div className="options my-4 lg:px-3">
          <Link to="/[movieid]" className="text-6xl font-bold" id="title">
            {title}
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
            {overview || ""}
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
