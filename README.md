### Loops Bug

This is a minimally reproducible repository for the Loops SDK ESM bug.

```
yarn install

yarn start:dev
```

Running `yarn start:dev` should throw `Error [ERR_REQUIRE_ESM]: require() of ES Module`.

Node Version: v20.10.0
yarn: 1.22.21
