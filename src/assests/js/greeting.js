const greeting = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    // 12 = 12pm
    return "Good Morning";
  } else if (hours < 17) {
    // 17 = 5pm
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

export default greeting;
