import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const mqtt = {
    protocol: process.env.MQTT_PROTOCOL || "mqtt", // "mqtts"
    host: process.env.MQTT_HOST || "localhost",
    port: process.env.MQTT_PORT || 1883, // 8883
    username: process.env.MQTT_USERNAME || "user",
    password: process.env.MQTT_PASSWORD || "password",
    clientId: process.env.MQTT_CLIENTID || "client",
    clean: process.env.MQTT_CLEAN || false,
    keepalive: process.env.MQTT_KEEPALIVE || 300,
    reconnectPeriod: process.env.MQTT_RECONNECTPERIOD || 5 * 1000,
    // ca: fs.readFileSync("path"),
    // rejectUnauthorized: false,
};

export { mqtt };
