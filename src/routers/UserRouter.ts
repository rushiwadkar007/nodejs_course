import { Router } from "express";
import { UserController } from "../controllers/UserController";

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
        
    }

    postRoutes(){
        this.router.post('/login', UserController.login, UserController.test);
    }

    patchRoutes(){

    }

    deleteRoutes(){

    }
}

export default new UserRouter().router;