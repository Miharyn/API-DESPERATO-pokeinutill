module.exports = app => {
    const controller = require('../controllers/pokealgo')();

    app.route('/api/v1/poke-algo')
        .get(controller.listPokeAlgo);
}