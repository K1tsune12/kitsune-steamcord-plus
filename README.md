# Steamcord Plus

Discord in Steam Gaming Mode: voice chat, private messages and screen sharing from the Quick Access Menu, as a [Decky Loader](https://github.com/SteamDeckHomebrew/decky-loader) plugin for Steam Deck, Bazzite and SteamOS.

A personal fork of [Steamcord](https://github.com/Necrosiak/Steamcord) by Necrosiak. Everything upstream does is kept; this edition adds:

- **Server nicknames in the voice overlay.** The in-game roster, the join and leave lines and the voice panel show the name each person uses in that server, falling back to their display name and then their username. A setting switches between the three.
- **Free overlay placement.** Eight preset positions, plus a **Custom** position with horizontal and vertical offsets (0 to 100% of the free screen space).
- **Works next to the Steam FPS counter.** gamescope composites only one external overlay window, so the voice overlay and the performance overlay used to hide each other. In Game Mode the voice overlay sits on gamescope's notification layer and both stay visible.
- **Language picker.** The interface follows the SteamOS language by default; Settings has a Language entry to force any of the nine languages, including Português (Brasil).

## Install

1. Download the zip from the [latest release](https://github.com/K1tsune12/kitsune-steamcord-plus/releases/latest).
2. In Decky Loader, enable Developer mode and choose **Install plugin from ZIP file**.
3. Open Steamcord Plus from the Quick Access Menu. The first start installs Vesktop (Flatpak) and shows a QR code to log in to Discord.

It installs as its own plugin, **Steamcord Plus**. Run it or Steamcord, not both: they drive the same Vesktop instance.

## Build

```sh
pnpm install
pnpm run build
```

The plugin folder is `dist/`, `main.py`, `plugin.json`, `package.json`, `LICENSE`, `py_modules/` and the contents of `defaults/` placed at its root.

## License

BSD 3-Clause, same as upstream. See [LICENSE](LICENSE).
