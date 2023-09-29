import React, { useState, useEffect } from 'react';
import { calculateTimeDifference } from './cal.js';

function BirthdayPage() {
  const herBirthdate = '1994-11-04'; // Replace with her actual birthdate
  const herBirthTime = '11:05:00'; // Replace with her actual time of birth

  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
     // Function to update the time difference
     const updateTimeDifference = () => {
        const difference = calculateTimeDifference(herBirthdate, herBirthTime);
        setTimeDifference(difference);
      };
  
      // Initial update
      updateTimeDifference();
  
      // Update the time difference every second (1000 milliseconds)
      const intervalId = setInterval(updateTimeDifference, 1000);
  
      // Cleanup the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [herBirthdate, herBirthTime]);

  const millisecondsInSecond = 1000;
  const millisecondsInMinute = 60 * 1000;
  const millisecondsInHour = 60 * 60 * 1000;
  const millisecondsInDay = 24 * 60 * 60 * 1000;

  const years = Math.floor(timeDifference / (millisecondsInDay * 365));
  const remainingMilliseconds = timeDifference % (millisecondsInDay * 365);

  const monthsInYear = 30.44; // Average number of days in a month over a year
  const months = Math.floor(remainingMilliseconds / (millisecondsInDay * monthsInYear));
  
  const days = Math.floor((timeDifference % (millisecondsInDay * 30)) / millisecondsInDay);
  const hours = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
  const minutes = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);
  const seconds = Math.floor((timeDifference % millisecondsInMinute) / millisecondsInSecond);

  // Convert milliseconds to years, months, days, hours, minutes, and seconds
  // (same as previous code)

  return (
    <div>
      
      <p style={{fontFamily:"'Playfair Display', serif", color:"rgba(244, 6, 137, 0.905)", fontSize:"25px"}}>
      Celebrating {years} years, {months} months,  {days} days, {hours} hours,  {minutes} minutes, <br/> and  {seconds} seconds of an 
      amazing journey since you graced this<br/> world with your presence!
      </p>
      {/* Add your birthday wishes here */}
    </div>
  );
}

export default BirthdayPage;
