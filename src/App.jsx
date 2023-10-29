import {  useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { fetchDataFromApi } from "./utils/api.js";

import { getApiConfiguration , getGenres} from "./store/homeSlice.js";
import { useDispatch, useSelector } from "react-redux";

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Footer from './components/footer/Footer';




function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  // console.log("api")
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall()
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + "w500",
        poster: res.images.secure_base_url + "w500",
        profile: res.images.secure_base_url + "w500",
      }

      dispatch(getApiConfiguration(url));
    });
  };

//multiple api call

  const genresCall = async()=>{
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}

    endPoints.forEach((url) =>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    console.log(data)
    data.map(({genres}) =>{
      return  genres.map((item) => (allGenres[item.id] = item))

    })
    dispatch(getGenres(allGenres))
    // console.log(allGenres)
  }


  return (


      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}



export default App;
