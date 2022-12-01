
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ? 
//null, indifined, string, number,bolean,symbol,big int.
- Comment typer un tableau ? 
//preciser un type (ou class)
- Quel est le type `any` ?
//tout type
- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 
//en rajoutant un :type à la fin de la fonction

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ? 
//la structure d'un objet, c'est-à-dire la déclaration de l'ensemble des entités qui composeront un objet
- Qu'est ce qu'un constructeur de classe ? 
//une methode special de la classe
- Qu'est ce qu'une instance de classe ?
//créer un objet sur son model
- Comment vérifier qu'une classe est d'une certaine instance ?
//avec l'operateur instanceof
- Qu'est ce que `this` dans une classe ?
constructor(nameParameter:string){
    this.name=nameParameter;
}
const bob=new user ("bob")
const bill=new user ("bill")
- Qu'est ce qu'une méthode de classe ? 
//Une méthode de classe est une méthode qui n'agit pas sur des variables d'instance mais uniquement sur des variables de classe.
- Qu'est ce que la visibilité des propriétés ? 
//La visibilité permet de définir de quelle manière un attribut ou une méthode d'un objet sera accessible dans le programme (private/public)

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre) 
- Qu'est ce que l'héritage ? 
- Comment appeler le constructeur d'une classe mère ? 
- Comment appeler une méthode d'une classe mère ? 
- Qu'est ce que le polymorphism ? 

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

