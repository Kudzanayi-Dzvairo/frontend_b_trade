import React from "react";
import { addUser } from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {Form} from "semantic-ui-react";

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
    };

    //
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.props.addUser(this.state)) {
            this.props.history.push("/home");
        }
    };
    render() {
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
    { addUser }
)(withRouter(Signup))