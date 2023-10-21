import { useState } from "react"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch"



export default function Trending() {
    //Api call
    const [endpoint , setEndPoint] = useState("day")

    const {data , loading } = useFetch(`/trending/all/${endpoint}`);


    //control of Tbas
    const onTabChange = (tab) => { 
        setEndPoint(tab === "Day" ? "day" : "week");
    }
    return (
        <div className="carouselSelection">
            <ContentWrapper>

                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>

        </div>
    )
}
