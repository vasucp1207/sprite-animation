const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 600

const playerImage = new Image()
playerImage.src = './shadow_dog.png'

const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 0
let gameFrame = 0
let staggerFrames = 5
const spriteAnimations = []
const animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    }
]

animationStates.forEach((state, idx) => {})

function animate(){
    ctx.clearRect(0, 0, width, height)
    let position = Math.floor(gameFrame / staggerFrames) % 6
    frameX = spriteWidth * position
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    // if(gameFrame % staggerFrames == 0){
    //     if(frameX < 6) frameX++
    //     else frameX = 0
    // }

    gameFrame++
    requestAnimationFrame(animate)
}

animate()