import React from 'react'
import {connect} from "react-redux";

class Shelf extends React.Component {
    render() {
        return <h1>Shelf</h1>
    }

}

const mapStateToProps = (state, props) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(Shelf)