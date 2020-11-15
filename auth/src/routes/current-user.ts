import express from 'express';
import { currentUser } from '@hktickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || "Is null"  });
});

export { router as currentUserRouter };