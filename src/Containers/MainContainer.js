import React, { Component } from 'react'
import Search from '../Components/Search'
import { Route, Switch, withRouter } from "react-router-dom"


class MainContainer extends Component {

    state = {
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


        return (
            <div>
            <Search value={this.state.query} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress}/>
            </div>
        )
    }
}

export default withRouter(MainContainer)