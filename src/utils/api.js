import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    //for sending using header
    Authorization: "bearer " +  TMDB_TOKEN,  //space is neccessary
};

export const fetchDataFromApi = async(url , params)=>{
    try{                                //axios parms->(url, options)
        const {data} = await axios.get(BASE_URL + url ,{ 
            headers, //config
            params 
        })
        return data;

    }catch(err){
        console.log(err);
        return err;
    }
}   