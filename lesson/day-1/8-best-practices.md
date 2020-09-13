# Best Practices

## Naming and Style guide
* follow the Angular naming and style guide for consistency (https://angular.io/guide/styleguide)
* lower-case, dashes to separate words.
* always specify, component | service | module | etc in the name of the file for easy searching.
* keep files that are closely related close together: calculator.component.ts|html|css|spec.ts

## Use pure functions as much as possible in services
* pure functions will return the same output given specific input.
* this makes unit testing easy, and prevents unknown bugs
* pure functions have no side effects, no state will be changed when running the function.

> Sometimes this is not possible, if you need to call two http services within a function.
