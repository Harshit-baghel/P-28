class Launcher{
constructor(body,anchor){
    var options={
        bodyA:body,
pointB:anchor,
length:1,
stiffness:0.004
    }
    this.pointB=anchor;
    this.bodyA=body;
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
}
display(){
    if(this.sling.bodyA){
   var pointA=this.sling.bodyA.position;
   var pointB=this.pointB;
   line(pointA.x,pointA.y,pointB.x,pointB.y)
}}
fly(){
    this.sling.bodyA=null
}
attach(body){
this.sling.bodyA=body
}
}