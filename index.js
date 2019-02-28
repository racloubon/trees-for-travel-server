const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser');
const port = 3000;

app.use(cors({
  origin: '*'
}));
app.use(bodyParser());
app.use(router.routes());

app.listen(port, () =>{
  console.log(`Server listening at port ${port}`); //eslint-disable-line
});
