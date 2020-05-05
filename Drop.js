class Drop{
    constructor(x,y){
        this.xPosition=x;
        this.yPosition=y;
        this.radiusX=random(3,20);
        this.radiusY=random(10,20);
    }

    display(){
        fill(random(0,255),random(0,255),random(180,255))
        ellipse(this.xPosition,this.yPosition,this.radiusX,this.radiusY);
    }

    fall(){
        this.yPosition=this.yPosition+random(10,30)
        if(this.yPosition>=height){
            this.yPosition=0;
        }
    
    }
    
}