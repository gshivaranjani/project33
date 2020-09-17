class Divisions {
    constructor(x, y, w, h,num) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.num = num;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
        text(this.num,pos.x+10,pos.y);
    }
};