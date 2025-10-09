# Thermostat Timeline Card 🔥🕒

A **Lovelace card** for **Home Assistant** that lets you plan temperatures on a simple, draggable timeline 🏡📅 — and optionally auto-apply the setpoint to your `climate.*` entities.

<img width="2291" height="581" alt="timeline" src="https://github.com/user-attachments/assets/7dce9516-1654-4eb8-87b1-6c091a3bf233" />

---

## ✨ Features

* 🧊 Per‑thermostat timeline
* 🔥 Default temperature per row
* 🖱️ Double‑click / double‑tap to edit blocks
* ⏱️ "Now" indicator on the timeline
* 🤖 Optional auto‑apply via `climate.set_temperature`
* 🧩 Lovelace GUI editor support

---

## ⚙️ Installation (via HACS – as a custom repository)

1. Upload/publish this repo as `lovelace-thermostat-pro-timeline` (or any name you prefer).
2. In Home Assistant → **HACS** → ⋯ → **Custom repositories** → add your GitHub URL, **Category: Dashboard**.
3. Find and install the card in HACS. In recent HA versions, the resource is added automatically.
   Typical resource URL:
   `/hacsfiles/lovelace-thermostat-pro-timeline/thermostat-pro-timeline.js`

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
storage_entity: sensor.thermostat_timeline   # optional (see “Storage & sync”)
default_temp: 20
row_height: 64
now_update_ms: 60000
show_top_now: false
now_extend_px: 76
auto_apply: true
apply_on_edit: true
apply_on_default_change: true
labels:
  climate.living_room: Living room
  climate.bedroom: Bedroom
```

### 🧾 Options (excerpt)

* `entities` (**required**): List of `climate.*` entities.
* `title`: Card title.
* `default_temp` (°C): Default temperature per row.
* `row_height` (px): Row height.
* `now_update_ms`: Refresh interval for the “now” indicator.
* `storage_entity` (e.g. `sensor.thermostat_timeline`): If present, the schedule is synced via a sensor attribute through a service call (see below). Otherwise browser LocalStorage is used.
* `auto_apply`: Automatically set the setpoint on the given `climate.*` entities to match the active block.
* `apply_on_edit`: Apply immediately if an edit changes the current setpoint.
* `apply_on_default_change`: Apply immediately if changing “Default °C” affects the current setpoint.
* `labels`: Optional map from `entity_id` → display name in the UI.

---

## 💾 Storage & Sync

* **With integration (`thermostat-pro-timeline-sync`)**: To keep the dashboard in sync across browsers/devices, use my companion integration which exposes a sensor and a service to persist the schedule.
  → Integration: [https://github.com/qlerup/thermostat-pro-timeline-sync](https://github.com/qlerup/thermostat-pro-timeline-sync)
* **Without integration**: Data is stored in **LocalStorage** in the browser (per device).

---

## 🌍 Localization

| Language           | Supported |
| ------------------ | --------- |
| 🇩🇰 **Danish**    | ✅         |
| 🇸🇪 **Swedish**   | ✅         |
| 🇳🇴 **Norwegian** | ✅         |
| 🇬🇧 **English**   | ✅         |
| 🇩🇪 **German**    | ✅         |
| 🇪🇸 **Spanish**   | ✅         |
| 🇫🇷 **French**    | ✅         |
| 🇫🇮 **Finnish**   | ✅         |

💡 *If your language isn’t yet supported, the card will default to **English**.*
Want to help? Open an issue titled `Locale request: <language>` or upvote an existing one with 👍.

---

## 🪄 Example (Card Type in UI)

Once the resource is loaded, use the card like this:

```yaml
type: custom:thermostat-timeline-card
entities:
  - climate.living_room
```

---

🎉 **Enjoy your smarter, prettier thermostat control!**
🧊🔥 Perfect for anyone who loves automation *and* beautiful dashboards 💫
