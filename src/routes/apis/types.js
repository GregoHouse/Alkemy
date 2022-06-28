const express = require('express');
const router = express.Router();

const typesController = require('../../controllers/apis/typesController');


 

router.get('/types/list',typesController.list);
 


module.exports = router;