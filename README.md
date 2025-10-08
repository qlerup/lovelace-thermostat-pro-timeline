# Thermostat Timeline Card

Et Lovelace-kort til Home Assistant, der lader dig planlægge temperaturer på en enkel tidslinje og (valgfrit) automatisk sætte setpoint på dine `climate.*`-entiteter.
<img width="2291" height="581" alt="timline" src="https://github.com/user-attachments/assets/7dce9516-1654-4eb8-87b1-6c091a3bf233" />

> **Custom element:** `thermostat-timeline-card`  
> **Fil (leveres via HACS):** `dist/thermostat-pro-timeline-card.js`

## Funktioner
- Tidslinje pr. termostat med blokke (fra–til, °C)
- Standardtemperatur per række
- Dobbeltklik/dobbelttap for at redigere blokke
- “Nu”-markør på tidslinjen
- Automatisk anvendelse af setpoint til `climate.set_temperature` (kan slås fra)
- GUI-editor i Lovelace

## Installation (HACS – som custom repo)
1. Upload dette repo til GitHub som `thermostat-timeline-card` (eller et navn efter eget valg).
2. I Home Assistant → **HACS** → ⋯ → **Custom repositories** → tilføj: din GitHub-URL, **Category: Dashboard**.
3. Find og installer kortet i HACS. HACS tilføjer ressource automatisk i moderne HA.  
   Ressource-URL bliver typisk: `/hacsfiles/thermostat-timeline-card/dist/thermostat-pro-timeline-card.js`.

### Manuel installation
1. Kopiér `dist/thermostat-pro-timeline-card.js` til `/config/www/`.
2. Tilføj ressourcen i **Indstillinger → Dashboards → Ressourcer**:
   - URL: `/local/thermostat-pro-timeline-card.js`
   - Type: **JavaScript Module**

## Brug
Tilføj et kort i dit dashboard med YAML:

```yaml
type: custom:thermostat-timeline-card
title: Termostat Tidslinje
entities:
  - climate.stue
  - climate.sovevaerelse
storage_entity: sensor.thermostat_timeline   # valgfri (se “Lagring”)
default_temp: 20
row_height: 64
now_update_ms: 60000
show_top_now: false
now_extend_px: 76
auto_apply: true
apply_on_edit: true
apply_on_default_change: true
labels:
  climate.stue: Stuen
  climate.sovevaerelse: Soveværelse
```

### Felter (uddrag)
- `entities` (**krævet**): Liste af `climate.*` entiteter.
- `title`: Kortets titel.
- `default_temp` (°C): Standardtemperatur pr. række.
- `row_height` (px): Højde per række.
- `now_update_ms`: Interval for opdatering af “nu”-stregen.
- `storage_entity` (fx `sensor.thermostat_timeline`): Hvis denne entitet findes, gemmes tidsplanen i sensorets attributter via en servicekald (se nedenfor). Ellers bruges browserens LocalStorage.
- `auto_apply`: Sæt automatisk setpoint på de angivne `climate.*` så det matcher nuværende plan.
- `apply_on_edit`: Anvend straks hvis en redigering ændrer det aktuelle setpoint.
- `apply_on_default_change`: Anvend straks hvis ændring af “Default °C” påvirker det aktuelle setpoint.
- `labels`: Valgfri map fra `entity_id` → visningsnavn i UI.

## Lagring og synkronisering
- **Med `storage_entity`**: Kortet forsøger at gemme tidsplanen i en sensor og kalder en service i domænet `thermostat_timeline` for at opdatere data. Det kræver, at du har (eller laver) en simpel integration/template der eksponerer sensoren og håndterer servicen.
- **Uden `storage_entity`**: Data gemmes i **LocalStorage** i browseren (per enhed).

## Build & release
- Repoet er klar som “single-file plugin” – filen ligger i `dist/`.
- Lav en release (fx `v0.1.0`) når du er klar. HACS foretrækker at kunne finde en release.
- GitHub Actions-workflowet `Validate` kører HACS’ validator automatisk.

## Eksempel på kort-type i UI
Når ressourcen er indlæst, bruges kortet som:

```yaml
type: custom:thermostat-timeline-card
entities:
  - climate.stue
```
