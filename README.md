# Thermostat Timeline Card 🔥🕒

[![hacs\_badge](https://img.shields.io/badge/HACS-Default-blue.svg)](https://hacs.xyz)

A **Lovelace card** for **Home Assistant** that lets you plan temperatures on a simple timeline🏡🔕️️ — and automatically apply them to your `climate.*` entities.

<img width="2288" height="476" alt="image" src="https://github.com/user-attachments/assets/95a17e9d-e404-4bad-ba93-5af0a6cff6d5" />


---

## ✨ Features

* 🧊 Per-thermostat **or merged room-based timeline**
* 🌡️➕🌡️ **Merge multiple thermostats** into one room – control them together via a single timeline 🏠🕒
* 📱 Tablet freindly
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
  * 🎨 Clear color block data (browser only, storange only or all)
* 🌡️⛔ **Max temperature limit** — prevent overheating with an upper bound 🚡️

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
| 🇨🇿 Czech     | ✅         |
| IT Italian   | ✅         |


💡 Defaults to **English** if not translated.
Want to help? Open an issue titled `Locale request: <language>`.

---

## ⚙️ Installation (via HACS – as a custom repository)

[![Open this repository in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=lovelace-thermostat-pro-timeline)

1. Upload/publish this repo as `lovelace-thermostat-pro-timeline`.
2. In Home Assistant → **HACS** → ⋯ → **Custom repositories** → https://github.com/qlerup/lovelace-thermostat-pro-timeline, **Category: Dashboard**.
3. Install via HACS.

   * Resource URL: `/hacsfiles/lovelace-thermostat-pro-timeline/thermostat-pro-timeline.js`

### 🦙 Manual installation

1. Copy `thermostat-pro-timeline.js` to `/config/www/`.
2. Add the resource in **Settings → Dashboards → Resources**:

   * URL: `/local/thermostat-pro-timeline.js`
   * Type: **JavaScript Module**

---

## 🖼️ User Interface Preview

<img width="500" height="1074" alt="image" src="https://github.com/user-attachments/assets/bc66c5f3-9ce4-4438-a993-0a3048f95201" />

<img width="497" height="596" alt="image" src="https://github.com/user-attachments/assets/387d2f86-86b1-422b-ba6e-9cbea3ec0230" />

<img width="489" height="335" alt="image" src="https://github.com/user-attachments/assets/15345679-e670-4f19-9156-d37c64d11d27" />

---

## 🏷️ Title

Display title for the card. If omitted, a localized default title is used automatically.

```yaml
title: "Heating – Overview"
```

---

## 🧩 Entities

Lists the thermostats (climate.*) to show. Order in the list = order in the UI.

```yaml
entities:
  - climate.stue
  - climate.sovevaerelse
```

---

## 📏 Row height

Row height in pixels. Typical range 40–120, default 64.

```yaml
row_height: 64
```

---
## 🌡️ Default temp

Fallback temperature (°C) used for periods without blocks.

```yaml
default_temp: 20
```

---

## 📉 Min temp

Global minimum for temperature pickers and blocks (°C).

```yaml
min_temp: 5
```

---

## 📈 Max temp

Global maximum for temperature pickers and blocks (°C).

```yaml
max_temp: 25
```

---

## 🔁 Temp unit

Controls display unit. 'C', 'F', or 'auto' (detects preference).

```yaml
temp_unit: auto
```

---

## ⏰ Time 12h

12‑hour clock format. true (AM/PM), false (24‑hour) or 'auto'.

```yaml
time_12h: auto
```

---
## ⏱ Now update ms

How often the UI re‑renders and moves the "now" cursor (ms).

```yaml
now_update_ms: 60000
```

---
## 📍 Show top now

```yaml
show_top_now: true
```

---

## ↕️ Now extend px

How far the top "now" line extends (px).

```yaml
now_extend_px: 76
```

---

## ⚙️ Auto apply

Automatically apply the desired temperature to the current climate entity (and any merges) on load and at the next time boundary.

```yaml
auto_apply: true
```

---

## ✏️ Apply on edit

If an edit changes the current period, apply the new temperature immediately.

```yaml
apply_on_edit: true
```

---

## 🗓️ Weekdays enabled

Enable per‑day schedules (weekday/weekend or all days).

```yaml
weekdays_enabled: true
```

---

## 🗂️ Weekdays mode

Choose the grouping: 'weekday_weekend', 'weekday_sat_sun', or 'all_7'.

```yaml
weekdays_mode: weekday_weekend
```

---

## 🏷️ Labels

Custom display name per entity (left label in the UI).

```yaml
labels:
  climate.stue: Living Room
  climate.sovevaerelse: Bedroom
```

---

## 🔗 Merges

Merge secondary climate entities into a primary so setpoints hit them all at once.

```yaml
merges:
  climate.stue:
    - climate.stue_radiator_hojre
    - climate.stue_radiator_venstre
```

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

## 💾 Storage enabled

Store shared schedules/settings in a sensor (integration) across dashboards/users.

```yaml
storage_enabled: true
```

---

## 🗄️ Storage entity

The sensor used as the shared store (from the integration), e.g. sensor.thermostat_timeline.

```yaml
storage_entity: sensor.thermostat_timeline
```

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

🎉 **Enjoy your smarter, safer, and now even more colorful thermostat control!**
🌡️🔥 With **Color Blocks**, **Away Mode**, and fixed **AM/PM Picker** — your timeline just got both smarter *and* prettier 💫
