const router = require('express').Router();
const { allPlayers } = require('../controllers/players');

router.route('/players').get(allPlayers);

module.exports = router;