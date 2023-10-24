import { useState } from "react"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch"
import Carousel from "../../../components/carousel/carousel"




export default function Popular() {
    //Api call
    const [endpoint, setEndPoint] = useState("movie")

    const { data, loading } = useFetch(`/${endpoint}/popular`);


    //control of Tbas
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint= {endpoint}/>
        </div>
    )
}