import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Marquee from "./Marquee"
import LastMessage from "./lastmessage";
import "../styles/lastmessage.scss"

function Experience() {
  return (
    <div className="main">
    <Marquee/>
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="24th May-2023"
          iconStyle={{ fontSize:"large", background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          The day we first crossed paths on Instagram.
          </h3>
          <p> It all started with 3 messages, The rest, as they say, is history.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="6th June 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          The Day She Expressed Her Love
          </h3>

          <p className="vertical-timeline-element-subtitle">
          On that special day, she expressed her love for me, how she missed me, and when she did, I was just overwhelmed. I then asked her for 30 minutes to savor this beautiful moment.
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="7th June 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            When I saw the beautiful lady for the first time.
          </h3>
          
          <p>At the stroke of midnight, when I first laid eyes on her, our meeting wasn't flawless as her beautiful smile left me feeling a bit unsettled</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vvertical-timeline-element--education"
          date="16th June 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Our First Date.
          </h3>
         
          <p>
          On our first date, it was far from perfect. 
          I wasn't at my best, stumbling over words and making a mess of things.<br/>
          That day, I almost lost her. But she gave me a chance, and that's why we're together today.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="17th June 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           My Second Chance
          </h3>
         
          <p>
          The second date, when I finally embraced being myself, 
          exactly what she wanted me to be. Our feelings aligned, 
          and it turned into the best 14 hours of my life <br/>
          The day I witnessed her incredible support and intelligence.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="8th July 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Our First Private meet
          </h3>
         
          <p>
          The day I went to meet her... I'm feeling a bit shy to go into details. 
          I know you have all the facts. <br/>Despite my well-thought-out plans going completely awry, 
          what unfolded that day was wonderfully unexpected
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="10th July 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           When I witnessed your strength and Internal Beauty.
          </h3>
         
          <p>
          The day I witnessed your incredible strength and beauty, 
          understanding the depth of what you've been through. <br/>
          That was the day I made a solemn vow to never let anger or conflict mar our connection.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2nd Aug 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           The Surprise Visit..
          </h3>
         
          <p>
          The surprise... The day I meticulously planned a surprise visit, and she begged, 
          'Please, please,' just to soften me up before revealing the date of our meeting. 
          but that day every moment was precious.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="18th Sep 2023"
          iconStyle={{ background: "red", color: "white"}}
          icon={<FavoriteIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Then comes her baby's Birthday.
          </h3>          
          <p>
          My birthday meet... She showered me with gifts, 
          everything I had wished for on my special day. It made my birthday exceptionally beautiful, 
          a memory I'll cherish for the rest of my life
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    <LastMessage />
    </div>
  );
}

export default Experience;
