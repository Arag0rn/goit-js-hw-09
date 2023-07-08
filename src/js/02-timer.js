
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector("[data-start]")
const dateInput = document.querySelector("input[type=text]")

const timer = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
}

startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < options.defaultDate){
        Notify.failure("Please choose a date in the future");
      } else {
        startButton.disabled = false
      }
    },

  };

const fp = flatpickr(dateInput, options);


startButton.addEventListener("click", onClickStart)



function onClickStart (){
  const id = setInterval(()=>{
    const remaningTime = convertMs(Date.parse(dateInput.value) - Date.parse(new Date()))
    if(remaningTime.days <= 0 && remaningTime.hours <= 0 && remaningTime.minutes <= 0 && remaningTime.seconds <= 0){
      clearInterval(id);
    }
   
    timer.days.textContent = remaningTime.days;
    timer.hours.textContent = remaningTime.hours;
    timer.minutes.textContent = remaningTime.minutes;
    timer.seconds.textContent = remaningTime.seconds;
  },1000)

};

 function addLeadingZero(value){
     return String(value).padStart(2, '0')
    }


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
