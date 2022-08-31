const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

width = canvas.width = 100
height = canvas.height = 100

const frameRate = 5
const spriteState = 'attack'

const sprite = new Image()
sprite.src = './Bandits/Sprites/Heavy Bandit/HeavyBandit.png'

let animationStates = [
    {
        name: 'stand',
        frames: '8',
        y = 0
    },
    {
        name: 'run',
        frames: '8',
        y = 1
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

let cnt = 0
let xx = 0
let yy = 0
function animate(){
    ctx.clearRect(0, 0, width, height)
    xx = Math.floor(cnt / 5) % 8
    ctx.drawImage(sprite, xx * 48, yy * 48, 48, 48, 0, 0, width, height)
    cnt++
    requestAnimationFrame(animate)
}

animate()