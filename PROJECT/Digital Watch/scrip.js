const container = document.querySelector(".container");
const Hours = document.querySelector(".hour h2");
const Minutes = document.querySelector(".minute h2");
const Second = document.querySelector(".second h2");
const ampM = document.querySelector(".ampm");
const Dates = document.querySelector(".date h3");
const Day = document.querySelector(".day h3");
const Gretting = document.querySelector(".gretting h3");

  setInterval(()=>{

    const time = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let hours = time.getHours();
    const AMPM = hours >= 12 ? "PM" : "AM";
     hours = hours % 12;
     if (hours === 0) {
      hours = 12;
      }
    Hours.textContent = hours;
    ampM.textContent = AMPM;
    
    Minutes.textContent = String(time.getMinutes()).padStart(2, 0);

   Second.textContent = String(time.getSeconds()).padStart(2, 0);

   const monthName = months[time.getMonth()];
   Dates.textContent = `${time.getDate()} ${monthName} ${time.getFullYear()}`;
   
  const DAY = days[time.getDay()]
   Day.textContent = `${DAY}`;
 
    // let hours = time.getHours();
    let message = "";
    if(hours < 12){
        message = "Good Morning";
    }
    else if (hours < 17){
        message = "Good Afternoon";
    }
    else if ( hours < 20){
        message = "Good Evening";
    }
    else{
        message = "Good night";
    }
    Gretting.textContent = message;
  } ,1000)


   
   

  
//    const AMPM = time.getHours >= ( 12 ? "PM" : "AM");
//    ampM.textContent = AMPM;

  
