import { ipcRenderer } from "electron";

function minimizeApp() {
  ipcRenderer.send("minimize-app");
}

function maximizeApp() {
  ipcRenderer.send("maximize-app");
}

function closeApp() {
  ipcRenderer.send("close-app");
}

export default { minimizeApp, maximizeApp, closeApp };
