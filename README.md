# Lift Dollar Swap

This project aims to enable USDL swaps against USDC or USDT at as close to 1:1 as possible.

## Install Dependencies

We use yarn workspaces for dependency management. Running `yarn install` under `./` will install dependencies & packages.

## Running the application

1. Run `yarn start`.
2. Open in your Browser `http://localhost:3009/`.

## LiFi widget playground
1. http://localhost:3009/inside-ledger-dapp: this demo use an iframe connector
2. http://localhost:3009/ledger-iframe-embed is embedded inside an iFrame using the same component of point 1.

## Running Tests

We use [Jest](https://jestjs.io/) & [React Testing library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing. To compile the code and run all unit tests, use the following command:

```
yarn test:ci
```

## E2E

We use Cypress for E2E testing. Specs with the suffix `.cy.tsx` are cypress tests. To run the tests, you can use the following commands:

- `yarn cy`.

## Linting & Code formatting

We use [eslint](https://eslint.org/) to enforce code style and [prettier](https://prettier.io/) for code formatting. Our eslint config is defined in our [frontend repo](https://github.com/paxosglobal/frontend/tree/main/packages/eslint-config).

```
yarn lint
// OR
yarn lint:fix // auto fix eslint errors

yarn prettier
```
