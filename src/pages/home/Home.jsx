import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';


export default function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <div style={{height: 1500}}></div>
    </div>
  )
}
