import { Hero } from "./Hero";
import { HeroAxe } from "./HeroAxe";
import { Weapon } from "./Weapon";

export class HeroSpear extends Hero {
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon('spear', 5);
    }

    attack(opponent: Hero) {
        if(opponent instanceof HeroAxe){
            opponent.setLife(opponent.getLife() - this.getPower() * 2)
            
        }
        else{
            super.attack(opponent)
        }
        
        //console.log(this, ' attaque ', opponent);
    }
    }
