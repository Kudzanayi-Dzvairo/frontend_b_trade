import React from "react"

class Signup extends React.Component {
    state = {
        username: "",
        password: ""
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        console.log('submitted')
        this.props.submitHandler(this.state);
        this.setState({
            username: "",
            password: ""
        });
    };
    render() {
        return (
            <div className="signup-page">
                <div className="form3">
                    <h1>SIGN UP 🥕</h1>
                    <form onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                       <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;