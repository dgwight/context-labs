# Context Labs Project

## Architecture

- Nuxt 3
- Vuetify
- Uses simple api with route server/api/clients.js to return the data
- Vitest testing
- eslint

## Design

- Tried to balance between making it mobile friendly and using space on desktop
- Put the name search in the top header, because I would expect it to be the most used
- Made sure that filtering worked to find clients without 'nationality' or 'quote' in case the users wants to find
  clients that have incomplete data
- I assumed that the <sup>TM<sup> in the name should be sanitized and rendered as html
- I assumed that multiple values could be selected for a filter
- The selectable values are dynamic based on the values that exist on clients
- I considered having a separate page / url for the client detail, but decided that there would be too much unused
  space on desktop

## State Management
The app is small enough that I didn't use pinia and instead had the components send their data updates up to index.vue with
$emit.

## Testing

Many more tests could be added, but I would want to make sure this was needing before spending the time on it. I made
sure that components rendered with the correct props, and did a test of $emit being sent from the ClientList component
as an example.


To run app locally

`npm run dev`

To run linter

`npm run lint` or `npm run lintfix`

To run tests

`npm run test`

To run test coverage

`npm run coverage`


