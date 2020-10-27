import React from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import {connect} from "react-redux";

 class Login extends React.Component{

    constructor(){
        super();
        this.state ={
          isLoggedIn : false,
          email: null,
          password: null,  
          errorMessage: null
        }
    }

    login(){
        axios({
            url : "https://apibyashu.herokuapp.com/api/login",
            method: "POST",
            data: {email: this.state.email, password: this.state.password}
        }).then((response) => {
            console.log("user logged in successfuly",response);
            if(!response.data.message){
               // this.props.somefunction('user logged in messge from login.js');
               // console.log('calling userHasLoggedIn method declare in NewApp.js from login.js');
                this.props.dispatch({
                    type: 'LOGIN',
                    payload: response.data
                })
                localStorage.setItem('email', this.state.email);
                localStorage.user = JSON.stringify(response.data);
                this.props.history.push('/');
            }else{
                this.setState({
                    errorMessage: response.data.message,
                })
            }  
        },(error) =>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div class="row col-md-6">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={this.state.email} onChange={(e) => {this.setState({email : e.target.value})}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="row col-md-6">
                    <label for="exampleInputPassword1">Password</label>
                    <input value={this.state.password} onChange={(e) => {this.setState({ password : e.target.value})}} type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                {this.state.errorMessage && <div><label id="emailHelp" class="alert alert-danger">{this.state.errorMessage}</label></div> }
                <button onClick={this.login.bind(this)} type="button" class="btn btn-primary">Submit</button>
            </div>

        )
    }

}

export default connect()(withRouter(Login));