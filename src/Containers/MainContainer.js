import React, { Component } from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'
import { Route, Switch, withRouter } from "react-router-dom"



class MainContainer extends Component {



    render(){

        const arrayofBooks = this.props.books.map(bookObj => <Results book={bookObj} key={bookObj.id} handleClick={this.props.handleClick} />)
        console.log(arrayofBooks)

        return (

            <div>
                {arrayofBooks > 0 ? {arrayofBooks} :
                    <Search value={this.props.value} handleChange={this.props.handleChange} handleKeyPress={this.props.handleKeyPress}/>}
            </div>


        )
    }
}

export default withRouter(MainContainer)