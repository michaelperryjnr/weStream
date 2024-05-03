/**fetch discover movie */
// import React from "react";
import { API_KEY } from "./config";

const discoveryUrl =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

export async function getDiscover() {
  try {
    const response = await fetch(discoveryUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//change to API key
export async function getPopular ()  {
  try {
    const response = await fetch(popularUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

