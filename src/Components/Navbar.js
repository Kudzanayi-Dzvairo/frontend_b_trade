import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect }  from "react-redux"
import { logOut } from '../actions/userActions'

const Navbar = props => {
    return (
        <ul className="menubar" role="navigation">
            <Link to="/home">
                <li>BestSellers</li>
            </Link>
            <Link to="/search">
                <li>Search</li>
            </Link>
            <Link to="/profile">
                <li>Profile</li>
            </Link>
            <Link to="/trades">
                <li>Trades</li>
            </Link>
            <Link to="/login">
                <li>Log In</li>
            </Link>
            <Link>
            <li onClick={() => {localStorage.removeItem("token"); props.history.push("/signup");}}>Sign Up</li>
            </Link>
            <Link to="/login">
                <li onClick={() => props.logOut()}>Logout</li>
            </Link>
        </ul>
    );
};

export default connect(null, { logOut })(withRouter(Navbar))
