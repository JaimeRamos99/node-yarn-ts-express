import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well donnnnne!');
});

app.listen(3000);
