const router = require('express').Router();
const ProjectController = require('../../controllers/ProjectController');

router.post('/', ProjectController.create);

router.put('/', ProjectController.update);

router.get('/', ProjectController.findAll);

router.get('/:id', ProjectController.findById);

module.exports = router;
