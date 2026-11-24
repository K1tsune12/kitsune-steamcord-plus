# Changelog

## 1.1.0 — 2026-11-24

Brings in Steamcord 1.47.0 and 1.48.0.

### New

- Switch between Discord accounts. Settings → Account lists the accounts saved on the device, with Switch and Remove for each one. Add an account shows a QR code to scan with the Discord app on your phone, in Game Mode.
- A power button in the voice toolbar, next to Disconnect, turns the Discord session off after a confirmation. The same control stays in Settings → Account.

### Changes

- Settings are split into six categories: Account, Status, Sound, Alerts, Video and General. The last one opened is remembered. The Language setting is under General.

## 1.0.0 — 2026-11-23

First Steamcord Plus release, based on Steamcord 1.46.1.

### New

- The voice overlay, its join and leave lines and the voice panel show each person's server nickname, falling back to their display name and then their username. A "Names shown" overlay setting switches between the three.
- A Custom overlay position, next to the eight presets, with horizontal and vertical offsets from 0 to 100% of the free screen space.
- A Language setting that overrides the SteamOS language. Português (Brasil) now covers the Discord session strings that were still in English.

### Fixes

- The voice overlay and the Steam performance overlay (FPS counter) show together in Game Mode. gamescope draws a single external overlay window, so the two used to hide each other; the voice overlay now uses gamescope's notification layer.
- The overlay redraws when the backend writes a new state instead of polling every 300 ms, so the speaking ring follows the voice without that delay.
- A repository without a published release no longer makes the update check retry every 30 seconds.

### Changes

- Installs as a separate Decky plugin named Steamcord Plus. Run it or Steamcord, not both.

Earlier history is in the upstream project's changelog.
