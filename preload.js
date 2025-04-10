// Preload script for Electron
// This script runs before the renderer process starts
// It exposes Node.js modules to the renderer process

// Expose selected Node.js modules to the renderer process
window.nodeRequire = require;

// Expose specific Node.js APIs that the app needs
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // File system operations
  fs: require('fs'),
  path: require('path'),
  
  // IPC for communication with main process
  ipcRenderer: {
    send: (channel, data) => {
      ipcRenderer.send(channel, data);
    },
    on: (channel, func) => {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
}); 