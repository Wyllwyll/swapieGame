import { Weapon } from "./Weapon"

export class Hero {
    private name: string
    private power: number
    private life: number
    weapon: Weapon
    constructor(name: string, power: number, life: number) {
        this.name = name
        this.power = power
        this.life = life
    }
    getLife() {
        return this.life
    }

    setLife(life: number) {
        this.life = life/*
        if(life < 10 ){
            this.life = life
        }*/
        //this.life = life;
    }

    getName() {
        return this.name
    }

    getPower() {
        return this.power
    }

    changeName(newName: string) {
        this.name = newName;
    }
    changePower(newPower: number) {
        this.power = newPower
    }
    ChangeLife(newLife: number) {
        this.life = newLife
        return this.life
    }


    attack(opponent: Hero) {
        console.log('--------------------------------');
        
        console.log('Damage: ', this.getPower() + this.weapon.damage, opponent.getLife());

        opponent.setLife(opponent.getLife() - this.getPower());

console.log(opponent.name, ' a ', opponent.getLife(), ' de vie ');

console.log('--------------------------------');

    }

    isAlive(): boolean {
        return this.life > 0;
    }
}





