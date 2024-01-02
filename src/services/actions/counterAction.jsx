import { INCREMENT } from "../constants/counterConstants";
import { DECREMENT } from "../constants/counterConstants";
import { RESET } from "../constants/counterConstants";

export const increment = ()=>{
    return{
        type: INCREMENT
    }
};

export const decrement = ()=>{
    return{
        type: DECREMENT
    }
};

export const reset = ()=>{
    return{
        type: RESET
    }
};