var express = require('express');
var apiRouter = express.Router()
var apiCtrl = require('../controllers/api.js')

apiRouter.route('/spotify')
  .get(apiCtrl.indexSpot)


apiRouter.route('/youtube')
  .get(apiCtrl.indexTube)


module.exports = apiRouter;
