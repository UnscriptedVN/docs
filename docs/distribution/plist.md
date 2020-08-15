---
title: Property Lists
---

# `plist`

This module contains some utilities that help fix the property lists
in the macOS versions of a Ren'Py project.

## `fix_plist(plist_file: str, identifier: str, p_copyright: str)`

Add the bundle identifier and copyright text to a Ren'Py-built macOS app's Info.plist.

Args:

- plist_file (str): The path to the plist file to modify
- identifier (str): The bundle identifier to set the app to
- p_copyright (str): The human-readable copyright text to attach
