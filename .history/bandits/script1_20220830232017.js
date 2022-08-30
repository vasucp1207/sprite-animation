const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 200
height = canvas.height = 100

const frameRate = 5
const spriteState = 'attack'

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
        posX = i * 45
        posY = index * 45
        position.loc.push({x: posX, y: posY})
    }

    animateSprite[states.name] = position
})

let cnt = 0
function animate(){

    ctx.clearRect(0, 0, width, height)
    let pos = Math.floor(cnt / frameRate) % animateSprite[spriteState].loc.length

    startX = pos
    startY = animateSprite[spriteState].loc[pos].y
    ctx.drawImage(sprite, 0, 0, startX * 45, startY * 45, 0, 0, width, height)

    cnt++
    requestAnimationFrame(animate)
}

animate()