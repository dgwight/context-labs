# Context Labs Project

## Architecture

- Nuxt 3
- Vuetify
- Uses simple api with route server/api/clients.js to return the data
- Vitest testing

## Design

- Tried to balance between making it mobile friendly and using space on desktop
- Put the name search in the top header, because I would expect it to be the most used
- Made sure that filtering worked to find clients without 'nationality' or 'quote' in case the users wants to find
  clients that have incomplete data
- I assumed that the <sup>TM<sup> in the name should be sanitized and rendered as html
- I assumed that multiple values could be selected for a filter

## Testing
Many more tests could be added, but I would want to make sure this was needing before spending the time on it
