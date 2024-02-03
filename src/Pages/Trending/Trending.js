import React from "react";
import movie from "../../assets/movie.jpg"

export default function Trending() {
  return (
    <>
      <section className="container mx-auto py-4 px-4">
        <div className="trending movies">
          <h2 className="text-4xl text-left font-bold text-yellow-700 ">
            Trending movies
          </h2>
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
        </div>
        <div className="trending movies">
          <h2 className="text-4xl text-left font-bold text-yellow-700 ">
            Trending Series
          </h2>
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
        </div>
        <div className="trending movies">
          <h2 className="text-4xl text-left font-bold text-yellow-700 ">
            Trending Categories
          </h2>
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
        </div>
      </section>
    </>
  );
}
