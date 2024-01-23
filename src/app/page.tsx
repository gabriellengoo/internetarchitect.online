import React from "react";
import { Shiba } from "./components/Shiba";
import "../styles.css";

export default function Home() {
  return (
    <main>
      <div className="p-3 w-screen">
        <div className="flex  justify-between">
          <div className="textblend">
            <h1 className='text-4xl font-medium'>The Internet Architects © 24.</h1>
            <h1 className='text-base font-light pr-2'>Age of tecnology - planing, designing and overseeing the construction of modern day websites </h1>
            <h1 className='text-base font-light pr-2'> (double click the iphone screen to browse sites we have made) </h1>
          </div>
          <div className="flex">
            <h1 className='text-base font-medium pr-2'>Instagram</h1>
            <h1 className='text-base font-medium'>Contact</h1>
            {/* make contact pg look like apple contacts and make intro */}
          </div>
        </div>
        <Shiba />
      </div>
    </main>
  );
}
