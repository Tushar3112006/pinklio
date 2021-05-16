class Particle {
    constructor (x,y,radius){
        var option ={
            restitution : 0.4
        }
        this.radius = radius;

        this.body = Bodies.circle(x,y,this.radius,option);
        this.color = this.color(random(0,255),random(0,255,),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        transalate(pos.x,pos.y);
        rotate (angle);
        //imageMode(CENTER);
        noStrok();
        fiil(this.color)
        elliipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}