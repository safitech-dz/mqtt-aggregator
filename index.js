const config = require("./config");

const mqtt = require("mqtt");

const mqttUtils = require("./mqtt/utils");

// console.log(config.mqtt);

// const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));
const client = mqtt.connect("mqtt://test.mosquitto.org");

console.log(client.options);

client.on("connect", function () {
    client.subscribe("presence", function (err) {
        if (!err) {
            client.publish("presence", "Hello mqtt");
        }
    });
});

client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    client.end();
});
