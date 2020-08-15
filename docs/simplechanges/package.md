---
title: Python Package
---

# Package

We offer an official package that parses Simple Changes files into a dictionary that contains the changelog information.

## Installation

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

## Usage

To get the latest version in the changelog, assuming the changelog builds up:

```py
from simplechanges import SimpleChangesParser

changelog = SimpleChangesParser("changelog.changes")
changelog.parse()
version, notes = changelog.latest
```

After parsing, you also can browse for a specific version:

```py
from simplechanges import SimpleChangesParser

changelog = SimpleChangesParser("changelog.changes")
changelog.parse()
version, notes = changelog.versions["v1.0.0"]
```

## `SimpleChangesParser`

The parser object for the Simple Changes format.

### Attributes

#### `versions`

(`dict`) The parsed changelog.

#### `latest`

(`tuple`) The latest version in the changelog and its associated notes.

### Methods

#### `parse()`

Parse the file contents into a dictionary.
