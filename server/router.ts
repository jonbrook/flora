import express from 'express';
import loginController from './controllers/loginController';
import registerController from './controllers/registerController';
import plantsController from './controllers/plantController';
import plantsByUserController from './controllers/plantsByUserController';

const router = express.Router();

router.get('/plants', plantsController.plantsHandler);
router.get(
  '/plantsbyuser/:email',
  plantsByUserController.getPlantsByUserHandler,
);

router.post('/login', loginController.loginHandler);
router.post('/register', registerController.registerHandler);
router.post('/plants', plantsController.postPlantsHandler);
router.post('/plantsbyuser', plantsByUserController.postPlantsByUserHandler);

export default router;
