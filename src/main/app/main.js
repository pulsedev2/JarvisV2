const { app, BrowserWindow, globalShortcut} = require('electron')

//Function to create and show the Window
function createWindow(){

    //Initialize window
    let win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        transparent: true
    })

    //Set menu to null, to hide the bar at the top of the window
    win.setMenu(null)

    //Load the web document
    win.loadFile("web/main.html").then()

    //Setup reload shortcut
    globalShortcut.register('f5', function() {
        win.reload()
    })
}

//Wait for the app to be ready to create and show the window.
app.whenReady().then(createWindow)

//Close app when all window are closed
app.on('window-all-closed', () => {
    app.quit()
})