### General ESM workaround

```
yarn install
yarn transpile-loops
yarn start:dev
```

Implications of this approach:

- I think you'll also need to add the `transpile-loops` command to your build steps.
- the import statements are a bit wild now:
  - to get the correct types, you can still import from the "loops" package: `import type LoopsClient from 'loops';` since the typescript lines are purged before the import can cause an issue.
  - to get the correct runtime, you need to import from the folder creating by the `transpile-loops` command: `import LoopsEmailClient from 'node_modules/loops-cjs/dist'`
