import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '@hktickets/common';
import { BadRequestError } from '@hktickets/common';
import { User } from '../models/user';
import { Password } from '../services/password';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password must not be blank!')
  ],
  validateRequest,
  async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email })
    
    if (!user) {
      throw new BadRequestError('Invalid credentials');
    } 

    if (await Password.compare(user.password, password)) {
        const userJwt = jwt.sign({
        id: user.id,
        email: user.email
      },
        process.env.JWT_KEY!
      );

      req.session = {
        jwt : userJwt,
        credentials : 'same-origin'
      }

      res.status(200).send(user)
    } else {
      throw new BadRequestError('Invalid Credentials');
    }
  });

export { router as signinRouter };
