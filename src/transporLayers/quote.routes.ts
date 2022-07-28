import {Router} from 'express';
import QuoteController from "./impl/QuoteController";

const router = Router();
const controller = new QuoteController();

router.get('/:from/:to', controller.handler)


export default router;