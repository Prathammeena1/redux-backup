import axios from "axios"
import { setimage } from "../reducers/imageSlice";


export const setImages = ()=> async (dispatch)=>{
    const {data} = await axios.get("https://picsum.photos/v2/list");
    dispatch(setimage(data))
}

