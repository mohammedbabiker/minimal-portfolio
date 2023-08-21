import React from "react";
function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-stone-400 rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="flex flex-wrap text-lg md:text-xl items-center justify-center mb-2 md:mb-3 dark:text-white font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start dark:text-white text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-400 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}
export default PortfolioItem;
