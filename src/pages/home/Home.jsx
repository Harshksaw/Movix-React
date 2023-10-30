import './style.scss';
import HeroBanner from './heroBanner/HeroBanner.jsx';
import Trending from './trending/Trending.jsx';
import Popular from './popular/Popular.jsx';
import TopRated from './topRated/TopRated.jsx';


export default function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>

    </div>
  )
}
