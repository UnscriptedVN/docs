---
title: Home
---

# Ren'Py distributions made easier

The **Ren'Py Distribution Tools** is a Python module that aims to make distribution of Ren'Py visual
novel projects easier by automating it with Python utilities and classes.

## Getting Started

### Quick Start: Install via PyPI/Poetry

To install via PyPI:

```
pip install renpy-distribute-tools
```

Or, if you're using a Poetry project, just add the dependency:

```
poetry add renpy-distribute-tools
```

## What's included

The Ren'Py Distribution Tools set comes with utilities that make it easy to do the following:

- Modifying a visual novel's `Info.plist` with an identifier and copyright field.
- Code-signing the visual novel binaries in the Mac app with entitlements.
- Creating a ZIP copy of the Mac app and sending it to Apple's notarization servers.
- Verifying the status of a notarization request.
- Stapling the notarization ticket to a macOS app.
- Publishing content to Itch.io.
