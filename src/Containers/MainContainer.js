import React, { Component } from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'
import { Route, Switch, withRouter } from "react-router-dom"



class MainContainer extends Component {

    renderBooks(books) {
        return books.map(bookObj => {
            return (
                <div className="col-sm-4">
                    <Results
                        book={bookObj}
                        key={bookObj.id}
                        handleClickAddTo={this.props.handleClickAddTo}
                    />
                </div>
            )
        })
    }

    render(){
        const { value, handleChange, handleKeyPress, books } = this.props;

        return (
            <div>
                <Search value={value} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
                <div className="row">
                    {this.renderBooks(books)}
                </div>
            </div>
        )
    }
}

export default withRouter(MainContainer)