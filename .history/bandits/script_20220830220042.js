const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 100
const height = canvas.height = 100

class Player{
    constructor(imgage){
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 100
        this.player = img
    }

    draw(){
        ctx.clearRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.player, this.x, this.y, this.width, this.height)
    }
}

const Attack1 = new Player('./Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png')

function animate(){

    Attack1.draw()
    requestAnimationFrame(animate)
}

animate()