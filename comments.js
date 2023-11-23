// Create a web
// 1. Import express and create a router
const express = require('express');
const router = express.Router();
// 2. Import the controller
const commentsController = require('../controllers/commentsController');
// 3. Create the routes
// 3.1. GET
router.get('/', commentsController.list);
// 3.2. POST
router.post('/', commentsController.create);
// 3.3. GET
router.get('/:id', commentsController.detail);
// 3.4. PUT
router.put('/:id', commentsController.update);
// 3.5. DELETE
router.delete('/:id', commentsController.destroy);
// 4. Export router
module.exports = router;