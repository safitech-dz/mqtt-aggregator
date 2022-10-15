// const CONNECTED = 0;
// const RECONNECTING = 1;
// const CLOSED_CONNECTION = 2;
// const OFFLINE = 3;
// const ERROR = 4;
// const ENDED = 5;
// const PACKET_SENT = 6;
// const PACKET_RECEIVED = 7;
// const SUBSCRIPTION_ERROR = 8;
// const SUBSCRIBED = 9;
// const MESSAGED = 10;

const connect = () => {
    console.log(Date() + ": CONNECTED!");
};

const reconnect = () => {
    console.log(Date() + ": RECONNECTING!");
};

const close = () => {
    console.log(Date() + ": CLOSED!");
};

const disconnect = () => {
    console.log(Date() + ": DISCONNECTED!");
};

const offline = () => {
    console.log(Date() + ": OFFLINE!");
};

const error = (err) => {
    console.error(Date() + ": ERROR!");
    console.error(err);
};

const end = () => {
    // ? throw
    console.log(Date() + ": ENDED!");
};

const packetsend = (packet) => {
    console.log(Date() + ": sent:");
    console.log(packet);
};

const packetreceive = (packet) => {
    console.log(date() + ": recieved:");
    console.log(packet);
};

const subscribed = (topics) => {
    console.log(Date() + ": SUBSCRIBED!");
    console.log(topics);
};

const subscriptionError = (data) => {
    // ? throw
    console.warn(Date() + `: SUBSCRIBE ERROR!`);
    if (data) console.warn(data);
};

module.exports = {
    connect,
    reconnect,
    close,
    disconnect,
    offline,
    error,
    end,
    packetsend,
    packetreceive,
    subscribed,
    subscriptionError,
};
