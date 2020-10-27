import { act } from "react-dom/test-utils"

export function CartReducer(state = {
        cartItems: [],
        processing: false
    }, action){
        switch(action.type){
            case "INITIALISE_CART": {
                state = {...state}
                state['cartItems']= action.payload
                return state
            }
            case "REMOVE_FROM_CART": {
                state = {...state}
                state['cartItems'].splice(action.payload,1) // remove 1 item from array
                return state
            }
            case "ADD_TO_CART": {
                state = {...state}
                state['processing'] = true
                return state
            }  
            case "ADDED_TO_CART": {
                state = {...state}
                state['processing'] = false
                state['cartItems'].push(action.payload) 
                return state
            }
            default: return state;
        }
}