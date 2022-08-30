const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 100
height = canvas.height = 100

const sprite = new Image()
sprite.src = './Bandits/Sprites/Heavy Bandit/HeavyBandit.png'

posX = 0
posY = 0

function animate(){

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(sprite, posX * 45, posY * 45, 45, 45, 0, 0, width, height)
    if(posX < 7 && posY < 7) posX++, posY++

    requestAnimationFrame(animate)
}

animate()