import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const api_key = "?api_key=2dfc83f8a6b8a940ec3a20b8ed69a8e4"

const headers = {
    //for sending using header

    Authorization: "Bearer " +  TMDB_TOKEN,  //space is neccessary
    // Authorization: "Bearer " +  "2dfc83f8a6b8a940ec3a20b8ed69a8e4",  //space is neccessary
};

export const fetchDataFromApi = async(url , params)=>{
    try{                                //axios parms->(url, options)
        const {data} = await axios.get(BASE_URL + url + api_key,{ 
            headers, //config
            params 
        })
        console.log(data)
        return data;

    }catch(err){
        console.log(err);
        return err;
    }
}   