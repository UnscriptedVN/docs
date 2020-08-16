# Syntax

The syntax for a Simple Changes file (.changes) is dead-simple, mirroring that of TOML.

- Comments are wrapped in `/*` and `*/`.
- Versions are denoted by square brackets: `[v1.0.0]`.
- Notes are denoted with dashes in the beginning and end with a newline.

Versions should always be organized in descending order, starting from the latest version. Our official parser package reads the changelogs in this way.

!!! tip
    It is recommended to use the Simple Changes format alongside the [Keep a Changelog](https://keepachangelog.com) strategy to ensure decent, human-readable changelogs.

## Example

```simplechanges
/*
    Project Scotia Changelog
    This file provides the changelog for Project Scotia.
*/

[v1.0.1]
- Fixes a bug where System32 caused a crash when being deleted.
- Updates flight manuals to latest documentation.

[v1.0.0]
- Initial release.
```
