import React, { Component } from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'
import { Route, Switch, withRouter } from "react-router-dom"


class MainContainer extends Component {

    state = {
        user:'',
        books: [],
        query: ''
    };



    componentDidMount() {
        Object.keys(this.props.user).length > 0
            ?
            this.setState({ books: [] })
            : this.props.history.push("/login");
    }



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
                    pageCount: item.volumeInfo.pageCount
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

    }





    render(){

        console.log(this.state.query)
        return (
            <div>
                    <Search value={this.state.query} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
                    <Results books={this.state.books}/>}
            </div>
        )
    }
}

export default withRouter(MainContainer)