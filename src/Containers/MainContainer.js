import React, { Component } from 'react'
import Search from '../Components/Search'

class MainContainer extends Component {

    state = {
        books: [],
        query: ''
    };


    search(){
            let query = this.state.query
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
        fetch(BASE_URL, {method:"GET"})
            .then(response =>  response.json())
            .then(console.log)
            // .then( books => this.setState({books}))
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
        return(
            <div>
            <h1>Main Container</h1>
            <Search value={this.state.query} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
            </div>
        )
    }
}

export default MainContainer