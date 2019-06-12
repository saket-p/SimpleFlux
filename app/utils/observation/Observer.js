import Observable from './Observable.js';

/**
 * Note: Sub classes should override getNotifiedWith() to return callaback, via which they would get notified
 * See 'Component' class implementation, as an example
 * 
 * Do not make getNotifiedWith() a arrow function, because arrow functions are hosted as props on class,
 * rather than on prototype. This leads to Observer::update() getting registered as subscriber, instead of Subclass::update()
 *  
 */
export default class Observer {
    constructor(observable) {
        if(observable instanceof Observable) {
            observable.addObserver(this);
        } else {
            console.error(observable, " is not a Observable");
        }
    }

    getNotifiedWith(notificationData) {
        //Subclasses return your callbacks here..
    }
}