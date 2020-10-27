import Axios from "axios";
import React from "react";

export default class CartItem extends React.Component{

    constructor(){
        super();
    }

    removeFromCart = ()=>{
        alert(this.props.product.productid);
        Axios({
            url: "http://apibyashu.herokuapp.com/api/removefromcart",
            method: "POST",
            data: {email: "risheekant.vishwa@gmail.com", productid: this.props.product.productid}
        }).then((response) => {
            console.log(response);
            alert('imte no ='+this.props.itemno)
           this.props.removeItemFromCartProp(this.props.itemno);
        },(error)=>{
            console.log(error);
        })
    }

    render(){
        console.log('cart item props>>>>>>>>>>>', this.props.product);
        var item;
        if(this.props.product){

            item = <div className="card border border-primary card-info"> 
            <div className="row">
                    <div className="col-md-6">
                        <img src={this.props.product.image} style={{height: "150px"}}/>
                    </div>
                    <div className="col-md-6">
                        <p>
                            {this.props.product.name}
                        </p> 
                        <p>
                            {this.props.product.brand}
                        </p> 
                        <p>
                            {this.props.product.price}
                        </p>
                        <p>
                            <button class="btn btn-primary" onClick={this.removeFromCart}>Removo from cart</button>
                        </p>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                    </div>
        }
        return(
            item
        )
    }
}