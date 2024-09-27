# bun_cypres_test_001

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.24. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
"# bun_cypress" 
Then use:
```
bun init
bun install
npm install cypress --save-dev
```
For a single javascrippt file use:
```
bun run index.js
```
The base config is:
```
C:\bun_cypress
|--- cypress.json
```
with :
```
{
  "baseUrl": "http://localhost:3000"
}
```
Exemplu fisier : example_001.cy.js when you install cypress then you have an e2e folder with examples ...

```
/// <reference types="cypress" />
describe('My App', () => {
  it('displays the correct text', () => {
    cy.visit('/')
    cy.contains('Hello, World!')
  })
})
```
This need to be in the e2e folder and run will be:
```
bun run cypress run --spec "cypress/e2e/example_001.cy.js"
```
The cypress browser can be run with this command:
```
bun run cypress open
```
The cypress can be run with :
```
bun run cypress run
```

