'use strict';
const fs = require('fs');
const Joi = require('@hapi/joi');
const Router = require("@koa/router");
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');

// Validator
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const user_schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

// Service
/**
 * @param {User} user
 * @returns {string | null} jwt as string
 */
function login(user) {
    const users = getUsers();
    const found = users.find(u => u.email === user.email);

    return found && found.password === user.password
        ? signJwt(found.email)
        : null;
}

/** @returns {User[]} */
function getUsers() {
    const userFile = fs.readFileSync('db/users.json');
    return JSON.parse(userFile);
}

/** @returns {string} */
function signJwt(email) {
    return jwt.sign(
        { iss: 'localhost:3000', sub: email },
        'themostsecretofsecretkeys-123'
    );
}

// Controller
const auth = new Router()
    .post(
        '/auth/login',
        bodyParser(),
        (ctx, next) => {
            // Validate
            const user = ctx.request.body;
            const valid = user_schema.validate(user);

            if (valid.error) {
                ctx.status = 400;
                ctx.body = valid.error;
            } else {
                next();
            }
        },
        (ctx => {
            // Login
            const user = ctx.request.body;
            const result = login(user);
            if (result) {
                console.log(`login ${user.email}`);
                ctx.body = result;
            } else {
                ctx.status = 400;
                ctx.body = 'Email not found, or invalid password';
            }
        })
    );

module.exports = auth;