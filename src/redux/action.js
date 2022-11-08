import { FIND_GOODS, PAGE_GOODS,} from "./type";
export const findGoods = (data) => ({type:FIND_GOODS, payload: data})
export const PageGoods = (data) => ({type:PAGE_GOODS, payload: data})