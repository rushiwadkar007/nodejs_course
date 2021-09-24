import {body} from 'express-validator';

export class UserValidators{
    static login(){
        return [body('username', 'Username is required!').isString(),
        body('email', 'email is required').isEmail(),
        body('password', 'Enter valid password').custom((req)=>{
            if(req.body.email){
                return true;
            }
            else{
                throw new Error("testing Custom Validation!");
            }
        })]
    }
}