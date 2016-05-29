//API Block.defineAnimation();
//By @Isaac300

//**********_Variables_**********//
animated = 0;
remove = 0;
data = 0;
nameBlock = Block.defineBlock;
//----------

var dx; var dy; var dz;//var for useItem and ModPE.idSystem

function useItem(x,y,z,i,b,s){
if(i==280){//Id to hit the ground
dx = x; dy = y; dz = z;
setTile(dx,dy+1,dz,200);//Loop Look
}}

Block.defineAnimation=function(id,name,texture,amount){//API Block.defineAnimation();
animated++;//Loop
nameBlock(id, name,[[texture, data]], 3, false, 0);
if(animated==5){//What the fuck is this ?
data++;//Loop
remove++;//Loop
animated = 0;//Hook Finished 
}
if(data==amount){
data = 0;//data || damage || offset
}};

function modTick()
{
ModPE.idSystem(200);//id for system
Block.defineAnimation(200, "normal", "wool", 16);
//Block.defineAnimation(id, "name", "texture", amount);
}

ModPE.idSystem=function(ID){
if(getTile(dx,dy+1,dz)==ID){//When activate function Add block
setTile(dx,dy+1,dz,0);//Remove Block
setTile(dx,dy+1,dz,ID);//Add Block
//And so it goes++
}};
