import Axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class  SingleProduct extends React.Component{

    constructor()
    {
        super();
        this.state = {
            alreadInCart: false
        }
    }

     addTocart= ()=>{
        Axios({
            url: "http://apibyashu.herokuapp.com/api/addtocart",
            method: "POST",
            data: { 
                email: "risheekant.vishwa@gmail.com", 
                productid: this.props.product.productid,
                price: this.props.product.price,
                name: this.props.product.name,
                image: this.props.product.image
                }
        }).then((response) =>{
            console.log(response.data.data);
            if(response.data.data){
                this.setState({
                    alreadInCart: true
                });
            }
        },(error) =>{
            console.log(error);
        });
    }


   render(){
    var productBox;
    if(this.props.product){
        productBox = <div class="card" style={{width: "18rem"}}>
                <img src={this.props.product.image} class="card-img-top" style={{height: "150px"}}/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.product.name}</h5>
                    <p class="card-text">{this.props.product.brand}</p>
                    <button class="btn btn-primary" onClick={this.addTocart}>{this.state.alreadInCart ? 'Go To Cart': 'Add to cart'}</button>
                </div>
                </div>
    }else{
        productBox = <h3>Invallid  product selected</h3>
    }
 
    return(
        productBox
    )
}
}
export default withRouter(SingleProduct);