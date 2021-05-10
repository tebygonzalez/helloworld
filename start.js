const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const router = require('./routes');

app.use(router);
app.listen(port, () => console.log('Listening on port:80'));