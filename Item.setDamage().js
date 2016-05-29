
//API Item.setDamage(); By Electric Games;
//a problem with copyright ? Twitter @EletricGames123

ModPE.setItem(500,"blaze_rod",0,"Item test",1/**one item in each slot does not occur error*/);
Player.addItemCreativeInv(500);

useItem=function(x, y, z, i, b, s)
{
	if(i==500)
	{
		Item.setDamage(500, 4);//5 times using 
	}
};

Item.setDamage=function(id, maxDamage)
{
	if(Level.getGameMode()==0)//It works only on survival!
	{
	Item.setMaxDamage(id, maxDamage);
	var slot=Player.getCarriedItemData();
	if(slot!==maxDamage){
		Entity.setCarriedItem(getPlayerEnt(),id,1,slot+1);
		}
		else if(slot==maxDamage)
		{
			Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",1,1);
			Entity.setCarriedItem(getPlayerEnt(),0,0,0,0);
		}
	}
};