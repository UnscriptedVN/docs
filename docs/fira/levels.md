---
title: Levels
---

# Level Structure

The minigame's level files are a series of markup files using TOML that describe the information about that level, as well as the overall layout of the level's world. Level files have a root key `level` with two subkeys, `map` and `config`.

### Configuration Fields

There are a few primary fields in the `config` entry of the TOML file:

- `name`: The name of the level
- `check`: A list of strings containing the requirements for completing the level
- `bugs`: (Optional) The list of "intentional bugs" to enable in this level
- `allowed-blocks`: A list of strings containing the allowed blocks that appear in the basic mode editor

!!! warning
    `allowed_blocks` is deprecated and should not be used in future level configurations.

#### Checks

- `player-at-exit`: Whether or not the player has reached the exit
- `player-collects-all`: Whether or not the player has collected all of the coins

#### Allowed blocks

- `move`: Directional movement blocks
- `collect`: Collect coin clock
- `exit`: Exit level block

#### Bugs

- `missing-poweron-bind`: The binding for `poweron` to `collect` is missing
- `collision-checks-fail`: Collisions between walls or other objects is disabled
- `exit-changes-randomly`: The location for the exit randomly changes

## Map Construction

The `map` subkey contains a single value `layout` that contains a multiline string that describes the world using ASCII characters. An example is provided below:

```
%%%%%%%
%P . E%
%%%%%%%
```

### Map Symbols

There are five acceptable characters to use when creating the layout string:

- `%`: A wall
- `P`: The player's starting position
- `.`: A desk with a turned off computer
- `E`: The exit block to stand on
- <code>&nbsp;</code>: An air block or null space
- `X`: Void space

### Limitations

There are a few limitations regarding the world map string:

- There cannot be more than one player or exit in a map.
- Each line must have the same number of characters to keep a consistent size.

## Example level configuration

```toml
[level.config]
name = "Example"
allowed-blocks = ["move", "exit"]
check = ["player-at-exit"]

[level.map]
layout = """
%%%%% %%%%%
%  P% %E  %
% %%% %%% %
% %%% %%% %
%         %
%%%%%%%%%%%
"""
```
