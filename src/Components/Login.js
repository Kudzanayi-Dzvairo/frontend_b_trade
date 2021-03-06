import React from "react";
import { getAuth } from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";


class Login extends React.Component {
    state = {
        username: "",
        password: ""
    };

    //
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.props.getAuth(this.state)) {
            this.props.history.push("/search");
        }
    };
    render() {
        if (localStorage.token) {
            return <Redirect  to="/search"/>
        }

        return (
            <div>
                <h1 className="title">Welcome Back to B-Trade</h1>
            <form className='centered' onSubmit={this.handleSubmit}>
                    <input 
                    placeholder="username" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><br/>
                    <input 
                    className='input' 
                    placeholder="Password" 
                    type='password' 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange} 
                    />
                    <br/>
                <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
            </div>
        );
    }
}

export default connect(
    null,
    { getAuth }
)(withRouter(Login));
