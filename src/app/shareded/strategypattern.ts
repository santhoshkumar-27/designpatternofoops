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
    private fly!: FLY;
    constructor() {
    }

    tryToFly() {
        return this.fly.fly();
    }

    setflyType(fly: FLY) {
        this.fly = fly;
    }
}





export default function strategyPattern() {

    const animal = new Animal();
    animal.setflyType(new CanFly());
    console.log('animal', animal.tryToFly());

    const animal2 = new Animal();
    animal2.setflyType(new CantFly());
    console.log('animal', animal2.tryToFly())
}