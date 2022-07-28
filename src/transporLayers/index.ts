import { Router } from 'express';

import quote from './quote.routes';

const routes = Router();

routes.use("/quote", quote)

export default routes;