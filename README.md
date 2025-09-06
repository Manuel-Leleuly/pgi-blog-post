# PGI - Blog Post

## Overview

This is a simple blog post made with Next.js for the purpose of finishing the technical test from PGI

## How to use

### Local

If you want to run this project locally, you can do so by first installing all the dependencies required:

```
bun --bun install
```

Then, start the development environment:

```
bun --bun run dev
```

> [!WARNING]
> This repo uses [MockAPI](https://mockapi.io) for storing and manipulating data.
> Please take a look at [PostSchema](src/api/post/model/post.ts) for creating the data tables

## Development Requirements

- IDE (VSCode, WebStorm, Cursor, Atom, Notepad++, VIM, etc.)
- BunJS (`npm install -g bun`)

## Environment Variables

| Name                     | Optional | Description                          |
|--------------------------|----------|--------------------------------------|
| NEXT_PUBLIC_MOCK_API_URL | no       | base url of MockAPI for storing data |

## Current limitations / errors
1. MockAPI doesn't yet support sorting. The sorting mechanism is handled in the FE side
2. Tanstack form (at the date this project is written) doesn't support multistep form. I can utilize [Formity](https://www.formity.app/) for multistep implementation. However, I haven't used that before and the documentation made it seemed like it's really hard to implement and maintain. Therefore, I made a little bit of workaround where the `next` button only disables when the fields that are currently rendered are not valid.