/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import axios from "axios";
import {connect} from "react-redux"

// var apiurl = 'https://learningmeanwithashu.herokuapp.com/api/product/' + this.state.productid;
class Productdetails extends Component {

    constructor() {
        super();
        this.state = {
            product:null
        }
    }

    Addtocart = () => {
     
        if(!localStorage.email){
             this.props.history.push('/login')
        }
        else{
            let reqObj = {
                email:localStorage.email,
                productid:this.state.product.productid,
                    name:this.state.product.name,
                    image:this.state.product.image,
                    price:this.state.product.price
                
            }
            
            this.props.dispatch({
                type: "ADD_TO_CART",
                payload: reqObj
            })
            // axios({
            //     method:'post',
            //     url:'https://apibyashu.herokuapp.com/api/addtocart',
            //     data:reqObj
            // }).then((response)=>{
            //     console.log("response from add to cart" , response)
            //     this.props.dispatch({
            //         type:"ADD_TO_CART",
            //         payload:response.data.data
            //     })
            //     if(response.data.data){
            //         this.setState({
            //             itemincart:true
            //         })
            //     }
            // }, (error)=>{
            //     console.log("error from add to cart api" , error)
            // })
        }
       
      
    }

    componentDidMount(){
        console.log("......." ,  this.props.match.params)
        var productid = this.props.match.params.pid
        console.log("::::::::::" ,  this.props.cartitems ,  productid)

       
        var apiurl = "https://apibyashu.herokuapp.com/api/product/"+this.props.match.params.pid
        axios({
            url:apiurl,
            method:'get'
        }).then((response)=>{
             console.log("response from product details api" ,response)
             this.setState({
                 product:response.data.data
             })
        },
        (error)=>{
            console.log("error from product details api", error)
        })
    
    }
   
    render() {
        return <div className="container" style={{ padding: "20px" }}>

           { this.state.product &&  <div className="row">
                <div className="col-md-6">
                    {/* {this.state.productid} */}
                    <img src={this.state.product.image} alt="image not avilable" style={{ width: "416px", height: "416px" }} /><br></br>
                    {!this.props.itemincart  &&  <button onClick={this.Addtocart} className="btn btn-outline-info col-md-5" style={{ padding: "10px" }}>Add to Cart</button>}
                {this.props.itemincart  &&     <button  className="btn btn-outline-warning col-md-5" style={{ padding: "10px" }}>Remove From Cart</button>}
                   
                    <button className="btn btn-outline-success col-md-5" style={{ padding: "10px" }} >Buy now</button>
                </div>
                <div className="col-md-6">

                    <table>
                        <tr>
                            <td><h3>{this.state.product.name}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Rs.{this.state.product.price}</h3></td>
                        </tr>
                        <tr>

                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="_3Amlen" /></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>

                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>
                        <tr><td className="row"><span className="col-md-4">Seller</span>
                            <span className="col-md-4"> RetailNet</span>
                        </td></tr>
                        <tr>
                            <td className="row">
                                <span className="col-md-4">Highlights</span>

                                <td><span className="col-md-4"></span><ul><li>Effective Pixels: 24.2 MP</li>
                                    <li><span className="col-md-4">Sensor Type: CMOS</span></li>
                                    <li><span className="col-md-4"></span>WiFi Available</li>
                                    <li><span className="col-md-4"></span>1080p at 60p + Time-Lapse</li></ul></td>

                            </td></tr>
                    </table>
                </div>
            </div >}

        </div >
    };
}
export default connect((state,props)=>{
    var propsobj = {
        cartitems:state["CartReducer"]["cartitems"] || []
        
    }
    state["CartReducer"]["cartItems"].forEach(element => {
        if(element.productid==props.match.params.pid){
            propsobj.itemincart = true
        }
    });
    return propsobj
})(Productdetails)