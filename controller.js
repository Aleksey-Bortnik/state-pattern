
let defaultCountValue = 0;

export const count = document.getElementById('counterValue');

const setCountValue = () => {
    count.innerHTML = defaultCountValue;
};
export const clickFlash = (element) => {
    element.classList.add('flash');
    setTimeout(() => {
        element.classList.remove('flash');
    }, 100);
}

setCountValue();

let _instance = null;

class Controller {

    static get instance() {
        return _instance ? _instance : _instance = new Controller();
    }

    constructor() {
        this._core = {};
        window.Controller = this;
        //for debugging purposes
    }

    get core() {
        return this._core;
    }

    editCore(prop, value) {
        this._core[prop] = value;
    }

    foo(prop, value) {
        let todo = 1 + value; //some logic here
        this.editCore(prop, todo);
    }
}

Controller.instance.editCore('defaultCountValue', 0);

//?add eny variable to global store:
//? let level = 0;
//? let interval = 234;
//? Controller.instance.editCore('level', 0);
//? Controller.instance.editCore('interval', 234);

export default Controller;
