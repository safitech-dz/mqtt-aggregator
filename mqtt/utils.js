import * as fs from "fs";

const formatConnectionOpts = (obj) => {
    return {
        protocol: obj.protocol,
        host: obj.host,
        port: obj.port,
        username: obj.username, // ! computer username
        password: obj.password,
        clientId: obj.clientId,
        clean: obj.clean.toLowerCase() === "true",
        keepalive: parseInt(obj.keepalive),
        reconnectPeriod: parseInt(obj.reconnectPeriod),
    };
};

/**
 * @returns {array}
 */
const parseTopicsDirectory = () => {
    const topicsDirectory = JSON.parse(
        fs.readFileSync("./topics_directory.json")
    );

    let topics = topicsDirectory.map((entry) => {
        return `"${entry.topic}": {"qos": ${entry.qos}}`
            .replace("%u", "+")
            .replace("%d", "+");
    });

    return JSON.parse("{" + topics.join(",") + "}");
};

export { formatConnectionOpts, parseTopicsDirectory };
