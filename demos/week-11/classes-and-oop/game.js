
function getAttackDamage(max) {
    return Math.floor(Math.random() * max)
}

class Character {
    constructor(name, health, maxAttackDamage) {
        this.name = name,
        this.health = health,
        this.maxAttackDamage = maxAttackDamage
    } 

    attack(target) {
        const damage = getAttackDamage(this.maxAttackDamage)
        target.health -= damage
        console.log(
            `${this.name} attacks and deals ${damage} damage! ${target.name} now has ${target.health} health`
        )
    }

    isDead() {
        return this.health <= 0;
    }
}

// player vs vampies

class Player extends Character {
    constructor(name, health, maxAttackDamage, healAmount) {
        super(name, health, maxAttackDamage)
        this.healAmount = healAmount
    }

    // the player character always heals a little before they take their turn
    preTurnAction() {
        this.health += Math.floor(this.healAmount * Math.random())
        console.log(`${this.name} heals for ${this.healAmount}. Their health is now ${this.health}`)
    }
}


class Vampire extends Character {
    constructor(name, health, maxAttackDamage) {
        super(name, health, maxAttackDamage)
    }

    // vampire can life steal for half the damage they did per turn   
    lifeSteal(target) {
        const damage = getAttackDamage(this.maxAttackDamage)
        target.health -= damage

        const lifeSteal = Math.floor(damage / 2)
        this.health += lifeSteal
        console.log(`${this.name} deals ${damage} damage! They also suck some of your blood, gaining ${lifeSteal} amount of health back. Their health is now ${this.health}.`)
    }
}


function playGame() {
    const player = new Player(`🤓`, 200, 100, 20)
    const vampire = new Vampire(`🧛‍♀️`, 250, 100)

    const turns = 5;

    for (let i = 1; i <= turns; i++) {
        console.log(`----- Turn ${i} ------ `)

        player.preTurnAction()
        player.attack(vampire)

        if (vampire.isDead()) {
            console.log(`The vampire was slain!!! Wooo hoo1!`)
            break;
        }

        vampire.attack(player)
        if (player.isDead()) {
            console.log(`The player was defeated. Continue??`)
            break;
        }

    }

    // if either vampire or player has 0 health, end the game.

}

playGame()