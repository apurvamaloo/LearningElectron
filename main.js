//var app=require("app");
var electron=require("electron")
var app=electron.app;
//var BrowserWindow=require("browser-window");
var BrowserWindow=electron.BrowserWindow;
var mainWindow=null;

app.on('ready',function()
{
  mainWindow=new BrowserWindow({width:500,height:600});
  mainWindow.loadURL('file://'+__dirname+'/index.html');
    mainWindow.webContents.openDevTools();
})
