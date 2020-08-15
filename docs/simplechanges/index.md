---
title: Home
---

# A dead simple changelog format

**Simple Changes** is a dead-simple changelog format that keeps track of changes and call them programmatically. The file format is dead-easy to follow, and you can use this package to parse the file and get information in the changelog. Simple Changes is used in Unscripted to parse the game's changelog and present the latest version information to players, but this library can be used anywhere.

## Getting started

### Quick Start: Install on PyPI

Simple Changes is bundled in Unscripted, but you can install it into your projects anywhere from PyPI with pip:

```
pip install simplechanges
```

### Install from source

To install Simple Changes from the source code, first clone the repository from GitHub via `git clone`. You'll also need to install Poetry. In the root of the source, run the following commands:

```
- poetry install
- poetry build
```

The resulting wheel files will be available in the dist directory.
