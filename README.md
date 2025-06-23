# IoT MCP Server

An MCP (Model Context Protocol) server for IoT device communication with UDP messaging capabilities.

## Project Structure

```
iot-mcp-server/
├── server/                 # MCP Server implementation
│   ├── src/
│   │   ├── index.ts       # Main MCP server
│   │   └── service.ts     # Device communication service
│   ├── dist/              # Compiled JavaScript
│   └── package.json
└── node-udp-simulator/    # UDP server simulator
    ├── udpServer.ts       # UDP echo server
    └── package.json
```

## Features

- **MCP Server**: Implements Model Context Protocol for AI assistant integration
- **Device Communication**: Sends device information via UDP messaging
- **UDP Simulator**: Echo server for testing device communication
- **TypeScript**: Full TypeScript implementation with type safety

## Components

### MCP Server (`/server`)

The main MCP server that provides tools for IoT device interaction:

- **Tool**: `send-device-info` - Sends device information to IoT server
- **Transport**: STDIO transport for MCP communication
- **Device Data**: Sends JSON payload with deviceId, deviceName, and deviceType

### UDP Simulator (`/node-udp-simulator`)

A UDP echo server for testing device communication:

- **Port**: 41234
- **Protocol**: UDP IPv4
- **Function**: Echoes received messages back to sender

## Setup

### Prerequisites

- Node.js
- pnpm (for server)
- ts-node

### Installation

1. **Server Setup**:

```bash
cd server
pnpm install
```

2. **UDP Simulator Setup**:

```bash
cd node-udp-simulator
npm install
```

## Usage

### Start UDP Simulator

```bash
cd node-udp-simulator
npm start
```

### Run MCP Server (Development)

```bash
cd server
pnpm dev
```

### Build & Run MCP Server (Production)

```bash
cd server
pnpm build
pnpm start
```

## Device Communication

The MCP server sends device information as JSON:

```json
{
  "deviceId": "1234567890",
  "deviceName": "Device 1",
  "deviceType": "Device Type 1"
}
```

## MCP Integration

This server can be integrated with MCP-compatible AI assistants. The server provides:

- **Server Name**: IoT-Server
- **Version**: 1.0.0
- **Available Tools**: send-device-info

## Cursor Integration

### MCP Configuration

Add to your Cursor settings (`.cursor/mcp.json`):

**Production:**

```json
{
  "mcp.servers": {
    "iot-server": {
      "command": "node",
      "args": ["dist/index.js"],
      "cwd": "/path/to/your/iot-mcp-server/server"
    }
  }
}
```

**Development:**

```json
{
  "mcp.servers": {
    "iot-server": {
      "command": "pnpm",
      "args": ["dev"],
      "cwd": "/path/to/your/iot-mcp-server/server"
    }
  }
}
```

### Usage in Cursor

Once configured, use in Cursor chat:

```
@iot-server send device info
```

Or simply:

```
can you send device info
```

**Setup checklist:**

1. Build the server: `cd server && pnpm build`
2. Start UDP simulator: `cd node-udp-simulator && npm start`
3. Update `cwd` path to your project location
4. Restart Cursor after configuration

## Development

- **TypeScript Configuration**: Both projects use TypeScript with proper tsconfig
- **Hot Reload**: Use `pnpm dev` for development with ts-node
- **Build Process**: TypeScript compilation to `dist/` directory
