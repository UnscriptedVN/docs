---
title: Apple
---

# `apple`

The `apple` module contains important utilities to make signing, notarizing, and building
packages for macOS easier.

The functions in this module require a device running macOS with Xcode 10 or higher.

## `darwin_only(call)`

A decorator for macOS-specific commands.

This should be used to denote that a function only works on macOS due to reliance on built-in
tools from macOS or Xcode.

## `package_app_zip(app: str)`

Create a ZIP file of the app.

Args:

- app (str): The path to the macOS to make an archive of

## `build_pkg(app: str, identity: str, package_name: str)`

Create an installable package from a macOS app.

By default, it will create an app package that installs to `/Applications/`. This package
installer can also be used to submit an app to the Mac App Store.

If the package name isn't a file path, `.pkg` will automatically be appended at the end of the
name.

Args:

- app (str): The path to the app to create a package of.
- identity (str): The identity to sign the package with
- package_name (str): The name or path of the resulting package.

## `code_sign(identity: str, app_directory: str, **kwargs)`

Digitally sign a macOS application with a signing identity and any entitlements.

Args:

- identity (str): The identity to use during signing, usually a Developer ID.
- app_directory (str): The path to the macOS application for signing.
- \*\*kwargs: Arbitrary keyword arguments.

Kwargs:

- entitlements (str): (Optional) The path to the entitlements the app should be signed with.
- enable_hardened_runtime (bool): Whether to sign the app with the hardened runtime on.

## `upload_to_notary(app: str, identifier: str, username: str, password: str, **kwargs) -> str`

Upload a macOS application archive to Apple's notary service for notarization.

Args:

- app (str): The path to the macOS application to send to Apple.
- identifier (str): The bundle identifier of the application.
- username (str): The username (email address) of the Apple ID to notarize under.
- password (str): The password of the Apple ID to notarize under.
- \*\*kwargs: Arbitrary keyword arguments.

Kwargs:

- provider (str): The App Store Connect or iTunes Connect provider associated with the Apple
  ID used to sign the app.

Returns:

- uuid_str (str): The request UUID.

## `check_notary_status(uuid: str, username: str, password: str) -> int`

Get the notarization status of a given UUID.

Arguments:

- uuid (str): The UUID of the app to check the status of.
- username (str): The user that submitted the notarization request.
- password (str): The password to use to sign into Apple.

Returns:

- status (int): The status code associated with the UUID notarization request. A code of `-1`
  indicates that getting the status code failed, either because the item could not be
  found or because no status code has been given yet.

## `staple(app: str)`

Staple a notarization ticket to a notarized app.

Args:

- app (str): The path of the macOS app to staple the ticket to.
