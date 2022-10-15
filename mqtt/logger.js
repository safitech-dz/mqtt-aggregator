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

const log = console.log;

function dateStr() {
    return Date() + " : ";
}

const connect = () => {
    console.log(Date() + ": CONNECTED!");
};

const reconnect = () => {
    log(dateStr() + ": RECONNECTING!");
};

const close = () => {
    log(dateStr() + ": CLOSED!");
};

const disconnect = () => {
    log(dateStr() + ": DISCONNECTED!");
};

const offline = () => {
    log(dateStr() + ": OFFLINE!");
};

const error = (err) => {
    console.error(dateStr() + ": ERROR!");
    console.error(err);
};

const end = () => {
    // ? throw
    log(dateStr() + ": ENDED!");
};

const packetsend = (packet) => {
    log(dateStr() + ": sent:");
    log(packet);
};

const packetreceive = (packet) => {
    log(dateStr() + ": recieved:");
    log(packet);
};

const subscribed = (topics) => {
    log(dateStr() + ": SUBSCRIBED!");
    log(topics);
};

const subscriptionError = (data) => {
    // ? throw
    console.warn(dateStr() + `: SUBSCRIBE ERROR!`);
    if (data) console.warn(data);
};

export {
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
