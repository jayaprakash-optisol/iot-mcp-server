import dgram from "dgram";
const client = dgram.createSocket("udp4");

const IOT_SERVER_IP = "0.0.0.0";
const IOT_SERVER_PORT = 41234;

export async function sendDeviceInfo() {
  client.send(
    JSON.stringify({
      deviceId: "1234567890",
      deviceName: "Device 1",
      deviceType: "Device Type 1",
    }),
    IOT_SERVER_PORT,
    IOT_SERVER_IP,
    (err) => {
      if (err) {
        console.error("Error sending device info:", err);
      }
    }
  );
}
