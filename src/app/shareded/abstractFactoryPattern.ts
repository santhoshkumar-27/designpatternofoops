import { enemyShipType } from "./factorypattern";

interface ESWeapon {

    // User is forced to implement this method
    // It outputs the string returned when the 
    // object is printed

    toString(): String;

}
interface ESEngine {

    // User is forced to implement this method
    // It outputs the string returned when the 
    // object is printed

    toString(): String;

}
abstract class EnemyShip {

    private name!: string;

    // Newly defined objects that represent weapon & engine
    // These can be changed easily by assigning new parts 
    // in UFOEnemyShipFactory or UFOBossEnemyShipFactory

    weapon!: ESWeapon;
    engine!: ESEngine;

    public getName(): string { return this.name; }
    public setName(newName: string): void { this.name = newName; }

    abstract makeShip(): void;

    // Because I defined the toString method in engine
    // when it is printed the String defined in toString goes
    // on the screen

    public followHeroShip(): void {

        console.log(this.getName() + " is following the hero at " + this.engine);

    }

    public displayEnemyShip(): void {

        console.log(this.getName() + " is on the screen");

    }

    public enemyShipShoots() {

        console.log(this.getName() + " attacks and does " + this.weapon);

    }

    // If any EnemyShip object is printed to screen this shows up

    public toString() {

        const infoOnShip = "The " + this.name + " has a top speed of " + this.engine +
            " and an attack power of " + this.weapon;

        return infoOnShip;

    }

}

abstract class EnemyShipBuilding {

    // This acts as an ordering mechanism for creating
    // EnemyShips that have a weapon, engine & name
    // & nothing else

    // The specific parts used for engine & weapon depend
    // upon the String that is passed to this method

    protected abstract makeEnemyShip(typeOfShip: string): EnemyShip;

    // When called a new EnemyShip is made. The specific parts
    // are based on the String entered. After the ship is made
    // we execute multiple methods in the EnemyShip Object

    public orderTheShip(typeOfShip: string): EnemyShip {
        const theEnemyShip: EnemyShip = this.makeEnemyShip(typeOfShip);

        theEnemyShip.makeShip();
        theEnemyShip.displayEnemyShip();
        theEnemyShip.followHeroShip();
        theEnemyShip.enemyShipShoots();

        return theEnemyShip;

    }
}


class UFOEnemyShipBuilding extends EnemyShipBuilding {

    protected makeEnemyShip(typeOfShip: enemyShipType): EnemyShip {
        let theEnemyShip!: EnemyShip;

        // If UFO was sent grab use the factory that knows
        // what types of weapons and engines a regular UFO
        // needs. The EnemyShip object is returned & given a name

        if (typeOfShip === "U") {
            const shipPartsFactory: EnemyShipBuilding = new UFOEnemyShipFactory();
            theEnemyShip = new UFOEnemyShip(shipPartsFactory);
            theEnemyShip.setName("UFO Grunt Ship");

        } else if (typeOfShip === "B") {
            const shipPartsFactory: EnemyShipBuilding = new UFOBossEnemyShipFactory();
            theEnemyShip = new UFOBossEnemyShip(shipPartsFactory);
            theEnemyShip.setName("UFO Boss Ship");

        }
        // If UFO BOSS was sent grab use the factory that knows
        // what types of weapons and engines a Boss UFO
        // needs. The EnemyShip object is returned & given a name
        return theEnemyShip;
    }
}

class UFOEnemyShipFactory implements EnemyShipFactory{

	// Defines the weapon object to associate with the ship
	
	public  addESGun(): ESWeapon {
		return new ESUFOGun(); // Specific to regular UFO
	}

	// Defines the engine object to associate with the ship
	
	public  addESEngine(): ESEngine {
		return new ESUFOEngine(); // Specific to regular UFO
	}
}

class UFOBossEnemyShipFactory implements EnemyShipFactory{

	// Defines the weapon object to associate with the ship
	
	public  addESGun(): ESWeapon {
		return new ESUFOBossGun(); // Specific to Boss UFO
	}

	// Defines the engine object to associate with the ship
	
	public  addESEngine(): ESEngine {
		return new ESUFOBossEngine(); // Specific to Boss UFO
	}

}