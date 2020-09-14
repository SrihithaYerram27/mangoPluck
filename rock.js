class Rock{

    constructor(x,y,r){

        options = {
            isStatic :false,
            restitution : 0,
            friction :1,
            density :1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.loadImage("stone.png");
    }


    display(){
        pop();
        translate(this.position.x,this.position.y);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r,this.r);



    }

}