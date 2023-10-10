import { Router } from 'express';
import { faker } from '@faker-js/faker';
import moment from 'moment';

function createRandomMessage() {
  return {
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: faker.lorem.text(),
    body: faker.lorem.text(),
    received: moment(faker.date.anytime()).valueOf(),
  };
}

const MESSAGES = () =>
  faker.helpers.multiple(createRandomMessage, {
    count: 1,
  });

const messagesRouter = Router();

messagesRouter.get('/unread', async (req, res, next) => {
  try {
    res.json({
      status: 'ok',
      timestamp: Date.now(),
      messages: MESSAGES(),
    });
  } catch {
    next();
  }
});

export default messagesRouter;
