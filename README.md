# Coming Soon Page

This repository contains a simple "coming soon" page.

## Running Tests

A small Node.js test ensures that **index.html** references required assets and that those files exist on disk.

```bash
node tests/fileReferences.test.js
```

### Optional HTML validation

If you have [`htmlhint`](https://github.com/htmlhint/HTMLHint) installed you can also run a basic markup check:

```bash
npx htmlhint index.html
```
