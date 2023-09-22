export function calculateTimeDifference(birthDate, birthTime) {
    const birthDateTime = new Date(`${birthDate}T${birthTime}`);
    const currentDateTime = new Date();
  
    const timeDifference = currentDateTime.getTime() - birthDateTime.getTime();
    return timeDifference;
  }