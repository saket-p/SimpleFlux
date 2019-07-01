export default class Publisher {
    constructor() {
        this.subscriberMap = {};
    }

    addSubscriberToSubject(subject, subscriber){
        this.subscriberMap[subject] = this.subscriberMap[subject] || [];
        this.subscriberMap[subject].push(subscriber);
    }

    removeSubscriberFromSubject(subject, subscriber) {
        if(!this.subscriberMap[subject] || this.subscriberMap[subject].length === 0) {
            return;
        }
        this.subscriberMap[subject] = this.subscriberMap[subject].filter(s => s != subscriber);
    }

    notifySubscribers(subject, data) {
        console.group("Notifying changes");
        console.log(`Data: ${JSON.stringify(data)}`);
        this.subscriberMap[subject].forEach(subscriber => {
            console.log(`Subscriber: ${subscriber.constructor.name}`);
            subscriber.getNotifiedWith(data);
        });
        console.groupEnd();
    }
}