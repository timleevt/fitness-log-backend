import express from 'express';
import handlePostActivity from './handler/handlePostActivity';
import handleCreateGym from './handler/handleCreateGym';
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3000;


app.get('/alive', (req, res) => {
    res.send('alive!')
})
app.post('/activity', handlePostActivity);
app.post('/create_gym', handleCreateGym);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
});