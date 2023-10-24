import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';


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
