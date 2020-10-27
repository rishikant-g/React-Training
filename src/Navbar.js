import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

class Navbar extends React.Component{

    constructor(){
        super();
    }

    logout = () =>{
        this.props.dispatch({
            type: "LOGOUT",
        })
        localStorage.clear();
        window.location.href = "/";
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/"><a class="navbar-brand">App</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    {/* <input class="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email"/>
                    <input class="form-control mr-sm-2" type="text" placeholder="Password" aria-label="Password"/> */}
                { !this.props.isUserLoggedIn && <Link to="/login"><button class="btn btn-outline-success my-2 my-sm-0" type="button">Login</button></Link> }
                {  this.props.isUserLoggedIn && <div className="inline my-2 my-lg-0">
                <button class="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={this.logout}>Logout</button>
                 <Link to="/cart"><button class="btn btn-outline-info my-2 my-sm-0" type="button">Cart</button></Link>
                 <Link to="/orders"><button class="btn btn-outline-info my-2 my-sm-0" type="button">MyOrder</button></Link>
                 </div>
                  }
                </form>
                </div>
          </nav>
        );
    }
}

export default connect((state,props) => {
   return{
        isUserLoggedIn: state["AuthReducer"]["isLoggedIn"]
   }
})(Navbar)