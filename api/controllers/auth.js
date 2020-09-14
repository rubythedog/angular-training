'use strict';
const Joi = require('@hapi/joi');
const Router = require("@koa/router");
const bodyParser = require('koa-bodyparser');

const authService = require("../services/auth.service.js");

const user_schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

// Controller
const auth = new Router()
    .post(
        '/auth/register',
        bodyParser(),
        (ctx, next) => {
            const user = ctx.request.body;
            const valid = user_schema.validate(user);

            if (valid.error) {
                ctx.status = 400;
                ctx.body = valid.error;
                return;
            }

            if (authService.exists(user)) {
                ctx.status = 400
                ctx.body = `Email already registered: ${user.email}`;
                return;
            }

            authService.registerUser(user);
            ctx.status = 200;
            ctx.body = authService.signJwt(user.email);
    })
    .post(
        '/auth/login',
        bodyParser(),
        (ctx, next) => {
            // Validate
            const valid = user_schema.validate(ctx.request.body);

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
            const result = authService.login(user);
            if (result) {
                console.log(`login success: ${user.email}`);
                ctx.body = result;
            } else {
                ctx.status = 400;
                ctx.body = 'Email not found, or invalid password';
            }
        })
    );

module.exports = auth;