
import goodsData from "../components/goodListItem/goodsListData";
import { CHANGE_ID, FIND_GOODS, PAGE_GOODS, } from "./type";

const initialStata = {
    goods:[...goodsData],
    pageGoods:goodsData.slice(0,8),
    findGoods:[],
    page:1,
    id:null
}

export default function goodsReducer (initialStat,{type, payload}) {
    const state = initialStata
    switch(type) {
        case FIND_GOODS :
            const findData = payload !== ""? state.goods.filter(el => el.name.toLowerCase().includes(payload.toLowerCase())) : state.pageGoods
            return {
                ...state,
                findGoods: findData,
                pageGoods: findData,
            };
         case PAGE_GOODS:
             const pageData = state.goods.slice(8 * (payload-1), payload * 8 )
            return {
                ...state,
                pageGoods: pageData,
            }
        case CHANGE_ID:
            return {
                ...state,
                id: payload,
            }
        default:
            return state   
    }
}

