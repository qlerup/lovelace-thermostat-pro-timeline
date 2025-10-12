# Thermostat Timeline Card 🔥🕒

[![hacs\_badge](https://img.shields.io/badge/HACS-Default-blue.svg)](https://hacs.xyz)

A **Lovelace card** for **Home Assistant** that lets you plan temperatures on a simple, draggable timeline 🏡🗕️️ — and automatically apply them to your `climate.*` entities.

<img width="2291" height="581" alt="timeline" src="https://github.com/user-attachments/assets/7dce9516-1654-4eb8-87b1-6c091a3bf233" />

---

## ✨ Features

* 🧊 Per-thermostat **or merged room-based timeline**
* 🌡️➕🌡️ **Merge multiple thermostats** into one room – control them together via a single timeline 🏠🕒
* 🔥 Default temperature per row
* 🕓 **Temperature Units** — choose **°C or °F**, or let it auto-detect from Home Assistant 🌡️
* ⏰ **12/24-Hour Clock Toggle** — display times using your preferred format 🕒
* 🗖️ **Weekday Timeline Modes** — set up flexible daily schedules:

  * Weekdays + Weekend (Mon–Fri, Sat–Sun)
  * Weekdays + Saturday + Sunday
  * Individual days per week 🧩
* 🔁 Double-click / double-tap to edit blocks
* ⏱️ “Now” indicator on the timeline
* 🤖 Optional auto-apply via `climate.set_temperature`
* 🧭 Clean, modern **Editor UI**
* 🧹 Lovelace GUI editor support
* 🔁 **Storage sensor toggle** — choose between synced sensor or local-only mode
* 🔄 **Data migration** — easily transfer data from browser to storage sensor 🔁
* 🙈 **Storage sensor auto-hides** when disabled — cleaner UI ✨
* 🧹 **Granular data clearing options** — choose exactly what to wipe:

  * 🧈 All data (sensor + browser)
  * 🧽 Local only (browser)
  * 🗄️ Storage sensor only
* 🌡️⛔ **Max temperature limit** — prevent overheating with an upper bound 🛡️
* 🏷️ **Cleaner labels** — removed invalid/duplicate label issues 🧹
* 🔁 **Smoother drag-and-drop reordering** — faster, more accurate interaction 💨
* 🐛 **Fix:** timeline layering now correct when reopening editor overlay ✔️

---

## ⚙️ Installation (via HACS – as a custom repository)

[![Open this repository in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=lovelace-thermostat-pro-timeline)

1. Upload/publish this repo as `lovelace-thermostat-pro-timeline`.
2. In Home Assistant → **HACS** → ⋯ → **Custom repositories** → add your GitHub URL, **Category: Dashboard**.
3. Install via HACS.

   * Resource URL: `/hacsfiles/lovelace-thermostat-pro-timeline/thermostat-pro-timeline.js`

### 🦙 Manual installation

1. Copy `thermostat-pro-timeline.js` to `/config/www/`.
2. Add the resource in **Settings → Dashboards → Resources**:

   * URL: `/local/thermostat-pro-timeline.js`
   * Type: **JavaScript Module**

---

## 🧪 Usage

```yaml
type: custom:thermostat-timeline-card
title: Thermostat Timeline
entities:
  - climate.living_room
  - climate.bedroom
storage_entity: sensor.thermostat_timeline
default_temp: 20
row_height: 64
now_update_ms: 60000
show_top_now: false
now_extend_px: 76
auto_apply: true
apply_on_edit: true
apply_on_default_change: true
use_storage_sensor: true
max_temp: 24
unit: auto               # "auto", "C", or "F" 🌡️
time_format: auto        # "auto", "12h", or "24h" 🕒
weekday_mode: 1          # 1=Weekdays+Weekend, 2=Weekdays+Sat+Sun, 3=Individual Days 🕯️
labels:
  climate.living_room: Living room
  climate.bedroom: Bedroom
```

---

## 💮 Storage & Sync

* **With integration (`thermostat-pro-timeline-sync`)**: Keeps data synced across browsers/devices.
  → [Integration repo](https://github.com/qlerup/thermostat-pro-timeline-sync)
* **Without integration**: Data stored locally (browser LocalStorage).
* 🔁 **Toggle per card**: Switch between local-only and sensor-based storage.
* 🔄 **Data migration tool**: Transfer browser data → storage sensor data 🔁
* 🙈 **Auto-hide sensor** when disabled — reduces UI clutter
* 🧹 **Clear data menu**:

  * 🧈 All data — clears both sensor + browser
  * 🧽 Local only — clears browser cache
  * 🗄️ Storage sensor only — clears persistent store

> ℹ️ Mixing modes may cause timelines not to carry over — expected behavior.

---

## 🖼️ User Interface Preview

<img width="505" height="1010" alt="thermo-new" src="https://github.com/user-attachments/assets/64af1362-68d4-4369-9c7a-e758f440a6f4" />
<img width="504" height="636" alt="thermo-clear-data" src="https://github.com/user-attachments/assets/3a3310d9-694b-41a7-8a3c-42c01c227474" />

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

🎉 **Enjoy your smarter, safer, and now even more flexible thermostat control!**
🌡️🔥 With per-day schedules, temperature units, and auto-detected time formats — your timeline just got a major upgrade 💫
