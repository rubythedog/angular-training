# Using services to hold business logic

1. Create a service
2. Setup provider for dependency injection
3. Create unit test for `difference()`
4. Create the function `difference()` 
5. Inject service into component
6. Call the function
7. Move `sum()` and `multiply()` into the service

## 1. Create `math.service.ts`
```
yarn ng generate service services/math
```
Shortform equivalent `yarn ng g s services/math`

## 2. Provide in root
Always use root injector as provider unless you want the service to be
available only if the consumer imports a particular @NgModule.

https://angular.io/guide/providers#provider-scope

## 3. Write the specification as a unit test
```typescript
  describe('difference(4,2)', () => {
    it('should be 2', () => {
      const result = service.difference(4,2);
      expect(result).toBe(2);
    });
  });
```

## 4. Write a public function
```typescript
  difference(a: number, b: number) {
    return a - b;
  }
```

## 5. Inject this service into the `calculator.component.ts`
```typescript
constructor(private math: MathService) {}
```

## 6. Use math service
```typescript
subtract(a: number, b: number) {
  return this.math.difference(a,b);
}
```

## 7. Move the `sum()` and `multiply()` functionality into the service