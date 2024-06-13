// importando modulo do electron
const { app, BrowserWindow } = require('electron')

const path = require('path')

  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
  
// função para criar janela do electron
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: "imagens/image.png"
    })
  
    win.loadFile('src/index.html')
  }


// chamando a função criar janela
app.whenReady().then(() => {
    createWindow()
  })