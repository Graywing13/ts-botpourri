# TS Botpourri

It's been a while since I revisited botpourri. There are some things I want to do, so I am bringing botpourri back :snowman2:

## Commands

```bash
yarn tsc -w
```

- Compile typescript with on-save watch

```bash
node dist/app.js
```

- Run app

## Learnings

### Code

Terminology

- **Axios** (library) is for making requests
- **Express** (library) is for receiving requests
- **HTTP** (module) lets you use http server
- **Node** (runtime environment). Uses CommonJS.

Express

- `.send()` automatically sets the content type for you. Is also better for browser caching due to ETag (resource id).

Node

- The project's entry point is specified in `package.json`'s `main`.
  - It gets put in the root of the `dist` package (need to re-run `yarn tsc -w` to see this change)

## Resources

- Node project with typescript: https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
