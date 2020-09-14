# RxJS (Continued)

Sometimes the data that we get can be modified, or combined with other observables.
To transform, combine, or have side effects we can use the `pipe`.

### Use async pipe over subscribing
Most of the time we use observables because we are getting data from a web service.
In those cases we should use the async pipe `| async` wherever possible.
In other cases we can `subscribe()`, like a `POST` requests with no expected data.

### Remember to unsubscribe
To prevent memory leaks unsubscribe to observables when you no longer need them.
`HttpClient` creates a finite observable so does not require unsubscription.