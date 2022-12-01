import { Hero } from "./Hero";
import { HeroAxe } from "./HeroAxe";
import { HeroSpear } from "./HeroSpear";
import { HeroSword } from "./HeroSword";

const player1 = new HeroSword("Luffy", 15, 50);
const player2 = new HeroSpear("Ussop", 12, 50);
console.log(bataille(player1, player2));

function bataille(player1: Hero, player2: Hero) {
    while (player1.isAlive() && player2.isAlive()) {
        player1.attack(player2)
        player2.attack(player1)

        console.log(player1.getLife(), player2.getLife());

    }
    if (player1.isAlive() == true) {
        return player1.getName() + " win!"

    } else if (player2.isAlive() == true) {
        return player2.getName() + " win!"
    } else {
        return "It's a draw"
    }

}

