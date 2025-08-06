import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (res,req) => {
    res.send('Tracker API is running...');
});

app.listen(PORT, () => {
    console.log('Server is running on PORT ${PORT}');
})