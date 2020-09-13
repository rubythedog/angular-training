# Build a login screen

## Requirements
* Create a login component that accepts `email` and `password`.
* Create a service `AuthService`, that posts to the webservice.
* When the login button is clicked, use the `AuthService` to call the webservice.
  * `http://localhost/login`


## Use Case Flow
1. Provide email
2. Provide password
3. Click **Login** button
4. Display a JavaScript alert that confirms log in

## Program Flow
```
-------------      -----------      -------
| component | ---> | service | ---> | api |
-------------      -----------      -------
```