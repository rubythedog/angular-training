const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const people = require("./controllers/people.js");

app
  .use(bodyParser())
  .use(people.routes())
  .use(ctx => {
    ctx.body = 'hello world';
  });
app.listen(3000);