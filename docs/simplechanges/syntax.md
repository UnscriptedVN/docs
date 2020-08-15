# Syntax

The syntax for a Simple Changes file (.changes) is dead-simple, mirroring that of TOML.

- Comments are wrapped in `/*` and `*/`.
- Versions are denoted by square brackets: `[v1.0.0]`.
- Notes are denoted with dashes in the beginning and end with a newline.

!!! info
    Versions should always be organized in descending order, starting from the latest version. Our official parser package reads the changelogs in this way.

## Example

```
/*
    Changelog Test
*/

[v1.0.1]
- Made a small bugfix.

[v1.0.0]
- Launched!
- I ate cheese.

```
