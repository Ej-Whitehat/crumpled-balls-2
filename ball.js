class Ball{
    constructor(x,y,r){
       var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
       } 
       this.x=x;
       this.y=y;
       this.r=r;
       this.image=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world, this.body);
    }
    display(){
        var PaperPos=this.body.position;
        push();
        translate(PaperPos.x,PaperPos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
    }
}