import React from "React"
import Layout from "../components/layout.js"

export default () => (
  
  <Layout>
    <div class='welcome'>
    <h2> I'd love to talk! Email me at the address below!</h2>
    <p>
      <a href="mailto:example@gmail.com">example@gmail.com</a>
    </p>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <div class="icon-bar">
      <a href="https://en-gb.facebook.com/" class="facebook"><i class="fa fa-facebook"></i></a> 
      <a href="https://twitter.com/?lang=en-gb" class="twitter"><i class="fa fa-twitter"></i></a> 
      <a href="https://www.google.com/" class="google"><i class="fa fa-google"></i></a> 
      <a href="https://uk.linkedin.com/" class="linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="https://youtube.com/" class="youtube"><i class="fa fa-youtube"></i></a> 
    </div>
    
  </Layout>
  
)
