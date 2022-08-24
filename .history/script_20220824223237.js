const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'

const spriteWidth = 575
const spriteHeight = 523

function animate(){
    ctx.clearRect(0, 0, width, height)
    // ctx.fillRect(50, 50, 100, 100)
    ctx.drawImage(playerImage, 0, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    requestAnimationFrame(animate)
}

animate()