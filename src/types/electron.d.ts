import { IpcMain, IpcRenderer } from "electron";

declare global {
  namespace Electron {
    interface IpcRendererEvents {
      send(channel: "minimize-app" | "maximize-app" | "close-app"): void;
    }

    interface IpcMainEvents {
      on(channel: "minimize-app" | "maximize-app" | "close-app"): void;
    }
  }
}

export {};
