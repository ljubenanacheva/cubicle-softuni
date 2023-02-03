const router=require('express').Router();

const cubeController=require('./controllers/cubeController.js');
const homeController=require('./controllers/homeController.js');


router.get('/',homeController.getHomePage);
router.get('/about',homeController.getAboutPage);

router.get('create',cubeController.getCreateCube);

module.exports=router;