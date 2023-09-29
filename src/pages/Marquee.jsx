import React from 'react'
import Marquee from "react-fast-marquee";
import i1 from "../assets/1.JPG"
import i2 from "../assets/2.JPG"
import i3 from "../assets/3.JPG"
import i4 from "../assets/4.jpg"
import i5 from "../assets/5.jpg"
import i6 from "../assets/6.jpg"
import i7 from "../assets/7.JPG"
import i8 from "../assets/8.JPG"
import i9 from "../assets/9.JPG"
import i10 from "../assets/10.JPG"
import i11 from "../assets/11.jpg"
import i12 from "../assets/12.JPG"
import i13 from "../assets/13.JPG"
import i14 from "../assets/14.JPG"
import i15 from "../assets/15.JPG"
import "../styles/lastmessage.scss"


export default function Marqueee() {
  return (
    <div className='Marquee'>
      <Marquee pauseOnClick="true" speed={50} >
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i1} alt='' />
    <p>When she sent me her first smile, I just melted.</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i2} alt='' />
    <p>When I first saw her, her beauty and smile made me feel uncomfortable.</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i3} alt='' />
    <p>This isn't my Sunny/Sunshine/baby.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i4} alt='' />
    <p>Hey Sunny, where are you?</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i5} alt='' />
    <p>Finally found my baby.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i6} alt='' />
    <p>Don't you dare tell me what I should not order.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i7} alt='' />
    <p>Its my Drink, I wont Share.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i8} alt='' />
    <p>Allowed me to order only one.</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i9} alt='' />
    <p>Here's our best photo together.</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i10} alt='' />
    <p>My Baby is upset, because her baby is going home</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i11} alt='' />
    <p>Why does he has to leave? Why can't he just stay here with me?</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i12} alt='' />
    <p>Even I can give a fake smile.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i13} alt='' />
    <p>Overjoyed because her baby is back!</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i14} alt='' />
    <p>Captured the one who resides in my heart.</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i15} alt='' />
    <p>When my beloved came from afar to celebrate my birthday.</p>
    </div></div>
    
   
   
    </Marquee>
    </div>
  )
}
