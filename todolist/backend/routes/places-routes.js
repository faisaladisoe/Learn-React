const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET request success');
    res.send('Hai');
    res.end();
});

module.exports = router;
