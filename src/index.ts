import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnvironmentVariable } from './environments/env';
let app: express.Application = express();

app.listen(5000, () => {
    console.log('app started on port 5000')
});

mongoose.connect(getEnvironmentVariable().db_url).then(
    () => {
        console.log('mongodb is connected!');
    }
);

app.use(function (req, res, next) {
    console.log('middleware called');
    next();
});

app.get('/login', (req, res) => {
    res.send('response sent');
});