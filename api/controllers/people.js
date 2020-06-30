'use strict';
const fs = require('fs');
const Joi = require('@hapi/joi');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

// Service
function getPeople() {
  const peopleBuff = fs.readFileSync('db/people.json');
  return JSON.parse(peopleBuff);
}

function addPerson(person) {
  const result = person_schema.validate(person);
  if (result.error) return result;

  const people = getPeople();
  people.push(person);
  fs.writeFileSync('db/people.json', JSON.stringify(people));
  return result;
}

// Validator
const person_schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required()
});

// Controller
const people = new Router()

.get('/people', (ctx, next) => {
  ctx.body = getPeople();
})

.post('/people', bodyParser(), (ctx, next) => {
  const person = ctx.request.body;
  const result = addPerson(person);
  if (!result.error) {
    console.log(`created ${person.email}`);
    ctx.status = 201;
  } else {
    ctx.body = result.error;
  }
})
.del('/people/:email', (ctx, next) => {
  console.log(ctx.params.email);
  ctx.status = 204;
});

module.exports = people;