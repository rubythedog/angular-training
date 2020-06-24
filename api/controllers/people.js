const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const people = new Router()

.get('/people', (ctx, next) => {
  ctx.body = ['a', 'b'];
})
  
.post('/people', bodyParser(), (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = JSON.stringify(ctx.request.body);
})
;

module.exports = people;