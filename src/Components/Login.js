import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
class Login extends Component {
    constructor(){
        super();
        this.state = {
            redirectToReferrer : false
        }
    }
  login = () => {
      fakeAuth.authenticate(() => {
          this.setState({
              redirectToReferrer: true
          })
      })
  }

  render() {
      const {form} = this.props.location.state || { form: {pathname : "/"}}
      const { redirectToReferrer } = this.state;

      if(redirectToReferrer){
          return(
              <Redirect to={form} />
          )
      }
    return (
      <div>
        <h1>Login Required</h1>
        <p>You must login to continue</p>
        <button onClick= {this.login}>Login</button>
      </div>
    )
  }
}


export const fakeAuth = {
    isAuthenticated : false,
    authenticate(cb){
        this.isAuthenticated = true
        setTimeout(cb , 100)
    },
}
export default Login