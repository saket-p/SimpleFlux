export default class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => o != observer);
    }

    notifyObservers(data) {
        console.group("Notifying changes");
        console.log(`Data: ${JSON.stringify(data)}`);
        this.observers.forEach(observer => {
            console.log(`Observer: ${observer.constructor.name}`);
            observer.getNotifiedWith(data);
        });
        console.groupEnd();
    }
}