import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

  state = {
    user:{}
  };

  componentDidMount = () => {
    let token = localStorage.token;
    token
        ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
              "content-type": "application/json",
              accepts: "application/json",
              Authorization: `Bearer ${token}`
          }

        })
            .then(resp => resp.json())
            .then(user => {
              this.setState({ user }, () => {
                this.props.history.push("/");
              });
            })
        : this.props.history.push("/signup")
    }

  signupSubmitHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
  })
  .then(resp => resp.json())
  .then( user => {
      console.log(user)
      this.setState({user}, () => {
          localStorage.setItem("token", user.jwt);
          this.props.history.push("/")
      });
    })
  };

  render(){

    return (
      <div>
      <Header />

            <Switch>
            <Route exact  path="/" render={()=> <MainContainer user={this.state.user} />} />
            <Route exact path="/signup" render={() => <Signup submitHandler={this.signupSubmitHandler} />} />
            <Route exact  path="/login" render={() => <Login submitHandler={this.loginSubmitHandler} />} />
        <Footer />
            </Switch>
      </div>
    );
  }
}

export default withRouter(App);
