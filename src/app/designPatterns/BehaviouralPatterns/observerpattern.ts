import { interval, tap, timer } from "rxjs";

interface Observer {
    update<T>(value: T): void;
    id: number;
}


class Subject {
    private lists: Observer[] = [];
    register(o: Observer) {
        this.lists.push(o);
    }

    unRegister(o: Observer) {
        const id = o.id;
        const index = this.lists.findIndex(list => list.id == id);
        this.lists.splice(index, 1);
    }

    notifyUpdate<T>(value: T) {
        this.lists.map((list) => list.update<T>(value))
    }
}

class Observor implements Observer {
    static incrementor = 0;
    id: number = 0;

    constructor() {
        Observor.incrementor++

        this.id = Observor.incrementor;

        console.log('id', this.id)
    }

    update<T>(value: T) {
        console.log('value', value)
    }
}

export default function ObservorPattern() {

    const subject1 = new Subject();

    const observor1 = new Observor();
    const observor2 = new Observor();
    const observor3 = new Observor();
    const observor4 = new Observor();
    const observor5 = new Observor();
    const observor6 = new Observor();

    subject1.register(observor1);
    subject1.register(observor2);
    subject1.register(observor3);
    subject1.register(observor4);
    subject1.register(observor5);
    subject1.register(observor6);


    subject1.notifyUpdate('something emitted');

    subject1.unRegister(observor2);

    subject1.notifyUpdate('something removed');


    // mimiking the thread like structure
    interval(3000).pipe(
        tap((res) => {
            subject1.notifyUpdate(res);
        }, (err: any) => {

        })
    ).subscribe()


}