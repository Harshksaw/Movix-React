import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';


export default function Home() {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <div style={{height: 1000}}></div>
    </div>
  )
}
