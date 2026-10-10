class Floor {
    constructor(x, y, w, h)
    {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle (this.x, this.y, this.w, this.h, options)
        World.add(miniWorld, this.body)
    }

    display()
    {
        var loc = this.body.position
        rectMode(CENTER)
        fill("#20062B")
        rect(loc.x, loc.y, this.w, this.h)
    }
}