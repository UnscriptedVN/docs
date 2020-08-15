---
title: Fixed ZipFile
---

# `fixed_zipfile`

## `ZipFile`

The ZipFile class is a patched version of the ZipFile class in the `zipfile` module that
retains the attribute permissions for files.

### Methods

#### `extract(self, member, path=None, pwd=None)`

#### `extractall(self, path=None, members=None, pwd=None)`

## `MyZipFile`

The MyZipFile class is a patched version of the ZipFile class in the `zipfile` module that
retains the attribute permissions for files.

!!! warning Deprecated
    MyZipFile has been renamed to ZipFile.