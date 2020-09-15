# Using services to hold business logic

1. Create a service
2. Setup provider for dependency injection
3. Inject service into component
4. Move `sum()` and `product()` into the service
5. Call the function

## 1. Create `math.service.ts`
```
yarn ng generate service services/math
```
Shortform equivalent `yarn ng g s services/math`

## 2. Provide in root
Always use root injector as provider unless you want the service to be
available only if the consumer imports a particular @NgModule.

https://angular.io/guide/providers#provider-scope

## 3. Inject this service into the `calculator.component.ts`
```typescript
constructor(private math: MathService) {}
```

## 4. Move the business logic from components into the service
We keep business logic out of the components to isolate, behavior from rules.
The rules are defined in services, and the resulting behavior is defined in the component.

This keeps our component resilient to change in business logic. Also this simplifies unit testing.
Good unit tests are essential to trusting the application code because JavaScript is known to become
spaghetti code really easily.

5. Call the functions from the service.