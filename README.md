# Wails SNMP tool

## About

This is application made with [Wails framework](https://github.com/wailsapp/wails).

## Features

Generally point is for this to work as a simple tool to quickly use SNMP protocol to a list of switches/devices that have SNMP agent.

### Implemented

- Started building frontend
- Backend is partially done, but functionality to frontend is not implemented

### Planned

- User is able to create a list of devices
- User is able to save a list of devices to a JSON file
- User is able to load a list of devices from a JSON file
- User is able to choose one OID from a dropdown menu
- User is alternatively able to give a list of OIDs
- Finally program outputs information on frontend

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.
