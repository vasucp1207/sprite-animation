const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'

const spriteWidth = 5

function animate(){
    ctx.clearRect(0, 0, width, height)
    // ctx.fillRect(50, 50, 100, 100)
    ctx.drawImage(playerImage, 0, 0, 400, 400, 0, 0, width, height)
    requestAnimationFrame(animate)
}

animate()