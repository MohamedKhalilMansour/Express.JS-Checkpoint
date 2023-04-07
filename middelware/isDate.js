const isDate = (req , res , next) => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    if (hour >= 1 && hour <= 5 && day >= 1 && day <= 5) {
        return next();
    }
    return res.status(403).send("<h1>The Site is Now Unavailable, Please Come Back during working hours: Monday to Friday,  from 9 to 17 :)</h1>");
}; 
module.exports = isDate;