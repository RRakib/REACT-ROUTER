import React from 'react'
import Contact from "./Contact"
import {Route , Link} from "react-router-dom"
export default function About({ match }) {
  return (
    <div className="home">
      <h1>About Me</h1>
      <h3>Hello! This is Rakib. Wroking on nested routing.</h3>
      <Link to={`${match.url}/contact`}>Contact</Link>
      <Route exact path ={ `${match.path}/:id`} component={Contact} />
      {match.params.id}
    </div>
  )
}
