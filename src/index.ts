import express from 'express';
import handlePostActivity from './handler/handlePostActivity';
import handleCreateGym from './handler/handleCreateGym';
import handleGetGyms from './handler/handleGetGyms';
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
const port = 5000;


app.get('/alive', (req, res) => {
    res.send('alive!')
})
app.post('/activity', handlePostActivity);

// Gyms
app.get('/gyms', handleGetGyms);
app.post('/create_gym', handleCreateGym);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});