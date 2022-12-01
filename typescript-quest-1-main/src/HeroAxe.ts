import { Hero } from "./Hero";
import { HeroSword } from "./HeroSword";
import { Weapon } from "./Weapon";

export class HeroAxe extends Hero{
    constructor(name: string, power: number, life: number){
        super(name, power, life);
        this.weapon = new Weapon('axe',7);
    }

    attack(opponent: Hero) {
        console.log("attaque",opponent.getLife());
        
        if(opponent instanceof HeroSword){
            opponent.setLife(opponent.getLife() - this.getPower() * 2)
            
        }
        else{
            super.attack(opponent)
        }
        console.log("attaque",opponent.getLife());
        //console.log(this, ' attaque ', opponent);
    }
}