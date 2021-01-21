class Crane {
constructor(bodyA,pointB){

var options={
    bodyA: bodyA,
    pointB:pointB,
    stiffness:1.0,
    length:50
}

this.pointB=pointB;
this.crane=Constraint.create(options);
World.add(world,this.crane);
}
display(){
var pointA=this.crane.bodyA.positions;
var pointB=this.pointB;
stroke("black");
strokeWeight(4);
line(pointB.x,pontB.y,bodyA.x,bodyA.y);

}

} 