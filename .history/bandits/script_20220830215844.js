const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 100
const height = canvas.height = 100

class Player{
    constructor(img){
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 100
        this.player = img
    }
}

const Attack1 = new Player('./Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png')
const attact1 = new Image()
attact1.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png'

function animate(){
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(attact1, 0, 0, width, height)

    requestAnimationFrame(animate)
}

animate()