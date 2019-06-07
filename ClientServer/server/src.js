const http = require('http');

const hostname = '127.0.0.1';
const port = 4001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const data = [
        {
            postTitle: "1. Lorem ipsum dolor",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi."
        },

        {
            postTitle: "2. Lorem ipsum dolor",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi."
        },

        {
            postTitle: "3. Lorem ipsum dolor",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi."
        },

        {
            postTitle: "4. Lorem ipsum dolor",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi."
        },

        {
            postTitle: "5.Lorem ipsum dolor",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi."
        }
    ];

    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

