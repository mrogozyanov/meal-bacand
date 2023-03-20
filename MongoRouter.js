const { Router } = require('express');
const { getMeal, saveMeal, deleatMeal, putMeal} = require('./MongoController')
const router = Router();

router.get('/', getMeal);
router.post('/saveMeal', saveMeal);
router.post('/deleteMeal', deleatMeal);
router.post('/changeMeal', putMeal);

module.exports = router