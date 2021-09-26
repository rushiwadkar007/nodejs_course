import { body } from 'express-validator';

import User from '../models/User';

export class UserValidators {

    static signup() {

        return [body('email', 'Email is Required!').isEmail().custom((email, { req }) => {

            // console.log(req.body);

            return User.findOne({ email: email }).then(user => {

                if (user) {

                    throw new Error('User already Exists');
                    
                    return;

                }

                else {

                    return true;

                }

            })

        }),

        body('password', "password is required!").isAlphanumeric().isLength({ min: 8, max: 20 }).withMessage('password must be from 8-20 characters only.'),

        body('userName').isString()
    
    ];

    }

}