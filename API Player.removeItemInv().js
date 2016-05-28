
//API Player.removeItemInv(); By Electric Games ©
//Este trabalho está licenciado sob uma Licença Creative Commons Atribuição 4.0 Internacional. Para ver uma cópia desta licença, visite http://creativecommons.org/licenses/by/4.0/.

ModPE.setItem(500,"blaze_rod",0,"Item test",64);
Player.addItemCreativeInv(500);

useItem=function (x, y, z, i, b, s, iD, bD)
{
	if(i==500)
	{
		Player.removeItemInv(500);
	}
};



var _0x8bab=["\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D\x49\x6E\x76","\x67\x65\x74\x47\x61\x6D\x65\x4D\x6F\x64\x65","\x67\x65\x74\x43\x61\x72\x72\x69\x65\x64\x49\x74\x65\x6D","\x61\x64\x64\x49\x74\x65\x6D\x49\x6E\x76\x65\x6E\x74\x6F\x72\x79"];Player[_0x8bab[0]]=function(_0x3b0fx1){if(Level[_0x8bab[1]]()==0){if(Player[_0x8bab[2]]()==_0x3b0fx1){Player[_0x8bab[3]](_0x3b0fx1,-1)}}}


