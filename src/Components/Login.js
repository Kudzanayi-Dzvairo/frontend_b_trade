import React from "react";
import { getAuth } from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {Form} from "semantic-ui-react";

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
            <Form className="signup-page" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input label="username" name="username" value={this.state.username}
                                onChange={this.handleChange}/>
                    <Form.Input label="Password" type='password' name="password" value={this.state.password}
                                onChange={this.handleChange} />
                </Form.Group>
                <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
            </Form>
        );
    }
}

export default connect(
    null,
    { getAuth }
)(withRouter(Login));
