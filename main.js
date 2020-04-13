const {app,BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");
const axios = require("axios");

let mainWindow = null;


axios.get('http://127.0.0.1:5000/bus/api/v1.0/branches/1')
.then(function(response){
    console.log(response.data.location,"***************")
})
.catch(function(err){
    console.log(err,">>>>>>>>>>>>>>>>")
})

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
          }
    });
    mainWindow.maximize();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.webContents.openDevTools();
    
})