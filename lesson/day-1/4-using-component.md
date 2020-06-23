# Encapsulating into a component

1. Create a component
2. Write the test case
3. Define the state and behavior
4. Define the template
5. Use the component in the App Component
6. Move `sum()` functionality into the calculator component

## 1. Creating `calculator.component.*`
```
yarn ng generate component calculator
```
Shortform equivalent `yarn ng g c calculator`

## 2. Unit test `component.spec.ts`
```typescript
  describe('multiply(2,2)', () => {
    it('should be 4', () => {
      component.multiply(2,2);
      expect(component.result).toEqual(4);
    });
  });
```

## 3. Public function `multiply()` `component.ts`
```typescript
    result: number;

    multiply(a: number, b: number) {
        this.result = a * b;
    }
```

## 4. Define the template `component.html`
```html
<input #a>
<input #b>
<button type="button" (click)="multiply(+a.value, +b.value)">Multiply</button>
<p>{{ result }}</p>
```

## 5. Use the component in the App Component
```html
<app-calculator></app-calculator>
```