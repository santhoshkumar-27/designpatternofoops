interface FLY {
    fly(): string;
}


class CanFly implements FLY {
    fly(): string {
        return 'Flying'
    }
}


class CantFly implements FLY {
    fly(): string {
        return `can't fly`
    }
}

class Animal {
    private fly: FLY;
    constructor( fly: FLY) {
        this.fly = fly;
    }

    tryToFly() {
        return this.fly.fly();
    }
}





export default function strategyPattern() {

    const animal = new Animal(new CanFly());
    console.log('animal', animal.tryToFly());

    const animal2 = new Animal(new CantFly());
    console.log('animal', animal2.tryToFly())
}