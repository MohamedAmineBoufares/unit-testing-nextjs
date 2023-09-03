# Testing in Next.js

## Table of contents

- [Testing in Next.js](#testing-in-nextjs)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Licence](#licence)

## General info

A simple project to try different testing types in Next.js.

## Technologies

The project is created with:

- Node.js: 18.17.1
- [pnpm](https://pnpm.io/installation#using-npm): 8.6.12
- Next.js: 13.4.19
- Taliwind CSS: 3.3.3
- Zustand: 4.4.1
- Jest: 29.6.2
- React Testing Library: 14.0.0
- Cypress: 12.17.4

## Setup

To run this project:

1. Install it locally using [pnpm](https://pnpm.io/installation#using-npm)

```bash
pnpm i
```

2. Run the development server:

```bash
pnpm dev
```

3. Run unit tests:

```bash
pnpm test
```

4. Run unit tests with coverage:

```bash
pnpm test:coverage
```

5. Run E2E tests using Cypress:

```bash
pnpm test:e2e
```

**Note:** The coverage report is generated in the `coverage` folder.

## Licence

[MIT licensed](./LICENCE).
