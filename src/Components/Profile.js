import React, { Component } from 'react'
import Shelf from './Shelf'
import CurrentlyReading from './CurrentlyReading'

class Profile extends Component {

    // compnentDidMount() {
    //     this.props.getUserBooks
    // }

    render() {
        return (
            <div>
            <h1>Profile</h1>
                <CurrentlyReading />
                <Shelf />
                <Shelf />
                <Shelf />
            </div>

        )
    }
}

export default Profile