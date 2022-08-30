const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 100
const height = canvas.height = 100

const attact1 = new Image()
attact1.src = './Bandits/Sprites/Heavy Bandit/Attack/HeavyBandit_Attack_0.png'

let x = 0
let y = 0
function animate(){
    // ctx.clearRect(0, 0, width, height)
    ctx.drawImage(attact1, x, y, width, height)
    x += 5

    requestAnimationFrame(animate)
}

animate()