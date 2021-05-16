class Plinko {
    constructor (x,y) {

        var option = {
            restitution : 1,
            friction : 0,
            isStatic : true ,
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y.this.radius,option)
        World.add(world,this.body)
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.position;

            push ();
            transalate(pos.x,pos.y);
            rotate(angle);
            imagMode(CENTER);
            noStroke();
            fill ("white");
            ellipeMode(RADIUS);
            ellipe(0,0,this.radius,this.radius);
            pop ();

        }

}