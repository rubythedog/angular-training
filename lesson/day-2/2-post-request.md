# Sending data back to the server through HTTP POST

1. Submit a simple form
2. Subscribe to the post observable

## Create an HTML form

```html
<form (submit)="addPerson()">
  <input name="firstName">
  <input name="lastName">
  <input name="email">
  <input name="phone">
  <button type="submit">Add Person</button>
</form>
```