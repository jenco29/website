import React from "react"
import Layout from "../components/layout.js"
import styles from './stylesheet.css'

console.log(styles)

export default ({children}) => (
  
  <Layout>
    <div  class='welcome'>
      <h2>Home </h2>
      <p>
      This is our website. We designed it based on our work experience. We learnt:
      </p>
      <ul>
        <li>Html</li>
        <li>Css and front end development</li>
        <li>User research</li>
        <li>Content design</li>
      </ul>
      <button>Sign up</button>
    </div>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="icon-bar">
        <a href="https://en-gb.facebook.com/" class="facebook"><i class="fa fa-facebook"></i></a> 
        <a href="https://twitter.com/?lang=en-gb" class="twitter"><i class="fa fa-twitter"></i></a> 
        <a href="https://www.google.com/" class="google"><i class="fa fa-google"></i></a> 
        <a href="https://uk.linkedin.com/" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="https://youtube.com/" class="youtube"><i class="fa fa-youtube"></i></a> 
    </div>
    
    {children}
  
  </Layout>
      
)
