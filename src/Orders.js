import React from "react";
import { connect } from "react-redux";

class Order extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.dispatch({
            type: "GET_ORDERS"
        })
    }

    render(){
        return(
            <div>
                { this.props.loading && <h1>Loading....</h1> }
                { !this.props.loading && <h1>This is my order page</h1> }
            </div>
        )
    }
}

export default connect((state, props)=>{
    return{
        loading: state["OrderReducer"]["processing"]
    }
})(Order)