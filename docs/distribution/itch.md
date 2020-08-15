---
title: Itch
---

# `itch`

The `itch` module contains the code necessary to push projects to Itch.io using the butler
tool.

## `ButlerPlatformType(Enum)`

Enumerations for platform types.

## `Butler`

The handler for publishing content to Itch.io using Butler.

### Attributes

- author (str): The itch.io username that is publishing content.
- project (str): The project that the author is publishing content for.
- bin (str): The path to the Butler executable.
- tag_rules (dict): A dictionary containing rules for additional tags.

### Methods

#### `__init__(self, author, project, **kwargs)`

Initialize a Butler class.

Arguments:

- author (str): The itch.io user that will submit a project.
- project (str): The project that the user will submit.

Kwargs:

- exec (str): The path to the Butler executable file. Defaults to "butler".

#### `push(self, file: str, **kwargs)`

Push the file to the Itch.io page.

Arguments:

- file (str): The path to the file to push.
- \*\*kwargs: Arbitrary keyword arguments
  Kwargs:
- user_version (str): The user version to use, if any.
- with_tag_rule (str): The tag rule to use. This is used as a channel.
- with_custom_tag (str): The tag to use at the end of the tag rule name.

#### `add_tag_rule(self, name: str, platform: ButlerPlatformType)`

Create a new rule for the project's channel tags.

Arguments:

- name (str): The rule that will determine what platform to store it under.
- platform (ButlerPlatformType): The platform for that rule.
