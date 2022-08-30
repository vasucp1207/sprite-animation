const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 100
height = canvas.height = 100

const sprite = new Image()
sprite.src = './Bandits/Sprites/Heavy Bandit/HeavyBandit.png'

let animateSprite = []
let animationStates = [
    {
        name: 'stand',
        frames: '8'
    },
    {
        name: 'run',
        frames: '8'
    },
    {
        name: 'attack',
        frames: '8'
    },
    {
        name: 'recover',
        frames: '8'
    },
    {
        name: 'death',
        frames: '4'
    }
]

animationStates.forEach((states, index) => {
    let position = {
        loc: []
    }

    for(let i = 0; i < states.frames; i++){
        position.loc.push({x: i * 45, y: i * 45})
    }

    animateSprite[sta]
})

posX = 5
posY = 2

function animate(){

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(sprite, posX * 50, posY * 50, 45, 45, 0, 0, width, height)

    requestAnimationFrame(animate)
}

animate()