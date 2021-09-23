import { Router } from "express";

 class UserRouter{
    public router; Router;

    constructor(){
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){
        this.router.get('/login', (req, res, next)=>{
            (req as any).message = 'we are here to login!';
            next();
        },(req, res)=>{
            res.send((req as any).message);
        });
    }

    postRoutes(){

    }

    patchRoutes(){

    }

    deleteRoutes(){

    }
}

export default new UserRouter().router;