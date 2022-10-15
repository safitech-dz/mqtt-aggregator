const config = require("./config");

const fs = require("fs");
const mqtt = require("mqtt");

const mqttUtils = require("./mqtt/utils");

const subTopics = JSON.parse(fs.readFileSync("./sub_topics.json"));

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    console.log(Date() + ": CONNECTED!");

    client.subscribe(subTopics, (err, grant) => {
        // if (err) throw err;
        if (err) console.warn(Date() + ": SUBSCRIBE ERROR:", err);
        console.log(Date() + ": SUBSCRIBED TO :\n", grant);
    });
});

client.on("message", function (topic, message) {
    // message is Buffer
    console.log(message.toString());
    // ...
    client.end();
});
