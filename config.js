import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const mqtt = {
    protocol: process.env.PROTOCOL || "mqtt", // "mqtts"
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 1884, // 8883
    username: process.env.MQTT_USERNAME || "user",
    password: process.env.MQTT_PASSWORD || "password",
    clientId: process.env.CLIENTID || "client",
    clean: process.env.CLEAN || false,
    keepalive: process.env.KEEPALIVE || 300,
    reconnectPeriod: process.env.RECONNECTPERIOD || 5 * 1000,
    // ca: fs.readFileSync("path"),
    // rejectUnauthorized: false,
};

export { mqtt };
