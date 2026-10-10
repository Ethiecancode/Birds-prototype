const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var miniEngine, miniWorld
var furybird_bg
var floor1

function preload()
{
    furybird_bg = loadImage("Assets/BG.png")
}


function setup()
{
    createCanvas (1912, 900)
    miniEngine = Engine.create()
    miniWorld = miniEngine.miniWorld

    floor1 = new Floor(500, 50, 1912, 50)
}


function draw()
{
    background (furybird_bg)
    Engine.update(miniEngine)

    floor1.display()
}