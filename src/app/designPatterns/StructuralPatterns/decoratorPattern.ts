
function getRandomInt(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const MOD_ARRAY = ['Poison', 'Fire', 'Ice']

interface Weapon {
    getDamage() : number;
    getSpecial() : string;
    getMod() : string;
}

abstract class WeaponDecorator implements Weapon {
    constructor( protected weapon : Weapon) {}
    getDamage() { return this.weapon.getDamage() }
    getSpecial() { return this.weapon.getSpecial() }
    getMod() { return this.weapon.getMod() }
}

class Sword implements Weapon {
    getDamage() { return 0 }
    getSpecial() { return ''}
    getMod() { return '' }
}

class DamageUpgrade extends WeaponDecorator {
    constructor(weapon : Weapon) {
        super(weapon)
    }
    override getDamage() { return this.weapon.getDamage() + 50 }
    override getSpecial() { return this.weapon.getSpecial() }
    override getMod() { return this.weapon.getMod() }
}

class SpecialUpgrade extends WeaponDecorator {
    constructor(weapon : Weapon) {
        super(weapon)
    }
    override getDamage() { return this.weapon.getDamage() }
    override getSpecial() { 
        if (this.weapon.getSpecial() === "") {
            return this.weapon.getSpecial() + " Sharp " 
        } else {
            return this.weapon.getSpecial() + " Delicate "
        }
        
    }
    override getMod() { return this.weapon.getMod() }
}

class ModUpgrade extends WeaponDecorator {
    constructor(weapon : Weapon) {
        super(weapon)
    }
    override getDamage() { return this.weapon.getDamage() }
    override getSpecial() { return this.weapon.getSpecial() }
    override getMod() { 
        const index = getRandomInt(0, 2)
        const weaponMod = MOD_ARRAY[index]
        const modDamage = 0.05 * (this.weapon.getDamage())
        return this.weapon.getMod() + ` ${weaponMod} ${modDamage} ` 
    }
}




export function decoratorPattern() {
    let sword : Weapon = new Sword();
    sword = new DamageUpgrade(sword);
    // sword = new ModUpgrade(sword);
    // sword = new SpecialUpgrade(sword);
    console.log('sword.getDamage().toString()', sword.getDamage().toString())
    console.log('sword.getMod()', sword.getMod())
    console.log('sword.getSpecial()', sword.getSpecial())
}