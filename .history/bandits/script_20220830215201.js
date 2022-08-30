const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 400

const attact1 = new Image()
attact1.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png'

function animate(){
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(attact1, 0, 0, width, height)

    requestAnimationFrame(animate)
}

animate()