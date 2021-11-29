import { Router } from 'express';
import swagger from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';

const router = Router();

router.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

export default router;
