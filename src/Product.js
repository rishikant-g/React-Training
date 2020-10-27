import React from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";

function Product(props){
    var productBox = '';
    if(props.product){
        productBox = <div class="card" style={{width: "18rem"}}>
                <img src={props.product.image} class="card-img-top" style={{height: "150px"}}/>
                <div class="card-body">
                    <h5 class="card-title">{props.product.name}</h5>
                    <p class="card-text">{props.product.brand}</p>
                    <Link to={`product-details/${props.product.productid}`}><a class="btn btn-primary">View</a></Link>
                </div>
                </div>
    }else{
        productBox = <h3>No product available</h3>
    }
 
    return(
        productBox
    )
}

export default withRouter(Product)