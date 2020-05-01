import express from 'express';

const app = express();

const {
    PORT = 5000
} = process.env;


app.get('/', (req, res) => {
    res.send('It is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});