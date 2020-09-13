# Combining response objects from multiple service calls
Often times, a component needs to load data from multiple services.
Especially in a service oriented architecture.
To combine data from multiple web requests we can leverage the `rxjs` operators.

1. Chaining calls
2. Parallel calls
3. Mapping response objects into proper data types (Tip)

## Chaining calls
We need data before we can make the second call.
An example is calling the security service for a JWT (JSON web token)
before calling the actual service.

## Parallel calls
We need data from two endpoints before loading the page.
An example is getting a list of people from the people controller,
and getting a list of genders from the gender service.

## (Tip) Mapping and transforming data structures
Often times the data type we receive from the server is not exactly what we need.
It sometimes has too much information, or the information format
is not what we want to display. Like date time or capital casing for names.

This transformation can be done on an array using the function `array.map()`
so we don't have to use a loop.