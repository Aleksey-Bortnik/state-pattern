import Controller from './controller.js';
import { count, clickFlash } from './controller.js';

// Controller.instance.editCore('Counter', ''); // add variable to global store 1st arg name of variable, 2nd arg value of variable
console.log(Controller.instance.core); // logs { Counter: "" }  // check if variable is added to global store           

let decrementBtn = document.getElementById('countDecr');

decrementBtn.addEventListener('click', (e) => {
    clickFlash(decrementBtn);

    let score = Controller.instance.core.defaultCountValue
    Controller.instance.editCore('defaultCountValue', --score);

    count.innerHTML = Controller.instance.core.defaultCountValue;
});
