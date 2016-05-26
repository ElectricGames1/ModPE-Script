
//Mod Made By Electric Games ©
//Problems With Copyright? My Twitter@EletricGames123

version = {
	name:"1.0.0",
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
	
