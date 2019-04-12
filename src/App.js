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


class App extends React.Component {
    state = {
        user:'',
        books: [],
        book:"",
        query: ''
    };
    
    search(){
        let query = this.state.query
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
        fetch(BASE_URL, {method:"GET"})
            .then(response =>  response.json())
            .then( books => {
                console.log(books)
                const mappedBooks = books.items.map(item => ({
                    title : item.volumeInfo.title,
                    author: item.volumeInfo.authors[0],
                    image: item.volumeInfo.imageLinks.smallThumbnail,
                    description: item.volumeInfo.description,
                    pageCount: item.volumeInfo.pageCount,
                    id: item.id
                }));
                this.setState({ books: mappedBooks})
            })
    }


    handleChange = e => {
        let query = e.target.value;
        this.setState({query})
    };

    handleKeyPress = e => {
        if(e.key === "Enter"){
            this.search()
        }
    };
    componentDidMount = () => {
        let token = localStorage.token;
        return token ? this.props.checkToken() : this.props.history.push("/login");
    };

    handleClick = (e, bookObj) => {
       //  console.log(e.target)
       // let newBook = [...this.state.books].filter()
       //  this.setState({book: newBook})
        }

    render() {

        console.log(this.state.books)
        return (
            <div>
                <Route component={Navbar} />
                <Switch>
                    <Route exact path="/home" c
                           omponent={Home} />
                    <Route exact path="/profile"
                           component={Profile} />
                    <Route exact path="/login"
                           component={Login} />
                    <Route exact path="/signup" c
                           omponent={Signup} />
                    <Route exact
                           path="/logout"
                           component={Home} />
                    <Route exact path="/search"
                           render={(props) => <MainContainer
                               books={this.state.books}
                               handleChange={this.handleChange}
                               handleKeyPress={this.handleKeyPress}
                               handleClick={this.handleClick}
                               value={this.state.query}/>} />
                    <Route path="/" component={Error} />
                </Switch>
            </div>
        );
    }
}

export default connect(null, { checkToken })(withRouter(App))
