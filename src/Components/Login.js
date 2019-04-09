import React, { Component } from 'react'

class Login extends Component {

    state = {
        name: "",
        password: ""
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
       this.props.submitHandler(this.state);
        this.setState({name:"",
        password:"",
        });
    };

    render() {
        const { name, password} = this.state;

        return (
            <div className="signup-page">
                <div className="form3">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
                </div>
            </div>
        );
    }

}


export default Login