const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'

function animate(){
    ctx.clearRect(0, 0, width, height)
    // ctx.fillRect(50, 50, 100, 100)
    ctx.drawImage(playerImage, sx, sy, sw, sh, 0, 0, width, height)
    requestAnimationFrame(animate)
}

animate()