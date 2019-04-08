import React, { Component } from 'react'

class Login extends Component {

    state = {
        name: "",
        password: "",
        email: ""
    };

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
       // { this.props.submitHandler(this.state)}
        this.setState({name:"",
        password:"",
        email:""
        })
    };

    render() {
        const { name, password, email} = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }

}


export default Login