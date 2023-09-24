import React, { useState } from 'react';
import "../styles/thankyou.scss"
import image1 from "../assets/image1.jpg"

function Thankyou() {
  return (
    <div className="page-container">
      <BlogCard />
      </div>
  );
}

function BlogCard() {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={`card-container${flipped ? ' flipped' : ''}`}>
      <Front />
      <Back />
    </div>
  );
}

function Front() {
  return (
    <div className="front">
      <ImageArea />
      <MainArea />
    </div>
  );
}

function Back() {
  return (
    <div className="back">
      <p>Dear , <br/>
      <br/>
      <ul>
      <li>I just wanted to take a moment to tell you how incredibly grateful I am for the impact you've had on my life. Since the day we met, you've filled my life with love and happiness in ways I never imagined.😇😇<br/>

      </li><li>Your presence is like a ray of sunshine on the cloudiest days. When I'm in pain or facing tough times, your unwavering support and your ability to make me smile never cease to amaze me. You have a unique gift for brightening my darkest moments, and I can't thank you enough for that. 🥰🤗😘<br/>

      </li><li>You're not just my girlfriend; you're my confidant, my rock, and my biggest cheerleader. Your constant encouragement and belief in me have pushed me to become a better person. Your support has given me the strength to chase my dreams and conquer my fears. I feel incredibly blessed to have you by my side.😇🥰<br/>
      </li><li>Thank you for being the incredible partner that you are. I cherish our journey together and look forward to many more beautiful moments with you.😘😘😘🤗🤗🤗<br/>
</li>
      </ul>


With ,<br/>

fsdgds </p>
      
    </div>
  );
}

function ImageArea() {
  return (
    <div className="image-container">
      <img className="card-image" src={image1} alt="Blog Post" />
     
    </div>
  );
}

function MainArea() {
  return (
    <div className="main-area">
      <div className="blog-post">              
        <p className="read-more">Baby, Give my pic a 'hover hug' and discover the message I've hidden</p>
        {/* <p className="date">{new Date().toLocaleDateString()}</p>  */}
      </div>
    </div>
  );
}

export default Thankyou;
