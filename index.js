import express, { json, urlencoded } from 'express';
import routes from "./routes";
import { connect } from 'mongoose';
const app = express();

connect('mongodb://localhost:27017/apier', { useNewUrlParser: true });

const port = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }))
app.use('/', routes);

app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);
});
