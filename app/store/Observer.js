import Observable from './Observable.js';

/**
 * Note: Sub classes should override update() to return callaback, via which they would get notified
 * See 'Component' class implementation, as an example
 * 
 * Do not make update() a arrow function, because arrow functions are hosted as props on class, 
 * rather than on prototype. This will cause Observer class update() as subscriber, rather than its subclasses
 *  
 */
export default class Observer {
    constructor(observable) {
        if(observable instanceof Observable) {
            observable.subscribe(this.update());
        } else {
            console.error(observable, " is not a Observable");
        }
    }

    update() {
        //Subclasses return your callbacks here..
    }
}