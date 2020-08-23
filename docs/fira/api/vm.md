---
title: VM
---

The `vm` submodule contains a public-facing version of the virtual machine author from the Core.
The VM writer is often used when using the `uvn_fira.api.info.MinigameLevel` class to quickly write
virtual machine code in a low-level environment. The writer is an implementation for NadiaVM
and is supported in the basic and advanced modes of the game.

## About NadiaVM

NadiaVM is a simple, stack-based virtual machine with a couple of commands. The VM is designed to focus specifically on the minigame’s internal game logic and is not necessarily suitable for general use. NadiaVM files are registered with the file extension .nvm and are typically plain text files with the corresponding instructions.

### Virtual Machine Commands

In the NadiaVM, there are several commands that players can use:

- `alloc (str) (int)`: Create a new array with a name and a specific size.
- `collect`: Collect a coin in the world. Acts like a pause in VM.
- `push (str) (int)`: Push the top of the stack to the given array at the index.
- `pop (str) (int)`: Pop the item located at the array's index and move it to the
  top of the stack.
- `set constant (any)`: Set the top of the stack to a constant value.
- `move player (str)`: Move the player in a given direction.
- `bind (str) (command)`: Makes an alias of the command to the assigned string.
- `cast (str) (any)`: Cast the value to the given name. If a value is already cast to the name, the
  new value will be used instead of the old one.
- `exit player`: Try to end the execution script and finish the level.
- `add`: Add the two topmost values on the stack.
- `sub`: Subtract the two topmost values on the stack.
- `mult`: Multiply the two topmost values on the stack.
- `div`: Divide the two topmost values on the stack.
- `neg`: Negate the topmost value on the stack. Effectively the same as pushing `-1` on the stack
  and calling `mult`.
  The VM writer presented here provides abstracted versions of these commands that will be written to
  the requested path.

---

## CSMinigameWriter

A list-based implementation of the NadiaVM file writer.

This class is similar to CSNadaVMWriter and contains the same methods; however,
CSNadiaVMWriterBuilder uses a list to store its code rather the string that CSNadiaVMWriter
uses. This is useful in instances where the builder needs to remove pieces of code or work
with the current set of instructions as a list.

### Attributes

- **instructions** (list): The list of VM commands to write to the VM file.

### \_\_init\_\_

Construct the VM writer.

#### Arguments

- **path** (str): The path to the compiled NadiaVM file (`.nvm`) to write to.

### alloc(array_name, size=1)

Allocate a space of memory for a given array.

#### Arguments

- **array_name** (str): The name of the array to allocate space for.
- **size** (int): The size of the array. Defaults to 1.

### bind(name, command)

Bind the following name to a command.

#### Args

- **name** (str): The name to bind a command to.
- **command** (str): The command to bind the name to.

### cast(name, value)

Cast the value to a name.

#### Args

- **name** (str): The name to cast the value to.
- **value** (any): The value to cast the name to.

### push(array, index)

Push the top-most item on the current stack to the given array.

#### Arguments

- **array** (str): The name of the array to push to.
- **index** (int): The index of the array to push to.

### pop(array, index)

Pop the item from the array at a given index and set it at the top
of the execution stack.

#### Arguments

- **array** (str): The array to pop an item from.
- **index** (int): The index of the item in the array to pop.

### set(value)

Set the top of the stack to a constant value.

#### Arguments

- **value** (any): The value to create a constant for.

### move(direction)

Move the player in a given direction.

#### Arguments

- **direction** (str): The direction the player will move in.

### collect()

Collect. In the VM, this acts like a pause.

### add()

Add the two topmost values on the stack.

### sub()

Subtract the two topmost values on the stack.

### mult()

Multiply the two topmost values on the stack.

### div()

Divide the two topmost values on the stack.

### neg()

Negate the topmost value on the stack.

Effectively, this is the equivalent of pushing -1 onto the stack and calling [`mult`](#mult).

### exit()

Try to exit the world and end execution of the script.

### write()

Write the VM code to the requested file.
