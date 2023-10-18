import "./style.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch"; //custom hook
import { useSelector } from "react-redux";

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyloadImage/Img';


const HeroBanner = () => {
  const [background, setBackground] = useState("");

  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  //api call
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>

      <ContentWrapper>


          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies Tv shows and people to discover . Explore Now.
            </span>
          </div>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or Tv show ...."
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>

      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
