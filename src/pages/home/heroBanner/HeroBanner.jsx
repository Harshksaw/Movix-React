import './style.scss'


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';  //custom hook


const HeroBanner = ()=>{
  const [background , setBackground] = useState('');

  const [query ,setQuery]= useState("");

  const navigate = useNavigate();

  //api call
  const {data , loading} = useFetch("/movie/upcoming")

  useEffect(()=>{
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)

  },[data])

  const searchQueryHandler = (event)=>{
    if(event.key === 'Enter' && query.length> 0){
      navigate(`/search/${query}`)

    }
  }
  return (
      <div className="">
        <div>
          <div className="heroBannerContent">
            <span className='title'>Welcome.</span>
            <span className='subTitle'>Millions of movies Tv shows and people to discover . Explore Now.</span>
          </div>
          <div className='searchInput'>
            <input type='text'
              placeholder='Search for a movie or Tv show ....'
              onChange={(e)=>setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              />
          <button >Search</button>
          </div>
        </div>
      </div>
  )
}
export default HeroBanner;



