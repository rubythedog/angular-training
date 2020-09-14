# How to write useful unit tests for http services

## What are we actually testing? (api or rxjs?)
  * do not make real HTTP requests to the api in tests
  * use `HttpClientTestingModule` to mock with fake data
  * separate http services from application logic services,
    so application logic can be tested without web clients

## Don't test for the sake of testing, test as necessary
  * it may be tempting to get 100% code coverage by testing all Http Services
  * since Unit tests should not make real calls to the service, these tests are ineffective
  * use API integrated or functional tests to test API independent of Angular