module.exports = function (req, res, next) {
    const now = new Date();
  
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
  
    const isWeekday = day >= 1 && day <= 5;
    const isWorkingHours = hour >= 9 && hour < 17;
  
    if (isWeekday && isWorkingHours) {
      next();
    } else {
      res.send("<h1>Sorry, we are closed. Visit us during working hours (Mon-Fri, 9AM - 5PM).</h1>");
    }
  };