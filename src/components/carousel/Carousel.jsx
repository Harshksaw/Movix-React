import "./style.scss";
import { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; //conveert data format to

import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";

import PosterFallback from "../../assets/no-poster.png";

import Genres from "../genres/Genres.jsx";
import Img from '../lazyloadImage/Img.jsx';
import CircleRating from "../circleRating/CircleRating.jsx";

export default function Carousel({ data, loading , endpoint , title}) {

    const carouselContainer = useRef();

    // console.log(carouselContainer.current)   
    //reference of element
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container =  carouselContainer.current;
        const scrollAmount = dir ===
        "left" ? container.scrollLeft - (container.offsetWidth + 20)
        
        :  container.scrollLeft + (container.offsetWidth + 20)

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        })

    };

    const skItem = ()=>{
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">
                    <div className="textBlock">
                        <div className="title skeleton">

                        </div>
                        <div className="data skeleton">

                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return <div
        // ref={carouselContainer}
        className="carousel"

    >

        <ContentWrapper>
            {title && <div className="carouselTitle">{title}</div>}
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => navigation("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={() => navigation("right")}
            />

            {
                !loading ? (
                    <div className="carouselItems"
                    
                    ref={carouselContainer}>
                        {data?.map((item) => {

                            const posterUrl = item.poster_path ?
                                url.poster + item.poster_path : PosterFallback;
                            return (

                                <div
                                    className="carouselItem"
                                    key={item.id}
                                    onClick={()=>navigate(`/${item.media_type || endpoint}/${item.id}`)}
                                    >

                                    <div className="posterBlock">
                                        <Img
                                            src={posterUrl}
                                        />
                                        <CircleRating rating={item.vote_average.toFixed(1)} 
                                        />
                                        <Genres data = {item.genre_ids.slice(0,2)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}

                                        </span>
                                        <span className="date">
                                            {
                                                dayjs(item.release_Date).format(
                                                    "MMM D,YYYY"
                                                )

                                            }

                                        </span>
                                    </div>


                                </div>
                            )
                        })}
                    </div>

                ) : (
                        <div className="loadingSkeleton">
                            {skItem()}
                            {skItem()}
                            {skItem()}
                            {skItem()}
                            {skItem()}

                        </div>
                )
            }
        </ContentWrapper>

    </div>;

}
