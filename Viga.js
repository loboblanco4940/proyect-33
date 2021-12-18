class Viga {
  constructor(x,y,width, height)
	{
		var options = { 
			density: 1, 
			frictionAir: 0.1
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
		
		this.image=loadImage("viga.png");
		this.body=Bodies.rectangle(x, y, width,height ,options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var vigaPos=this.body.position;		
			push()
			translate(vigaPos.x, vigaPos.y+2);
			rectMode(CENTER)
			fill("red")
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
