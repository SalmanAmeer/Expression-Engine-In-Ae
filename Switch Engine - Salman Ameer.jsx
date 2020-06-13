(function(thisObj) {

	scriptBuildUI(thisObj)

	function scriptBuildUI(thisObj) {
		var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Switch Engine - Salman Ameer", undefined, {resizeable: true});
		win.spacing = 5;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Paste Design Here
win.orientation = "column";
win.alignChildren = ["center","center"];

var MainGroup1 = win.add("group",undefined);
MainGroup1.orientation = "row";

var btnLegacyScript = MainGroup1.add("button",undefined,"Legacy");
btnLegacyScript.helpTip = "Legacy ExtendScript Engine\nOld";
btnLegacyScript.size = [50,25];

var btnJavaScript = MainGroup1.add("button",undefined,"Js-1.0");
btnJavaScript.helpTip = "JavaScript - 1.0 Engine\nNew";
btnJavaScript.size = [50,25];

var MainGroup2 = win.add("group",undefined);
MainGroup2.orientation = "row";

var btnChekEngiine = MainGroup2.add("button",undefined,"!");
btnChekEngiine.helpTip = "Show Current Engine Mode";
btnChekEngiine.size = [50,25];

var btnabout = MainGroup2.add("button",undefined,"?");
btnabout.helpTip = "About";
btnabout.size = [25,25];


//Functions
btnLegacyScript.onClick = function (){
    var Legacy = app.project.expressionEngine = "extendscript";
    }
btnJavaScript.onClick = function (){
    var JavaScript = app.project.expressionEngine = "javascript-1.0";
    }
btnChekEngiine.onClick = function (){
    if(app.project.expressionEngine == "extendscript"){
        alert("Legacy ExtendScript Engine\nOld", "Switch Engine");
        }else{
        alert("JavaScript - 1.0 Engine\nNew", "Switch Engine");
            }
    }
btnabout.onClick = function (){
    var aboutwin = new Window("dialog"); 
    aboutwin.text = "About"; 
    aboutwin.preferredSize.width = 150; 
    aboutwin.preferredSize.height = 225; 
    aboutwin.orientation = "column"; 
    aboutwin.alignChildren = ["fill","center"]; 
    aboutwin.spacing = 10; 
    aboutwin.margins = 16; 

// ABOUTTABS
// =========
var aboutTabs = aboutwin.add("tabbedpanel", undefined, undefined, {name: "aboutTabs"}); 
    aboutTabs.alignChildren = "fill"; 
    aboutTabs.preferredSize.width = 374; 
    aboutTabs.margins = 0; 
    aboutTabs.alignment = ["center","center"]; 

// TAB1
// ====
var tab1 = aboutTabs.add("tab", undefined, undefined, {name: "tab1"}); 
    tab1.text = "Usage"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["left","top"]; 
    tab1.spacing = 10; 
    tab1.margins = 10; 

var usageinfo = tab1.add('edittext {size: [350,250], properties: {name: "usageinfo", readonly: true, multiline: true, scrollable: true}}'); 
    usageinfo.text = "⚫Legacy Button: \r It will Select the Expression Engine to 'Legacy ExtendScript' [Old].\r\r⚫Js 1.0 Button: \r It will Select the Expression Engine to 'JavaScript 1.0' [New].\r\r\r⚫Support button: \r Open's your Browser & open Selected Supported Links &\rSocial Media Accounts for Support.\r\r\rNote : Dockable / Embeded Script."; 

// TAB2
// ====
var tab2 = aboutTabs.add("tab", undefined, undefined, {name: "tab2"}); 
    tab2.text = "Description"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["left","top"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 

// ABOUTTABS
// =========
aboutTabs.selection = tab1; 

var descriptioninfo = tab2.add('edittext {properties: {name: "descriptioninfo", readonly: true, multiline: true, scrollable: true}}'); 
    descriptioninfo.text = "Switch Engine v1.0\rCopyright © 2020 Salman Ameer\r\r\rThis script has a functionality to Cycle Expression Engine \rBetween Legacy & JavaScript1.0 Engine.\r\rNote: Script will Functional on Adobe After Effects v16\r& Later version of After Effects\r\rCurrent Version: "+parseFloat(app.version)+"\r\rVersion History :\r--------------------------------------------------------\rv1.0\r*Initial Release\r\r*List Of Available Switching Engine Options:\r	● Legacy ExtendScript Engine\r	● JavaScript 1.0 Engine\r\r--------------------------------------------------------"; 
    
    descriptioninfo.preferredSize.width = 350; 
    descriptioninfo.preferredSize.height = 250; 

// ABOUTWIN
// ========
var aboutDivider1 = aboutwin.add("panel", undefined, undefined, {name: "aboutDivider1"}); 
    aboutDivider1.enabled = false; 
    aboutDivider1.alignment = "fill"; 

// BUTTONSGROUP
// ============
var ButtonsGroup = aboutwin.add("group", undefined, {name: "ButtonsGroup"}); 
    ButtonsGroup.orientation = "row"; 
    ButtonsGroup.alignChildren = ["center","center"]; 
    ButtonsGroup.spacing = 10; 
    ButtonsGroup.margins = 0; 
    ButtonsGroup.alignment = ["center","center"]; 

var aboutsupportBtn = ButtonsGroup.add("button", undefined, undefined, {name: "aboutsupportBtn"}); 
    aboutsupportBtn.helpTip = "Support Links \nAuthor Contact"; 
    aboutsupportBtn.text = "Support"; 
    aboutsupportBtn.alignment = ["center","center"]; 

var closeBtn = ButtonsGroup.add("button", undefined, undefined, {name: "closeBtn"}); 
    closeBtn.text = "Close"; 
    closeBtn.alignment = ["center","center"]; 

////About Btn Function ////
//===============//
//CloseBtn
closeBtn.onClick = function(){
    aboutwin.close();
    };
//SupportBtn
aboutsupportBtn.onClick = function(){
    
    var userOSVer = osCheck();

if(userOSVer == "MAC"){
          var urlLaunchCode = "Open";//Mac based
          system.callSystem(urlLaunchCode + " " + "http://gestyy.com/w9bR9e"); //Patreon
          system.callSystem(urlLaunchCode + " " + "http://gestyy.com/w9bROL"); //Instagram
          system.callSystem(urlLaunchCode + " " + "http://gestyy.com/w9bRIY"); //Facebook
          system.callSystem(urlLaunchCode + " " + "http://gestyy.com/w9bRAT"); //Twitter

}else{
         var urlLaunchCode = "Start";//PC based
          system.callSystem("cmd.exe /c " + urlLaunchCode + " " + "http://gestyy.com/w9bR9e");
          system.callSystem("cmd.exe /c " + urlLaunchCode + " " + "http://gestyy.com/w9bROL");
          system.callSystem("cmd.exe /c " + urlLaunchCode + " " + "http://gestyy.com/w9bRIY");
          system.callSystem("cmd.exe /c " + urlLaunchCode + " " + "http://gestyy.com/w9bRAT");
}
    }

// Check OS of Computer
function osCheck() {
          var op = $.os;
          var match = op.indexOf("Windows");
          if(match != (-1)){
                    var userOS = "PC";// User is on PC
          }else{
                    var userOS = "MAC";// User is on MAC
          }
          return userOS;
}
   

aboutwin.show();

    }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//End
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Everything Ends Here

		win.onResizing = win.onResize = function() {
			this.layout.resize();
		};

		win instanceof Window
			? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());
	}

	
})(this);