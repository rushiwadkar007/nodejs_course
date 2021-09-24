import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environments/env';
import UserRouter from './routers/UserRouter';

export class Server{
    public app: express.Application = express();

    constructor(){
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
        
    }

    setConfigurations(){
        this.connectMongodb();
    }

    connectMongodb(){
        mongoose.connect(getEnvironmentVariable().db_url).then(
            () => {
                console.log('mongodb is connected!');
            }
        );
    }

     setRoutes() {
        this.app.use('/api/user', UserRouter);
    }

    error404Handler(){
        this.app.use((req, res)=>{
            res.status(422).json({
                message: 'not found',
                status_code: 422
            })
        });
    }

    handleErrors(){
        this.app.use((error, req, res, next)=>{
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'something went wrong!',
                status: errorStatus
            })
        })
    }
}



