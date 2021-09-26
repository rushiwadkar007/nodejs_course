import { Router } from "express";

import { UserController } from "../controllers/UserController";

import { body } from 'express-validator';

import { UserValidators } from "../validators/UserValidators";

import { GlobalMiddleware } from "../middlewares/CheckError";

class UserRouter {

    public router; Router;

    constructor() {

        this.router = Router();

        this.getRoutes();

        this.postRoutes();

        this.patchRoutes();

        this.deleteRoutes();
    
    }

    getRoutes() {

    }

    postRoutes() {

        this.router.post('/signup', UserValidators.signup(), GlobalMiddleware.checkError, UserController.signup);
        
    }

    patchRoutes() {

        this.router.patch('/verify',UserValidators.verifyUser(), GlobalMiddleware.checkError, UserController.verify);
    
    }

    deleteRoutes() {

    }

}

export default new UserRouter().router;