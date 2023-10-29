import './style.scss';
import HeroBanner from './heroBanner/HeroBanner.jsx';
import Trending from './trending/Trending.jsx';
import Popular from './Popular/Popular.jsx';
import TopRated from './TopRated/TopRated.jsx';


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
