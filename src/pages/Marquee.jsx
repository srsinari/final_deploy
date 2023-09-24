import React from 'react'
import Marquee from "react-fast-marquee";
import i1 from "../assets/1.jpg"
import i2 from "../assets/2.jpg"
import i3 from "../assets/3.jpg"
import i4 from "../assets/4.jpg"
import i5 from "../assets/5.jpg"
import i6 from "../assets/6.jpg"
import i7 from "../assets/7.jpg"


export default function Marqueee() {
  return (
    <div className='Marquee'>
      <Marquee pauseOnHover="true" >
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i1} alt='' />
    <p>Image 1 Description</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i2} alt='' />
    <p>Image 1 Description</p>
    </div>
    </div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i3} alt='' />
    <p>Image 1 Description</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i4} alt='' />
    <p>Image 1 Description</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i5} alt='' />
    <p>Image 1 Description</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i6} alt='' />
    <p>Image 1 Description</p>
    </div></div>
    <div className='btwpost'>
    <div className='postcard'>
    <img src={i7} alt='' />
    <p>Image 1 Description</p>
    </div></div>
    
    
   
   
    </Marquee>
    </div>
  )
}
