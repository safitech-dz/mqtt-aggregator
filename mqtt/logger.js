import chalk from "chalk";

const log = console.log;

function dateStr() {
    return new Date().toISOString() + " : ";
}

// ====================================================

const connect = () => {
    log(dateStr() + chalk.bgGreen.bold("CONNECTED!"));
};

const reconnect = () => {
    log(dateStr() + chalk.blueBright("RECONNECTING!"));
};

const close = () => {
    log(dateStr() + chalk.bgGray("CLOSED!"));
};

const disconnect = () => {
    log(dateStr() + chalk.bgGray("DISCONNECTED!"));
};

const offline = () => {
    log(dateStr() + chalk.bgRed.bold("OFFLINE!"));
};

const error = (err) => {
    console.error(dateStr() + chalk.yellow("ERROR!"));
    // TODO: format err content
    console.error(err);
};

const end = () => {
    // ? throw
    log(dateStr() + chalk.black.bgWhite("ENDED!"));
};

const packetsend = (packet) => {
    log(dateStr() + chalk.gray("sent:"));
    log(packet);
};

const packetreceive = (packet) => {
    log(dateStr() + chalk.gray("recieved:"));
    log(packet);
};

const subscribed = (topics) => {
    log(dateStr() + chalk.bgBlue("SUBSCRIBED!"));
    log(topics);
};

const subscriptionError = (data) => {
    // ? throw
    console.warn(dateStr() + chalk.bgYellow("SUBSCRIBE ERROR!"));
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
