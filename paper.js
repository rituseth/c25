class Paper {
    constructor(x,y,r,){
        var options = {
            isStatic :false,
            friction:1,
            density:0.2,
            angularVelocity: 0.2
        }
  
         this.x=x;
         this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y, (this.r-20)/2, options) 
        this.image=loadImage("paper.png");
        World.add(world,this.body);
   
    }
    display(){
        
        var pos=this.body.position;
        push();
       
        fill (255,255,0)
    
       imageMode(CENTER)
       image(this.image,pos.x,pos.y,this.r,this.r);
       pop();
    }
}