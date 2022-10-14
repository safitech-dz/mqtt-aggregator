const formatConnectionOpts = (obj) => {
    return {
        protocol: obj.protocol,
        host: obj.host,
        port: obj.port,
        username: obj.username,
        password: obj.password,
        clientId: obj.clientId,
        clean: obj.clean,
        keepalive: obj.keepalive,
        reconnectPeriod: obj.reconnectPeriod,
    };
};

module.exports = { formatConnectionOpts };
