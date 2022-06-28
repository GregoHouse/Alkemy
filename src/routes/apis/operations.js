const express = require('express');
const router = express.Router();

const operationsController = require('../../controllers/apis/operationsController');


 

router.get('/operations/list',operationsController.list);
router.get('/operations',operationsController.pagesList);
router.post('/operations/create', operationsController.create);
router.put('/operations/edit/:id', operationsController.update);
router.delete('/operations/delete/:id', operationsController.destroy);


module.exports = router;