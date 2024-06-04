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


class UFOEnimyShip extends EnemyShip {
    constructor() {
        super();
        this.setName('UFO fighter');
        this.setDamage(20.00)
    }
}

class RocketEnimyShip extends EnemyShip {
    constructor() {
        super();
        this.setName('Rocket');
        this.setDamage(200)
    }
}