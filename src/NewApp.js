import React from "react";
import { BrowserRouter , Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Axios from "axios";
import { connect } from "react-redux";
import Orders from "./Orders";


class NewApp extends React.Component{

    constructor(){
        super();      
    }

    componentDidMount(){
        console.log("props in NEWAPP did mount >>>>>>>>>>>>>>>>>>",this.props)
        Axios({
           url: "http://apibyashu.herokuapp.com/api/allproducts",
           method: "GET", 
        }).then((response)=>{
            // alert(JSON.stringify(response.data))
            this.props.dispatch({
                type: "INITIALISE_PRODUCTS",
                payload: response.data.data
            })
            
        },(error) =>{
            console.log(error);
        });
        
        if(this.props.isUserLoggedIn && this.props.user.email) {
            Axios({
            url: "http://apibyashu.herokuapp.com/api/cart",
            method: "POST", 
            data: {email: this.props.user.email}
            }).then((response)=>{
                console.log('CART ITEMS >>>>>>>>>>',response.data.data);
                this.props.dispatch({
                    type: "INITIALISE_CART",
                    payload: response.data.data
                })
                
            },(error) =>{
                console.log(error);
            });
        }
    }

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product-details/:pid" exact component={ProductDetails} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/orders" exact component={Orders} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect((state, props) => {
    return{
        isUserLoggedIn: state["AuthReducer"]["isLoggedIn"],
        user: state["AuthReducer"]["user"]
    }
})(NewApp);