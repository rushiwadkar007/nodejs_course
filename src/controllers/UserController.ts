import { nextTick } from "process";

export class UserController{
    static login(req, res, next){
        let number = '0x934893479484859484340380304304';
        res.send({
            userName: 'Rushikesh Wadkar',
            address: number,
        })
    }

    static test(req, res, next){
        console.log('called');
    }
}