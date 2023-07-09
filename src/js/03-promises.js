import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");



form.addEventListener("submit", onCreatePromise);

function onCreatePromise(event) {
    event.preventDefault();
    let delay = Number(form.elements.delay.value);
    const step = Number(form.elements.step.value);
    const amount = Number(form.elements.amount.value);
  for (let i = 1; i<=amount; i++){
      createPromise(i, delay)
        .then(({ i, delay }) => {
         Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
        })
        .catch(({ i, delay }) => {
          Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
        })
        delay+=step;
        event.currentTarget.reset();
  }
}



function createPromise(i, delay) {
 return new Promise ((res,rej) => {
  const shouldResolve = Math.random() > 0.3;
 setTimeout(()=>{
  if (shouldResolve) {
    res({i, delay})
  } else {
    rej({i, delay})
  }
 }, delay);
 })
}

