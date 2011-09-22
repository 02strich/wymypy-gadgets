function GetItemFromDrop()
{
		var_winamp_exe = System.Gadget.Settings.read("settings_winamp_exe");
		if(var_winamp_exe=="") //"C:\Program files/Winamp/winamp.exe" as default!
            {
            	var_winamp_exe="C:\\Program files\\Winamp\\winamp.exe";
            }
			
			
    var intIndex = 0;
    var oItem;
    while(oItem = System.Shell.itemFromFileDrop(event.dataTransfer, intIndex))
    {
		System.Shell.execute(var_winamp_exe, '/ADD "' + oItem.path + '"');	
    		
        intIndex++;
    }
}

function runwinamp()
{
		var_winamp_exe = System.Gadget.Settings.read("settings_winamp_exe");
		if(var_winamp_exe=="") //"C:\Program files/Winamp/winamp.exe" as default!
            {
            	var_winamp_exe="C:\\Program files\\Winamp\\winamp.exe";
            }
		
		System.Shell.execute(var_winamp_exe, "");	

}

function cancelEvent()
{
	event.returnValue = false;
}
	
        System.Gadget.settingsUI = "settings.html";
        System.Gadget.onSettingsClosed = settingsClosed;
		


	function tellwinamp(exec)
    {
	System.Shell.execute(System.Gadget.path + "\\wactrl.exe", " -" +exec);
	}
	
        function setContentText()
        {
   
        
	
	currentSkinNo = System.Gadget.Settings.read("settings_currentSkinNo");
            
            if(currentSkinNo=="") //1 as default!
            {
            	currentSkinNo=1;
            }
            
		MainBg.src = "imgs/skins/" + currentSkinNo + "/bg_main.png";
		button_prev.src = "imgs/skins/" + currentSkinNo + "/prev.png";
		button_play.src = "imgs/skins/" + currentSkinNo + "/play.png";
		button_pause.src = "imgs/skins/" + currentSkinNo + "/pause.png";
		button_stop.src = "imgs/skins/" + currentSkinNo + "/stop.png";
		button_next.src = "imgs/skins/" + currentSkinNo + "/next.png";
		walogo_text.src = "imgs/skins/" + currentSkinNo + "/walogo_text.png";
		walogo.src = "imgs/skins/" + currentSkinNo + "/walogo.png";
	         


	            
	            
			
			 
        }
		
		
	function settingsClosed(event)
        {
            if (event.closeAction == event.Action.commit)
                {

            
                    setContentText();
                }
        }



	// Change a IMG source
	function ChangeIMG_settings(imagesource, imagename)
	{
		document.getElementById(imagesource).src= "imgs/buttons/" + imagename;
	}
	// Change a IMG source
	function ChangeIMG(imagesource, imagename)
	{
		document.getElementById(imagesource).src= "imgs/skins/" + currentSkinNo + "/" + imagename;
	}