const Koa = require('koa');
const cors = require('@koa/cors');

// Controllers
const people = require("./controllers/people.js");
const genders = require("./controllers/genders.js");
const auth = require("./controllers/auth.js");

// Initialize Web Server
const app = new Koa();
const port = 3000;

app
  .use(cors())
  .use(people.routes())
  .use(genders.routes())
  .use(auth.routes())
  .use(ctx => {
    ctx.body = 'hello world';
  });
console.log(`api running at http://localhost:${port}`);
app.listen(port);