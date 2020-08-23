---
title: Player
---

# Player

The player module contains the functions and classes necessary to manipulate players in
a minigame world.

The module contains a class that lets players control the behavior of their minigame counterpart
by moving in a given direction, collecting an item, etc. ([`CSPlayer`](#csplayer)). To prevent accidental
manipulation of the original world data, the player class uses its own position property to
update its location.

## CSPlayer

The base class for a player in the minigame world.

The player object contains methods for manipulating the current player's position and inventory system.

### \_\_init\_\_

Construct the Player object.

#### Arguments

- **in_world** ([CSWorld](./world/#csworld)): The world the player is located in.
- **\*\*kwargs** (dict): Arbitrary keyword arguments.

#### Kwargs

- **at_position** (tuple): The position the player should be placed in. Defaults to the player
  position in the world ([`CSWorld.player`](./world/#player)).
- **with_inv** (list): A list containing items that the player will have to start. Defaults to
  an empty list.
- **vm**: The virtual machine writer, if available.

### location()

Get the player's current position.

#### Returns

- **position** (tuple): The current coordinates of the player.

### origin()

Get the original starting position of the player.

#### Returns

- **origin** (tuple): The coordinates of the player's original position.

### capacity()

Get the the count of how many items the player has.

#### Returns

- **count** (int): The number of items in the inventory.

### blocked()

Determine whether a player is blocked at a given position.

#### Returns

- **blocked** (bool): True if any walls are near the player (1-block radius).

### move(direction)

Move the player in a direction, if the direction results in the player
being able to move into a non-walled area.

#### Arguments

- **direction** (str): The direction the player should move in. Acceptable directions
  are `"north"`, `"south"`, `"east"`, and `"west"`.

#### Returns

- **player** ([CSPlayer](#csplayer)): The Player that committed the move action. This is useful in cases
  where chaining methods is preferred.

### collect()

Add an item into the player's inventory at the player's current position.

If the item does not exist in the world, or the player already has the item in question,
nothing occurs.

!!! danger "Removed"
    This method is no longer available since Fira v2.0.0. Use `CSPlayer.toggle` instead.

#### Returns

- **player** ([CSPlayer](#csplayer)): The Player object that committed the collect action. This is useful
  in cases where chaining methods is preferred.

### toggle()

Turn a nearby computer on or off.

If there isn't a device to turn on, nothing occurs.

#### Returns

- **player** ([CSPlayer](#csplayer)): The Player object that committed the toggle action. This is useful
  in cases where chaining methods is preferred.

### finish()

Finish all instructions and compile the VM code.

!!! warning "Migrating from v1.x"
    In previous versions of the Fira API, this method was called `exit()`.