import { act } from "react-dom/test-utils"

export function ProductReducer(state = {
    products: [],
}, action){

   switch(action.type){
       case "INITIALISE_PRODUCTS": {
           state = {...state}
           state["products"] = action.payload
           return state
       }
       default: return state;
   }
}