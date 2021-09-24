import { nextTick } from "process";
import User from "../models/User";
import {validationResult} from 'express-validator';

export class UserController{
    static login(req, res, next){

        const error = validationResult(req);

        const email = req.body.email; 

        const password = req.body.password;

        const userName = req.body.userName;

        const user = new User({email: email, password: password, userName: userName});

        if(!error.isEmpty()){
            const newError = new Error(error.array()[0].msg);

            return(newError);
        }
    }

    // static test(req, res, next){
    //     console.log('called');
    // }
}