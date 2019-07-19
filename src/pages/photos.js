import React from "react"
import Layout from "../components/layout.js"

export default () => (
    
    <Layout>
        <div class='welcome'>
            <h2>Gallery</h2>
        
        <div class='gallery'>

            <div class='photo'>
                <a target='blank' href='https://images.pexels.com/photos/2025872/pexels-photo-2025872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>
                    <img src='https://images.pexels.com/photos/2025872/pexels-photo-2025872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Forest" width="600" height="400"/>
                    <div class='desc'>A forest full of trees.</div>
                </a>

            </div>

            <div class='photo'>
                <a target='blank' htef='https://images.pexels.com/photos/2225232/pexels-photo-2225232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>
                  <img src='https://images.pexels.com/photos/2225232/pexels-photo-2225232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Forest" width="600" height="400"/>
                  <div class='desc'>A city full of people.</div>  
                </a>
                
            </div>

            <div class='photo'>
                <a target='blank' href='https://images.pexels.com/photos/2291071/pexels-photo-2291071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'>
                  <img src='https://images.pexels.com/photos/2291071/pexels-photo-2291071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Forest" width="600" height="400"/>
                  <div class='desc'>A road full of nothing.</div>
                </a>
                
            </div>

        </div>
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div class="icon-bar">
            <a href="https://en-gb.facebook.com/" class="facebook"><i class="fa fa-facebook"></i></a> 
            <a href="https://twitter.com/?lang=en-gb" class="twitter"><i class="fa fa-twitter"></i></a> 
            <a href="https://www.google.com/" class="google"><i class="fa fa-google"></i></a> 
            <a href="https://uk.linked-in.com/" class="linkedin"><i class="fab fa-linkedin"></i></a>
            <a href="https://youtube.com/" class="youtube"><i class="fa fa-youtube"></i></a> 
        </div>
    </Layout>

    
)