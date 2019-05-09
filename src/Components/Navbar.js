import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect }  from "react-redux"
import { logOut } from '../actions/userActions'

const Navbar = props => {

    

    return (
        <ul className="menu" role="navigation">
        <img  src="http://www.btrade-italy.com/wp-content/uploads/2014/04/LOGO-B-TRADE-jpg-270x272.jpg"/>
            <Link to="/home">
                <li className='li'>BestSellers</li>
            </Link>
            <Link to="/search">
                <li className='li'>Search</li>
            </Link>
            <Link to="/profile">
                <li className='li'>Profile</li>
            </Link>
            <Link to="/trades">
                <li className='li'>Trades</li>
            </Link>
            <Link to="/login">
                <li className='li'>Log In</li>
            </Link>
            <Link to="/signup">
            <li className='li' onClick={() => {localStorage.removeItem("token"); props.history.push("/signup");}}>Sign Up</li>
            </Link>
            <Link to="/login">
                <li className='li' onClick={() => props.logOut()}>Logout</li>
            </Link>
        </ul>
    );
};

export default connect(null, { logOut })(withRouter(Navbar))
