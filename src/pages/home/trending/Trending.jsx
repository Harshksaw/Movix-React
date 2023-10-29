import { useState } from "react"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx"
import useFetch from "../../../hooks/useFetch.jsx"
import Carousel from '../../../components/carousel/Carousel';






export default function Trending() {
    //Api call
    const [endpoint, setEndPoint] = useState("day")

    const { data, loading } = useFetch(`/trending/all/${endpoint}`);


    //control of Tbas
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    }
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}
