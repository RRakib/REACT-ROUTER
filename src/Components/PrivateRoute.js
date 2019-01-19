import {Route , Redirect} from "react-router-dom";

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