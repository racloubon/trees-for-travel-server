const Router = require('koa-router');
const router = new Router();
const ctrl = require('./controller');

router.get('/flights', ctrl.getAll);
router.post('/flights', ctrl.postOne);
router.delete('/flights/:id', ctrl.deleteOne);

module.exports = router;
