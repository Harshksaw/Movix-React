import "./style.scss";
import { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; //conveert data format to

import ContentWrapper from "../contentWrapper/ContentWrapper";

import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";
import Img from '../lazyloadImage/Img';

export default function Carousel({ data, loading }) {

    const carouselContainer = useRef();

    // console.log(carouselContainer.current)   
    //reference of element
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
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
                    <div className="carouselItems">
                        {data?.map((item) => {

                            const posterUrl = item.poster_path ?
                                url.poster + item.poster_path : PosterFallback;
                            return (

                                <div
                                    className="carouselItem"
                                    key={item.id}>

                                    <div className="posterBlock">
                                        <Img
                                            src={posterUrl}
                                        />
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
