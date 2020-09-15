# Adding validators to reactive forms
Validators are built into reactive forms.
We can add them after the default form value parameter.

If there is only one validator, we can just specify the one.
If there are many, we can pass in an array of `Validator` functions.

```typescript
  personForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('',[
        Validators.required,
        Validators.email
    ]),
    phone: new FormControl(),
  })
```

## Prevent form submission
If the form is not in a valid state, we should prevent form submission.
This is not a failsafe way of validation as users can bypass this.

SFS ran into an issue with only client side validation.
It is important to also have server side validation in case this is bypassed.

```typescript
addPerson() {
    if (this.personForm.invalid) {
        alert('form is invalid');
        return;
    };
    this.peopleService.addPerson(this.personForm.value as Person);
}
```

## Create a custom Phone number validator
