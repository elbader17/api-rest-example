const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Eduardo',
        lastname: 'Bader'
    };
    res.json(data);
});  

module.exports = router;
