import { nextTick } from "process";

import User from "../models/User";

import { validationResult } from 'express-validator';

export class UserController {

    static signup(req, res, next) {

        const error = validationResult(req);

        const email = req.body.email;

        const password = req.body.password;

        const userName = req.body.userName;

        if (!error.isEmpty()) {

            next(new Error(error.array()[0].msg));

        }

        const data = {

            email: email,

            password: password,

            userName: userName
        }

        let user = new User(data);

        user.save().then((user) => {

            res.send(user);

        }).catch((err) => {

            res.send(err);

        });

    }

}