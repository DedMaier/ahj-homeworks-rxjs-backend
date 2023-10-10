import { Router } from 'express';
import messagesRouter from './messages/index.js';

const router = Router();

router.use('/messages', messagesRouter);

export default router;
