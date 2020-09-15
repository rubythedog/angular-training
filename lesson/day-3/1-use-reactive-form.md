# Create an add-person-reactive component
`yarn ng g c directory/add-person-reactive`
We will be implementing the same form through the Angular reactive forms library.

## Define a `FormGroup` with `FormControls`
```typescript
  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(),
  })
```

## Link the form in the template
Using the `[formGroup]` directive, we can link the form from the template
into the `form` property in the controller
```html
<form [formGroup]="personForm">
    ...
</form>
```

Use the `formControlName` property on each form input element to
link to the individual `FormControl`. These are case sensitive strings.
```html
<label>First Name</label>
<input type="text" formControlName="firstName">
```

## Listen to the `ngSubmit` event for the form
Add the code to submit add the Person.
Remember to inject `PeopleService` to the component.

The `.value` of the `personForm` will be mapped as an object.

```typescript
addPerson() {
    this.peopleService.addPerson(this.personForm.value as Person);
}
```

Now we can listen to the `ngSubmit` event on the form

```html
<form [formGroup]="personForm" (ngSubmit)="addPerson()">
```

Let's also add a button to submit the form.
```html
<button type="submit">Add Person</button>
```