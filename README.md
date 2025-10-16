# Thermostat Timeline Card 🔥🕒

[![hacs\_badge](https://img.shields.io/badge/HACS-Default-blue.svg)](https://hacs.xyz)

A **Lovelace card** for **Home Assistant** that lets you plan temperatures on a simple timeline🏡🔕️️ — and automatically apply them to your `climate.*` entities.

<img width="2291" height="581" alt="timeline" src="https://github.com/user-attachments/assets/7dce9516-1654-4eb8-87b1-6c091a3bf233" />

---

## ✨ Features

* 🧊 Per-thermostat **or merged room-based timeline**
* 🌡️➕🌡️ **Merge multiple thermostats** into one room – control them together via a single timeline 🏠🕒
* 🎨 **Color Blocks** — visually highlight temperature ranges with custom colors 🌈
* 🏡 **Away From Home** — auto-set your “away” temperature when nobody’s home, resume schedule when someone returns 🚶‍♂️🏠
* 🔥 Default temperature per row
* 🕓 **Temperature Units** — choose **°C or °F**, or let it auto-detect from Home Assistant 🌡️
* ⏰ **12/24-Hour Clock Toggle** — display times using your preferred format 🕒
* 🕰️ **AM/PM Picker Fixed** — smooth, reliable time selection ✅
* 🗆️ **Weekday Timeline Modes** — set up flexible daily schedules:

  * Weekdays + Weekend (Mon–Fri, Sat–Sun)
  * Weekdays + Saturday + Sunday
  * Individual days per week 🧩
* 🔁 Double-click / double-tap to edit blocks
* ⏱️ “Now” indicator on the timeline
* 🤖 Optional auto-apply via `climate.set_temperature`
* 🦭 Clean, modern **Editor UI**
* 🥳 Lovelace GUI editor support
* 🔁 **Storage sensor toggle** — choose between synced sensor or local-only mode
* 🔄 **Data migration** — easily transfer data from browser to storage sensor 🔁
* 🙈 **Storage sensor auto-hides** when disabled — cleaner UI ✨
* 🥳 **Granular data clearing options** — choose exactly what to wipe:

  * 🥈 All data (sensor + browser)
  * 🥽 Local only (browser)
  * 🗄️ Storage sensor only
* 🌡️⛔ **Max temperature limit** — prevent overheating with an upper bound 🚡️

---

## 🎨 Color Blocks

Bring color to your comfort! 🌈

Define visual temperature ranges to make your schedule instantly readable.

```yaml
color_blocks:
  - from: 18
    to: 21
    color: "#00f0ec"
  - from: 21
    to: 24
    color: "#ffb347"
```

* Each range colors any block that fits inside it.
* Helps you spot comfort vs eco zones quickly 🔍
* Order ranges thoughtfully to avoid overlap confusion.

---

## 🏡 Away From Home (Presence-Aware Mode)

Keep temperatures smart and efficient while you’re out 💡

```yaml
away:
  enabled: true
  persons:
    - person.mor
    - person.far
  target_c: 17
```

* Automatically applies the **away temperature** when everyone is away.
* When someone returns home, your schedule resumes automatically 🙌
* Works seamlessly with your existing timelines.

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

## 🤪 Usage

```yaml
type: custom:thermostat-timeline-card
title: Varme – Stue & Soveværelse
entities:
  - climate.stue
  - climate.sovevaerelse

row_height: 64
default_temp: 20
min_temp: 5
max_temp: 25

temp_unit: auto         # 'C' | 'F' | 'auto'
time_12h: auto          # true | false | 'auto'

now_update_ms: 60000
show_top_now: false
now_extend_px: 76

auto_apply: true
apply_on_edit: true
apply_on_default_change: true

weekdays_enabled: true
weekdays_mode: weekday_sat_sun

labels:
  climate.stue: Stue
  climate.sovevaerelse: Soveværelse

merges:
  climate.stue:
    - climate.traevaerk_termostat

color_ranges:
  climate.stue:
    - { from: 5,  to: 18, color: "#87cefa" }
    - { from: 18, to: 21, color: "#90ee90" }
    - { from: 21, to: 25, color: "#ffb347" }

storage_enabled: false
storage_entity: sensor.thermostat_timeline

away:
  enabled: true
  persons:
    - person.mor
    - person.far
  target_c: 17

```

---

## 🚷 Storage & Sync

* **With integration (`thermostat-pro-timeline-sync`)**: Keeps data synced across browsers/devices.
  → [Integration repo](https://github.com/qlerup/thermostat-pro-timeline-sync)
* **Without integration**: Data stored locally (browser LocalStorage).
* 🔁 **Toggle per card**: Switch between local-only and sensor-based storage.
* 🔄 **Data migration tool**: Transfer browser data → storage sensor data 🔁
* 🙈 **Auto-hide sensor** when disabled — reduces UI clutter
* 🥳 **Clear data menu**:

  * 🥈 All data — clears both sensor + browser
  * 🥽 Local only — clears browser cache
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

🎉 **Enjoy your smarter, safer, and now even more colorful thermostat control!**
🌡️🔥 With **Color Blocks**, **Away Mode**, and fixed **AM/PM Picker** — your timeline just got both smarter *and* prettier 💫
