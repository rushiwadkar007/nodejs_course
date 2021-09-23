import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environments/env';
import * as UserRouter from './routers/UserRouter';

export class Server{
    public app: express.Application = express();

    constructor(){
        this.setConfigurations();
        this.setRoutes();
    }

    setConfigurations(){
        this.setMongodb();
    }

    setMongodb(){
        mongoose.connect(getEnvironmentVariable().db_url).then(
            () => {
                console.log('mongodb is connected!');
            }
        );
    }

    setRoutes(){
        
    }
}

function constructor() {
    throw new Error('Function not implemented.');
}


function setConfigurations() {
    throw new Error('Function not implemented.');
}


function setRoutes() {
    this.app.use('/api/user', UserRouter);
}
