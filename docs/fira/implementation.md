---
title: Implementation
---

# Implementation

## How the minigame works

In the minigame, players are tasked to create a set of commands that will be executed by a virtual machine in the preview scene in hopes of powering on all computers and reaching the exit. Although the method of getting the commands varies, the minigame will attempt to read from a virtual machine file and execute its commands as necessary.

### Obtaining code for basic and advanced modes

In the case of the two game modes in Unscripted, both modes make use of Fira's core module to generate virtual machine code. In either mode, memory management and pushing/popping from memory is automatically managed and written for the player.

#### Basic Mode

In the basic mode, the player works inside of a NadiaVM interpreter, which will parse and execute commands sent to it. This is achieved by creating an interactive `CSNadiaVM`.

#### Advanced Mode

In the advanced mode with the Fira API module, players get direct low-level access to the NadiaVM writer via the `MinigameLevel` class, which returns the writer in addition to level data. When running `close` on this class, the file is compiled and written for the previewer to read.

`MinigameLevel` also supports context management with the `with` keyword in Python, automatically taking care of file operations for the player.

##### Via `get_level_information`

For the advanced mode via the Fira API module, the APIs link to a hidden VM writer ([`CSNadiaVMWriter`](../vm/#csnadiavmwriter)) that gets invoked when the player calls functions in the API. The [`exit`](../api/player/#exit) method of the [`CSPlayer`](../api/player/#csplayer) class is responsible for writing the VM file, hence why Python scripts must invoke this function. When the player is finished writing the script and clicks "Run", the Python compiler compiles and executes the script inside of Ren'Py's Python environment, generating the VM file in the process in the save directory of the game that will be read by the preview scene.

### Obtaining code from third-party tools

Third-party tools will most likely create an abstraction layer in a similar fashion to the Fira API module. These tools will eventually create the VM file that the preview scene will read. Implementation of the VM varies depending on the tool, so it is recommended that you read the documentation of the respective tool or library on how it writes VM files.

Players may also choose to write their own VM files directly, though this is not generally recommended.

### Preview scene execution (Advanced mode only)

Once the VM file is written, the data is sent to a virtual machine emulator ([`CSNadiaVM`](../core/vm/#csnadiavm)), which is later sent to the preview scene. Once the preview scene renders the world and components, the preview scene will call on the VM emulator to execute the commands in order. For commands that require animation (i.e., `move` and `collect`), execution pauses as the preview scene presents the corresponding animation.

## NadiaVM

Fira contains the virtual machine used in processing and managing the preview scene, NadiaVM. NadiaVM is a simple, stack-based virtual machine with a couple of commands. The VM is designed to focus specifically on the minigame's internal game logic and is not necessarily suitable for general use. NadiaVM files are registered with the file extension `.nvm` and are typically plain text files with the corresponding instructions.

### Commands

NadiaVM comes with several commands used to perform tasks in the minigame:

- `alloc (str) (int)`: Create a new array with a name and a specific size.
- `collect`: Collect a coin in the world. Acts like a pause in VM.
- `push (str) (int)`: Push the top of the stack to the given array at the index.
- `pop (str) (int)`: Pop the item located at the array's index and move it to the
  top of the stack.
- `set (constant|casted_value) (any)`: Set the top of the stack to a constant value.
- `move player (str)`: Move the player in a given direction.
- `exit player`: Try to end the execution script and finish the level.
- `add`: Add the two topmost values on the stack.
- `sub`: Subtract the two topmost values on the stack.
- `mult`: Multiply the two topmost values on the stack.
- `div`: Divide the two topmost values on the stack.
- `neg`: Negate the topmost value on the stack. Effectively the same as pushing `-1` on the stack and calling `mult`.
- `bind (str) (command)`: Bind a given command to a name.
- `cast (str) (any)`: Cast the value to a given name, similar to variable assignment.

### Limitations

NadiaVM is a simple stack-based virtual machine designed to process commands quickly, meaning that there are limitations to how it works:

- NadiaVM files can't reference each other.
- NadiaVM doesn't support control flow or functions.
- NadiaVM doesn't work with pointers or deal with memory addresses; rather, it works with creating its own lists and modifying them accordingly.
