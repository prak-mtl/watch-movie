import { useState, useEffect } from "react";
import BearCarousel, { TBearSlideItemDataList } from "bear-react-carousel";
import Switch from "../../components/switch";
import "./style.css";

interface Props {
  dataList: any;
}

const MovieList: React.FC<Props> = ({ dataList }) => {
  const [filteredDataList, setFilteredDataList] = useState(dataList);
  const [choosenCategory, setChoosenCategory] = useState("1");

  useEffect(() => {
    const mediaType = choosenCategory === "1" ? "movie" : "tv";
    const filteredData = dataList.filter(
      (item: any) => item.media_type === mediaType
    );

    setFilteredDataList(filteredData);
  }, [choosenCategory, dataList]);

  const renderStars = (vote_average: number) => {
    const starsToBeShow = Math.floor(vote_average / 2);
    let stars = [];
    for (let i = 0; i < starsToBeShow; i++) {
      stars.push(<span className="star">&#9733;</span>);
    }
    return stars;
  };

  const bearSlideItemData: TBearSlideItemDataList = filteredDataList?.map(
    (row: any) => {
      return {
        key: row.id,
        children: (
          <div className="movie-card">
            <img
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${row.poster_path}`}
              alt="movie_banner"
              style={{
                height: "inherit",
              }}
            />
            <div className="movie-card-details">
              <p className="text-bold">{row.title}</p>
              <p className="text-slate-400">{row.release_date}</p>
              {renderStars(row.vote_average)}
            </div>
          </div>
        ),
      };
    }
  );

  return (
    <div className="mx-auto px-[120px] mt-10 mb-20">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mr-6">What's Popular</h1>

        <Switch
          label1="Movie"
          label2="TV Series"
          choosenCategory={choosenCategory}
          setChoosenCategory={setChoosenCategory}
        />
      </div>

      <div className="my-10">
        <BearCarousel
          data={bearSlideItemData}
          isEnableLoop
          slidesPerView={6}
          spaceBetween={10}
          aspectRatio={{ widthRatio: 16, heightRatio: 9 }}
          isEnableNavButton
          isEnablePagination
        />
      </div>
    </div>
  );
};

export default MovieList;
