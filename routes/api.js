var express = require('express');
var apiRouter = express.Router()
var apiCtrl = require('../controllers/api.js')

apiRouter.route('/spotify')
  .get(apiCtrl.index)


apiRouter.route('/youtube')
//fill when controller

module.exports = apiRouter;
