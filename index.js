import * as config from "./config.js";

import * as fs from "fs";
import * as mqtt from "mqtt";
import axios from "./http/axios.js";

import * as mqttUtils from "./mqtt/utils.js";
import * as mqttLogger from "./mqtt/logger.js";

const topics = mqttUtils.parseTopicsDirectory();

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    mqttLogger.connect();

    client.subscribe(topics, (err, grant) => {
        if (err) mqttLogger.subscriptionError(err);
        mqttLogger.subscribed(grant);
    });
});

client.on("message", function (topic, message) {
    message = message.toString();

    mqttLogger.message(topic, message);

    axios
        .post("/iot-data", {
            topic,
            message,
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

// client.on("packetsend", mqttLogger.packetsend);
// client.on("packetreceive", mqttLogger.packetreceive);
client.on("reconnect", mqttLogger.reconnect);
client.on("close", mqttLogger.close);
client.on("offline", mqttLogger.offline);
client.on("end", mqttLogger.end);
client.on("error", mqttLogger.error);
