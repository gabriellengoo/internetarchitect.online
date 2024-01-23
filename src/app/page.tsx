import React from "react";
import { Shiba } from "./components/Shiba";
import "../styles.css";

export default function Home() {
  return (
    <main>
      <div className="p-3 w-screen">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="textblend md:fixed md:top-0 md:left-0 md:z-10">
            <h1 className='text-2xl md:text-4xl font-medium'>The Internet Architects © 24.</h1>
            <h1 className='text-xs md:text-base font-light pr-2'>Age of technology - planning, designing, and overseeing the construction of modern-day websites </h1>
            <h1 className='text-xs md:text-base font-light pr-2'> (double click in the iPhone screen, on the url to browse sites we have made) </h1>
          </div>
          <div className="flex justify-end pr-[2vw] w-[inherit]">
            <h1 className='text-xs md:text-base font-medium pr-2'>Instagram</h1>
            <h1 className='text-xs md:text-base font-medium'>Contact</h1>
            {/* make contact pg look like Apple contacts and make intro */}
          </div>
        </div>
        <Shiba />
      </div>
    </main>
  );
}
