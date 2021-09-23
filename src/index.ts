import * as express from 'express';
import * as mongoose from 'mongoose';
let app: express.Application = express();

app.listen(5000, () => {
    console.log('app started on port 5000')
});

mongoose.connect('mongodb+srv://mongodbuser:879345rushi%2a@mongodb.uvdbp.mongodb.net/test?authSource=admin&replicaSet=atlas-mzyd6c-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true').then(
    () => {
        console.log('mongodb is connected!');
    }
)

app.use(function (req, res, next) {
    console.log('middleware called');
    next();
})

app.get('/login', (req, res) => {
    res.send('response sent');
})