# Using Angular Http Services

1. Use `HttpClient` to make a GET request
2. return the rxjs observable
3. Display the observable on the screen with `async` pipe
4. Handle an asynchronous loading spinner

## Get Request
The api accepts GET requests at http://localhost:3000/people
which will return a list of people.

* create the service `yarn ng g s core/http/people`
* import `HttpClientModule` from `'@angular/common/http`
* inject `HttpClient` to the constructor
* make a `getPeople()` function

## RXJS Observable
An Observable is an object that wraps asynchronous response data.
Subscribe to the observable before data will be emitted.
When the observable emits data, the data flows to all subscribers
and the subscribers can handle the data how they like.

The observable itself can be passed around between functions
and stored in variables to be used at a later point in the code execution.

Alternatives to Observables would be to use callbacks like in jQuery Ajax,
or using a JavaScript Promise. Some benefits of this include cleaner code,
handling failures, and replaying web requests.

https://github.com/angular/angular/issues/5876#issuecomment-164447013

## Bring the observable to the component and into the browser
Now that we have the service return an observable, we can inject it into the
component and set the web request to be sent when the component is initialized.

* inject `PeopleService`
* call `getPeople$()` in the init event `ngOnInit()`

We can also store the observable into a component property,
then subscribe to it in multiple places.

Although typescript can tell us the variable is an observable,
using the `$` suffix allows for easily scanning the code
for observables and is frequently used.
https://angular.io/guide/rx-library#naming-conventions-for-observables


## Display the observable in the template
We can use the `async` pipe to unwrap the observable.
```
{{ getPeople$() | async }}
```

* `yarn start` to run the dev server and test the results


## Bonus
Add a loading spinner while the web request is loading.