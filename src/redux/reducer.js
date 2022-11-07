
import goodsData from "../components/goodListItem/goodsListData";
import { FIND_GOODS } from "./type";

const initialStata = {
    goods:[...goodsData],
    findGoods:[],
}

export default function goodsReducer (initialStat,{type, payload}) {
    const state = initialStata
    switch(type) {
        case FIND_GOODS :
            return {
                ...state,
                findGoods: payload,
            };
        default:
            return state   
    }
}

