const config = require("./config");

const fs = require("fs");
const mqtt = require("mqtt");

const mqttUtils = require("./mqtt/utils");
const mqttLogger = require("./mqtt/logger");

const subTopics = JSON.parse(fs.readFileSync("./sub_topics.json"));

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    mqttLogger.connect();

    client.subscribe(subTopics, (err, grant) => {
        if (err) mqttLogger.subscriptionError(err);
        mqttLogger.subscribed(grant);
    });
});

client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    // ...
});

// client.on("packetsend", mqttLogger.packetsend);
// client.on("packetreceive", mqttLogger.packetreceive);
client.on("reconnect", mqttLogger.reconnect);
client.on("close", mqttLogger.close);
client.on("offline", mqttLogger.offline);
client.on("end", mqttLogger.end);
client.on("error", mqttLogger.error);
