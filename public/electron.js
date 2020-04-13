const {
  app,
  BrowserWindow,
  session,
  globalShortcut,
  Menu,
} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const io = require('socket.io-client');
require('./server');

function createAndSetMenu() {
  const templateMenu = [
    {
      label: 'AppName',
      submenu: [
        { role: 'quit' },
      ],
    },
    {
      label: 'Menu 1',
      submenu: [
        {
          label: 'SubMenu1',
          click: () => console.log('SubMenu1 clicked.'),
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(menu);
}

function listenCookieChanges() {
  session.defaultSession.cookies.addListener('changed', async (_, cookie, cause) => {
    if (cookie.domain === 'domain.com') {
      const { name, value } = cookie;

      // Filter specific cookies
      if (name === 'ID' || name === 'SESSION') {
        // do something
      }
    }
  });
}

function disableRefreshCommands() {
  globalShortcut.register('CmdOrCtrl+R', () => {});
  globalShortcut.register('CmdOrCtrl+Shift+R', () => {});
}

function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the main html of the app.
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`,
  );

  createAndSetMenu();
  listenCookieChanges();
  disableRefreshCommands();

  win.maximize();

  // Open the DevTools.
  if (isDev) win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
