export default class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unSubscribe(observer) {
        this.observers = this.observers.filter(o => o != observer);
    }

    publish(data) {
        console.group("Publishing changes");
        console.log(`Data: ${JSON.stringify(data)}`);
        this.observers.forEach(observer => {
            console.log(`Publishing to: ${observer}`)
            observer(data);
        });
        console.groupEnd();
    }
}