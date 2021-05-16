class Ground {
    constructor (x, y, width, height){
        var option  ={

            isStatic : true,
            'restitution' : 0,
            'density' : 1,
        }

            this.body = Bodies.rectangle(x,y,width,height,option);
            this.width = width;
            this.height = height;

            world.add(world,this.body);
    }

        display(){
            rectMode(CENTER);
            fill(255);
            var pos = this.body.position;
            rect(pos.x,pos.y,this.width,this.height);
        }
}