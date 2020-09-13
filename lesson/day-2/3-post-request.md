# Sending data back to the server through HTTP POST

1. Submit a simple form
2. Subscribe to the post observable

## Create an HTML form
Angular has a built in form submit event called `ngSubmit`.

We need to import `FormsModule` module in order to use ngSubmit, ngModel, and ngForm

```html
<form #personForm="ngForm" (ngSubmit)="addPerson(personForm)">

  <label for="firstName">First Name</label>
  <input name="firstName" ngModel>

  <label for="lastName">Last Name</label>
  <input name="lastName" ngModel>

  <label for="email">Email</label>
  <input name="email" ngModel>

  <label for="phone">Phone</label>
  <input name="phone" ngModel>

  <button type="submit">Add Person</button>
</form>
```

## `*.component.ts` Add the method to handle the (submit) event in 
```ts
addPerson(form: NgForm) {
  this.peopleService.addPerson(form.value as Person);
}
```

## Code the POST request in `PeopleService.ts`
```ts
addPerson(person: Person) {
  this.http.post(`http://localhost:3000/people`, person).subscribe();
}
```

## (Tip) Testing in browser
We can open the **network tab** in the browser to see the web request fire.
Check for 200 / 201 status code in the response to know that it is successful.