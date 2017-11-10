const router = require('express').Router();
const skillRouter = require('./routes/skillRoutes');

// hook different model routes here
router.use('/skills', skillRouter);

module.exports = router;