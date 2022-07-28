import {Router} from 'express';
import QuoteController from "./impl/QuoteController";
import VerifyToken from "./middleware/VerifyToken";

const router = Router();
const controller = new QuoteController();

router.get('/:from/:to/:token', VerifyToken, controller.handler)

export default router;