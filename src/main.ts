import {app, BrowserWindow, ipcMain, nativeImage} from 'electron';
import * as path from 'path';
import * as fs from 'fs';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 720,
        width: 1280,
        minHeight: 600,
        minWidth: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webviewTag: true,
        },
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, '../index.html'));

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

const countMap = new Map<string, number>();
ipcMain.on('count', (event, serviceName, count) => {
    countMap.set(serviceName, count);
    const totalCounts = Array.from(countMap.values()).reduce((acc, value) => acc + value, 0);
    if (totalCounts > 0) {
        const img = nativeImage.createFromPath(path.join(__dirname, '../read-icons/unread-icon.png'));
        mainWindow.setIcon(img);
    } else {
        const img = nativeImage.createFromPath(path.join(__dirname, '../read-icons/normal-icon.png'));
        mainWindow.setIcon(img);
    }
});
