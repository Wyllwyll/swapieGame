import { Hero } from "./Hero";
import { HeroSpear } from "./HeroSpear";
import { Weapon } from "./Weapon";

export class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon('sword', 6);
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            console.log('--------------------------------');

            console.log('Damage: ', this.getPower() + this.weapon.damage, opponent.getLife());

            opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.weapon.damage));

            console.log(opponent.getName(), ' a ', opponent.getLife(), ' de vie ');

            console.log('--------------------------------');

        }
        else {
            super.attack(opponent)
        }

        //console.log(this, ' attaque ', opponent);
    }
}