class DustBin{
    constructor(){
        var options={
            isStatic:false
        }
        this.bodyB=Matter.Bodies.rectangle(1000,550,200,20);
        World.add(world,this.bodyB);
        this.bodyL=Matter.Bodies.rectangle(900,500,200,20);
        World.add(world,this.bodyL);
        this.bodyR=Matter.Bodies.rectangle(1100,500,200,20);
        World.add(world,this.bodyR);
        this.image=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png");
    }
    display(){
        var binB=this.bodyB.position;
        var binL=this.bodyL.position;
        var binR=this.bodyR.position;
        push();
        translate(binB.x,binB.y);
        translate(binL.x,binL.y);
        translate(binR.x,binR.y);
        rectMode(CENTER);
        strokeWeight(10);
        fill("red");
        rect(binB.x,binB.y,200,20);
        rectMode(CENTER);
        strokeWeight(10);
        fill("red");
        rect(binL.x,binL.y,200,20);
        rectMode(CENTER);
        strokeWeight(10);
        fill("red");
        rect(binR.x,binR.y,200,20);
        imageMode(CENTER);
        image(this.image, 0, 0, 0);
        pop();
    }
}