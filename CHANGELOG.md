# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.0.3] - 2026-08-24

### Changed

- Adopt the shared 2h2d Oxlint policy, including the blanket ban on non-const type assertions.
- Cap Pi compatibility at 0.84.2 and document the equivalent native behavior available in Pi 0.84.3.

### Fixed

- Reject primitive JSON values where release validation requires package metadata objects.

### Security

- Require npm releases to match a locally built SHA-256 recorded in an SSH-signed release commit before trusted publishing can stage the package.
- Require code-owner review for release policy, protect `main` and `v*` refs, and gate npm OIDC behind a reviewed tag-only environment.
- Update the Pi development dependency to 0.84.2, including patched transitive HTTP and glob dependencies.

## [0.0.2] - 2026-08-07

### Fixed

- Avoid repeating the extension name in Pi's startup display.

## [0.0.1] - 2026-08-07

### Added

- Prevent Pi from persisting model, provider, and thinking-level changes as defaults.
