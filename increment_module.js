import Controller from './controller.js';
import { count, clickFlash } from './controller.js';

let incrementBtn = document.getElementById('countIncr');

incrementBtn.addEventListener('click', (e) => {
    clickFlash(incrementBtn);

    let incScore = Controller.instance.core.defaultCountValue
    Controller.instance.editCore('defaultCountValue', ++incScore);

    count.innerHTML = Controller.instance.core.defaultCountValue;
});
