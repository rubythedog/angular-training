# API

Base URL: `http://localhost:3000`

## Controllers

### People
* `GET /people` - returns [{firstName, lastName, email, phone}...]
* `POST /people`
* `DELETE /people/:email`

### Auth
* `POST /auth/register` - returns JWT
* `POST /auth/login` - returns JWT

### Genders
* `GET /genders`