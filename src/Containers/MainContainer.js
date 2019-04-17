import React, { Component } from 'react'
import Search from '../Components/Search'
import Results from '../Components/Results'
import { Route, Switch, withRouter } from "react-router-dom"



// <MainContainer sup={'hi'} runAFun={() => {alert('hi')}} />
//
// props.sup => "hi"
// this.props.runAFunc() => alert('hi')
class MainContainer extends Component {

    renderBooks(books) {
        return books.map(bookObj => {
            return (
                <div className="col-sm-4" key={bookObj.id}>
                    <Results
                        book={bookObj}
                        key={bookObj.id}
                        handleClickAddTo={(shelf, book) => this.props.handleClickAddTo(shelf, book, 'supppp')}/>
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