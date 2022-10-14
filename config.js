const fs = require("fs");
require("dotenv").config();

const config = {
    mqtt: {
        protocol: process.env.PROTOCOL || "mqtt", // "mqtts"
        host: process.env.HOST || "localhost",
        port: process.env.PORT || 1884, // 8883
        username: process.env.USERNAME || "user",
        password: process.env.PASSWORD || "password",
        clientId: process.env.CLIENTID || "client",
        clean: process.env.CLEAN || false,
        keepalive: process.env.KEEPALIVE || 300,
        reconnectPeriod: process.env.RECONNECTPERIOD || 5 * 1000,
        // ca: fs.readFileSync("path"),
        // rejectUnauthorized: false,
    },
};

module.exports = config;
