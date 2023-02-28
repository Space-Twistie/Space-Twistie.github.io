## Install

```
npm install
```

## Run

Generate a production-ready build:

```
npx @11ty/eleventy
```

Or build and host locally on a local development server:

```
npx @11ty/eleventy --serve
```

Or in [debug mode](https://www.11ty.dev/docs/debugging/) to see all the internals:

```
# Mac OS/Linux/etc
DEBUG=Eleventy* npx @11ty/eleventy

# Windows
set DEBUG=Eleventy* & npx @11ty/eleventy

# Windows (Powershell in VS Code)
$env:DEBUG="Eleventy*"; npx @11ty/eleventy
```
