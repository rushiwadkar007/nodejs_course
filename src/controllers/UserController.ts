import { nextTick } from "process";

import User from "../models/User";

import { validationResult } from 'express-validator';

import { Utils } from "../utils/Utils";

export class UserController {

    static async signup(req, res, next) {

        console.log(Utils.generateVerificationToken(10));

        const email = req.body.email;

        const password = req.body.password;

        const userName = req.body.userName;

        const data = {

            email: email,

            password: password,

            userName: userName,

            verificatoin_token: Utils.generateVerificationToken(10),

            verification_token_time: Date.now() + new Utils().MAX_TOKEN_TIME

        }

        // user.save().then((user) => {

        //     res.send(user);

        //     return;

        // }).catch((err) => {

        //     next(err);

        //     return;

        // });

        try {
            let user = await new User(data).save();

            //send verification email.

            res.send(user);
        }
        catch (e) {
            next(e);
        }

    }

    static async verify(req, res, next) {

        const verfication_token = req.body.verification_token;

        const email =  req.body.email;

        try{

            const user = await User.findOneAndUpdate({email: email, verification_token: verfication_token, verfication_token_time:{$gt: Date.now()}}, {verified: true}, {new: true});
            
            if(user){


            }

            else{

                throw new Error('Verifcation token is expired . Please Request for new One.')
            }
        }

        catch{


        }

        
    }

}