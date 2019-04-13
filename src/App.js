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

const API_URL = `http://localhost:3000/api/v1`;

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
    };

    handleClickAddTo (shelf, title, author, image, description, pageCount) {
        console.log('handleClickAddTo()')
        const data = {
            "user_id": 1,
            shelf,
            "book": {
                title,
                author,
                description,
                "page_count": pageCount,
                image
            }
        };

        fetch(`${API_URL}/user_book`, {
            method: "POST",
            body: JSON.stringify(data)
        }, )
            .then(response =>  {
                console.log('response successful')
                console.log(response.json())
            })

    }

    render() {

        console.log(this.state.books)
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
                               books={this.state.books}
                               handleChange={this.handleChange}
                               handleKeyPress={this.handleKeyPress}
                               handleClick={this.handleClick}
                               handleClickAddTo={this.handleClickAddTo}
                               value={this.state.query}/>} />
                    <Route path="/" component={Error} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {

    console.log('state')
    console.log(state)

    console.log('props')
    console.log(props)

    return state
}

export default connect(mapStateToProps, { checkToken })(withRouter(App))
