---
title: Info
---

# Info

The info submodule contains the utilities to get the world and player information for a given
level.

## Methods

### get_level_information(level)

Create a world and player based on a game level.

!!! warning "Unsupported Method"
    This function may no longer be supported in future releases of the Fira API and may cause
    unexpected results. It is recommended to use `MinigameLevel` instead of this function
    when possible.

#### Arguments

- **level** (int): The level number as indicated by the minigame.
- **fn_path** (str): The path to where the NadiaVM file will be written to. This excludes
  the file name itself.
- **\*\*kwargs** (dict): Arbitrary keyword arguments.

#### Kwargs

- **config_file** (str): The path to the level configuration file, excluding the file name.
- **exists** (callable): The function to use, if not relying on the built-in `os` module
  to determine whether the configuration file path is loadable.
- **load** (callable): The function to use, if not relying on the the built-in `open`
  function to load the file object.

#### Returns

- **info** (tuple): A tuple containing the [`CSPlayer`](./player/#csplayer) object and the
  [`CSWorld`](./world/#csworld) object

## Classes

### `MinigameLevel`
A class representation of a minigame level.

This class is designed to be used with the `with` argument as a means to directly write virtual
    machine code without any abstraction involved.

When used in a context with the `with` statement, the minigame level class may also return the
    configuration data for the level. This can be used to programmatically determine what needs
    to be written as VM code.

!!! example
    ``` python
    with MinigameLevel(1) as vm, data:
        devices = data.devices().as_list()
        vm.alloc("world_coins", len(devices))
        vm.alloc("inventory", len(devices))
        for device in devices:
            vm.set(device)
            vm.push("world_coins", devices.index(device))
    ```

#### `__init__(self, level, vm_path, provide_config=False, **kwargs)`
Initialize a minigame level reader.

##### Args
- **level** (int): The level number to read.
- **vm_path** (str): The path to the compiled NadiaVM file to write.
- **provide_config** (bool): Whether to include the configuration file while accessing the
-     writer. Defaults to False.
- **\*\*kwargs** (dict): Arbitrary keyword arguments.

##### Kwargs
- **config_file** (str): The path to the level configuration file, excluding the file name.
- **exists** (callable): The function to use, if not relying on the built-in `os` module to determine whether the configuration file path is loadable.
- **load** (callable): The function to use, if not relying on the the built-in `open` function to load the file object.

#### `startfile(self)`

Start the writing process.

##### Returns

- **data** (tuple): A tuple that contains the virtual machine writer (`uvn_fira.api.vm.CSMinigameWriter`) and the game data (`CSWorldData`).

#### `close(self)`

Write the contents of the virtual machine code to the requested file.