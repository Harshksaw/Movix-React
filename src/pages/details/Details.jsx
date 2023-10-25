import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import DetailsBanner from "./DetailsBanner/DetailsBanner"


export default function Details() {
    // const {mediaType , id} = useParams(); //from caoursel
    // const {data, loading} = useFetch(`/${mediaType}}/${Id}`)

    return (
    <div>
      <DetailsBanner/>

    </div>
  )
}
