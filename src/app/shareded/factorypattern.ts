abstract class EnemyShip {

    private name!: string;
    private amtDamage!: number;

    public getName() { return this.name; }
    public setName(newName: string) { this.name = newName; }

    public getDamage() { return this.amtDamage; }
    public setDamage(newDamage: number) { this.amtDamage = newDamage; }

    public followHeroShip() {
        console.log(this.getName() + " is following the hero");
    }

    public displayEnemyShip() {
        console.log(this.getName() + " is on the screen");
    }

    public enemyShipShoots() {
        console.log(this.getName() + " attacks and does " + this.getDamage() + " damage to hero");
    }

}


class UFOEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.setName('UFO fighter');
        this.setDamage(20.00)
    }
}

class RocketEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.setName('Rocket');
        this.setDamage(200)
    }
}


function runInstance(enemyShip: EnemyShip) {

    enemyShip.displayEnemyShip();
    enemyShip.followHeroShip();
    enemyShip.enemyShipShoots()
}

export default function factoryPattern() {
    const enemyType: 'U' | 'R' = 'U';

    let enemyShip: EnemyShip;

    if (enemyType == 'U') {
        console.log('enemyType', enemyType)
        enemyShip = new UFOEnemyShip();
    } else {
        enemyShip = new RocketEnemyShip();
    }

    if (!enemyShip) {
        return null;
    }
    runInstance(enemyShip);
}