

const SnapcastClient = require('./SnapcastClient');
const net = require('net');
const beautify = require('json-beautify');

const HOST = '192.168.4.8';
const PORT  = 1705;


// const client = new SnapcastClient({
//     host: HOST,
//     port: PORT
// });

// client.getRPCVersion();


const client = net.connect(PORT, HOST, function(e) {
    console.log('>> connect');
    client.write('{"id":124,"jsonrpc":"2.0","method":"Server.GetStatus"}\r\n');
})

client.on('data', (data) => {
    const d = JSON.parse(data.toString());
    console.log(beautify(d, null, 2, 100));
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});