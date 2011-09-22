System.Gadget.onSettingsClosing = settingsClosing;
        
        
        function loadSettings()
        {
	//Lang
        
		
		
		var_winamp_exe = System.Gadget.Settings.read("settings_winamp_exe");
		if(var_winamp_exe=="") //"C:\Program files/Winamp/winamp.exe" as default!
            {
            	var_winamp_exe="C:\\Program files\\Winamp\\winamp.exe";
            }
		 winamp_exe_overlay.value = var_winamp_exe ;
       
        //Set how many skins there are!
        maxskins=2;
        
            
            

             
            currentSkinNo = System.Gadget.Settings.read("settings_currentSkinNo");
            
            if(currentSkinNo=="") //1 as default!
            {
            	currentSkinNo=1;
            }
            
            updateSkin()
            
            
            
        }
    	
        function settingsClosing(event)
        {
            if (event.closeAction == event.Action.commit)
            {
            
		
		
		  
		  
		// Save Settings
				var_winamp_exe = winamp_exe_overlay.value;
				if(var_winamp_exe=="") //"C:\Program files/Winamp/winamp.exe" as default!
		            {
		            	var_winamp_exe="C:\\Program files\\Winamp\\winamp.exe";
		            }
					
                System.Gadget.Settings.write("settings_currentSkinNo", currentSkinNo);
				System.Gadget.Settings.write("settings_winamp_exe", var_winamp_exe);
                //System.Gadget.Settings.write("settings_cn", settings_cn);
                //HTML code : <input id="checkcn" type="checkbox" name="checkcn" value="CN" /><label id="lbl" class="checkcn" for="checkcn">Nach Chuck Norris (n.CN)</label>
            }
        }
        
        
        
        
        
        function updateSkin()
{
	//imgSkin.src = "imgs/skins/" + currentSkinNo + "/bg_main.png";
	imgSkin.src = "imgs/skins/" + currentSkinNo + "/drag.png";
	divCount.innerText= currentSkinNo +" / " +maxskins;
	//divName.innerText = aSkins[currentSkinNo];
}

// Change a IMG source
function ChangeIMG_settings(imagesource, imagename)
{
	document.getElementById(imagesource).src= "imgs/buttons/" + imagename;
}


// Display the next Skin
function nextSkin()
{
	if(currentSkinNo < maxskins)
	{
		currentSkinNo = currentSkinNo+1;
	}
	
	updateSkin();
}

		
// Display the previous Skin
function previousSkin()
{
	if(currentSkinNo > 1)
	{
		currentSkinNo = currentSkinNo-1;
	}
	
	updateSkin();
}


function change_file()
{
winamp_exe_overlay.value = winamp_exe.value

}