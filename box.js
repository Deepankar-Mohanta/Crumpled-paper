class Dustbin {
    constructor(x, y, width, height, angle) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
     Matter.Body.setAngle(this.body, this.angle);
     
    }
    display(){
      var dustbinPos=this.body.position;
     
			push()
			translate(dustbinPos.x, dustbinPos.y);
      angleMode(RADIANS);
      rectMode(CENTER);
			fill(255)
			rotate(this.angle)
			rect(this.x,this.y,this.width, this.height);
			pop()

    }
  }
  