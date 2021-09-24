import { nextTick } from "process";
import User from "../models/User";

export class UserController{
    static login(req, res, next){
        const email = req.body.email; 

        const password = req.body.password;

        const userName = req.body.userName;

        const user = new User({email: email, password: password, userName: userName});

        user.save().then((user)=>{
            res.send(user);
        }).catch(err =>{
            const error = new Error(err);
            next(error);
        })
    }

    // static test(req, res, next){
    //     console.log('called');
    // }
}