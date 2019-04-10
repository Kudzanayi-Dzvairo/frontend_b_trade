import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/SignUp'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import Profile from './Components/Profile'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect} from "react-redux";
import Error from './Components/Error'
import { checkToken } from './actions/userActions'


class App extends React.Component {
    componentDidMount = () => {
        let token = localStorage.token;
        return token ? this.props.checkToken() : this.props.history.push("/login");
    };

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/logout" component={Home} />
                    <Route exact path="/search" component={Search} />
                    <Route path="/" component={Error} />
                </Switch>
            </div>
        );
    }
}

export default connect(null, { checkToken })(withRouter(App))
