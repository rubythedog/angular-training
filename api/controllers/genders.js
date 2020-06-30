const Router = require("@koa/router");

const genders = new Router()
  .get('/genders', (ctx, next) => {
    ctx.body = ['Male', 'Female', 'X'];
  });
module.exports = genders;