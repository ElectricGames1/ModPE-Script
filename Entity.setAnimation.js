var animatedTick=[];
var progress_ent=[];

Entity.setAnimation=function()
{
	animatedTick.forEach(function(entity,i)
	{
		Entity.setMobSkin(entity,"mob/example_"+progress_ent[i]+".png");
		progress_ent[i]++;
		if(progress_ent[i]>=5)//para 5, animação
		{
			progress_ent[i]=0;//início do 0
		}
	});
};

useItem=function(x,y,z,i,b,s)
{
	if(i==280)
	{
	    var entity = Level.spawnMob(x , y+1, z, EntityType.CREEPER);
		Entity.setMobSkin(entity,"mob/example_0.png");
        animatedTick.push(entity);
        progress_ent.push(0);
     }
};

modTick=function()
{
	Entity.setAnimation();
};

leaveGame=function()
{
	progress_ent=[];
	animatedTick=[];
};