const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller')

router.get('/',controllers.getHomePage);
router.all('/add/feed', controllers.postNewOne);
router.get('/feed/:id', controllers.showOne);
router.all('/feed/edit/:id', controllers.updateOne);
router.get('/feed/delete/:id', controllers.deleteOne);


module.exports=router;