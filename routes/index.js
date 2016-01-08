var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.index.indexAction);
router.get('/home', controllers.home.indexAction);
router.get('/home/procedure', controllers.home.procedureAction);

module.exports = router;
