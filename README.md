# Admiral Frontend

This is the **Admiral** frontend that is designed to connect to a **DSL** instance.

## Getting Started

We now use just `npm` for package management.

Once installed, clone this repo and then navigate to it inside your terminal and run:

```bash
npm install
```

This will install all the required dependencies. Next, you'll need to configure your local environment. Create a local config file with the below command:

```bash
touch .env
```

Inside this file, add the following content:

```
API_ENDPOINT=https://your-graph-ql-server/
API_KEY=your-admiral-api-key
PORT=3000
```

Replace with an address of the GraphQL server you would like to connect to. This can be either a `localhost` address or a live server.

### Setup DSL Components

DSL Components used to be a dedicated package that was installed via `npm`. This has now been changed and the code that lived inside the package is instead kept as a copy inside the `src/shared` directory. The code here should be constructed in a "generic" way so that it can be lifted and re-used across projects.

Running this code as a package was fraught with errors and prone to being brittle; especially for deployments. Therefore, the decision has been made that this is simply included in the source code directly. This gives some advantages:

1. It's easier to customise and break away from at any time
2. Outside dependencies cannot effect the current project
3. Can more easily be tree shaken and unused code won't be bundled
4. A _much_, **much** nicer development experience

### Running Locally

Once the previous steps have been completed, you can start the local environment with:

```bash
npm run dev
```

Once completed, the site will be available on [http://localhost:3000](http://localhost:3000) by default.

### Style / Lint

We use [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to enforce the coding style. It is **highly recommended that you use a format on save** option inside your editor of choice to ensure contributions match the coding style.

You can also run these tools at any time with:

```bash
npm run lint
```

### Generate Query Types

Typescript types for queries can easily be generated via the CLI, available for use in the frontend. These are generated using the `graphql` script option in `package.json`.

Before you can run this, you will need to ensure you have created the `.env` file as per the instructions above. You can then run the generation with the following:

```bash
npm run graphql
```

As part of the generation, we are also automatically creating hooks for each query. This means we don't have to manually create hooks for these. Generated code will be created inside: `src/shared/generated/`

## Dev Environment

The pipeline will automatically attempt to deploy merges to `master` into a live dev environment. This is available on the following URL:

http://at-storefront-dev.eba-jfjscmaw.eu-west-1.elasticbeanstalk.com/
