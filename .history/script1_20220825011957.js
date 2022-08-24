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
        this.speed = gameSpeed * this.speedModifier
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed
        }
        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }   
}

const layer1 = new Layer(backgroudLayer1, 1.5)
const layer2 = new Layer(backgroudLayer2, 1)
const layer3 = new Layer(backgroudLayer3, 0.5)
const layer4 = new Layer(backgroudLayer4, 2)
const layer5 = new Layer(backgroudLayer5, 1.5)

const gameObjects = [layer1, layer2, layer3, layer4, layer5]

function animate(){
    ctx.clearRect(0, 0, width, height)
    gameObjects.forEach(object => {
        object.update()
        object.draw()
    })
    requestAnimationFrame(animate)
}

animate()