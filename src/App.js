import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/SignUp'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect} from "react-redux";
import Error from './Components/Error'
import { checkToken } from './actions/userActions'
import { searchForBooks } from "./actions/bookActions";

const API_URL = `http://localhost:3000/api/v1`;

class App extends React.Component {
    state = {
        user:'',
        books: [],
        book:"",
        query: ''
    };

    handleChange = e => {
        let query = e.target.value;
        this.setState({query})
    };

    handleKeyPress = e => {
        if(e.key === "Enter"){
            let query = this.state.query;
            this.props.searchForBooks(query)
        }
    };
    componentDidMount = () => {
        let token = localStorage.token;
        return token ? this.props.checkToken() : this.props.history.push("/login");
    };



    handleClickAddTo (shelf, title, author, image, description, pageCount) {
        console.log('handleClickAddTo()')
        const body = {
            "user_id": 1,
            shelf,
            "book": {
                title,
                author,
                description,
                "page_count": pageCount,
                image
            }
        }

        fetch(`${API_URL}/user_book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }, )
            .then(response => response.json())
            .then(console.log)// TODO handle promise

    }

    render() {
        const { books } = this.props;

        return (
            <div>
                <Route component={Navbar} />
                <Switch>
                    <Route exact path="/home"
                           component={Home} />
                    <Route exact path="/profile"
                           component={Profile} />
                    <Route exact path="/login"
                           component={Login} />
                    <Route exact path="/signup"
                           component={Signup} />
                    <Route exact
                           path="/logout"
                           component={Home} />
                    <Route exact path="/search"
                           render={(props) => <MainContainer
                               books={books}
                               handleChange={this.handleChange}
                               handleKeyPress={this.handleKeyPress}
                               handleClickAddTo={this.handleClickAddTo}
                               value={this.state.query}/>} />
                    <Route path="/" component={Error} />
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return state.book;
}

export default connect(mapStateToProps, { checkToken, searchForBooks })(withRouter(App))
