import React from "react"
import {Route , Link} from "react-router-dom";

const Books = ( {match} ) => {
    return(
        <div className="home">
            <h1>See if you can find the book you want</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/html`}>HTML</Link>
                </li>
                <li>
                    <Link to={`${match.url}/css`}>Css</Link>
                </li>
                <li>
                    <Link to={`${match.url}/react`}>React</Link>
                </li>
            </ul>
            <Route 
                path={`${match.path}/:id`} 
                render={( {match} ) => {
                    return(
                        <div>
                           <h1> We Have Books on {match.params.id} </h1>
                        </div>
                    )
                }} 
            />
            <Route
                path={`${match.path}/:id`}
                component = {BookID}
            />

        </div>
    )
}


const BookID = ({match}) => {
    return(
        <div>
        <h3>Books ID : {match.params.id}</h3>
        </div>
    )
}

export default Books;