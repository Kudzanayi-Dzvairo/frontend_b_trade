import React, { Component } from 'react'
import Shelf from './Shelf'
import { Card } from 'semantic-ui-react'
import CurrentlyReading from './CurrentlyReading'
import { connect} from "react-redux";

class Profile extends Component {


    render() {

     const { user, book } = this.props

        console.log(book)

        return (
            <div>
                <Card
                    image='https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/twitteregg-920x584.jpg'
                    header={user.user.username}
                    meta='Reader'
                />
                <Shelf book={book}/>
            </div>
        )
    }
}

    const mapStateToProps = (state, props) => {
       console.log(state)
        return state
    }

export default connect(mapStateToProps)(Profile)