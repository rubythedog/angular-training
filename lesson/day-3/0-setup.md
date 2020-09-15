# Angular Reactive Forms
The way that we were using angular forms above is called **template-driven forms**.
An alternative way to handle forms is the **Reactive Forms**.

Reactive forms allows for explicit form structure to be defined
which makes it more:
* Scalable
* Reusable
* and have cleaner html template

More comparisons can be found here: https://angular.io/guide/forms-overview

## Adding reactive forms
Before we can use Angular reactive forms we need to import the module.

* Add the import statement `import { ReactiveFormsModule } from '@angular/forms';`
* Add `ReactiveFormsModule` to the `imports` array in `@NgModule`
