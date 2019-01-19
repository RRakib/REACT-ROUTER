import {Route , Redirect} from "react-router-dom";
import {fakeAuth} from "./Login"
import React from "react"
const PrivateRoute = ({component : Component , ...rest}) => {
    return(
        <Route {...rest} render = { (props) => {
            return(
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ): (
                    <Redirect to = {{
                        pathname : "./login",
                        state : { from : props.location}
                    }}
                    />
                )
            )
        }}
        />
    )
}
export default PrivateRoute;