import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({children}) => (
  <div>
    <header style={{ marginBottom: `1.5rem`, opacity:0.8, height:'85px', width:'100%',backgroundColor:'#E5E7E9' }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h1 style={{ font: '50px', display: `inline` }}>Website</h1>
      </Link>
      <ul style={{ decoration:'none', listStyle: `none`, float:'right' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/photos/">Photos</ListLink>
      </ul>
    </header>
    {children}
    <footer style={{ marginTop: `5rem`, opacity:0.8, height:'85px', width:'100%',backgroundColor:'#E5E7E9' }}>
      <h6 style={{font:'5px',textAlign:'center',}}>Contact us:<a href="mailto:example@gmail.com">example@gmail.com</a><br/><a href='google.com'> 07546 342 878</a> </h6>
    </footer>
    
  </div>

)