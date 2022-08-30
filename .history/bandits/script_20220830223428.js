const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 100
const height = canvas.height = 100

const frameRate = 5

const attack1 = new Image()
attack1.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png'
const attack2 = new Image()
attack2.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_1.png'
const attack3 = new Image()
attack3.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_2.png'
const attack4 = new Image()
attack4.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_3.png'
const attack5 = new Image()
attack5.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_4.png'
const attack6 = new Image()
attack6.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_5.png'
const attack7 = new Image()
attack7.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_6.png'

class Player{
    constructor(image){
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 100
        this.player = image
    }

    draw(){
        ctx.clearRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.player, this.x, this.y, this.width, this.height)
    }
}

const Attack1 = new Player(attack1)
const Attack2 = new Player(attack2)
const Attack3 = new Player(attack3)
const Attack4 = new Player(attack4)
const Attack5 = new Player(attack5)
const Attack6 = new Player(attack6)
const Attack7 = new Player(attack7)

const allAttack = [attack1, attack2, attack3, attack4, attack5, attack6, attack7]

function animate(){

    let cnt = 0
    let pos = Math.floor(cnt / frameRate) % 7
    // ctx.clearRect(0, 0, 100, 100)
    ctx.drawImage(allAttack[pos], 0, 0, 100, 100)
    cnt++
    requestAnimationFrame(animate)
}

animate()