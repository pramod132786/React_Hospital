const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  const getMonthDays = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = getFirstDayOfMonth(month, year);
    const monthDays = [];
  
    let dayCounter = 1;
  
    for (let week = 0; dayCounter <= daysInMonth; week++) {
      const currentWeek = Array(7).fill(0);
  
      for (let dayIndex = firstDayOfMonth; dayIndex < 7; dayIndex++) {
        if (dayCounter > daysInMonth) {
          break;
        }
  
        currentWeek[dayIndex] = dayCounter;
        dayCounter++;
      }
  
      monthDays.push(currentWeek);
      firstDayOfMonth = 0;
    }
  
    return monthDays;
  };
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  export { getDaysInMonth, getFirstDayOfMonth, getMonthDays, months, weekdays };
  