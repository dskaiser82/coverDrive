var express = require('express');
var apiRouter = express.Router()
var apiCtrl = require('../controllers/api.js')

apiRouter.route('/authenticate')
  .post(apiCtrl.authenticate)


apiRouter.route('/spotify')
  .get(apiCtrl.indexSpot)


apiRouter.route('/youtube')
  .get(apiCtrl.showTube)

apiRouter.route('/users')
  .get(apiCtrl.index)
  .post(apiCtrl.create)


// ANYTHING BELOW THIS MIDDLEWARE REQUIRES A TOKEN TO BE ATTACHED TO THE REQUEST:
apiRouter.use(apiCtrl.protect)

apiRouter.route('/users/:id')
  .get(apiCtrl.showUser)



module.exports = apiRouter;
