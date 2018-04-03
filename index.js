const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    const express = require('express');
    const app = express();

    const doWork = (duration) => {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    };

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    });

    app.listen(3000);
}

