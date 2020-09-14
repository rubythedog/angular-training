# How to write useful unit tests for http services

1. What are we actually testing? (api or rxjs?)
  * do not make HTTP requests to the api in tests
  * use `HttpClientTestingModule` to mock the returned data
  * separate http services from application logic services,
    so application logic can be tested without web clients
2. 