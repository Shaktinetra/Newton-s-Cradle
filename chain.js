class Chain {
    constructor(bodyA, pointB) {
       // this.offsetX = offsetX;
        //this.offsetY = offsetY;
        this.pointB = pointB;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //pointB: {x: 100 + this.offsetX, y: this.offsetY}
        }
   
        this.body = Constraint.create(options);
        World.add(world, this.body);
        
    }
    display() {
        var posA = this.body.bodyA.position;
        var posB = this.pointB;

        strokeWeight(3);
        stroke(255);

        line(posA.x, posA.y, posB.x, posB.y);
    }
}