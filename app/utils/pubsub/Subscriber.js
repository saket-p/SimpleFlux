import Publisher from './Publisher.js';

/**
 * Note: Sub classes should override getNotifiedWith() to return callaback, via which they would get notified
 * See 'Component' class implementation, as an example
 * 
 * Do not make getNotifiedWith() a arrow function, because arrow functions are hosted as props on class,
 * rather than on prototype. This leads to Observer::update() getting registered as subscriber, instead of Subclass::update()
 *  
 */
export default class Subscriber {
    constructor(publisher) {
        if(publisher instanceof Publisher) {
            this.publisher = publisher
        } else {
            console.error(publisher, " is not a Publisher");
        }
    }

    subscribeTo(subject) {
        this.publisher.addSubscriberToSubject(subject, this);
    }

    getNotifiedWith(notificationData) {
        //Subclasses return your callbacks here..
    }
}