# Thermostat Timeline Card 🔥🕒

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
* 🧭 Brand-new, **cleaner Editor UI** for faster navigation and clearer structure 🧼
* 🧩 Lovelace GUI editor support

---

## 🚀 What’s New in v1.0.2 — *Editor UI Refresh + Thermostat Merge*

### 🧭 Editor UI Refresh

* More readable **room overview** 🔍
* Streamlined spacing and layout 🧩
* Cleaner look, more discoverable actions – faster to use ⚡

### 🌡️➕🌡️ Merge Thermostats into One Room

If you have multiple thermostats in the same physical room, you can now **merge** them so they act as **a single room** in the timeline.

**Why this is awesome 😎**

* One room, one schedule — **all merged thermostats follow** 🕒✅
* Consistent comfort across multi-radiator rooms 🛋️
* Less clutter, fewer timelines to manage 🧹
* Still view each device’s details individually 🔎

📸 **Examples:** 

<img width="490" height="293" alt="ui-new-room" src="https://github.com/user-attachments/assets/a26b6fbf-f0be-4418-9aca-0897c1d2c6aa" /> 
<img width="490" height="573" alt="ui-new-room-foldout" src="https://github.com/user-attachments/assets/cf74107c-185e-4e76-8175-0548c219843f" />

---

## ⚙️ Installation (via HACS – as a custom repository)

1. Upload/publish this repo as `lovelace-thermostat-pro-timeline` (or any name you prefer).
2. In Home Assistant → **HACS** → ⋯ → **Custom repositories** → add your GitHub URL, **Category: Dashboard**.
3. Find and install the card in HACS.
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
* `storage_entity`: Optional sync via sensor attribute.
* `auto_apply`: Automatically apply the setpoint.
* `apply_on_edit`: Apply when editing.
* `apply_on_default_change`: Apply when changing default °C.
* `labels`: Optional display names.
* **🆕 `merged_rooms`** *(auto-detected by editor)*: Defines thermostats grouped under a single room in the timeline.

---

## 💾 Storage & Sync

* **With integration (`thermostat-pro-timeline-sync`)**: Keeps data synced across browsers/devices.
  → [Integration repo](https://github.com/qlerup/thermostat-pro-timeline-sync)
* **Without integration**: Data stored locally (browser LocalStorage).

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

💡 Defaults to **English** if not translated.
Want to help? Open an issue titled `Locale request: <language>`.

---

🎉 **Enjoy your smarter, cleaner, and unified thermostat control!**
🌡️🔥 **Now with merged rooms, refreshed editor, and more comfort in fewer clicks.** 💫
