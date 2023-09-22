import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Typewriter from 'typewriter-effect';
import Confetti from "react-confetti";
import Birthday from "./birthday"


function Home() {
  return (
    <div className='intro' id='intro'>    
    <div className='left'>        
      <div className='imgcontainer' >      
        <img src="BD_wishes/assets/image.jpg" alt='DP' ></img>        
      </div>
    </div>
    <div className='right'>
    <Confetti/>
    <div className='wrapper'>      
      <h1>Celebrating You Today!</h1>
      <h2><span><Typewriter
  options={{
    strings: ['My Love', 'BAE', 'Baby', 'Motu Baby', "Chetu"],
    autoStart: true,
    loop: true,
    cursor:"",      
  }}  
/></span></h2>
<br></br>
   <Birthday/> 
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<h3>With all my love,<br/>
Sunny Sinari</h3>
    </div>
    </div>
      
     
      
    </div>
  );
}

export default Home;
