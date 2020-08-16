# Unscripted Documentation Center

The **Unscripted Documentation Center** offers a centralized, easy-to-use place to browse and read up on documentation for Unscripted's in-house projects.

## Getting started

### Requirements

- Python 3.7+
- Poetry package manager

### Building the website

To build the website, clone the repository via `git clone` and then run `poetry install` to install dependencies.

Then, in Poetry's shell (`poetry shell`), run the following command:

```
mkdocs build
```

### Auto-deployment

This repository contains a GitHub action that will automatically run `mkdocs deploy` when new commits are added to the root branch. The changes are made live under the `gh-pages` branch.
