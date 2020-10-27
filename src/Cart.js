import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
    }

    removeItemFromProducts= (index)=>{
            var tempCart =  this.props.cartItems;
            if (index > -1) {
               tempCart.splice(index, 1);  
            }
            this.setState({
                cartItems: tempCart
            })
   }

    render(){
        console.log('props in cart >>>>>>>>>>',this.props);
        return(
            <div>
                { this.props.cartItems && this.props.cartItems.map((product, index)=>{
                    return <CartItem product={product} removeItemFromCartProp={this.removeItemFromProducts} key={index} itemno={index} />
                })
                }
            </div>
        )
    }
}

export default connect((state, props) => {
    return{
        cartlenth: state['CartReducer']['cartItems'].length,
        cartItems: state['CartReducer']['cartItems']
    }
})(Cart);