import {takeEvery, put} from "redux-saga/effects"
import Axios from "axios";


function* orderGenerator(){
    
    var result = yield Axios({
        url: "https://apibyashu.herokuapp.com/api/orders",
        method: "post",
        data: {email: localStorage.email}
    }).then((response) => {
        console.log(response);
        return response;
    })

    yield({type: 'ORDER_FETCHED', payload: result.data.orders});
}

function* addToCart(action){
    
    var result = yield Axios({
        url: "https://apibyashu.herokuapp.com/api/addtocart",
        method: "post",
        data: action.payload
    }).then((response) => {
        console.log(response);
        return response;
    })

    yield({type: 'ADDED_IN_CART', payload: result.data.orders});
}




export function* RootSaga(){
    yield takeEvery("GET_ORDERS", orderGenerator);
    yield takeEvery("ADD_TO_CART", addToCart);
}