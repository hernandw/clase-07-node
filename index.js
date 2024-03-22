const express = require('express');
const app = express();
const port = 3000;
const chalk = require('chalk');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${chalk.bgRed.italic(port)}`)
})