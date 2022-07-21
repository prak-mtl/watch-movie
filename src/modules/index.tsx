import { useEffect, useState } from "react";
import Banner from "./banner";
import MovieList from "./movie-list";

const url =
  "https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5";

export default function MoviePage() {
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState(false);
  const [dataList, setDataList] = useState([]);

  // fetching the movies list from the API
  useEffect(() => {
    fetch(
      `${url}&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataList(data.results);
        setSearchQuery(false);
      })
      .catch((error) => console.debug(error));
  }, [searchQuery]);

  return (
    <div>
      <Banner
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchQuery={setSearchQuery}
      />

      <MovieList dataList={dataList} />
    </div>
  );
}
