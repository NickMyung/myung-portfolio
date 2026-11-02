# Application source snapshot

This folder contains the application source and configuration used for the review pack. Dependencies, build output, secrets, and Git internals are excluded. The snapshot includes local working-tree changes and must not be interpreted as an exact copy of the referenced Git commit.

To run locally with a compatible Node.js installation:

```sh
npm ci
npm run dev
```

For a production build:

```sh
npm run build
npm run start
```

External web fonts and links may require network access. See ../manifest.json for source hashes and ../code-excerpts.md for selected excerpts.
