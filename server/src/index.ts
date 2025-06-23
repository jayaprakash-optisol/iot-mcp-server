import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { sendDeviceInfo } from "./service";

// Create server instance
const server = new McpServer({
  name: "IoT-Server",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool("send-device-info", "Send device information", async () => {
  await sendDeviceInfo();
  return {
    content: [{ type: "text", text: "Device information sent" }],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("IoTServer is running");
}

main();
