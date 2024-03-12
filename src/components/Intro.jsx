// import React from "react";
function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
        Mohammed Babiker
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Web Developer & Software Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        <br />
        Excepteur sint occaecat lucka cupidatat non proident, sunt in cupidatat
        culpa qui officia deserunt{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noopener noreferrer"
        >
          The Link
        </a>{" "}
        mollit anim id est laborum.
      </p>
    </div>
  );
}
export default Intro;
