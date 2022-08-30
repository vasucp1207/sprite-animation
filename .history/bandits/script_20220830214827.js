const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = 600
const height = canvas.height = 400

const attact1 = new Image()
attact1.src = './Bandits/Preview/Preview_HeavyBandit.png'

ctx.drawImage(attact1, 0, 0, width, height)