import React from "react";
import { Shiba } from "./components/Shiba";
import "../styles.css";

function CustomSVG() {
  return (
    <div>
      <svg id="one" width="50" height="50" viewBox="0 0 100 100">
        <g id="copy-1" className="group">
          <g className="large">
            <path id="large" d="M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z" fill="white" />
          </g>
          <g className="large-2" transform="rotate(45)">
            <use xlinkHref="#large" />
          </g>
          <g className="small">
            <path id="small" d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z" fill="white" />
          </g>
        </g>
      </svg>

      <svg id="two" width="40" height="40" viewBox="0 0 100 100">
        <use xlinkHref="#copy-1" />
      </svg>

      <svg id="three" width="40" height="40" viewBox="0 0 100 100">
        <use xlinkHref="#copy-1" />
      </svg>
    </div>
  );
}

function BouncingMarquee() {
  return (
    // text-base 
    <div className="marquee-container italic text-sm">
      <div className="marquee-content ">Age of technology - planning, designing, and overseeing the construction of modern-day websites</div>
    </div>
  );
}

// function SearchBar() {
//   return (
//    <div className="p-3">
//      <div className="relative mx-auto p-3 text-white shadow-lg bg-slate-50  rounded-full ">
//       <input
//         type="text"
//         placeholder="The Internet Architects © 24x"
//         className=" md:w-60 h-8 w-[80vw] bg-slate-50 rounded-full p-5 pt-1 pb-1 flex items-center border-none outline-none text-sm"
//       />
//     </div>
//    </div>
//   );
// }
function SearchBar() {
  return (
    // xl:pt-16
   <div className="bigtext sm:pt-2  md:pt-4  ">
    {/* textblendonly */}
     <div className=" relative w-screen justify-center flex bg-transparent mx-auto textcolor md:leading-[5.75rem] text-[7vw] md:text-[7vw]  uppercase p-2  pt-3  ">
      <div
        // placeholder="The Internet Architects©"
        className=" uppercase tracking-tighter  pointer-events-none z-0  flex bg-transparent items-center border-none outline-none "
      >The Internet Architects©</div>
    </div>
   </div>
  );
}

export default function Home() {

  
  return (
    <main>
      <div className="md:p-3 w-screen">
        <div className="flex flex-col justify-between md:flex-row">
          {/* textblend */}
          <div className=" md:fixed md:top-0 md:left-0 md:z-10">
          <SearchBar />
            {/* <h1 className='text-2xl md:text-4xl font-medium'>The Internet Architects © 24.</h1>
            <h1 className='text-xs md:text-base font-light pr-2'>Age of technology - planning, designing, and overseeing the construction of modern-day websites </h1>
            <h1 className='text-xs md:text-base font-light pr-2'> (double click in the iPhone screen, on the url to browse sites we have made) </h1>
          */}
          </div>
          <div className="textcolor flex md:justify-end justify-center z-10 w-[100vw]">
              <a href="https://www.instagram.com/is_this_gabrielle/" target="_blank" rel="noopener noreferrer" className='text-xs md:text-base pr-2'>Instagram</a>
              <a href="mailto:gabriellengoo@hotmail.com" className='text-xs md:text-base pr-2'>Contact</a>
              <a href="tel:+447506549241" className='text-xs md:text-base pr-2'>+447506549241</a>
              <a href="mailto:gabriellengoo@hotmail.com" className='text-xs md:text-base'>gabriellengoo@hotmail.com</a>
          </div>
        </div>
        <CustomSVG /> 
        {/* <BouncingMarquee /> */}
        <Shiba />
      </div>
    </main>
  );
}

// gltf too big