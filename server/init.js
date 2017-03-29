/**
 * Created by Administrator on 2017/3/26.
 */
'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8099, host: 'localhost' });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});