import React from "react";
import siteData from "../data/sitedata";


const {name, year, developer, devSite} = siteData;

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 relative inline-flex gap-4 w-full py-6 px-4 justify-around">
      <p
        className="hover:text-yellow-500
      "
      >
        <a href={devSite}>{developer}</a>
      </p>
      <p className="cursor-default">All Rights Reserved &copy; {year}</p>
      <p className="cursor-pointer">{name}</p>
    </footer>
  );
}
