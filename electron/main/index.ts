import { BrowserWindow, app } from "electron";
import { join } from "path";

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, "../preload/index.cjs"),
    },
  });

  const url = `http://${process.env["VITE_DEV_SERVER_HOST"]}:${process.env["VITE_DEV_SERVER_PORT"]}`;

  win.loadURL(url);
  win.webContents.openDevTools();
};

app.whenReady().then(createWindow);
