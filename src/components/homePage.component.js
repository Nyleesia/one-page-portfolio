import React from "react"; 
import Contact from "./contact.component"
import Projects from "./projects.component"

const Home = (props) => {
    return(
        <div className="wrapper">
        <div className= "container">
          <p className = "photo"> <img id= "homeImage" src = "" alt= ""></img></p>
          
          
          <h3>About Me</h3>
          <div id = "home"> 

            <p className = "homeInfo"> <br/><br/>


             I am a MERN stack developer with experience in AWS. I live in Atlanta, Georgia but, I was born and raised Trinidad and Tobago. I enjoy working on new projects and trying various coding languages and technologies.<br/><br/>
        
             I have a bachelor's degree in Psychology and Management Studies (double major). My main goal is to leave the world a little bit better than it was when I entered it! My current aim is to use my previous education in the Modern and Life Sciences, Psychology and Businesss Management to improve UX/UI, and develop useful, responsive, accessible applications that people want to use everyday.</p>
             <br></br>
             <br></br>
             <hr></hr>
             <h3>Contact</h3>
             <Contact/>
             <br></br>
             <br></br>
             <hr></hr>
             <h3>Projects</h3>
             <br></br>
             <Projects />
             </div>

             </div>
             </div>   
    )
}

export default Home;