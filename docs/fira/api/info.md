---
title: Info
---

# Info

The info submodule contains the utilities to get the world and player information for a given
level.

## Methods

### get_level_information(level)

Create a world and player based on a game level.

#### Arguments

- **level** (int): The level number as indicated by the minigame.
- **fn_path** (str): The path to where the NadiaVM file will be written to. This excludes
  the file name itself.
- **\*\*kwargs** (dict): Arbitrary keyword arguments.

#### Kwargs

New
{: .label}

- **config_file** (str): The path to the level configuration file, excluding the file name.
- **exists** (callable): The function to use, if not relying on the built-in `os` module
  to determine whether the configuration file path is loadable.
- **load** (callable): The function to use, if not relying on the the built-in `open`
  function to load the file object.

#### Returns

- **info** (tuple): A tuple containing the [`CSPlayer`](./player/#csplayer) object and the
  [`CSWorld`](./world/#csworld) object
