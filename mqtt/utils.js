const formatConnectionOpts = (obj) => {
    return {
        protocol: obj.protocol,
        host: obj.host,
        port: obj.port,
        username: obj.username, // ! computer username
        password: obj.password,
        clientId: obj.clientId,
        clean: !!obj.clean,
        keepalive: parseInt(obj.keepalive),
        reconnectPeriod: parseInt(obj.reconnectPeriod),
    };
};

module.exports = { formatConnectionOpts };
