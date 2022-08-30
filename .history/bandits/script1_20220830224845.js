const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 45
height = canvas.height = 45

const sprite = new Image()
sprite.src = './Bandits/Sprites/Heavy Bandit/HeavyBandit.png'

posX = 0
posY = 1

function animate(){

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(sprite, posX * 45, posY * 45, 45, 45, 0, 0, width, height)

    requestAnimationFrame(animate)
}

animate()