const express = require('express');
const router = express.Router();
const rpio = require('rpio');
rpio.init({ gpiomem: false });

//Iniciar gpio
rpio.open(8, rpio.OUTPUT, rpio.HIGH);

//Pin 8 apagado, enciende lámpara.
router.get('/on', (req, res) => {
    rpio.write(8, rpio.LOW);
    res.send('on');
});
//Pin 8 encendido, apaga lámpara.
router.get('/off', (req, res, next) => {
    rpio.write(8, rpio.HIGH);
    res.send('off');
});

//Pagina helloworld
router.get('/', (req, res) => res.send('Hello World! :)'));

module.exports = router;