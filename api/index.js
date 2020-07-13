const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 3000;

const people = require("./controllers/people.js");
const genders = require("./controllers/genders.js");

app
  .use(cors())
  .use(people.routes())
  .use(genders.routes())
  .use(ctx => {
    ctx.body = 'hello world';
  });
console.log(`api running at http://localhost:${port}`);
app.listen(port);