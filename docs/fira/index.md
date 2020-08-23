---
title: Home
---

# The minigame backend for Unscripted

**Fira** is the main backend and API code for the minigame in [Unscripted](https://unscripted.marquiskurt.net), a visual novel about software development. Fira provides many facets of the minigame, including a public API that players can use to code solutions to the minigame puzzles, a configuration and data generator from level files, and a virtual machine that runs low-level code that the minigame processes.

!!! info Preview version
    The following pages contain the documentation for a preview version of Fira, v2.0.0. If you're looking for v1.x documentation, see [https://fira.marquiskurt.net](https://fira.marquiskurt.net).

!!! warning Under Construction
    The documentation for Fira v2.0.0 is currently being updated. Proceed with caution.

---

## Getting started

Fira comes pre-packaged in Unscripted but can be installed outside of the game to work better with IDEs and other Python tools such as Poetry.

### Dependencies

Fira is both a Python 2 and Python 3 package and relies on the TOML Python package. These dependencies will be installed with the package, either from source or from PyPI.

### Quick Start: Install on PyPI

Fira is available on PyPI and can be installed as such:

```
pip install uvn-fira
```

### Install from source

To install Fira from the source code, first clone the repository from GitHub via `git clone`. You'll also need to install [Poetry](https://python-poetry.org). In the root of the source, run the following commands:

```
poetry install
poetry build
```

The resulting wheel files will be available in the `dist` directory.
