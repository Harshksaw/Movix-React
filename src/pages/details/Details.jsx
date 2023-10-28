import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import DetailsBanner from "./DetailsBanner/DetailsBanner"
import Cast from "./cast/Cast";
import VideosSection from "./video/VideosSection";


export default function Details() {
    const {mediaType , id} = useParams(); //from caoursel
    const {data, loading} = useFetch(`/${mediaType}/${id}/videos`) 

    const {data: credits , loading : creditsLoading} = useFetch(`/${mediaType}/${id}/credits`); 

    return (
    <div>
      
      <DetailsBanner video = {data?.results?.[0]}  crew = {credits?.crew} />
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <VideosSection data={data} loading={loading}/>
    </div>
  )
}
