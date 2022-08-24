const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = 800
const height = canvas.height = 700

let gameSpeed = 10

const backgroudLayer1 = new Image()
backgroudLayer1.src = './layer-1.png'
const backgroudLayer2 = new Image()
backgroudLayer2.src = './layer-2.png'
const backgroudLayer3 = new Image()
backgroudLayer3.src = './layer-3.png'
const backgroudLayer4 = new Image()
backgroudLayer4.src = './layer-4.png'
const backgroudLayer5 = new Image()
backgroudLayer5.src = './layer-5.png'

class Layer{
    constructor(image, speedModifier){
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }
    update(){   
        this.speed = 
    }
    draw(){

    }
}

function animate(){
    ctx.clearRect(0, 0, width, height)
    requestAnimationFrame(animate)
}

animate()