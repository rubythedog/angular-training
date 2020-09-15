# Build a login screen (30 - 45 Minutes)

## Requirements
* Create a login component that accepts `email` and `password`.
* Create a service `AuthService`, that posts to the webservice.
* When the login button is clicked, use the `AuthService` to call the webservice.
  * send a POST request to `http://localhost:3000/auth/login`
  * since POST request results are not displayed on the screen
    we can't use async pipe, so we can use `.subscribe()`


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