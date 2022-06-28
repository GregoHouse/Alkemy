const express = require('express');
const router = express.Router();

const categoriesController = require('../../controllers/apis/categoriesController');


 

router.get('/categories/list',categoriesController.list);
 


module.exports = router;