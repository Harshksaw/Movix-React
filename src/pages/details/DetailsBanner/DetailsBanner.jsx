import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";

import PosterFallback from "../../../assets/no-poster.png";
import Img from "../../../components/lazyloadImage/Img";

const DetailsBanner = () => {
    const { mediaType, Id } = useParams(); //from caoursel
    const { data, loading } = useFetch(`/${mediaType}}/${Id}`)
    const { url } = useSelector((state) => state.home)
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="backdrop-img">
                                <Img src={url.backdrop + data.backdrop_path}  />

                            </div>
                            <div className="opacity-layer">
                                <ContentWrapper>
                                    <div className="content">
                                        <div className="left">

                                            {data.poster_path ? 
                                            ( 
                                            <Img className="posterImg"
                                            src={url.backdrop + data.poster_path}/>
                                            )

                                            :
                                            (
                                                <img className="posterImg"
                                                src={PosterFallback}/>

                                            )
                                        
                                        }
                                        </div>
                                        <div className="right"></div>
                                    </div>
                                </ContentWrapper>
                            </div>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
