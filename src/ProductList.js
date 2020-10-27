import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

class ProductList extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div class="row">
            {
                     this.props.products.map((product)=>{
                        return <Product product={product} />
                    })  
            }
            </div>
        )
    }
}

export default connect((state,props) =>{
    return{
        products: state["ProductReducer"]["products"]
    }
})(ProductList)