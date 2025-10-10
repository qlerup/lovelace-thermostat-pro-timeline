# Thermostat Timeline Card 🔥🕒
[![hacs_badge](https://img.shields.io/badge/HACS-Default-blue.svg)](https://hacs.xyz)

A **Lovelace card** for **Home Assistant** that lets you plan temperatures on a simple, draggable timeline 🏡📅 — and automatically apply them to your `climate.*` entities.

<img width="2291" height="581" alt="timeline" src="https://github.com/user-attachments/assets/7dce9516-1654-4eb8-87b1-6c091a3bf233" />

---

## ✨ Features

* 🧊 Per-thermostat **or merged room-based timeline**
* 🌡️➕🌡️ **Merge multiple thermostats** into one room – control them together via a single timeline 🏠🕒
* 🔥 Default temperature per row
* 🖱️ Double-click / double-tap to edit blocks
* ⏱️ “Now” indicator on the timeline
* 🤖 Optional auto-apply via `climate.set_temperature`
* 🧭 Clean, modern **Editor UI**
* 🧩 Lovelace GUI editor support
* 🧹 **Clear all data** button to reset local + sensor storage ♻️
* 🔁 **Storage sensor toggle** — choose between synced sensor or local-only mode
* 🌡️⛔ **Max temperature limit** — prevent overheating with an upper bound 🛡️

---

## ⚙️ Installation (via HACS – as a custom repository)

1. Upload/publish this repo as `lovelace-thermostat-pro-timeline`.
2. In Home Assistant → **HACS** → ⋯ → **Custom repositories** → add your GitHub URL, **Category: Dashboard**.
3. Install via HACS.
   * Resource URL: `/hacsfiles/lovelace-thermostat-pro-timeline/thermostat-pro-timeline.js`

### 🧠 Manual installation

1. Copy `thermostat-pro-timeline.js` to `/config/www/`.
2. Add the resource in **Settings → Dashboards → Resources**:
   * URL: `/local/thermostat-pro-timeline.js`
   * Type: **JavaScript Module**

---

## 🧰 Usage

Add a card to your dashboard with YAML:

```yaml
type: custom:thermostat-timeline-card
title: Thermostat Timeline
entities:
  - climate.living_room
  - climate.bedroom
storage_entity: sensor.thermostat_timeline  # optional (see “Storage & sync”)
default_temp: 20
row_height: 64
now_update_ms: 60000
show_top_now: false
now_extend_px: 76
auto_apply: true
apply_on_edit: true
apply_on_default_change: true
use_storage_sensor: true         # toggle storage sensor on/off 🔁
max_temp: 24                     # maximum allowed setpoint 🌡️⛔
labels:
  climate.living_room: Living room
  climate.bedroom: Bedroom
````

### 🧾 Options (excerpt)

| Option                    | Type    | Description                                                        |
| ------------------------- | ------- | ------------------------------------------------------------------ |
| `entities`                | list    | List of `climate.*` entities.                                      |
| `title`                   | string  | Card title.                                                        |
| `default_temp`            | number  | Default temperature per row (°C).                                  |
| `row_height`              | number  | Row height (px).                                                   |
| `now_update_ms`           | number  | Refresh interval for the “now” indicator.                          |
| `storage_entity`          | string  | Optional sync via sensor attribute.                                |
| `auto_apply`              | boolean | Automatically apply the setpoint.                                  |
| `apply_on_edit`           | boolean | Apply when editing.                                                |
| `apply_on_default_change` | boolean | Apply when changing default °C.                                    |
| `labels`                  | object  | Optional display names.                                            |
| `merged_rooms`            | object  | *(auto-detected)* Defines thermostats grouped under a single room. |
| `use_storage_sensor`      | boolean | Enable/disable syncing with storage sensor 🔁                      |
| `max_temp`                | number  | Cap setpoint to avoid exceeding limit 🌡️⛔                         |

---

## 💾 Storage & Sync

* **With integration (`thermostat-pro-timeline-sync`)**: Keeps data synced across browsers/devices.
  → [Integration repo](https://github.com/qlerup/thermostat-pro-timeline-sync)
* **Without integration**: Data stored locally (browser LocalStorage).
* 🔁 **Toggle per card**: Switch between local-only and sensor-based storage.
* 🧹 **Clear all data**: Wipes both storage types if needed.

> ℹ️ Switching between sensor and local storage changes where state is kept. If you mix modes, stored timelines may not carry over — that’s expected.

---

## 🌍 Localization

| Language       | Supported |
| -------------- | --------- |
| 🇩🇰 Danish    | ✅         |
| 🇸🇪 Swedish   | ✅         |
| 🇳🇴 Norwegian | ✅         |
| 🇬🇧 English   | ✅         |
| 🇩🇪 German    | ✅         |
| 🇪🇸 Spanish   | ✅         |
| 🇫🇷 French    | ✅         |
| 🇫🇮 Finnish   | ✅         |

💡 Defaults to **English** if not translated.
Want to help? Open an issue titled `Locale request: <language>`.

---

🎉 **Enjoy your smarter, safer, and cleaner thermostat control!**
🌡️🔥 With **storage toggle, clear data, and max temperature limit** for full flexibility. 💫

```
```
