const skillController = require('../controllers/skillController');
const router = require('express').Router();

router.param('id', skillController.params);

router.route('/')
  .get(skillController.get)
  .post(skillController.post);

router.route('/:id')
  .get(skillController.getOne)
  .put(skillController.put)
  .delete(skillController.delete);

module.exports = router;