# Typical flow when adding new functionality
Let's make the component take the sum of two inputs and display the result.

1. Write the test case for `sum(1,1)`
2. Create the function `sum()` in the `component.ts`
3. Create the elements in the `component.html`
  * input a `<input #a>`
  * input b `<input #b>`
  * button `<button type="button">`
  * result `<p></p>`
4. Bind button click event to the sum method `(click)="sum(a.value, b.value)"`

## component.spec.ts
```typescript
describe('sum(1,1)', () => {
    it('should be 2', () => {
        component.sum(1,1);
        expect(component.result).toEqual(2);
    });
});
```

## component.ts
```typescript
  result: number;

  sum(a: number, b: number) {
    this.result = a + b;
  }
```

## component.html
```html
<input #a>
<input #b>
<button type="button" (click)="sum(a.value, b.value)">Sum</button>
<p>{{ result }}</p>
```

## Try it yourself! (10 minutes)
* create the same functionality for `difference()`
* (optional) add a test case

# Try the challenge (15-20 minutes)
## Disable the Sum button when either value is not a number
* use a component property to enable or disable the button e.g. `disableSum: boolean`
* use the `(change)` event listener on the each `<input>` to call the function
* `[disabled]` the button if any of the values is NaN

> HINT: use `Number.isNaN()` to check if the value is number
>  * 5 is a number `Number.isNaN(5); // returns false;`
>  * +'a' is not a number `Number.isNaN(+'a')' // returns true;` We use the `+'a'` to convert to a number