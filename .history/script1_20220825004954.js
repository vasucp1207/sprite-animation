const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = 800
const height = canvas.height = 700

let gameSpeed = 5

const backgroudLayer1 = new Image()
backgroudLayer1.src = './layer'