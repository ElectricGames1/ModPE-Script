
//Mod Made By Electric Games ©
//Problems With Copyright? My Twitter@EletricGames123

version = {
	name:"1.0.1",
};

var sdcard = android.os.Environment.getExternalStorageDirectory();var File = java.io.File;var FileReader = java.io.FileReader;var BufferedReader = java.io.BufferedReader;var FOS = java.io.FileOutputStream;var String = java.lang.String;var StringBuilder = java.lang.StringBuilder;var file = {select:function(dir, fileName){return (new File(dir, fileName));},exists:function(selectedFile){return selectedFile.exists();},create:function(selectedFile){selectedFile.createNewFile();return selectedFile;},read:function(selectedFile){var readed = (new BufferedReader(new FileReader(selectedFile)));var data = new StringBuilder();var string;while((string = readed.readLine()) != null){data.append(string);data.append('\n');}return data.toString();},readLine:function(selectedFile, line){var readT = new file.read(selectedFile);var lineArray = readT.split('\n');return lineArray[line - 1];},readKey:function(selectedFile, key, keySeparator){var isText = 0;var textR = new file.read(selectedFile);var splitTextR = textR.split('\n');for(var i = 0; i < splitTextR.length; i++){var textRF = splitTextR[i].split(keySeparator);if(textRF[0] == key){return textRF[1];isText = 1;break;}if(!isText){return '[Unknown]';}}},write:function(selectedFile, text){file.rewrite(selectedFile, (new file.read(selectedFile)) + text);},rewrite:function(selectedFile, text){var writeFOS = new FOS(selectedFile);writeFOS.write(new String(text).getBytes());},writeKey:function(selectedFile, key, keyText, keySeparator){var isText = 0;var textR = new file.read(selectedFile);var splitTextR = textR.split(' ');for(var i = 0; i < splitTextR.length; i++){var textRF = splitTextR[i].split(keySeparator);if(textRF[0] == key){var splitWithKey = textR.split(key + keySeparator + new file.readKey(selectedFile, key));file.rewrite(selectedFile, splitWithKey[0] + key + keySeparator + keyText + splitWithKey[1]);isText = 1;break;}}if(!isText){file.write(selectedFile, key + keySeparator + keyText);}}};

var myfile = new file.select(sdcard,"setTile Generator.txt");
file.create(myfile);

var xx; 
var yy; 
var zz;

ModPE.setItem(500,"book_enchanted",0,"setTile Info");
Player.addItemCreativeInv(500);

ModPE.setItem(501,"blaze_rod",0,"setTile Ativar!");
Player.addItemCreativeInv(501);

function newLevel()
{
	clientMessage(ChatColor.GOLD + "setTile Generator By Electric v" + version.name + " ©" + "\n" + ChatColor.YELLOW + "Comando Exemplo /setTile 0 +1 0 17" + "\n" + ChatColor.DARK_GREEN + "setTile x y z id, Ativar Mod Com Um Novo Item" + "\n" + ChatColor.AQUA + "@EletricGames123");
}

function procCmd(cmd) {
	cmd = cmd.split(" ");
	if (cmd[0] != "setTile" && cmd[0] != "hold") return;
	
	var slot_1 = 0
	var slot_2 = 0;
	var slot_3 = 0;
	var id = 0;
	
	if (cmd.length >= 2) {
		slot_1 = parseInt(cmd[1]);
	}
	if (cmd.length >= 3) {
		slot_2 = parseInt(cmd[2]);
	}
	if (cmd.length >= 4) {
		slot_3 = parseInt(cmd[3]);
	}
	if (cmd.length >= 5) {
		id = parseInt(cmd[4]);
	}
	
	if (cmd[0] == "setTile") {
		setTile(xx + slot_1, yy + slot_2, zz + slot_3,  id);
		clientMessage(ChatColor.YELLOW + "Salvo na Memória Interna, Adicionado bloco posição:\nsetTile " + ChatColor.GOLD + slot_1 + ", " + slot_2 + ", " + slot_3  + ", " + id);
		file.write(myfile,"setTile " + "x" + slot_1 + ", " + "y" + slot_2 + ", " + "z" + slot_3 + ", " + id);
	}
}

function useItem(x,y,z,i,b,s)
{
	
	if(i==500)
	{
		clientMessage(ChatColor.DARK_PURPLE + "x+ = esquerda");
		clientMessage(ChatColor.DARK_PURPLE + "x-  = direita");
		clientMessage(ChatColor.DARK_PURPLE + "z+ = frente");
		clientMessage(ChatColor.DARK_PURPLE + "z-  = trás");
		clientMessage(ChatColor.DARK_PURPLE + "y+ = cima");
		clientMessage(ChatColor.DARK_PURPLE + "y-  = baixo");
	}
	if(i==501)
	{
		
		xx = x;
	    yy = y;
	    zz = z;
	
	    clientMessage(ChatColor.YELLOW + "Local selecionado :"+ ChatColor.GOLD + " X " + xx + ", Y"+ yy + ", Z"+ zz);
        clientMessage(ChatColor.DARK_GREEN + "Posição ativada, já pode começar a editar!");
        clientMessage(ChatColor.DARK_GREEN + "Não clique mais vezes com este item");
        clientMessage(ChatColor.DARK_GREEN + "Ele pode mudar a posição, ocorrendo erro.");
	    }
	}
