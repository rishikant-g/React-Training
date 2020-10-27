export function OrderReducer(state = {
    processing: false
    }, action){

    switch(action.type){
        case "GET_ORDERS": {
            state = {...state}
            state["processing"] = true
            return state

        }
        case "ORDER_FETCHED": {
            state = {...state}
            state["processing"] = false
            return state

        }
        default: return state
    }
}