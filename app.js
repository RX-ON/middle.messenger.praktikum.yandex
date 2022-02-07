/* global require, __dirname */
// const express = require('express')
// const path = require('path')

// const app = express()
// const PORT = 3000

// app.use('/', express.static(path.join(__dirname, 'dist')))
// app.set('pages', path.join(__dirname, '/dist'))

// app.listen(PORT, () => {
// 	// eslint-disable-next-line no-console
// 	console.log(`Example app listening on port ${PORT}!`)
// })

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static(`${__dirname}/dist/`));
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Мой текст в логе после запуска ${PORT}!`);
});
