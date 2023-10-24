
import { useSelector } from 'react-redux'
import './style.scss'

export default function Genres({ data }) {  //data -> id
  const { genres } = useSelector((state) => state.home)  //genres of movies
  return (
    <div className='genres'>
      {data?.map((gen) => {
        if (!genres[gen]?.name) return;
        return (
          <div key={gen} className="genre">
            {genres[gen]?.name}
          </div>
        )
      })}
    </div>
  )
}
