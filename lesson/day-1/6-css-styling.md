# Angular specific styling directives
Angular css styling is the same as html styling.
* class selectors are component specific
* `:host`
https://angular.io/guide/component-styles#special-selectors

## component specific selectors
We can reuse classes between components without worrying about name collisions.

## Using `:host` to style the calculator
Rather than wrapping the component contents in a <div> and styling the div. We can use the component container itself.

```html
<div class="calculator">
    ...
</div>
```

```css
.calculator {
    display: block;
    background-color: #00FFFF;
    height: 200px;
    width: 200px;
 }
/* vs */
:host {
    display: block; /* default display is inline */
    background-color: #00FFFF;
    height: 200px;
    width: 200px;
}
```
We can now remove the `<div>` tag because we put the styling on the `:host`