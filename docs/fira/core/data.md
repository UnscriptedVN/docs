---
title: Data
---

# Data

This submodule contains the world data generator code for the configuration system.

## CSWorldDataGenerateError(Exception)

Could not generate the world data.

## CSWorldDataGenerator

The base class for the world data generator for world maps.

The world data generator reads the given input string and returns a grid-like two-dimensional
array for use with world manipulation or storage.

### \_\_init\_\_

Construct the world data generator.

#### Arguments

- **data** (str): The string containing the world's data to parse. Defaults to an empty string.

### size()

Get the size of the given world data grid.

#### Returns

- **dimensions** (tuple): A tuple containing the number of rows and columns in the grid.

### to_grid()

Get the world data as a world grid.

#### Returns

- **grid** ([CSGrid](./grid/#csgrid)): A world grid containing the world data.

### coins()

Get the world coin data.

#### Returns

- **grid** ([CSGrid](./grid/#csgrid)): The world grid containing the coins.

### walls()

Get the world wall data.

#### Returns

- **grid** ([CSGrid](./grid/#csgrid)): The world grid containing the walls.
