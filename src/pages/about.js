import React from "react"
import styles from './about.module.css'
import Layout from "../components/layout.js"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout>
    <div class='welcome'>
    <h2>About us</h2>
    <p> We love exploring the world. Below are photos from a couple of adventures we've been on.</p>
    <Container>

      <User
        username="The Alps"
        avatar="https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?cs=srgb&dl=adventure-cold-daylight-291732.jpg&fm=jpg"
        excerpt="These mountains were some of the most beautiful we visited."
      />
      <User
        username="Rokua Forest"
        avatar="https://upload.wikimedia.org/wikipedia/commons/9/95/Rokua_pine_forest.JPG"
        excerpt="These trees towered over us on our visit, but we still loved them."
      />
    </Container>
    </div>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <div class="icon-bar">
      <a href="https://en-gb.facebook.com/" class="facebook"><i class="fa fa-facebook"></i></a> 
      <a href="https://twitter.com/?lang=en-gb" class="twitter"><i class="fa fa-twitter"></i></a> 
      <a href="https://www.google.com/" class="google"><i class="fa fa-google"></i></a> 
      <a href="https://uk.linkedin.com/" class="linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="https://youtube.com/" class="youtube"><i class="fa fa-youtube"></i></a> 
    </div>
  </Layout>
  

)
