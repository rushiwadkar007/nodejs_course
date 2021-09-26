import { nextTick } from "process";

import User from "../models/User";

import { validationResult } from 'express-validator';

export class UserController {

    static async signup(req, res, next) {

        const error = validationResult(req);

        const email = req.body.email;

        const password = req.body.password;

        const userName = req.body.userName;

        if (!error.isEmpty()) {

            next(new Error(error.array()[0].msg));
        
            return

        }

        const data = {

            email: email,

            password: password,

            userName: userName
        }

        

        // user.save().then((user) => {

        //     res.send(user);

        //     return;

        // }).catch((err) => {

        //     next(err);

        //     return;

        // });

        try{
            let user = await new User(data).save();

            res.send(user);
        }
        catch(e){
            next(e);
        }

    }

}