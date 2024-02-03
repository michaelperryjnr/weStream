import React from "react";
import movie from "../assets/movie.jpg";
import { Link } from "react-router-dom";
import Preview from "./Preview";

export default function Home() {
  return (
    <>
      <section className="container mx-auto py-6 px-4">
       <Preview></Preview>
      </section>
      <section className="trending conatiner mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-center px-6 py-2 lg:text-5xl">
          Trending
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6 max-sm:grid-cols-2">
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div className="px-1 py-2">
              <h2>Title</h2>
              <h3>Category</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center px-3 py-3">
          <Link
            to="/trending"
            className="cursor-pointer  bg-yellow-700 text-white px-6 py-3 rounded-lg hover:border-4 hover:bg-transparent hover:text-white hover:border-yellow-700"
          >
            View Trending
          </Link>
        </div>
      </section>
      <section className="trending conatiner mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-center px-6 py-2">Categories</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6 max-sm:grid-cols-2">
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
          <div className="trending-item">
            <div className="item-img">
              <img src={movie} alt="trending" className="w-full" />
            </div>
            <div>
              <h3 className="text-center">Category</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center px-3 py-3">
          <Link
            to="/categories"
            className="cursor-pointer  bg-yellow-700 text-white px-6 py-3 rounded-lg hover:border-4 hover:bg-transparent hover:text-white hover:border-yellow-700"
          >
            View More Categories
          </Link>
        </div>
      </section>
    </>
  );
}
