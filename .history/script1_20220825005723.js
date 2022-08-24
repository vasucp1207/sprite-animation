const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = 800
const height = canvas.height = 700

let gameSpeed = 15

const backgroudLayer1 = new Image()
backgroudLayer1.src = './layer-1.png'
const backgroudLayer2 = new Image()
backgroudLayer2.src = './layer-2.png'
const backgroudLayer3 = new Image()
backgroudLayer3.src = './layer-3.png'
const backgroudLayer4 = new Image()
backgroudLayer4.src = './layer-4.png'
const backgroudLayer5 = new Image()
backgroudLayer5.src = './layer-5.png'

let x = 0

function animate(){
    ctx.clearRect(0, 0, )
    ctx.drawImage(backgroudLayer4, x, 0)
    if(x < -2400) x = 2400
    else x -= gameSpeed
    requestAnimationFrame(animate)
}

animate()