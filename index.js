const electron = require("electron");

const {app, BrowserWindow, MEnu, ipcMain} = electron;

let todayWindow;
let createWindow;
let listWindow;

app.on("ready", ()=> {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        title : "Ini Aplikasi Apaan?"
    });

    todayWindow.loadURL(`file://${__dirname}/index.html`);
    todayWindow.on("closed", ()=> {

        app.quit();
        todayWindow = null;
    });
});