import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

interface Props {
  searchText: string;
  setSearchText: (value: string) => void;
  setSearchQuery: (value: boolean) => void;
}

const Banner: React.FC<Props> = ({
  searchText,
  setSearchText,
  setSearchQuery,
}) => {
  return (
    <div className="relative">
      <Carousel showThumbs={false}>
        <div>
          <img src="./banner.png" alt="banner_image" />
        </div>
        <div>
          <img src="./banner.png" alt="banner_image" />
        </div>
        <div>
          <img src="./banner.png" alt="banner_image" />
        </div>
        <div>
          <img src="./banner.png" alt="banner_image" />
        </div>
        <div>
          <img src="./banner.png" alt="banner_image" />
        </div>
      </Carousel>
      <div className="banner-content">
        <p className="text-5xl text-white font-bold">
          Welcome to the weekend watch
        </p>
        <p className="text-xl text-white font-medium mt-6">
          Millions of Movies, TV Shoes and many more
        </p>
        <input
          value={searchText}
          placeholder="Search a movie.."
          className="search-bar"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-bar-button"
          onClick={() => setSearchQuery(true)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Banner;
