const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 700
height = canvas.height = 600

const sprite = new Image()
sprite.src = './Bandits/Sprites/Heavy Bandit/HeavyBandit.png'

function animate(){

    requestAnimationFrame(animate)
}

animate()