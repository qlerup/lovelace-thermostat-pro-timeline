// Note: avoid ESM imports so the card works when loaded as "javascript" resource in HA.
// ---- thermostat-timeline i18n (namespaced) ----
const TT_I18N = {
  en: {
    // Card
    'card.title_default': 'Thermostat Timeline',
    // Modal / editor (inline)
    'ui.edit_block': 'Edit block',
    'ui.add_block': 'Add block',
    'ui.from': 'From',
    'ui.to': 'To',
    'ui.temperature': 'Temperature',
    'ui.delete': 'Delete',
    'ui.cancel': 'Cancel',
    'ui.save': 'Save',
    'ui.error_prefix': 'Error: ',
    'ui.overlap_msg': 'You selected overlapping times — it overlaps during {start} – {end}.',
    'ui.auto_fix': 'Auto-fix',
    'ui.fix_start_to': 'Fix start to {time}',
  'ui.fix_end_to': 'Fix end to {time}',
    // Inline meta
  'ui.current_temp': 'Current temperature:' ,

    // GUI editor panel
  'editor.title_label': 'Title',
  'editor.add_entity': 'Add room',
    'editor.entity_placeholder': 'Select an entity',
    'editor.drag_reorder': 'Drag to reorder',
    'editor.remove': 'Remove',
    'editor.default_c': 'Default °C',
  'editor.row_height_px': 'Row height (px)',
  'editor.max_c': 'Max °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatic apply',
    'editor.auto_apply.desc':
      'When enabled, the card will try to set the temperature on selected climate entities so it matches the planned value for “right now”.',
    'editor.apply_edit.title': 'On editing',
    'editor.apply_edit.desc':
      'When you change timeline blocks and the change affects the current time, the new temperature is applied immediately.',
    'editor.apply_default.title': 'On Default °C change',
    'editor.apply_default.desc':
      'When “Default °C” changes and it affects the current period, the new temperature is applied immediately.',
      'ui.copy_plan': 'Copy plan',
      'ui.paste_plan': 'Paste plan',
      'ui.copy_day': 'Copy day',
      'ui.paste_day': 'Paste day',
  'editor.merge_label': 'Merge with (add extra thermostat)',
  'editor.display_name_optional': 'Room name (optional)',
    'editor.merged_with': 'Merged with'
  , 'editor.store_enable.title': 'Shared storage + background control',
  'editor.store_enable.short': 'Saves schedules to the selected sensor and enables background control.',
  'editor.store_enable.desc': 'Saves schedules to the selected sensor and enables background set_temperature via the Thermostat Timeline integration. Thermostats update even when the card is closed. Also shares schedules (heat blocks) and card settings across users/devices. When off, set temperature commands are sent only while the card is actively visible on a device (tablet/PC/mobile) — it must remain open on screen.',
  'editor.store_missing': 'Integration "Thermostat Pro Timeline Sync" is not installed. Shared storage is unavailable.',
    'editor.clear_store': 'Clear storage',
    'editor.clear_store_confirm': 'This will delete all stored schedules. Continue?',
  'editor.migrate_to_store': 'Transfer data to storage',
    'editor.migrate_confirm': 'Transfer your browser-saved schedules to the selected storage sensor? This will overwrite any existing schedules in storage.',
  'editor.migrate_pull_confirm': 'Import schedules from storage and overwrite local browser data?',
  'editor.select_storage_first': 'Please select a storage sensor first.',
    'editor.no_local_data': 'No local browser data found.',
    'editor.clear_all': 'Clear all data',
    'editor.clear_all_confirm': 'This will delete both storage and local browser schedules. Continue?',
  'editor.clear_storage_only': 'Clear storage data only',
    'editor.clear_storage_only_confirm': 'This will delete schedules from the selected storage sensor. Continue?',
  'editor.clear_local_only': 'Clear ALL local data only',
    'editor.clear_local_only_confirm': 'This will delete schedules saved in your browser only. Continue?',
  'editor.temp_sensor': 'Temperature sensor'
    , 'week.enable': 'Enable weekdays',
    'week.mode': 'Weekday mode',
  // removed same_all option from UI
  'week.mode.weekday_weekend': 'Weekdays + Weekend',
  'week.mode.weekday_sat_sun': 'Weekdays + Saturday + Sunday',
  'week.mode.all_7': 'All days',
    'week.button': 'Weekdays',
  'week.group.weekdays': 'Weekdays',
  'week.group.weekend': 'Weekend',
  'week.days_full.mon': 'Monday',
  'week.days_full.tue': 'Tuesday',
  'week.days_full.wed': 'Wednesday',
  'week.days_full.thu': 'Thursday',
  'week.days_full.fri': 'Friday',
  'week.days_full.sat': 'Saturday',
  'week.days_full.sun': 'Sunday',
  'week.group.weekdays': 'Weekdays',
  'week.group.weekend': 'Weekend',
    'week.days.mon': 'Mon',
    'week.days.tue': 'Tue',
    'week.days.wed': 'Wed',
    'week.days.thu': 'Thu',
    'week.days.fri': 'Fri',
    'week.days.sat': 'Sat',
    'week.days.sun': 'Sun',
    'week.editor.title': 'Weekday schedule',
  'week.editor.preview_note': 'Preview only. Changes apply when you press Save.'
  , 'week.copy_to_rooms': 'Copy week to rooms'
  , 'week.copy_to_rooms.title': 'Copy week to rooms'
  , 'week.copy_to_rooms.select': 'Select rooms'
  , 'week.copy_to_rooms.apply': 'Insert into rooms'
  , 'week.enable.desc': 'Enable per-weekday scheduling. When off, the same plan is used every day.'
    , 'editor.timefmt.title': 'Time format'
    , 'editor.timefmt.desc': 'Choose 24-hour or 12-hour (AM/PM) display for times on the card.'
    , 'editor.tempfmt.title': 'Temperature unit'
    , 'editor.tempfmt.desc': 'Choose Celsius (°C) or Fahrenheit (°F) for display in the card and editors.'
  , 'editor.timesrc.title': 'Time source'
  , 'editor.timesrc.desc': 'Choose whether the card uses the browser time or Home Assistant time zone for “now”.'
  , 'editor.timesrc.browser': 'Browser'
  , 'editor.timesrc.ha': 'Home Assistant'
  , 'editor.tabs.settings': 'Settings'
    , 'editor.tabs.rooms': 'Rooms'
  , 'editor.tabs.colors': 'Colors'
  , 'editor.tabs.away': 'Away from home'
  , 'editor.tabs.sync': 'Sync Engine'
  , 'sync.delay.title_sec': 'Delay (seconds)'
  , 'sync.delay.desc_sec': 'Save after no changes for this many seconds.'
  , 'away.enable': 'Enable away mode'
  , 'away.desc': 'When no selected people are home, lower thermostats automatically to the set temperature.'
  , 'away.temp': 'Away temperature'
  , 'away.persons': 'People'
  , 'away.add_person': 'Add person'
    , 'editor.heat_colors.title': 'Heat block colors'
  , 'editor.heat_colors.add': 'Add color range'
    , 'editor.colors.col_from': 'From °C'
    , 'editor.colors.col_to': 'To °C'
    , 'editor.colors.col_color': 'Color'
  , 'editor.colors.empty': 'No rooms added yet. Add a room to define heat block colors.'
  , 'editor.colors.go_add': 'Add room'
  , 'editor.select_entities': 'Rooms'
  , 'editor.colors.refresh': 'Update schedule'
  , 'editor.colors.clear_local': 'Clear local color data'
  , 'editor.colors.clear_local_confirm': 'This will delete color ranges saved in your browser for this card. Continue?'
  , 'editor.colors.clear_shared': 'Clear shared color storage'
  , 'editor.colors.clear_shared_confirm': 'This will delete color ranges in the selected storage sensor. Continue?'
  , 'editor.colors.clear_all': 'Clear all color data'
  , 'editor.colors.clear_all_confirm': 'This will delete all color ranges from both local storage and the selected storage sensor. Continue?'
  , 'editor.colors.mode': 'Color mode'
  , 'editor.colors.mode.desc': 'Choose per-room colors or one set for all rooms.'
  , 'editor.colors.mode_per_room': 'Per room'
  , 'editor.colors.mode_global': 'All rooms'
  , 'editor.colors.global_title': 'All rooms'
  , 'editor.reload_editor': 'Reload editor'
  , 'editor.reload_dashboard': 'Reload dashboard'
  , 'onboard.title': 'Welcome to Thermostat Timeline'
  , 'onboard.next': 'Next'
  , 'onboard.prev': 'Back'
  , 'onboard.skip': 'Skip'
  , 'onboard.done': 'Done'
  , 'onboard.dont_show': "Don't show again"
  , 'onboard.step_main': 'This is the main timeline. It shows desired temperatures over 24 hours for each room.'
  , 'onboard.step_add': 'Add a heat block by pressing + Add block or by double‑clicking on the timeline.'
  , 'onboard.step_edit': 'Edit or delete a block by double‑clicking it. Use Weekdays to plan different days.'
  , 'onboard.reset': 'Show guide again'
  , 'onboard.reset_ok': 'Welcome will be shown next time.'
  , 'pause.menu_title': 'Auto apply pause'
  , 'pause.off_1h': 'Pause 1 hour'
  , 'pause.off_5h': 'Pause 5 hours'
  , 'pause.off_custom': 'Custom duration…'
  , 'pause.off_indef': 'Pause until I resume'
  , 'pause.resume': 'Resume now'
  , 'pause.close': 'Close'
  , 'pause.active_until': 'Paused until {time}'
  , 'pause.active_indef': 'Paused'
  , 'editor.pausebtn.title': 'Pause button'
  , 'editor.pausebtn.desc': 'Show a global pause button in the card header. While paused, all set_temperature commands are suppressed.'
  , 'editor.integration.connected': 'Integration ready'
  , 'editor.integration.disconnected': 'Integration unavailable'
  , 'profiles.enable': 'Enable profiles (override)'
  , 'profiles.enable.desc': 'Allow named daily schedules you can activate to override the main plan.'
  , 'profiles.button': 'Manual schedule'
  , 'profiles.editor.title': 'Profiles'
  , 'profiles.add': 'Add profile'
  , 'profiles.rename': 'Rename'
  , 'profiles.delete': 'Delete'
  , 'profiles.activate': 'Activate'
  , 'profiles.deactivate': 'Deactivate'
  , 'profiles.active': 'Active'
  , 'profiles.none': 'None'
  , 'profiles.name_placeholder': 'Profile name'
  , 'profiles.edit': 'Edit'
  , 'profiles.preview_note': 'Preview only. Schedules become active when you activate the profile.'
  , 'profiles.active_label': 'Manual profile active:'
  , 'editor.tabs.holidays': 'Holidays'
  , 'editor.tabs.backup': 'Backup'
  , 'backup.title': 'Backup'
  , 'backup.desc': 'Copy schedules/settings to backup and restore when needed.'
  , 'backup.now': 'Backup now'
  , 'backup.restore': 'Restore'
  , 'backup.auto': 'Auto backup'
  , 'backup.auto.desc': 'Make automatic backups on a schedule.'
  , 'backup.interval': 'Interval (days)'
  , 'backup.interval.desc': 'How many days between automatic backups (min. 1).'
  , 'backup.sensor': 'Backup sensor'
  , 'backup.last': 'Last backup'
  , 'holidays.enable': 'Enable holidays'
  , 'holidays.desc': 'Use a special daily schedule on public holidays.'
  , 'holidays.source': 'Holiday source'
  , 'holidays.source.calendar': 'Calendar'
  , 'holidays.source.manual': 'Manual dates'
  , 'holidays.entity': 'Holiday entity'
  , 'holidays.entity_desc': 'Select a calendar that reports simple on/off. It should be on on public holidays, and off on other days.'
  , 'holidays.dates': 'Holiday dates'
  , 'holidays.add_date': 'Add date'
  , 'holidays.editor.title': 'Holiday schedule'
  , 'holidays.edit': 'Edit holiday schedule'
  , 'holidays.button': 'Holidays'
  },
  da: {
    // Kort
    'card.title_default': 'Termostat Tidslinje',
    // Modal
    'ui.edit_block': 'Redigér blok',
    'ui.add_block': 'Tilføj blok',
    'ui.from': 'Fra',
    'ui.to': 'Til',
    'ui.temperature': 'Temperatur',
    'ui.delete': 'Slet',
    'ui.cancel': 'Annullér',
    'ui.save': 'Gem',
    'ui.error_prefix': 'Fejl: ',
    'ui.overlap_msg':
      'Du har valgt overlappende tidspunkter — det overlapper i perioden {start} - {end}.',
    'ui.auto_fix': 'Ret automatisk',
    'ui.fix_start_to': 'Ret start til {time}',
  'ui.fix_end_to': 'Ret slut til {time}',
    // Inline meta
    'ui.current_temp': 'Nuværende temperatur:',

    // GUI editor panel
    'editor.title_label': 'Titel',
  'editor.add_entity': 'Tilføj rum',
    'editor.entity_placeholder': 'Vælg en entitet',
    'editor.drag_reorder': 'Træk for at ændre rækkefølge',
    'editor.remove': 'Fjern',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Rækkens højde (px)',
  'editor.max_c': 'Maks °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatisk anvendelse',
    'editor.auto_apply.desc':
      'Når slået til forsøger kortet automatisk at sætte temperaturen på de valgte climate-entities, så den matcher den planlagte værdi for “lige nu”.',
    'editor.apply_edit.title': 'Ved redigering',
    'editor.apply_edit.desc':
      'Når du ændrer blokke i tidslinjen, og ændringen påvirker den aktuelle tid, anvendes den nye temperatur med det samme.',
    'editor.apply_default.title': 'Ved Standard °C ændring',
    'editor.apply_default.desc':
      'Når “Standard °C” ændres og det påvirker temperaturen for nuværende tidsrum, anvendes den nye temperatur straks.',
      'ui.copy_plan': 'Kopiér skema',
      'ui.paste_plan': 'Indsæt skema',
      'ui.copy_day': 'Kopiér dag',
      'ui.paste_day': 'Indsæt dag',
  'editor.merge_label': 'Flet med (tilføj ekstra termostat)',
  'editor.display_name_optional': 'Rumnavn (valgfrit)',
    'editor.merged_with': 'Flettet med',
  'editor.store_enable.title': 'Delt lager + baggrundsstyring',
  'editor.store_enable.short': 'Gemmer tidsplaner i den valgte sensor og aktiverer baggrundsstyring.',
  'editor.store_enable.desc': 'Gemmer tidsplaner i den valgte sensor og aktiverer baggrundsstyring (set_temperature) via Thermostat Timeline-integrationen. Termostaterne opdateres også når kortet ikke er åbent. Deler desuden tidsplaner (heat-blokke) og kortets indstillinger på tværs af brugere/enheder. Når slået fra, sendes set_temperature-kommandoer kun mens kortet er aktivt vist på en enhed (tablet/PC/mobil) — det er ikke nok at kortet blot er tilføjet; det skal være åbent på skærmen hele tiden.',
  'editor.store_missing': 'Integrationen "Thermostat Pro Timeline Sync" er ikke installeret. Delt lager er ikke tilgængeligt.',
    'editor.clear_store': 'Ryd lager',
    'editor.clear_store_confirm': 'Dette vil slette alle gemte tidsplaner. Vil du fortsætte?',
  'editor.migrate_to_store': 'Overfør data til lager',
    'editor.migrate_confirm': 'Overfør dine browser-gemte tidsplaner til den valgte sensor? Dette overskriver eksisterende planer i lageret.',
  'editor.migrate_pull_confirm': 'Importér tidsplaner fra lager og overskriv lokale browserdata?',
  'editor.select_storage_first': 'Vælg først en lagersensor.',
    'editor.no_local_data': 'Ingen lokale browserdata blev fundet.',
  'editor.clear_all': 'Ryd alt data',
    'editor.clear_all_confirm': 'Dette sletter både lager og lokale/browser tidsplaner. Vil du fortsætte?',
  'editor.clear_storage_only': 'Ryd kun lagerdata',
    'editor.clear_storage_only_confirm': 'Dette sletter tidsplaner fra den valgte lagersensor. Vil du fortsætte?',
  'editor.clear_local_only': 'Ryd ALLE lokale data (kun lokalt)',
    'editor.clear_local_only_confirm': 'Dette sletter kun tidsplaner gemt i din browser. Vil du fortsætte?',
    'editor.temp_sensor': 'Temperatursensor'
    , 'editor.colors.empty': 'Der er endnu ikke oprettet rum. Tilføj et rum for at definere farver.'
    , 'editor.colors.go_add': 'Tilføj rum'
  , 'editor.select_entities': 'Rum'
    , 'week.enable': 'Aktivér ugedage',
    'week.mode': 'Ugedags-tilstand',
  // removed same_all option from UI
  'week.mode.weekday_weekend': 'Hverdage + Weekend',
  'week.mode.weekday_sat_sun': 'Hverdage + Lørdag + Søndag',
  'week.mode.all_7': 'Alle dage',
    'week.button': 'Ugedage',
  'week.group.weekdays': 'Hverdage',
  'week.group.weekend': 'Weekend',
  'week.days_full.mon': 'Mandag',
  'week.days_full.tue': 'Tirsdag',
  'week.days_full.wed': 'Onsdag',
  'week.days_full.thu': 'Torsdag',
  'week.days_full.fri': 'Fredag',
  'week.days_full.sat': 'Lørdag',
  'week.days_full.sun': 'Søndag',
  'week.group.weekdays': 'Hverdage',
  'week.group.weekend': 'Weekend',
    'week.days.mon': 'Man',
    'week.days.tue': 'Tir',
    'week.days.wed': 'Ons',
    'week.days.thu': 'Tor',
    'week.days.fri': 'Fre',
    'week.days.sat': 'Lør',
    'week.days.sun': 'Søn',
    'week.editor.title': 'Ugedags-tidsplan',
  'week.editor.preview_note': 'Kun forhåndsvisning. Ændringer gemmes først når du trykker Gem.'
  , 'week.copy_to_rooms': 'Kopiér ugedage til rum'
  , 'week.copy_to_rooms.title': 'Kopiér ugedage til rum'
  , 'week.copy_to_rooms.select': 'Vælg rum'
  , 'week.copy_to_rooms.apply': 'Indsæt i rum'
  , 'week.enable.desc': 'Aktivér plan per ugedag. Når slået fra, bruges samme plan hver dag.'
    , 'editor.timefmt.title': 'Tidsformat'
    , 'editor.timefmt.desc': 'Vælg 24-timers eller 12-timers (AM/PM) visning for tider på kortet.'
    , 'editor.tempfmt.title': 'Temperaturenhed'
    , 'editor.tempfmt.desc': 'Vælg Celsius (°C) eller Fahrenheit (°F) til visning i kortet og editorer.'
  , 'editor.timesrc.title': 'Tidskilde'
  , 'editor.timesrc.desc': 'Vælg om kortet skal bruge browserens tid eller Home Assistant-tidszone til “nu”.'
  , 'editor.timesrc.browser': 'Browser'
  , 'editor.timesrc.ha': 'Home Assistant'
  , 'editor.tabs.settings': 'Indstillinger'
    , 'editor.tabs.rooms': 'Rum'
  , 'editor.tabs.colors': 'Farver'
    , 'editor.tabs.away': 'Væk fra hjemme'
    , 'editor.tabs.sync': 'Sync Engine'
    , 'sync.delay.title_sec': 'Forsinkelse (sekunder)'
    , 'sync.delay.desc_sec': 'Gem efter ingen ændringer i så mange sekunder.'
  , 'editor.tabs.backup': 'Backup'
  , 'backup.title': 'Backup'
  , 'backup.desc': 'Kopiér hele indholdet af din sync‑sensor til backup‑sensoren og gendan den igen ved behov.'
  , 'backup.now': 'Backup nu'
  , 'backup.restore': 'Gendan'
  , 'backup.auto': 'Auto backup'
  , 'backup.auto.desc': 'Lav automatisk backup med faste intervaller.'
  , 'backup.interval': 'Interval (dage)'
  , 'backup.interval.desc': 'Hvor mange dage der skal gå mellem automatiske backups (min. 1).'
  , 'backup.sensor': 'Backup sensor'
  , 'backup.last': 'Sidste backup'
    , 'away.enable': 'Aktivér væk-tilstand'
    , 'away.desc': 'Når ingen af de valgte personer er hjemme, sænkes termostaterne automatisk til den angivne temperatur.'
    , 'away.temp': 'Væk-temperatur'
    , 'away.persons': 'Personer'
    , 'away.add_person': 'Tilføj person'
    , 'editor.heat_colors.title': 'Farver for varmeblokke'
    , 'editor.heat_colors.add': 'Tilføj farveinterval'
    , 'editor.colors.col_from': 'Fra °C'
    , 'editor.colors.col_to': 'Til °C'
    , 'editor.colors.col_color': 'Farve'
    , 'editor.colors.refresh': 'Opdater skema'
    , 'editor.colors.clear_local': 'Ryd lokale farvedata'
    , 'editor.colors.clear_local_confirm': 'Dette sletter farveintervaller gemt i din browser for dette kort. Vil du fortsætte?'
    , 'editor.colors.clear_shared': 'Ryd delt farvelager'
  , 'editor.colors.clear_shared_confirm': 'Dette sletter farveintervaller i den valgte lagersensor. Vil du fortsætte?'
    , 'editor.colors.clear_all': 'Ryd alle farvedata'
    , 'editor.colors.clear_all_confirm': 'Dette sletter alle farveintervaller både lokalt og i den valgte lagersensor. Vil du fortsætte?'
  , 'editor.colors.mode': 'Farvetilstand'
  , 'editor.colors.mode.desc': 'Vælg om farver defineres pr. rum eller ens for alle rum.'
  , 'editor.colors.mode_per_room': 'Pr. rum'
  , 'editor.colors.mode_global': 'Samme for alle'
  , 'editor.colors.global_title': 'Alle rum'
    , 'editor.reload_editor': 'Genindlæs editor'
    , 'editor.reload_dashboard': 'Genindlæs dashboard'
  , 'onboard.title': 'Velkommen til Termostat Tidslinje'
  , 'onboard.next': 'Næste'
  , 'onboard.prev': 'Tilbage'
  , 'onboard.skip': 'Spring over'
  , 'onboard.done': 'Færdig'
  , 'onboard.dont_show': 'Vis ikke igen'
  , 'onboard.step_main': 'Dette er hovedtidslinjen. Den viser ønskede temperaturer over 24 timer for hvert rum.'
  , 'onboard.step_add': 'Tilføj en varmeblok via + Tilføj blok eller ved at dobbeltklikke på tidslinjen.'
  , 'onboard.step_edit': 'Redigér eller slet en blok ved dobbeltklik. Brug Ugedage til forskellige dage.'
  , 'onboard.reset': 'Vis guide igen'
  , 'onboard.reset_ok': 'Guiden vises næste gang.'
  , 'pause.menu_title': 'Pause auto-apply'
  , 'pause.off_1h': 'Sluk i 1 time'
  , 'pause.off_5h': 'Sluk i 5 timer'
  , 'pause.off_custom': 'Tilpasset varighed…'
  , 'pause.off_indef': 'Sluk til jeg tænder'
  , 'pause.resume': 'Tænd igen nu'
  , 'pause.close': 'Luk'
  , 'pause.active_until': 'Slukket til {time}'
  , 'pause.active_indef': 'Slukket'
  , 'editor.pausebtn.title': 'Pause‑knap'
  , 'editor.pausebtn.desc': 'Vis en global pauseknap i kortets header. Når pause er aktiv, undertrykkes alle set_temperature‑kommandoer.'
  , 'editor.integration.connected': 'Integration klar'
  , 'editor.integration.disconnected': 'Integration ikke tilgængelig'
  , 'profiles.enable': 'Aktivér skema overrule'
  , 'profiles.enable.desc': 'Tillad navngivne dagsskemaer som kan aktiveres og overrule hovedplanen.'
  , 'profiles.button': 'Manuelt skema'
  , 'profiles.editor.title': 'Skemaer'
  , 'profiles.add': 'Tilføj skema'
  , 'profiles.rename': 'Omdøb'
  , 'profiles.delete': 'Slet'
  , 'profiles.activate': 'Aktivér'
  , 'profiles.deactivate': 'Deaktivér'
  , 'profiles.active': 'Aktiv'
  , 'profiles.none': 'Ingen'
  , 'profiles.name_placeholder': 'Skemanavn'
  , 'profiles.edit': 'Redigér'
  , 'profiles.preview_note': 'Kun forhåndsvisning. Skemaerne bliver først aktive, når profilen aktiveres.'
  , 'profiles.active_label': 'Manuelt skema aktivt:'
  , 'editor.tabs.holidays': 'Helligdage'
  , 'holidays.enable': 'Aktivér helligdage'
  , 'holidays.desc': 'Brug et særligt dagsskema på helligdage.'
  , 'holidays.source': 'Kilde til helligdage'
  , 'holidays.source.calendar': 'Kalender'
  , 'holidays.source.manual': 'Manuelle datoer'
  , 'holidays.entity': 'Helligdags‑entitet'
  , 'holidays.entity_desc': 'Vælg en kalender, der kun giver on/off. Den skal være on på helligdage og off på andre dage.'
  , 'holidays.dates': 'Helligdagsdatoer'
  , 'holidays.add_date': 'Tilføj dato'
  , 'holidays.editor.title': 'Helligdags‑skema'
  , 'holidays.edit': 'Redigér helligdags‑skema'
  , 'holidays.button': 'Helligdage'
  },
  sv: {
    'card.title_default': 'Termostat-tidslinje',
    'ui.edit_block': 'Redigera block',
    'ui.add_block': 'Lägg till block',
    'ui.from': 'Från',
    'ui.to': 'Till',
    'ui.temperature': 'Temperatur',
    'ui.delete': 'Ta bort',
    'ui.cancel': 'Avbryt',
    'ui.save': 'Spara',
    'ui.error_prefix': 'Fel: ',
    'ui.overlap_msg': 'Du har valt överlappande tider — det överlappar under {start} – {end}.',
    'ui.auto_fix': 'Åtgärda automatiskt',
    'ui.fix_start_to': 'Justera start till {time}',
  'ui.fix_end_to': 'Justera slut till {time}',
  // Inline meta
  'ui.current_temp': 'Nuvarande temperatur:',

    'editor.title_label': 'Titel',
  'editor.add_entity': 'Lägg till rum',
    'editor.entity_placeholder': 'Välj en entitet',
    'editor.drag_reorder': 'Dra för att ändra ordning',
    'editor.remove': 'Ta bort',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Radhöjd (px)',
  'editor.max_c': 'Max °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatisk tillämpning',
    'editor.auto_apply.desc': 'När det är aktiverat försöker kortet automatiskt ställa in temperaturen på valda climate-entiteter så att den matchar det planerade värdet för ”just nu”.',
    'editor.apply_edit.title': 'Vid redigering',
    'editor.apply_edit.desc': 'När du ändrar tidslinjeblock och ändringen påverkar aktuell tid, tillämpas den nya temperaturen omedelbart.',
    'editor.apply_default.title': 'Vid ändring av Standard °C',
    'editor.apply_default.desc': 'När ”Standard °C” ändras och det påverkar den aktuella perioden, tillämpas den nya temperaturen omedelbart.',
  'ui.copy_plan': 'Kopiera schema',
  'ui.paste_plan': 'Klistra in schema',
  'ui.copy_day': 'Kopiera dag',
  'ui.paste_day': 'Klistra in dag',
  'editor.merge_label': 'Flet med (vælg en ekstra radiatortermostat)',
  'editor.display_name_optional': 'Rumsnamn (valfritt)',
    'editor.merged_with': 'Sammanslagen med',
  'editor.store_enable.title': 'Delad lagring + bakgrundsstyrning',
  'editor.store_enable.short': 'Sparar scheman i vald sensor och aktiverar bakgrundsstyrning.',
  'editor.store_enable.desc': 'Sparar scheman i vald sensor och aktiverar set_temperature i bakgrunden. Termostater uppdateras även när kortet är stängt. Delar också scheman (värmeblock) och kortinställningar mellan användare/enheter. När av: kommandon skickas bara när kortet är aktivt synligt på en enhet (surfplatta/dator/mobil) och måste förbli öppet.',
  'editor.store_missing': 'Integrationen "Thermostat Pro Timeline Sync" är inte installerad. Delad lagring är inte tillgänglig.',
    'editor.clear_store': 'Rensa lagring',
    'editor.clear_store_confirm': 'Detta tar bort alla sparade scheman. Vill du fortsätta?',
  'editor.migrate_to_store': 'Överför data till lagring',
    'editor.migrate_confirm': 'Överför dina webbläsar-sparade scheman till vald sensor? Detta skriver över befintliga scheman i lagringen.',
  'editor.migrate_pull_confirm': 'Importera scheman från lagring och skriv över lokala webbläsardata?',
  'editor.select_storage_first': 'Välj först en lagringssensor.',
    'editor.no_local_data': 'Inga lokala webbläsardata hittades.',
    'editor.clear_all': 'Rensa all data',
    'editor.clear_all_confirm': 'Detta tar bort både lagring och lokala webblässarscheman. Vill du fortsätta?',
  'editor.clear_storage_only': 'Rensa endast lagringsdata',
    'editor.clear_storage_only_confirm': 'Detta tar bort scheman från vald lagringssensor. Vill du fortsätta?',
  'editor.clear_local_only': 'Rensa endast lokala data',
    'editor.clear_local_only_confirm': 'Detta tar endast bort scheman som sparats i din webbläsare. Vill du fortsätta?',
    'week.enable': 'Aktivera veckodagar',
    'week.mode': 'Veckoläge',
    'week.mode.same_all': 'Samma alla dagar (1)',
  'week.mode.weekday_weekend': 'Vardagar + Helg',
  'week.mode.weekday_sat_sun': 'Vardagar + Lördag + Söndag',
  'week.mode.all_7': 'Alla dagar',
    'week.button': 'Veckodagar',
    'week.days.mon': 'Mån',
    'week.days.tue': 'Tis',
    'week.days.wed': 'Ons',
    'week.days.thu': 'Tor',
    'week.days.fri': 'Fre',
    'week.days.sat': 'Lör',
    'week.days.sun': 'Sön',
    'week.editor.title': 'Veckoschema',
    'week.editor.preview_note': 'Endast förhandsvisning. Ändringar tillämpas när du trycker Spara.',
  'week.copy_to_rooms': 'Kopiera vecka till rum',
  'week.copy_to_rooms.title': 'Kopiera vecka till rum',
  'week.copy_to_rooms.select': 'Välj rum',
  'week.copy_to_rooms.apply': 'Klistra in i rum',
    'week.group.weekdays': 'Vardagar',
  'week.group.weekend': 'Helg',
    'week.days_full.mon': 'Måndag',
    'week.days_full.tue': 'Tisdag',
    'week.days_full.wed': 'Onsdag',
    'week.days_full.thu': 'Torsdag',
    'week.days_full.fri': 'Fredag',
    'week.days_full.sat': 'Lördag',
    'week.days_full.sun': 'Söndag',
    'editor.timefmt.title': 'Tidsformat',
    'editor.timefmt.desc': 'Välj 24-timmars eller 12-timmars (AM/PM) visning på kortet.',
    'editor.tempfmt.title': 'Temperaturenhet',
    'editor.tempfmt.desc': 'Välj Celsius (°C) eller Fahrenheit (°F) för visning i kortet och editorer.',
  'editor.timesrc.title': 'Tidskälla',
  'editor.timesrc.desc': 'Välj om kortet ska använda webbläsarens tid eller Home Assistant-tidszon för ”nu”.',
  'editor.timesrc.browser': 'Webbläsare',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Färger för värmeblock',
    'editor.heat_colors.add': 'Lägg till färgintervall',
    'editor.colors.col_from': 'Från °C',
    'editor.colors.col_to': 'Till °C',
    'editor.colors.col_color': 'Färg',
    'editor.colors.empty': 'Inga rum tillagda ännu. Lägg till ett rum för att definiera färger.',
    'editor.colors.go_add': 'Lägg till rum',
    'editor.colors.refresh': 'Uppdatera schema',
    'editor.colors.clear_local': 'Rensa lokala färgdata',
    'editor.colors.clear_local_confirm': 'Detta tar bort färgintervall som sparats i din webbläsare för detta kort. Vill du fortsätta?',
    'editor.colors.clear_shared': 'Rensa delad färglagring',
  'editor.colors.clear_shared_confirm': 'Detta tar bort färgintervall i den valda lagringssensorn. Vill du fortsätta?',
  'editor.colors.mode': 'Färgläge',
  'editor.colors.mode.desc': 'Välj färger per rum eller ett set för alla rum.',
  'editor.colors.mode_per_room': 'Per rum',
  'editor.colors.mode_global': 'Alla rum',
  'editor.colors.global_title': 'Alla rum',
  'editor.colors.clear_all': 'Rensa all färgdata',
  'editor.colors.clear_all_confirm': 'Detta tar bort alla färgintervall både lokalt och i vald lagringssensor. Vill du fortsätta?',
  'editor.reload_editor': 'Ladda om redigerare',
  'editor.reload_dashboard': 'Ladda om instrumentpanel',
  'onboard.title': 'Välkommen till Termostat‑tidslinje',
  'onboard.next': 'Nästa',
  'onboard.prev': 'Tillbaka',
  'onboard.skip': 'Hoppa över',
  'onboard.done': 'Klar',
  'onboard.dont_show': 'Visa inte igen',
  'onboard.step_main': 'Detta är huvudtidslinjen. Den visar önskad temperatur under dygnet för varje rum.',
  'onboard.step_add': 'Lägg till ett värmeblock via + Lägg till block eller dubbelklicka på tidslinjen.',
  'onboard.step_edit': 'Redigera eller ta bort ett block genom att dubbelklicka. Använd veckodagar för olika dagar.',
  'onboard.reset': 'Visa guiden igen',
  'onboard.reset_ok': 'Guiden visas nästa gång.',
    'editor.select_entities': 'Rum',
  'editor.tabs.rooms': 'Rum',
  'week.enable.desc': 'Aktivera schema per veckodag. När det är av, används samma schema varje dag.',
  'editor.tabs.sync': 'Sync Engine',
  'editor.tabs.backup': 'Backup',
  'backup.title': 'Backup',
  'backup.desc': 'Kopiera innehållet i din sync‑sensor till backup‑sensorn och återställ vid behov.',
  'backup.now': 'Säkerhetskopiera nu',
  'backup.restore': 'Återställ',
  'backup.auto': 'Automatisk backup',
  'backup.auto.desc': 'Gör automatiska säkerhetskopior med intervall.',
  'backup.interval': 'Intervall (dagar)',
  'backup.interval.desc': 'Hur många dagar mellan automatiska säkerhetskopior (min. 1).',
  'backup.sensor': 'Backup‑sensor',
  'backup.last': 'Senaste backup',
  'pause.menu_title': 'Pausa auto‑apply',
  'pause.off_1h': 'Pausa 1 timme',
  'pause.off_5h': 'Pausa 5 timmar',
  'pause.off_custom': 'Anpassad varaktighet…',
  'pause.off_indef': 'Pausa tills jag återupptar',
  'pause.resume': 'Återuppta nu',
  'pause.close': 'Stäng',
  'pause.active_until': 'Pausad till {time}',
  'pause.active_indef': 'Pausad',
  'editor.pausebtn.title': 'Pausknapp',
  'editor.pausebtn.desc': 'Visa en global pausknapp i kortets huvud. När paus är aktiv blockeras alla set_temperature‑kommandon.',
  'editor.integration.connected': 'Integration klar',
  'editor.integration.disconnected': 'Integration inte tillgänglig'
  , 'profiles.button': 'Manuellt schema'
  , 'profiles.editor.title': 'Profiler'
  , 'profiles.add': 'Lägg till profil'
  , 'profiles.rename': 'Byt namn'
  , 'profiles.delete': 'Ta bort'
  , 'profiles.activate': 'Aktivera'
  , 'profiles.deactivate': 'Inaktivera'
  , 'profiles.active': 'Aktiv'
  , 'profiles.none': 'Ingen'
  , 'profiles.name_placeholder': 'Profilnamn'
  , 'profiles.edit': 'Redigera'
  , 'profiles.preview_note': 'Endast förhandsvisning. Scheman blir aktiva när du aktiverar profilen.'
  , 'editor.tabs.holidays': 'Helgdagar'
  , 'holidays.enable': 'Aktivera helgdagar'
  , 'holidays.desc': 'Använd ett särskilt dagsschema på helgdagar.'
  , 'holidays.source': 'Källa för helgdagar'
  , 'holidays.source.calendar': 'Kalender'
  , 'holidays.source.manual': 'Manuella datum'
  , 'holidays.entity': 'Helgdags‑entitet'
  , 'holidays.entity_desc': 'Välj en kalender som bara ger on/off. Den ska vara on på helgdagar och off övriga dagar.'
  , 'holidays.dates': 'Helgdagsdatum'
  , 'holidays.add_date': 'Lägg till datum'
  , 'holidays.editor.title': 'Helgdags‑schema'
  , 'holidays.edit': 'Redigera helgdags‑schema'
  , 'holidays.button': 'Helgdagar'
  },
  nb: {
    'card.title_default': 'Termostat tidslinje',
    'ui.edit_block': 'Rediger blokk',
    'ui.add_block': 'Legg til blokk',
    'ui.from': 'Fra',
    'ui.to': 'Til',
    'ui.temperature': 'Temperatur',
    'ui.delete': 'Slett',
    'ui.cancel': 'Avbryt',
    'ui.save': 'Lagre',
    'ui.error_prefix': 'Feil: ',
    'ui.overlap_msg': 'Du har valgt overlappende tider — det overlapper i perioden {start} – {end}.',
    'ui.auto_fix': 'Rett automatisk',
    'ui.fix_start_to': 'Sett start til {time}',
  'ui.fix_end_to': 'Sett slutt til {time}',
  // Inline meta
  'ui.current_temp': 'Aktuell temperatur:',

    'editor.title_label': 'Tittel',
  'editor.add_entity': 'Legg til rom',
    'editor.entity_placeholder': 'Velg en entitet',
    'editor.drag_reorder': 'Dra for å endre rekkefølge',
    'editor.remove': 'Fjern',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Radhøyde (px)',
  'editor.max_c': 'Maks °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatisk bruk',
    'editor.auto_apply.desc': 'Når aktivert forsøker kortet å sette temperaturen på valgte climate-entiteter slik at den samsvarer med planlagt verdi for «nå».',
    'editor.apply_edit.title': 'Ved redigering',
    'editor.apply_edit.desc': 'Når du endrer blokker i tidslinjen og endringen påvirker aktuell tid, tilpasses den nye temperaturen umiddelbart.',
    'editor.apply_default.title': 'Ved Standard °C-endring',
    'editor.apply_default.desc': 'Når «Standard °C» endres og det påvirker gjeldende periode, brukes den nye temperaturen umiddelbart.',
  'ui.copy_plan': 'Kopier plan',
  'ui.paste_plan': 'Lim inn plan',
  'ui.copy_day': 'Kopier dag',
  'ui.paste_day': 'Lim inn dag',
  'editor.merge_label': 'Flet med (vælg en ekstra radiatortermostat)',
  'editor.display_name_optional': 'Romnavn (valgfritt)',
    'editor.merged_with': 'Flettet med',
  'editor.store_enable.title': 'Delt lagring + bakgrunnsstyring',
  'editor.store_enable.short': 'Lagrer tidsplaner i valgt sensor og aktiverer bakgrunnsstyring.',
  'editor.store_enable.desc': 'Lagrer tidsplaner i valgt sensor og aktiverer set_temperature i bakgrunnen. Termostater oppdateres også når kortet er lukket. Deler også tidsplaner (varmeblokker) og kortinnstillinger på tvers av brukere/enheter. Når av: kommandoer sendes kun mens kortet er aktivt synlig på en enhet (nettbrett/PC/mobil) og må forbli åpent.',
  'editor.store_missing': 'Integrasjonen "Thermostat Pro Timeline Sync" er ikke installert. Delt lagring er ikke tilgjengelig.',
    'editor.clear_store': 'Tøm lagring',
    'editor.clear_store_confirm': 'Dette vil slette alle lagrede tidsplaner. Fortsette?',
  'editor.migrate_to_store': 'Overfør data til lagring',
    'editor.migrate_confirm': 'Overfør nettleserlagrede tidsplaner til valgt sensor? Dette overskriver eksisterende tidsplaner i lagringen.',
  'editor.migrate_pull_confirm': 'Importer tidsplaner fra lagring og overskriv lokale nettleserdata?',
  'editor.select_storage_first': 'Velg først en lagringssensor.',
    'editor.no_local_data': 'Ingen lokale nettleserdata ble funnet.',
    'editor.clear_all': 'Tøm all data',
    'editor.clear_all_confirm': 'Dette sletter både lagring og lokale nettleserplaner. Fortsette?',
  'editor.clear_storage_only': 'Tøm kun lagringsdata',
    'editor.clear_storage_only_confirm': 'Dette sletter tidsplaner fra valgt lagringssenso r. Fortsette?',
  'editor.clear_local_only': 'Tøm kun lokale data',
    'editor.clear_local_only_confirm': 'Dette sletter kun tidsplaner som er lagret i nettleseren. Fortsette?',
    'week.enable': 'Aktiver ukedager',
    'week.mode': 'Ukedagsmodus',
    'week.mode.same_all': 'Samme hver dag (1)',
  'week.mode.weekday_weekend': 'Hverdager + Helg',
  'week.mode.weekday_sat_sun': 'Hverdager + Lørdag + Søndag',
  'week.mode.all_7': 'Alle dager',
    'week.button': 'Ukedager',
    'week.days.mon': 'Man',
    'week.days.tue': 'Tir',
    'week.days.wed': 'Ons',
    'week.days.thu': 'Tor',
    'week.days.fri': 'Fre',
    'week.days.sat': 'Lør',
    'week.days.sun': 'Søn',
    'week.editor.title': 'Ukeplan',
    'week.editor.preview_note': 'Kun forhåndsvisning. Endringer brukes når du trykker Lagre.',
  'week.copy_to_rooms': 'Kopier ukeplan til rom',
  'week.copy_to_rooms.title': 'Kopier ukeplan til rom',
  'week.copy_to_rooms.select': 'Velg rom',
  'week.copy_to_rooms.apply': 'Sett inn i rom',
    'week.group.weekdays': 'Hverdager',
    'week.group.weekend': 'Helg',
    'week.days_full.mon': 'Mandag',
    'week.days_full.tue': 'Tirsdag',
    'week.days_full.wed': 'Onsdag',
    'week.days_full.thu': 'Torsdag',
    'week.days_full.fri': 'Fredag',
    'week.days_full.sat': 'Lørdag',
    'week.days_full.sun': 'Søndag',
    'editor.timefmt.title': 'Tidsformat',
    'editor.timefmt.desc': 'Velg 24-timers eller 12-timers (AM/PM) visning for tider på kortet.',
    'editor.tempfmt.title': 'Temperaturenhet',
    'editor.tempfmt.desc': 'Velg Celsius (°C) eller Fahrenheit (°F) for visning i kortet og editorer.',
  'editor.timesrc.title': 'Tidskilde',
  'editor.timesrc.desc': 'Velg om kortet skal bruke nettleserens tid eller Home Assistant-tidssone for «nå».',
  'editor.timesrc.browser': 'Nettleser',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Farger for varmeblokker',
    'editor.heat_colors.add': 'Legg til fargeintervall',
    'editor.colors.col_from': 'Fra °C',
    'editor.colors.col_to': 'Til °C',
    'editor.colors.col_color': 'Farge',
    'editor.colors.empty': 'Ingen rom lagt til ennå. Legg til et rom for å definere farger.',
    'editor.colors.go_add': 'Legg til rom',
    'editor.colors.refresh': 'Oppdater tidsplan',
    'editor.colors.clear_local': 'Tøm lokale fargedata',
    'editor.colors.clear_local_confirm': 'Dette sletter fargeintervaller lagret i nettleseren for dette kortet. Fortsette?',
    'editor.colors.clear_shared': 'Tøm delt fargelagring',
  'editor.colors.clear_shared_confirm': 'Dette sletter fargeintervaller i den valgte lagringssensoren. Fortsette?',
  'editor.colors.mode': 'Fargemodus',
  'editor.colors.mode.desc': 'Velg farger per rom eller ett felles sett for alle rom.',
  'editor.colors.mode_per_room': 'Per rom',
  'editor.colors.mode_global': 'Alle rom',
  'editor.colors.global_title': 'Alle rom',
  'editor.colors.clear_all': 'Tøm alle fargedata',
  'editor.colors.clear_all_confirm': 'Dette sletter alle fargeintervaller både lokalt og i valgt lagringssenso r. Fortsette?',
  'editor.reload_editor': 'Last inn editor på nytt',
  'editor.reload_dashboard': 'Last inn dashboard på nytt',
  'onboard.title': 'Velkommen til Termostat tidslinje',
  'onboard.next': 'Neste',
  'onboard.prev': 'Tilbake',
  'onboard.skip': 'Hopp over',
  'onboard.done': 'Ferdig',
  'onboard.dont_show': 'Ikke vis igjen',
  'onboard.step_main': 'Dette er hovedtidslinjen. Den viser ønsket temperatur gjennom døgnet for hvert rom.',
  'onboard.step_add': 'Legg til en varmeblokk via + Legg til blokk eller ved å dobbeltklikke på tidslinjen.',
  'onboard.step_edit': 'Rediger eller slett en blokk ved å dobbeltklikke. Bruk ukedager for forskjellige dager.',
  'onboard.reset': 'Vis guiden på nytt',
  'onboard.reset_ok': 'Velkomst vises neste gang.',
    'editor.select_entities': 'Rom',
  'editor.tabs.rooms': 'Rum',
  'week.enable.desc': 'Aktivera schema per veckodag. När det är av, används samma schema varje dag.',
  'editor.tabs.sync': 'Sync Engine',
  'pause.menu_title': 'Pause auto‑apply',
  'pause.off_1h': 'Pause i 1 time',
  'pause.off_5h': 'Pause i 5 timer',
  'pause.off_custom': 'Egendefinert varighet…',
  'pause.off_indef': 'Pause til jeg gjenopptar',
  'pause.resume': 'Gjenoppta nå',
  'pause.close': 'Lukk',
  'pause.active_until': 'Pauset til {time}',
  'pause.active_indef': 'Pauset',
  'editor.pausebtn.title': 'Pauseknapp',
  'editor.pausebtn.desc': 'Vis en global pauseknapp i kortets header. Når pause er aktiv, undertrykkes alle set_temperature‑kommandoer.',
  'editor.tabs.sync': 'Synk‑motor',
  'editor.tabs.backup': 'Backup',
  'backup.title': 'Backup',
  'backup.desc': 'Kopier innholdet i synk‑sensoren til backup‑sensoren og gjenopprett ved behov.',
  'backup.now': 'Ta backup nå',
  'backup.restore': 'Gjenopprett',
  'backup.auto': 'Automatisk backup',
  'backup.auto.desc': 'Lag automatiske sikkerhetskopier med intervaller.',
  'backup.interval': 'Intervall (dager)',
  'backup.interval.desc': 'Antall dager mellom automatiske sikkerhetskopier (min. 1).',
  'backup.sensor': 'Backup‑sensor',
  'backup.last': 'Siste backup',
  'editor.integration.connected': 'Integrasjon klar',
  'editor.integration.disconnected': 'Integrasjon utilgjengelig'
  , 'profiles.button': 'Manuelt skjema'
  , 'profiles.editor.title': 'Profiler'
  , 'profiles.add': 'Legg til profil'
  , 'profiles.rename': 'Gi nytt navn'
  , 'profiles.delete': 'Slett'
  , 'profiles.activate': 'Aktiver'
  , 'profiles.deactivate': 'Deaktiver'
  , 'profiles.active': 'Aktiv'
  , 'profiles.none': 'Ingen'
  , 'profiles.name_placeholder': 'Profilnavn'
  , 'profiles.edit': 'Rediger'
  , 'profiles.preview_note': 'Kun forhåndsvisning. Skjemaer blir aktive når profilen aktiveres.'
  , 'editor.tabs.holidays': 'Helligdager'
  , 'holidays.enable': 'Aktiver helligdager'
  , 'holidays.desc': 'Bruk en egen dagsplan på helligdager.'
  , 'holidays.source': 'Kilde for helligdager'
  , 'holidays.source.calendar': 'Kalender'
  , 'holidays.source.manual': 'Manuelle datoer'
  , 'holidays.entity': 'Helligdags‑entitet'
  , 'holidays.entity_desc': 'Velg en kalender som kun gir on/off. Den skal være on på helligdager og off ellers.'
  , 'holidays.dates': 'Helligdagsdatoer'
  , 'holidays.add_date': 'Legg til dato'
  , 'holidays.editor.title': 'Helligdags‑skjema'
  , 'holidays.edit': 'Rediger helligdags‑skjema'
  , 'holidays.button': 'Helligdager'
  },
  de: {
    'card.title_default': 'Thermostat-Zeitlinie',
    'ui.edit_block': 'Block bearbeiten',
    'ui.add_block': 'Block hinzufügen',
    'ui.from': 'Von',
    'ui.to': 'Bis',
    'ui.temperature': 'Temperatur',
    'ui.delete': 'Löschen',
    'ui.cancel': 'Abbrechen',
    'ui.save': 'Speichern',
    'ui.error_prefix': 'Fehler: ',
    'ui.overlap_msg': 'Sie haben sich überschneidende Zeiten ausgewählt — Überschneidung zwischen {start} – {end}.',
    'ui.auto_fix': 'Automatisch korrigieren',
    'ui.fix_start_to': 'Beginn auf {time} korrigieren',
  'ui.fix_end_to': 'Ende auf {time} korrigieren',
  // Inline meta
  'ui.current_temp': 'Aktuelle Temperatur:',

    'editor.title_label': 'Titel',
  'editor.add_entity': 'Raum hinzufügen',
    'editor.entity_placeholder': 'Entität auswählen',
    'editor.drag_reorder': 'Zum Neuordnen ziehen',
    'editor.remove': 'Entfernen',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Zeilenhöhe (px)',
  'editor.max_c': 'Max °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatisch anwenden',
    'editor.auto_apply.desc': 'Wenn aktiviert, versucht die Karte, die Temperatur der ausgewählten climate-Entitäten automatisch so einzustellen, dass sie dem geplanten Wert für „jetzt“ entspricht.',
    'editor.apply_edit.title': 'Beim Bearbeiten',
    'editor.apply_edit.desc': 'Wenn Sie Blöcke der Zeitlinie ändern und die Änderung die aktuelle Zeit betrifft, wird die neue Temperatur sofort angewendet.',
    'editor.apply_default.title': 'Bei Änderung von Standard °C',
    'editor.apply_default.desc': 'Wenn „Standard °C“ geändert wird und dies den aktuellen Zeitraum betrifft, wird die neue Temperatur sofort angewendet.',
  'ui.copy_plan': 'Plan kopieren',
  'ui.paste_plan': 'Plan einfügen',
  'ui.copy_day': 'Tag kopieren',
  'ui.paste_day': 'Tag einfügen',
  'editor.merge_label': 'Mit zusammenführen (zusätzlichen Thermostat hinzufügen)',
  'editor.display_name_optional': 'Raumname (optional)',
    'editor.merged_with': 'Zusammengeführt mit',
  'editor.store_enable.title': 'Geteilter Speicher + Hintergrundsteuerung',
  'editor.store_enable.short': 'Speichert Pläne im ausgewählten Sensor und aktiviert die Hintergrundsteuerung.',
  'editor.store_enable.desc': 'Speichert Pläne im ausgewählten Sensor und aktiviert set_temperature im Hintergrund. Thermostate werden auch aktualisiert, wenn die Karte geschlossen ist. Teilt zudem Zeitpläne (Heizblöcke) und Karten-Einstellungen zwischen Benutzern/Geräten. Wenn aus: Befehle werden nur gesendet, solange die Karte auf einem Gerät (Tablet/PC/Mobil) aktiv sichtbar ist und geöffnet bleibt.',
  'editor.store_missing': 'Die Integration „Thermostat Pro Timeline Sync“ ist nicht installiert. Geteilter Speicher ist nicht verfügbar.',
    'editor.clear_store': 'Speicher leeren',
    'editor.clear_store_confirm': 'Dadurch werden alle gespeicherten Zeitpläne gelöscht. Fortfahren?',
  'editor.migrate_to_store': 'Daten in Speicher übertragen',
    'editor.migrate_confirm': 'Ihre im Browser gespeicherten Pläne in den ausgewählten Sensor übertragen? Vorhandene gespeicherte Pläne werden überschrieben.',
  'editor.migrate_pull_confirm': 'Pläne aus dem Speicher importieren und lokale Browserdaten überschreiben?',
  'editor.select_storage_first': 'Bitte wähle zuerst einen Speichersensor aus.',
    'editor.no_local_data': 'Keine lokalen Browserdaten gefunden.',
    'editor.clear_all': 'Alle Daten löschen',
    'editor.clear_all_confirm': 'Dies löscht sowohl Speicher- als auch lokale Browser-Zeitpläne. Fortfahren?',
  'editor.clear_storage_only': 'Nur Speicherdaten löschen',
    'editor.clear_storage_only_confirm': 'Dies löscht Zeitpläne vom ausgewählten Speichersensor. Fortfahren?',
  'editor.clear_local_only': 'Nur lokale Daten löschen',
    'editor.clear_local_only_confirm': 'Dies löscht nur im Browser gespeicherte Zeitpläne. Fortfahren?',
    'week.enable': 'Wochentage aktivieren',
    'week.mode': 'Wochentagsmodus',
    'week.mode.same_all': 'Jeden Tag gleich (1)',
  'week.mode.weekday_weekend': 'Werktage + Wochenende',
  'week.mode.weekday_sat_sun': 'Werktage + Samstag + Sonntag',
  'week.mode.all_7': 'Alle Tage',
    'week.button': 'Wochentage',
    'week.days.mon': 'Mo',
    'week.days.tue': 'Di',
    'week.days.wed': 'Mi',
    'week.days.thu': 'Do',
    'week.days.fri': 'Fr',
    'week.days.sat': 'Sa',
    'week.days.sun': 'So',
    'week.editor.title': 'Wochenschema',
    'week.editor.preview_note': 'Nur Vorschau. Änderungen werden erst beim Speichern angewendet.',
  'week.copy_to_rooms': 'Wochenschema in Räume kopieren',
  'week.copy_to_rooms.title': 'Wochenschema in Räume kopieren',
  'week.copy_to_rooms.select': 'Räume auswählen',
  'week.copy_to_rooms.apply': 'In Räume einfügen',
    'week.group.weekdays': 'Werktage',
    'week.group.weekend': 'Wochenende',
    'week.days_full.mon': 'Montag',
    'week.days_full.tue': 'Dienstag',
    'week.days_full.wed': 'Mittwoch',
    'week.days_full.thu': 'Donnerstag',
    'week.days_full.fri': 'Freitag',
    'week.days_full.sat': 'Samstag',
    'week.days_full.sun': 'Sonntag',
    'editor.timefmt.title': 'Zeitformat',
    'editor.timefmt.desc': '24-Stunden- oder 12-Stunden-Anzeige (AM/PM) für Zeiten auf der Karte wählen.',
    'editor.tempfmt.title': 'Temperatureinheit',
    'editor.tempfmt.desc': 'Celsius (°C) oder Fahrenheit (°F) für Anzeige in Karte und Editoren wählen.',
  'editor.timesrc.title': 'Zeitquelle',
  'editor.timesrc.desc': 'Wählen, ob die Karte die Browser‑Zeit oder die Home‑Assistant‑Zeitzone für „jetzt“ verwendet.',
  'editor.timesrc.browser': 'Browser',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Farben für Heizblöcke',
    'editor.heat_colors.add': 'Farbintervall hinzufügen',
    'editor.colors.col_from': 'Von °C',
    'editor.colors.col_to': 'Bis °C',
    'editor.colors.col_color': 'Farbe',
    'editor.colors.empty': 'Noch keine Räume hinzugefügt. Fügen Sie einen Raum hinzu, um Farben zu definieren.',
    'editor.colors.go_add': 'Raum hinzufügen',
    'editor.colors.refresh': 'Zeitplan aktualisieren',
    'editor.colors.clear_local': 'Lokale Farb-Daten löschen',
    'editor.colors.clear_local_confirm': 'Dadurch werden in Ihrem Browser für diese Karte gespeicherte Farbbereiche gelöscht. Fortfahren?',
    'editor.colors.clear_shared': 'Geteilten Farbspeicher löschen',
  'editor.colors.clear_shared_confirm': 'Dadurch werden Farbbereiche im ausgewählten Speichersensor gelöscht. Fortfahren?',
  'editor.colors.mode': 'Farbmodus',
  'editor.colors.mode.desc': 'Farben pro Raum oder ein Satz für alle Räume wählen.',
  'editor.colors.mode_per_room': 'Pro Raum',
  'editor.colors.mode_global': 'Alle Räume',
  'editor.colors.global_title': 'Alle Räume',
  'editor.colors.clear_all': 'Alle Farbdaten löschen',
  'editor.colors.clear_all_confirm': 'Dies löscht alle Farbbereiche sowohl lokal als auch im ausgewählten Speichersensor. Fortfahren?',
  'editor.reload_editor': 'Editor neu laden',
  'editor.reload_dashboard': 'Dashboard neu laden',
  'onboard.title': 'Willkommen bei Thermostat‑Zeitlinie',
  'onboard.next': 'Weiter',
  'onboard.prev': 'Zurück',
  'onboard.skip': 'Überspringen',
  'onboard.done': 'Fertig',
  'onboard.dont_show': 'Nicht erneut anzeigen',
  'onboard.step_main': 'Dies ist die Hauptzeitlinie. Sie zeigt Solltemperaturen über 24 Stunden für jeden Raum.',
  'onboard.step_add': 'Fügen Sie einen Heizblock über + Block hinzufügen oder per Doppelklick hinzu.',
  'onboard.step_edit': 'Bearbeiten/Löschen per Doppelklick. Verwenden Sie Wochentage für verschiedene Tage.',
  'onboard.reset': 'Anleitung erneut anzeigen',
  'onboard.reset_ok': 'Willkommen wird beim nächsten Mal angezeigt.',
    'editor.select_entities': 'Räume',
  'editor.tabs.rooms': 'Räume',
  'week.enable.desc': 'Pro-Wochentag-Plan aktivieren. Wenn aus, wird jeden Tag derselbe Plan verwendet.',
  'editor.tabs.sync': 'Sync‑Engine',
  'editor.tabs.backup': 'Backup',
  'backup.title': 'Backup',
  'backup.desc': 'Kopiere den Inhalt deines Sync‑Sensors in den Backup‑Sensor und bei Bedarf wiederherstellen.',
  'backup.now': 'Jetzt sichern',
  'backup.restore': 'Wiederherstellen',
  'backup.auto': 'Automatisches Backup',
  'backup.auto.desc': 'Automatische Sicherungen in festen Intervallen erstellen.',
  'backup.interval': 'Intervall (Tage)',
  'backup.interval.desc': 'Anzahl der Tage zwischen automatischen Sicherungen (min. 1).',
  'backup.sensor': 'Backup‑Sensor',
  'backup.last': 'Letztes Backup',
  'pause.menu_title': 'Auto‑Anwendung pausieren',
  'pause.off_1h': '1 Stunde pausieren',
  'pause.off_5h': '5 Stunden pausieren',
  'pause.off_custom': 'Benutzerdefinierte Dauer…',
  'pause.off_indef': 'Pausieren bis ich fortsetze',
  'pause.resume': 'Jetzt fortsetzen',
  'pause.close': 'Schließen',
  'pause.active_until': 'Pausiert bis {time}',
  'pause.active_indef': 'Pausiert',
  'editor.pausebtn.title': 'Pause‑Schaltfläche',
  'editor.pausebtn.desc': 'Zeigt eine globale Pause‑Schaltfläche in der Kopfzeile. Während der Pause werden alle set_temperature‑Befehle unterdrückt.',
  'editor.integration.connected': 'Integration bereit',
  'editor.integration.disconnected': 'Integration nicht verfügbar'
  , 'profiles.button': 'Manueller Zeitplan'
  , 'profiles.editor.title': 'Profile'
  , 'profiles.add': 'Profil hinzufügen'
  , 'profiles.rename': 'Umbenennen'
  , 'profiles.delete': 'Löschen'
  , 'profiles.activate': 'Aktivieren'
  , 'profiles.deactivate': 'Deaktivieren'
  , 'profiles.active': 'Aktiv'
  , 'profiles.none': 'Keins'
  , 'profiles.name_placeholder': 'Profilname'
  , 'profiles.edit': 'Bearbeiten'
  , 'profiles.preview_note': 'Nur Vorschau. Pläne werden aktiv, wenn Sie das Profil aktivieren.'
  , 'editor.tabs.holidays': 'Feiertage'
  , 'holidays.enable': 'Feiertage aktivieren'
  , 'holidays.desc': 'An Feiertagen einen speziellen Tagesplan verwenden.'
  , 'holidays.source': 'Feiertagsquelle'
  , 'holidays.source.calendar': 'Kalender'
  , 'holidays.source.manual': 'Manuelle Daten'
  , 'holidays.entity': 'Feiertags‑Entität'
  , 'holidays.entity_desc': 'Wähle einen Kalender, der nur Ein/Aus meldet. An Feiertagen sollte er „on“ sein, an anderen Tagen „off“.'
  , 'holidays.dates': 'Feiertagsdaten'
  , 'holidays.add_date': 'Datum hinzufügen'
  , 'holidays.editor.title': 'Feiertags‑Zeitplan'
  , 'holidays.edit': 'Feiertags‑Zeitplan bearbeiten'
  , 'holidays.button': 'Feiertage'
  },
  es: {
    'card.title_default': 'Línea de tiempo del termostato',
    'ui.edit_block': 'Editar bloque',
    'ui.add_block': 'Agregar bloque',
    'ui.from': 'Desde',
    'ui.to': 'Hasta',
    'ui.temperature': 'Temperatura',
    'ui.delete': 'Eliminar',
    'ui.cancel': 'Cancelar',
    'ui.save': 'Guardar',
    'ui.error_prefix': 'Error: ',
    'ui.overlap_msg': 'Has seleccionado horas superpuestas — se solapa durante {start} – {end}.',
    'ui.auto_fix': 'Corregir automáticamente',
    'ui.fix_start_to': 'Ajustar inicio a {time}',
  'ui.fix_end_to': 'Ajustar fin a {time}',
  // Inline meta
  'ui.current_temp': 'Temperatura actual:',

    'editor.title_label': 'Título',
  'editor.add_entity': 'Añadir habitación',
    'editor.entity_placeholder': 'Selecciona una entidad',
    'editor.drag_reorder': 'Arrastrar para reordenar',
    'editor.remove': 'Eliminar',
    'editor.default_c': 'Predeterminado °C',
  'editor.row_height_px': 'Altura de fila (px)',
  'editor.max_c': 'Máx °C',
    'editor.min_c': 'Mín °C',
    'editor.auto_apply.title': 'Aplicar automáticamente',
    'editor.auto_apply.desc': 'Cuando está activado, la tarjeta intentará establecer la temperatura en las entidades climate seleccionadas para que coincida con el valor planificado para “ahora mismo”.',
    'editor.apply_edit.title': 'Al editar',
    'editor.apply_edit.desc': 'Cuando cambias bloques de la línea de tiempo y el cambio afecta a la hora actual, la nueva temperatura se aplica inmediatamente.',
    'editor.apply_default.title': 'Al cambiar Predeterminado °C',
    'editor.apply_default.desc': 'Cuando “Predeterminado °C” cambia y afecta al período actual, la nueva temperatura se aplica inmediatamente.',
  'ui.copy_plan': 'Copiar plan',
  'ui.paste_plan': 'Pegar plan',
  'ui.copy_day': 'Copiar día',
  'ui.paste_day': 'Pegar día',
  'editor.merge_label': 'Combinar con (añadir termostato extra)',
  'editor.display_name_optional': 'Nombre de la habitación (opcional)',
    'editor.merged_with': 'Combinado con',
  'editor.store_enable.title': 'Almacenamiento compartido + control en segundo plano',
  'editor.store_enable.short': 'Guarda horarios en el sensor seleccionado y habilita el control en segundo plano.',
  'editor.store_enable.desc': 'Guarda horarios en el sensor seleccionado y habilita set_temperature en segundo plano. Los termostatos se actualizan incluso con la tarjeta cerrada. Además comparte horarios (bloques de calor) y la configuración de la tarjeta entre usuarios/dispositivos. Si está desactivado: los comandos se envían solo mientras la tarjeta está visible en un dispositivo (tableta/PC/móvil) y debe permanecer abierta.',
  'editor.store_missing': 'La integración "Thermostat Pro Timeline Sync" no está instalada. El almacenamiento compartido no está disponible.',
    'editor.clear_store': 'Vaciar almacenamiento',
    'editor.clear_store_confirm': 'Esto eliminará todos los horarios guardados. ¿Continuar?',
  'editor.migrate_to_store': 'Transferir datos al almacenamiento',
    'editor.migrate_confirm': '¿Transferir los horarios guardados en tu navegador al sensor seleccionado? Esto sobrescribirá los horarios existentes en el almacenamiento.',
  'editor.migrate_pull_confirm': '¿Importar horarios desde el almacenamiento y sobrescribir los datos locales del navegador?',
  'editor.select_storage_first': 'Selecciona primero un sensor de almacenamiento.',
    'editor.no_local_data': 'No se encontraron datos locales del navegador.',
    'editor.clear_all': 'Borrar todos los datos',
    'editor.clear_all_confirm': 'Esto eliminará los horarios tanto del almacenamiento como del navegador local. ¿Continuar?',
  'editor.clear_storage_only': 'Borrar solo datos de almacenamiento',
    'editor.clear_storage_only_confirm': 'Esto eliminará los horarios del sensor de almacenamiento seleccionado. ¿Continuar?',
  'editor.clear_local_only': 'Borrar solo datos locales',
    'editor.clear_local_only_confirm': 'Esto eliminará solo los horarios guardados en tu navegador. ¿Continuar?',
    'week.enable': 'Habilitar días de la semana',
    'week.mode': 'Modo por días',
    'week.mode.same_all': 'Igual todos los días (1)',
  'week.mode.weekday_weekend': 'Laborables + Fin de semana',
  'week.mode.weekday_sat_sun': 'Laborables + Sábado + Domingo',
  'week.mode.all_7': 'Todos los días',
    'week.button': 'Días de la semana',
    'week.days.mon': 'Lun',
    'week.days.tue': 'Mar',
    'week.days.wed': 'Mié',
    'week.days.thu': 'Jue',
    'week.days.fri': 'Vie',
    'week.days.sat': 'Sáb',
    'week.days.sun': 'Dom',
    'week.editor.title': 'Programación por días',
    'week.editor.preview_note': 'Solo vista previa. Los cambios se aplican al pulsar Guardar.',
  'week.copy_to_rooms': 'Copiar semana a habitaciones',
  'week.copy_to_rooms.title': 'Copiar semana a habitaciones',
  'week.copy_to_rooms.select': 'Seleccionar habitaciones',
  'week.copy_to_rooms.apply': 'Insertar en habitaciones',
    'week.group.weekdays': 'Laborables',
    'week.group.weekend': 'Fin de semana',
    'week.days_full.mon': 'Lunes',
    'week.days_full.tue': 'Martes',
    'week.days_full.wed': 'Miércoles',
    'week.days_full.thu': 'Jueves',
    'week.days_full.fri': 'Viernes',
    'week.days_full.sat': 'Sábado',
    'week.days_full.sun': 'Domingo',
    'editor.timefmt.title': 'Formato de hora',
    'editor.timefmt.desc': 'Elige visualización de 24 horas o 12 horas (AM/PM) para la tarjeta.',
    'editor.tempfmt.title': 'Unidad de temperatura',
    'editor.tempfmt.desc': 'Elige Celsius (°C) o Fahrenheit (°F) para mostrar en la tarjeta y editores.',
  'editor.timesrc.title': 'Fuente de tiempo',
  'editor.timesrc.desc': 'Elige si la tarjeta usa la hora del navegador o la zona horaria de Home Assistant para “ahora”.',
  'editor.timesrc.browser': 'Navegador',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Colores de bloques de calor',
    'editor.heat_colors.add': 'Añadir intervalo de color',
    'editor.colors.col_from': 'Desde °C',
    'editor.colors.col_to': 'Hasta °C',
    'editor.colors.col_color': 'Color',
    'editor.colors.empty': 'Aún no se han añadido habitaciones. Añade una para definir colores.',
    'editor.colors.go_add': 'Añadir habitación',
    'editor.colors.refresh': 'Actualizar programación',
    'editor.colors.clear_local': 'Borrar datos de color locales',
    'editor.colors.clear_local_confirm': 'Esto eliminará los intervalos de color guardados en tu navegador para esta tarjeta. ¿Continuar?',
    'editor.colors.clear_shared': 'Borrar almacenamiento de color compartido',
  'editor.colors.clear_shared_confirm': 'Esto eliminará los intervalos de color en el sensor de almacenamiento seleccionado. ¿Continuar?',
  'editor.colors.mode': 'Modo de color',
  'editor.colors.mode.desc': 'Elige colores por habitación o un conjunto para todas.',
  'editor.colors.mode_per_room': 'Por habitación',
  'editor.colors.mode_global': 'Todas las habitaciones',
  'editor.colors.global_title': 'Todas las habitaciones',
  'editor.colors.clear_all': 'Borrar todos los datos de color',
  'editor.colors.clear_all_confirm': 'Esto borrará todos los intervalos de color tanto locales como del sensor de almacenamiento seleccionado. ¿Continuar?',
  'editor.reload_editor': 'Recargar editor',
  'editor.reload_dashboard': 'Recargar panel',
  'onboard.title': 'Bienvenido a la línea de tiempo del termostato',
  'onboard.next': 'Siguiente',
  'onboard.prev': 'Atrás',
  'onboard.skip': 'Omitir',
  'onboard.done': 'Listo',
  'onboard.dont_show': 'No mostrar de nuevo',
  'onboard.step_main': 'Esta es la línea principal. Muestra las temperaturas deseadas a lo largo del día por habitación.',
  'onboard.step_add': 'Añade un bloque con + Agregar bloque o con doble clic en la línea de tiempo.',
  'onboard.step_edit': 'Edita o elimina un bloque con doble clic. Usa días de la semana para distintos días.',
  'onboard.reset': 'Mostrar la guía otra vez',
  'onboard.reset_ok': 'La bienvenida se mostrará la próxima vez.',
    'editor.select_entities': 'Habitaciones',
  'editor.tabs.rooms': 'Habitaciones',
  'week.enable.desc': 'Habilitar programación por día. Si está desactivado, se usa el mismo plan todos los días.',
  'editor.tabs.sync': 'Motor de sincronización',
  'editor.tabs.backup': 'Copia de seguridad',
  'backup.title': 'Copia de seguridad',
  'backup.desc': 'Copia el contenido de tu sensor de sincronización al sensor de copia de seguridad y restaura cuando sea necesario.',
  'backup.now': 'Hacer copia ahora',
  'backup.restore': 'Restaurar',
  'backup.auto': 'Copia de seguridad automática',
  'backup.auto.desc': 'Realiza copias de seguridad automáticas a intervalos.',
  'backup.interval': 'Intervalo (días)',
  'backup.interval.desc': 'Cuántos días entre copias de seguridad automáticas (mín. 1).',
  'backup.sensor': 'Sensor de copia de seguridad',
  'backup.last': 'Última copia de seguridad',
  'pause.menu_title': 'Pausar auto‑aplicación',
  'pause.off_1h': 'Pausar 1 hora',
  'pause.off_5h': 'Pausar 5 horas',
  'pause.off_custom': 'Duración personalizada…',
  'pause.off_indef': 'Pausar hasta reanudar',
  'pause.resume': 'Reanudar ahora',
  'pause.close': 'Cerrar',
  'pause.active_until': 'Pausado hasta {time}',
  'pause.active_indef': 'Pausado',
  'editor.pausebtn.title': 'Botón de pausa',
  'editor.pausebtn.desc': 'Muestra un botón de pausa global en la cabecera. Mientras está pausado, se suprimen todos los comandos set_temperature.',
  'editor.integration.connected': 'Integración lista',
  'editor.integration.disconnected': 'Integración no disponible'
  , 'profiles.button': 'Horario manual'
  , 'profiles.editor.title': 'Perfiles'
  , 'profiles.add': 'Agregar perfil'
  , 'profiles.rename': 'Renombrar'
  , 'profiles.delete': 'Eliminar'
  , 'profiles.activate': 'Activar'
  , 'profiles.deactivate': 'Desactivar'
  , 'profiles.active': 'Activo'
  , 'profiles.none': 'Ninguno'
  , 'profiles.name_placeholder': 'Nombre del perfil'
  , 'profiles.edit': 'Editar'
  , 'profiles.preview_note': 'Solo vista previa. Los horarios se activan al activar el perfil.'
  , 'editor.tabs.holidays': 'Festivos'
  , 'holidays.enable': 'Habilitar festivos'
  , 'holidays.desc': 'Usa un horario especial en días festivos.'
  , 'holidays.source': 'Fuente de festivos'
  , 'holidays.source.calendar': 'Calendario'
  , 'holidays.source.manual': 'Fechas manuales'
  , 'holidays.entity': 'Entidad de festivos'
  , 'holidays.entity_desc': 'Selecciona un calendario que solo informe on/off. Debe estar en on en festivos y en off el resto de días.'
  , 'holidays.dates': 'Fechas de festivos'
  , 'holidays.add_date': 'Agregar fecha'
  , 'holidays.editor.title': 'Horario de festivos'
  , 'holidays.edit': 'Editar horario de festivos'
  , 'holidays.button': 'Festivos'
  },
  fr: {
    'card.title_default': 'Chronologie du thermostat',
    'ui.edit_block': 'Modifier le bloc',
    'ui.add_block': 'Ajouter un bloc',
    'ui.from': 'De',
    'ui.to': 'À',
    'ui.temperature': 'Température',
    'ui.delete': 'Supprimer',
    'ui.cancel': 'Annuler',
    'ui.save': 'Enregistrer',
    'ui.error_prefix': 'Erreur : ',
    'ui.overlap_msg': 'Vous avez sélectionné des heures qui se chevauchent — chevauchement entre {start} – {end}.',
    'ui.auto_fix': 'Corriger automatiquement',
    'ui.fix_start_to': 'Ajuster le début à {time}',
  'ui.fix_end_to': 'Ajuster la fin à {time}',
  // Inline meta
  'ui.current_temp': 'Température actuelle :',

    'editor.title_label': 'Titre',
  'editor.add_entity': 'Ajouter une pièce',
    'editor.entity_placeholder': 'Sélectionnez une entité',
    'editor.drag_reorder': 'Glisser pour réorganiser',
    'editor.remove': 'Supprimer',
    'editor.default_c': 'Par défaut °C',
  'editor.row_height_px': 'Hauteur de ligne (px)',
  'editor.max_c': 'Max °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Application automatique',
    'editor.auto_apply.desc': 'Lorsqu’il est activé, la carte essaie de régler la température des entités climate sélectionnées pour qu’elle corresponde à la valeur prévue pour « maintenant »',
    'editor.apply_edit.title': 'Lors de l’édition',
    'editor.apply_edit.desc': 'Quand vous modifiez des blocs de la chronologie et que la modification affecte l’heure actuelle, la nouvelle température est appliquée immédiatement.',
    'editor.apply_default.title': 'Lors d’un changement de °C par défaut',
    'editor.apply_default.desc': 'Lorsque « °C par défaut » change et que cela affecte la période en cours, la nouvelle température est appliquée immédiatement.',
  'ui.copy_plan': 'Copier le plan',
  'ui.paste_plan': 'Coller le plan',
  'ui.copy_day': 'Copier le jour',
  'ui.paste_day': 'Coller le jour',
  'editor.merge_label': 'Fusionner avec (ajouter un thermostat supplémentaire)',
  'editor.display_name_optional': 'Nom de la pièce (facultatif)',
    'editor.merged_with': 'Fusionné avec',
  'editor.store_enable.title': 'Stockage partagé + contrôle en arrière‑plan',
  'editor.store_enable.short': 'Enregistre les plannings dans le capteur sélectionné et active le contrôle en arrière‑plan.',
  'editor.store_enable.desc': 'Enregistre les plannings dans le capteur sélectionné et active set_temperature en arrière‑plan. Les thermostats se mettent à jour même lorsque la carte est fermée. Partage également les plannings (blocs de chauffe) et les paramètres de la carte entre utilisateurs/appareils. Désactivé : commandes envoyées uniquement lorsque la carte est visible sur un appareil (tablette/PC/mobile) et elle doit rester ouverte.',
  'editor.store_missing': 'L’intégration « Thermostat Pro Timeline Sync » n’est pas installée. Le stockage partagé n’est pas disponible.',
    'editor.clear_store': 'Vider le stockage',
    'editor.clear_store_confirm': 'Cela supprimera tous les plannings enregistrés. Continuer ?',
  'editor.migrate_to_store': 'Transférer les données vers le stockage',
    'editor.migrate_confirm': 'Transférer vos plannings enregistrés dans le navigateur vers le capteur sélectionné ? Cela remplacera les plannings existants dans le stockage.',
  'editor.migrate_pull_confirm': 'Importer les plannings depuis le stockage et remplacer les données locales du navigateur ?',
  'editor.select_storage_first': 'Veuillez d’abord sélectionner un capteur de stockage.',
    'editor.no_local_data': 'Aucune donnée locale du navigateur trouvée.',
    'editor.clear_all': 'Effacer toutes les données',
    'editor.clear_all_confirm': 'Cela supprimera les plannings du stockage et du navigateur local. Continuer ?',
  'editor.clear_storage_only': 'Effacer uniquement les données du stockage',
    'editor.clear_storage_only_confirm': 'Cela supprimera les plannings du capteur de stockage sélectionné. Continuer ?',
  'editor.clear_local_only': 'Effacer uniquement les données locales',
    'editor.clear_local_only_confirm': 'Cela supprimera uniquement les plannings enregistrés dans votre navigateur. Continuer ?',
    'week.enable': 'Activer les jours de semaine',
    'week.mode': 'Mode jours de semaine',
    'week.mode.same_all': 'Identique chaque jour (1)',
  'week.mode.weekday_weekend': 'Jours ouvrés + Week-end',
  'week.mode.weekday_sat_sun': 'Jours ouvrés + Samedi + Dimanche',
  'week.mode.all_7': 'Tous les jours',
    'week.button': 'Jours de semaine',
    'week.days.mon': 'Lun',
    'week.days.tue': 'Mar',
    'week.days.wed': 'Mer',
    'week.days.thu': 'Jeu',
    'week.days.fri': 'Ven',
    'week.days.sat': 'Sam',
    'week.days.sun': 'Dim',
    'week.editor.title': 'Planification par jour',
    'week.editor.preview_note': 'Aperçu uniquement. Les modifications s’appliquent lors de l’enregistrement.',
  'week.copy_to_rooms': 'Copier la semaine vers des pièces',
  'week.copy_to_rooms.title': 'Copier la semaine vers des pièces',
  'week.copy_to_rooms.select': 'Sélectionner des pièces',
  'week.copy_to_rooms.apply': 'Insérer dans les pièces',
    'week.group.weekdays': 'Jours ouvrés',
    'week.group.weekend': 'Week-end',
    'week.days_full.mon': 'Lundi',
    'week.days_full.tue': 'Mardi',
    'week.days_full.wed': 'Mercredi',
    'week.days_full.thu': 'Jeudi',
    'week.days_full.fri': 'Vendredi',
    'week.days_full.sat': 'Samedi',
    'week.days_full.sun': 'Dimanche',
    'editor.timefmt.title': 'Format de l’heure',
    'editor.timefmt.desc': 'Choisir affichage 24 h ou 12 h (AM/PM) pour les heures sur la carte.',
    'editor.tempfmt.title': 'Unité de température',
    'editor.tempfmt.desc': 'Choisir Celsius (°C) ou Fahrenheit (°F) pour l’affichage dans la carte et les éditeurs.',
  'editor.timesrc.title': 'Source de l’heure',
  'editor.timesrc.desc': 'Choisir si la carte utilise l’heure du navigateur ou le fuseau horaire de Home Assistant pour « maintenant ».',
  'editor.timesrc.browser': 'Navigateur',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Couleurs des blocs de chauffe',
    'editor.heat_colors.add': 'Ajouter un intervalle de couleur',
    'editor.colors.col_from': 'De °C',
    'editor.colors.col_to': 'À °C',
    'editor.colors.col_color': 'Couleur',
    'editor.colors.empty': 'Aucune pièce ajoutée. Ajoutez une pièce pour définir des couleurs.',
    'editor.colors.go_add': 'Ajouter une pièce',
    'editor.colors.refresh': 'Mettre à jour le planning',
    'editor.colors.clear_local': 'Effacer les données de couleur locales',
    'editor.colors.clear_local_confirm': 'Cela supprimera les intervalles de couleur enregistrés dans votre navigateur pour cette carte. Continuer ?',
    'editor.colors.clear_shared': 'Effacer le stockage de couleur partagé',
  'editor.colors.clear_shared_confirm': 'Cela supprimera les intervalles de couleur dans le capteur de stockage sélectionné. Continuer ?',
  'editor.colors.mode': 'Mode de couleur',
  'editor.colors.mode.desc': 'Choisir des couleurs par pièce ou un jeu pour toutes les pièces.',
  'editor.colors.mode_per_room': 'Par pièce',
  'editor.colors.mode_global': 'Toutes les pièces',
  'editor.colors.global_title': 'Toutes les pièces',
  'editor.colors.clear_all': 'Effacer toutes les données de couleur',
  'editor.colors.clear_all_confirm': 'Ceci supprimera tous les intervalles de couleur à la fois localement et sur le capteur de stockage sélectionné. Continuer ?',
  'editor.reload_editor': 'Recharger l’éditeur',
  'editor.reload_dashboard': 'Recharger le tableau de bord',
  'onboard.title': 'Bienvenue dans la Chronologie du thermostat',
  'onboard.next': 'Suivant',
  'onboard.prev': 'Précédent',
  'onboard.skip': 'Ignorer',
  'onboard.done': 'Terminer',
  'onboard.dont_show': 'Ne plus afficher',
  'onboard.step_main': 'Voici la chronologie principale. Elle affiche les températures souhaitées sur 24 h pour chaque pièce.',
  'onboard.step_add': 'Ajoutez un bloc via + Ajouter un bloc ou double‑cliquez sur la chronologie.',
  'onboard.step_edit': 'Modifiez/Supprimez un bloc par double‑clic. Utilisez les jours de semaine pour des jours différents.',
  'onboard.reset': 'Afficher le guide à nouveau',
  'onboard.reset_ok': 'La présentation s’affichera la prochaine fois.',
    'editor.select_entities': 'Pièces',
  'editor.tabs.rooms': 'Pièces',
  'week.enable.desc': 'Activer la planification par jour de semaine. Désactivé : même plan chaque jour.',
  'editor.tabs.sync': 'Moteur de synchro',
  'editor.tabs.backup': 'Sauvegarde',
  'backup.title': 'Sauvegarde',
  'backup.desc': 'Copie le contenu de votre capteur de synchro vers le capteur de sauvegarde et restaure si besoin.',
  'backup.now': 'Sauvegarder maintenant',
  'backup.restore': 'Restaurer',
  'backup.auto': 'Sauvegarde automatique',
  'backup.auto.desc': 'Effectuer des sauvegardes automatiques à intervalle régulier.',
  'backup.interval': 'Intervalle (jours)',
  'backup.interval.desc': 'Nombre de jours entre les sauvegardes automatiques (min. 1).',
  'backup.sensor': 'Capteur de sauvegarde',
  'backup.last': 'Dernière sauvegarde',
  'pause.menu_title': 'Suspendre l’application automatique',
  'pause.off_1h': 'Suspendre 1 heure',
  'pause.off_5h': 'Suspendre 5 heures',
  'pause.off_custom': 'Durée personnalisée…',
  'pause.off_indef': 'Suspendre jusqu’à reprise',
  'pause.resume': 'Reprendre maintenant',
  'pause.close': 'Fermer',
  'pause.active_until': 'Suspendu jusqu’à {time}',
  'pause.active_indef': 'Suspendu',
  'editor.pausebtn.title': 'Bouton Pause',
  'editor.pausebtn.desc': 'Affiche un bouton de pause global dans l’en‑tête de la carte. En pause, toutes les commandes set_temperature sont bloquées.',
  'editor.integration.connected': 'Intégration prête',
  'editor.integration.disconnected': 'Intégration indisponible'
  , 'profiles.button': 'Programme manuel'
  , 'profiles.editor.title': 'Profils'
  , 'profiles.add': 'Ajouter un profil'
  , 'profiles.rename': 'Renommer'
  , 'profiles.delete': 'Supprimer'
  , 'profiles.activate': 'Activer'
  , 'profiles.deactivate': 'Désactiver'
  , 'profiles.active': 'Actif'
  , 'profiles.none': 'Aucun'
  , 'profiles.name_placeholder': 'Nom du profil'
  , 'profiles.edit': 'Modifier'
  , 'profiles.preview_note': 'Aperçu uniquement. Les plannings deviennent actifs lorsque vous activez le profil.'
  , 'editor.tabs.holidays': 'Jours fériés'
  , 'holidays.enable': 'Activer les jours fériés'
  , 'holidays.desc': 'Utiliser un planning spécifique les jours fériés.'
  , 'holidays.source': 'Source des jours fériés'
  , 'holidays.source.calendar': 'Calendrier'
  , 'holidays.source.manual': 'Dates manuelles'
  , 'holidays.entity': 'Entité jours fériés'
  , 'holidays.entity_desc': 'Sélectionnez un calendrier ne fournissant que on/off. Il doit être « on » les jours fériés et « off » les autres jours.'
  , 'holidays.dates': 'Dates des jours fériés'
  , 'holidays.add_date': 'Ajouter une date'
  , 'holidays.editor.title': 'Planning jours fériés'
  , 'holidays.edit': 'Modifier le planning jours fériés'
  , 'holidays.button': 'Jours fériés'
  },
  fi: {
    'card.title_default': 'Termostaatin aikajana',
    'ui.edit_block': 'Muokkaa lohkoa',
    'ui.add_block': 'Lisää lohko',
    'ui.from': 'Alkaen',
    'ui.to': 'Asti',
    'ui.temperature': 'Lämpötila',
    'ui.delete': 'Poista',
    'ui.cancel': 'Peruuta',
    'ui.save': 'Tallenna',
    'ui.error_prefix': 'Virhe: ',
    'ui.overlap_msg': 'Valitsit päällekkäisiä aikoja — ne menevät päällekkäin välillä {start} – {end}.',
    'ui.auto_fix': 'Korjaa automaattisesti',
    'ui.fix_start_to': 'Korjaa alku ajaksi {time}',
  'ui.fix_end_to': 'Korjaa loppu ajaksi {time}',
  // Inline meta
  'ui.current_temp': 'Nykyinen lämpötila:',

    'editor.title_label': 'Otsikko',
  'editor.add_entity': 'Lisää huone',
    'editor.entity_placeholder': 'Valitse entiteetti',
    'editor.drag_reorder': 'Vedä järjestelläksesi',
    'editor.remove': 'Poista',
    'editor.default_c': 'Oletus °C',
  'editor.row_height_px': 'Rivin korkeus (px)',
  'editor.max_c': 'Maksi °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automaattinen käyttö',
    'editor.auto_apply.desc': 'Kun käytössä, kortti yrittää asettaa valittujen climate-entiteettien lämpötilan vastaamaan suunniteltua arvoa tälle hetkelle.',
    'editor.apply_edit.title': 'Muokkauksen yhteydessä',
    'editor.apply_edit.desc': 'Kun muutat aikajanan lohkoja ja muutos koskee nykyhetkeä, uusi lämpötila otetaan käyttöön heti.',
    'editor.apply_default.title': 'Kun Oletus °C muuttuu',
    'editor.apply_default.desc': 'Kun ”Oletus °C” muuttuu ja se vaikuttaa meneillään olevaan ajanjaksoon, uusi lämpötila otetaan käyttöön heti.',
  'ui.copy_plan': 'Kopioi aikataulu',
  'ui.paste_plan': 'Liitä aikataulu',
  'ui.copy_day': 'Kopioi päivä',
  'ui.paste_day': 'Liitä päivä',
  'editor.merge_label': 'Yhdistä (lisää toinen termostaatti)',
  'editor.display_name_optional': 'Huoneen nimi (valinnainen)',
    'editor.merged_with': 'Yhdistetty kohteeseen',
  'editor.store_enable.title': 'Jaettu tallennus + taustasäätö',
  'editor.store_enable.short': 'Tallentaa aikataulut valittuun sensoriin ja ottaa käyttöön taustasäädön.',
  'editor.store_enable.desc': 'Tallentaa aikataulut valittuun sensoriin ja ottaa käyttöön taustalla tapahtuvan set_temperature‑ohjauksen. Termostaatit päivittyvät myös, kun kortti ei ole auki. Jakaa myös aikataulut (lämpöblokit) ja kortin asetukset käyttäjien/laitteiden välillä. Kun pois päältä: komennot lähetetään vain, kun kortti on näkyvissä laitteella (tabletti/tietokone/puhelin) ja sen on pysyttävä auki.',
  'editor.store_missing': 'Integraatiota "Thermostat Pro Timeline Sync" ei ole asennettu. Jaettu tallennus ei ole käytettävissä.',
    'editor.clear_store': 'Tyhjennä tallennus',
    'editor.clear_store_confirm': 'Tämä poistaa kaikki tallennetut aikataulut. Jatketaanko?',
  'editor.migrate_to_store': 'Siirrä tiedot tallennukseen',
    'editor.migrate_confirm': 'Siirretäänkö selaimeen tallennetut aikataulut valittuun sensoriin? Tämä korvaa nykyiset aikataulut tallennuksessa.',
  'editor.migrate_pull_confirm': 'Tuo aikataulut tallennuksesta ja korvaa paikalliset selaintiedot?',
  'editor.select_storage_first': 'Valitse ensin tallennussensori.',
    'editor.no_local_data': 'Paikallisia selaintietoja ei löytynyt.',
    'editor.clear_all': 'Tyhjennä kaikki tiedot',
    'editor.clear_all_confirm': 'Tämä poistaa sekä tallennuksesta että selaimesta aikataulut. Jatketaanko?',
  'editor.clear_storage_only': 'Tyhjennä vain tallennusdata',
    'editor.clear_storage_only_confirm': 'Tämä poistaa aikataulut valitusta sensorista. Jatketaanko?',
  'editor.clear_local_only': 'Tyhjennä vain paikalliset tiedot',
    'editor.clear_local_only_confirm': 'Tämä poistaa vain selaimeen tallennetut aikataulut. Jatketaanko?',
    'week.enable': 'Ota viikonpäivät käyttöön',
    'week.mode': 'Viikkotila',
    'week.mode.same_all': 'Sama joka päivä (1)',
  'week.mode.weekday_weekend': 'Arkipäivät + Viikonloppu',
  'week.mode.weekday_sat_sun': 'Arkipäivät + Lauantai + Sunnuntai',
  'week.mode.all_7': 'Kaikki päivät',
    'week.button': 'Viikonpäivät',
    'week.days.mon': 'Ma',
    'week.days.tue': 'Ti',
    'week.days.wed': 'Ke',
    'week.days.thu': 'To',
    'week.days.fri': 'Pe',
    'week.days.sat': 'La',
    'week.days.sun': 'Su',
    'week.editor.title': 'Viikkosuunnitelma',
    'week.editor.preview_note': 'Vain esikatselu. Muutokset otetaan käyttöön, kun painat Tallenna.',
  'week.copy_to_rooms': 'Kopioi viikkosuunnitelma huoneisiin',
  'week.copy_to_rooms.title': 'Kopioi viikkosuunnitelma huoneisiin',
  'week.copy_to_rooms.select': 'Valitse huoneet',
  'week.copy_to_rooms.apply': 'Lisää huoneisiin',
    'week.group.weekdays': 'Arkipäivät',
    'week.group.weekend': 'Viikonloppu',
    'week.days_full.mon': 'Maanantai',
    'week.days_full.tue': 'Tiistai',
    'week.days_full.wed': 'Keskiviikko',
    'week.days_full.thu': 'Torstai',
    'week.days_full.fri': 'Perjantai',
    'week.days_full.sat': 'Lauantai',
    'week.days_full.sun': 'Sunnuntai',
    'editor.timefmt.title': 'Aikamuoto',
    'editor.timefmt.desc': 'Valitse 24 tunnin tai 12 tunnin (AM/PM) näyttö kortin ajoille.',
    'editor.tempfmt.title': 'Lämpötilayksikkö',
    'editor.tempfmt.desc': 'Valitse Celsius (°C) tai Fahrenheit (°F) kortin ja editorien näyttöön.',
  'editor.timesrc.title': 'Ajan lähde',
  'editor.timesrc.desc': 'Valitse käytetäänkö “nyt”‑hetkeen selaimen aikaa vai Home Assistantin aikavyöhykettä.',
  'editor.timesrc.browser': 'Selain',
  'editor.timesrc.ha': 'Home Assistant',
    'editor.heat_colors.title': 'Lämmityslohkojen värit',
    'editor.heat_colors.add': 'Lisää värihaarukka',
    'editor.colors.col_from': 'Alkaen °C',
    'editor.colors.col_to': 'Asti °C',
    'editor.colors.col_color': 'Väri',
    'editor.colors.empty': 'Huoneita ei ole lisätty vielä. Lisää huone määrittääksesi värit.',
    'editor.colors.go_add': 'Lisää huone',
    'editor.colors.refresh': 'Päivitä aikataulu',
    'editor.colors.clear_local': 'Tyhjennä paikalliset väritiedot',
    'editor.colors.clear_local_confirm': 'Tämä poistaa tähän korttiin selaimeen tallennetut värihaarukat. Jatketaanko?',
    'editor.colors.clear_shared': 'Tyhjennä jaettu värivarasto',
  'editor.colors.clear_shared_confirm': 'Tämä poistaa värihaarukat valitusta tallennussensorista. Jatketaanko?',
  'editor.colors.mode': 'Väritila',
  'editor.colors.mode.desc': 'Valitse värit huoneittain tai yksi yhteinen kaikille.',
  'editor.colors.mode_per_room': 'Huoneittain',
  'editor.colors.mode_global': 'Kaikille',
  'editor.colors.global_title': 'Kaikki huoneet',
  'editor.colors.clear_all': 'Tyhjennä kaikki väritiedot',
  'editor.colors.clear_all_confirm': 'Tämä poistaa kaikki värihaarukat sekä paikallisesti että valitusta tallennussensorista. Jatketaanko?',
  'editor.reload_editor': 'Lataa editori uudelleen',
  'editor.reload_dashboard': 'Lataa koontinäyttö uudelleen',
  'onboard.title': 'Tervetuloa Termostaatin aikajanaan',
  'onboard.next': 'Seuraava',
  'onboard.prev': 'Edellinen',
  'onboard.skip': 'Ohita',
  'onboard.done': 'Valmis',
  'onboard.dont_show': 'Älä näytä uudelleen',
  'onboard.step_main': 'Tämä on pääaikajana. Se näyttää toivotut lämpötilat 24 tunnin aikana huoneittain.',
  'onboard.step_add': 'Lisää lämpölohko painamalla + Lisää lohko tai kaksoisnapsauttamalla aikajanaa.',
  'onboard.step_edit': 'Muokkaa tai poista lohko kaksoisnapsauttamalla. Käytä viikonpäiviä eri päiville.',
  'onboard.reset': 'Näytä opas uudelleen',
  'onboard.reset_ok': 'Tervetuloa-näyttö avautuu seuraavalla kerralla.',
    'editor.select_entities': 'Huoneet',
  'editor.tabs.rooms': 'Huoneet',
  'week.enable.desc': 'Ota viikonpäiväkohtainen aikataulu käyttöön. Kun pois päältä, käytetään samaa aikataulua joka päivä.',
  'editor.tabs.sync': 'Synkronointi‑moottori',
  'editor.tabs.backup': 'Varmuuskopio',
  'backup.title': 'Varmuuskopio',
  'backup.desc': 'Kopioi sync‑anturin sisältö varmuuskopioanturiin ja palauta tarvittaessa.',
  'backup.now': 'Varmuuskopioi nyt',
  'backup.restore': 'Palauta',
  'backup.auto': 'Automaattinen varmuuskopiointi',
  'backup.auto.desc': 'Tee varmuuskopioita automaattisesti tietyin välein.',
  'backup.interval': 'Väli (päivää)',
  'backup.interval.desc': 'Kuinka monta päivää automaattisten varmuuskopioiden välillä (min. 1).',
  'backup.sensor': 'Varmuuskopioanturi',
  'backup.last': 'Viimeisin varmuuskopio',
  'pause.menu_title': 'Keskeytä automaattinen asetus',
  'pause.off_1h': 'Keskeytä 1 tunniksi',
  'pause.off_5h': 'Keskeytä 5 tunniksi',
  'pause.off_custom': 'Mukautettu kesto…',
  'pause.off_indef': 'Keskeytä kunnes jatkan',
  'pause.resume': 'Jatka nyt',
  'pause.close': 'Sulje',
  'pause.active_until': 'Keskeytetty asti {time}',
  'pause.active_indef': 'Keskeytetty',
  'editor.pausebtn.title': 'Taukopainike',
  'editor.pausebtn.desc': 'Näytä globaali taukopainike kortin yläreunassa. Tauon aikana kaikki set_temperature‑komennot estetään.',
  'editor.integration.connected': 'Integraatio valmis',
  'editor.integration.disconnected': 'Integraatio ei käytettävissä'
  , 'profiles.button': 'Manuaalinen aikataulu'
  , 'profiles.editor.title': 'Profiilit'
  , 'profiles.add': 'Lisää profiili'
  , 'profiles.rename': 'Nimeä uudelleen'
  , 'profiles.delete': 'Poista'
  , 'profiles.activate': 'Aktivoi'
  , 'profiles.deactivate': 'Poista käytöstä'
  , 'profiles.active': 'Aktiivinen'
  , 'profiles.none': 'Ei mikään'
  , 'profiles.name_placeholder': 'Profiilin nimi'
  , 'profiles.edit': 'Muokkaa'
  , 'profiles.preview_note': 'Vain esikatselu. Aikataulut aktivoituvat, kun aktivoit profiilin.'
  , 'editor.tabs.holidays': 'Pyhäpäivät'
  , 'holidays.enable': 'Ota pyhäpäivät käyttöön'
  , 'holidays.desc': 'Käytä erityistä päiväaikataulua pyhäpäivinä.'
  , 'holidays.source': 'Pyhäpäivien lähde'
  , 'holidays.source.calendar': 'Kalenteri'
  , 'holidays.source.manual': 'Manuaaliset päivämäärät'
  , 'holidays.entity': 'Pyhäpäivä‑entiteetti'
  , 'holidays.entity_desc': 'Valitse kalenteri, joka ilmoittaa vain on/off. Sen tulee olla on pyhäpäivinä ja off muina päivinä.'
  , 'holidays.dates': 'Pyhäpäivien päivämäärät'
  , 'holidays.add_date': 'Lisää päivämäärä'
  , 'holidays.editor.title': 'Pyhäpäivä‑aikataulu'
  , 'holidays.edit': 'Muokkaa pyhäpäivä‑aikataulua'
  , 'holidays.button': 'Pyhäpäivät'
  },
  cs: {
    // Karta
    'card.title_default': 'Časová osa termostatu',
    // Modal / editor (inline)
    'ui.edit_block': 'Upravit blok',
    'ui.add_block': 'Přidat blok',
    'ui.from': 'Od',
    'ui.to': 'Do',
    'ui.temperature': 'Teplota',
    'ui.delete': 'Smazat',
    'ui.cancel': 'Zrušit',
    'ui.save': 'Uložit',
    'ui.error_prefix': 'Chyba: ',
    'ui.overlap_msg': 'Vybrali jste překrývající se časy — překrývá se mezi {start} – {end}.',
    'ui.auto_fix': 'Opravit automaticky',
    'ui.fix_start_to': 'Upravit začátek na {time}',
    'ui.fix_end_to': 'Upravit konec na {time}',
    // Inline meta
    'ui.current_temp': 'Aktuální teplota:',

    // GUI editor panel
    'editor.title_label': 'Nadpis',
    'editor.add_entity': 'Přidat místnost',
    'editor.entity_placeholder': 'Vyberte entitu',
    'editor.drag_reorder': 'Přetažením změňte pořadí',
    'editor.remove': 'Odebrat',
    'editor.default_c': 'Výchozí °C',
    'editor.row_height_px': 'Výška řádku (px)',
    'editor.max_c': 'Max °C',
    'editor.min_c': 'Min °C',
    'editor.auto_apply.title': 'Automatické použití',
    'editor.auto_apply.desc': 'Je-li zapnuto, karta se pokusí nastavit teplotu vybraných climate entit tak, aby odpovídala plánované hodnotě pro „právě teď“.',
    'editor.apply_edit.title': 'Při úpravě',
    'editor.apply_edit.desc': 'Když změníte bloky v časové ose a změna ovlivní aktuální čas, nová teplota se použije okamžitě.',
    'editor.apply_default.title': 'Při změně Výchozí °C',
    'editor.apply_default.desc': 'Když se změní „Výchozí °C“ a ovlivní aktuální období, nová teplota se použije okamžitě.',
    'ui.copy_plan': 'Kopírovat plán',
    'ui.paste_plan': 'Vložit plán',
    'ui.copy_day': 'Kopírovat den',
    'ui.paste_day': 'Vložit den',
    'editor.merge_label': 'Sloučit s (přidat další termostat)',
    'editor.display_name_optional': 'Název místnosti (volitelné)',
    'editor.merged_with': 'Sloučeno s',
    'editor.store_enable.title': 'Sdílené úložiště + řízení na pozadí',
    'editor.store_enable.short': 'Ukládá rozvrhy do zvoleného senzoru a umožňuje řízení na pozadí.',
    'editor.store_enable.desc': 'Ukládá rozvrhy do zvoleného senzoru a zapíná set_temperature na pozadí přes integraci Thermostat Timeline. Termostaty se aktualizují i když karta není otevřená. Také sdílí rozvrhy (tepelné bloky) a nastavení karty mezi uživateli/zařízeními. Když je vypnuto, příkazy se posílají jen když je karta aktivně viditelná na zařízení (tablet/PC/mobil) — musí zůstat otevřená na obrazovce.',
    'editor.store_missing': 'Integrace „Thermostat Pro Timeline Sync“ není nainstalována. Sdílené úložiště není k dispozici.',
    'editor.clear_store': 'Vymazat úložiště',
    'editor.clear_store_confirm': 'Tímto smažete všechny uložené rozvrhy. Pokračovat?',
    'editor.migrate_to_store': 'Převést data do úložiště',
    'editor.migrate_confirm': 'Převést vaše rozvrhy uložené v prohlížeči do zvoleného senzoru? Tím se přepíší existující rozvrhy v úložišti.',
    'editor.migrate_pull_confirm': 'Importovat rozvrhy z úložiště a přepsat lokální data v prohlížeči?',
    'editor.select_storage_first': 'Nejprve vyberte senzor úložiště.',
    'editor.no_local_data': 'Nebyla nalezena žádná lokální data v prohlížeči.',
    'editor.clear_all': 'Smazat všechna data',
    'editor.clear_all_confirm': 'Tímto smažete rozvrhy jak v úložišti, tak v lokálním prohlížeči. Pokračovat?',
    'editor.clear_storage_only': 'Smazat jen data v úložišti',
    'editor.clear_storage_only_confirm': 'Tímto smažete rozvrhy z vybraného senzoru úložiště. Pokračovat?',
    'editor.clear_local_only': 'Smazat jen lokální data',
    'editor.clear_local_only_confirm': 'Tímto smažete pouze rozvrhy uložené ve vašem prohlížeči. Pokračovat?',
    'editor.temp_sensor': 'Teplotní senzor',

    // Týdny
    'week.enable': 'Povolit pracovní dny',
    'week.mode': 'Režim dní v týdnu',
    // removed same_all option from UI
    'week.mode.weekday_weekend': 'Pracovní dny + Víkend',
    'week.mode.weekday_sat_sun': 'Pracovní dny + Sobota + Neděle',
    'week.mode.all_7': 'Všechny dny',
    'week.button': 'Dny v týdnu',
    'week.group.weekdays': 'Pracovní dny',
    'week.group.weekend': 'Víkend',
    'week.days_full.mon': 'Pondělí',
    'week.days_full.tue': 'Úterý',
    'week.days_full.wed': 'Středa',
    'week.days_full.thu': 'Čtvrtek',
    'week.days_full.fri': 'Pátek',
    'week.days_full.sat': 'Sobota',
    'week.days_full.sun': 'Neděle',
    'week.days.mon': 'Po',
    'week.days.tue': 'Út',
    'week.days.wed': 'St',
    'week.days.thu': 'Čt',
    'week.days.fri': 'Pá',
    'week.days.sat': 'So',
    'week.days.sun': 'Ne',
    'week.editor.title': 'Týdenní rozvrh',
    'week.editor.preview_note': 'Pouze náhled. Změny se použijí po stisknutí Uložit.',
    'week.copy_to_rooms': 'Kopírovat týden do místností',
    'week.copy_to_rooms.title': 'Kopírovat týden do místností',
    'week.copy_to_rooms.select': 'Vyberte místnosti',
    'week.copy_to_rooms.apply': 'Vložit do místností',
    'week.enable.desc': 'Povolit plán podle dní v týdnu. Když je vypnuto, používá se stejný plán každý den.',

    // Formáty
    'editor.timefmt.title': 'Formát času',
    'editor.timefmt.desc': 'Zvolte 24hodinový nebo 12hodinový (AM/PM) formát pro časy na kartě.',
    'editor.tempfmt.title': 'Jednotka teploty',
    'editor.tempfmt.desc': 'Zvolte Celsia (°C) nebo Fahrenheit (°F) pro zobrazení na kartě a v editorech.',
  'editor.timesrc.title': 'Zdroj času',
  'editor.timesrc.desc': 'Zvolte, zda má karta používat čas prohlížeče nebo časové pásmo Home Assistantu pro „nyní“.',
  'editor.timesrc.browser': 'Prohlížeč',
  'editor.timesrc.ha': 'Home Assistant',

    // Záložky
    'editor.tabs.settings': 'Nastavení',
    'editor.tabs.rooms': 'Místnosti',
    'editor.tabs.colors': 'Barvy',
    'editor.tabs.away': 'Mimo domov',
  'editor.tabs.sync': 'Sync engine',
  'editor.tabs.backup': 'Záloha',
  'backup.title': 'Záloha',
  'backup.desc': 'Zkopíruje obsah vašeho sync senzoru do záložního senzoru a v případě potřeby obnoví.',
  'backup.now': 'Zálohovat nyní',
  'backup.restore': 'Obnovit',
  'backup.auto': 'Automatická záloha',
  'backup.auto.desc': 'Provádět automatické zálohy v intervalech.',
  'backup.interval': 'Interval (dny)',
  'backup.interval.desc': 'Počet dnů mezi automatickými zálohami (min. 1).',
  'backup.sensor': 'Záložní senzor',
  'backup.last': 'Poslední záloha',

    // Away
    'away.enable': 'Povolit režim mimo domov',
    'away.desc': 'Když žádní z vybraných lidí nejsou doma, automaticky snižuje teploty na nastavenou hodnotu.',
    'away.temp': 'Teplota mimo domov',
    'away.persons': 'Osoby',
    'away.add_person': 'Přidat osobu',

    // Barvy tepla
    'editor.heat_colors.title': 'Barvy tepelných bloků',
    'editor.heat_colors.add': 'Přidat rozsah barev',
    'editor.colors.col_from': 'Od °C',
    'editor.colors.col_to': 'Do °C',
    'editor.colors.col_color': 'Barva',
    'editor.colors.empty': 'Zatím nebyly přidány žádné místnosti. Přidejte místnost pro definici barev.',
    'editor.colors.go_add': 'Přidat místnost',
    'editor.select_entities': 'Místnosti',
    'editor.colors.refresh': 'Aktualizovat rozvrh',
    'editor.colors.clear_local': 'Smazat lokální barevná data',
    'editor.colors.clear_local_confirm': 'Tímto smažete barevné rozsahy uložené ve vašem prohlížeči pro tuto kartu. Pokračovat?',
    'editor.colors.clear_shared': 'Smazat sdílené barevné úložiště',
    'editor.colors.clear_shared_confirm': 'Tímto smažete barevné rozsahy ve vybraném senzoru úložiště. Pokračovat?',
    'editor.colors.clear_all': 'Smazat všechna barevná data',
    'editor.colors.clear_all_confirm': 'Tímto smažete všechny barevné rozsahy jak lokálně, tak ve vybraném senzoru úložiště. Pokračovat?',
    'editor.colors.mode': 'Režim barev',
    'editor.colors.mode.desc': 'Zvolte barvy pro každou místnost nebo jeden set pro všechny.',
    'editor.colors.mode_per_room': 'Podle místnosti',
    'editor.colors.mode_global': 'Všechny místnosti',
    'editor.colors.global_title': 'Všechny místnosti',
    'editor.reload_editor': 'Znovu načíst editor',
    'editor.reload_dashboard': 'Znovu načíst dashboard',

    // Onboarding
    'onboard.title': 'Vítejte v Časové ose termostatu',
    'onboard.next': 'Další',
    'onboard.prev': 'Zpět',
    'onboard.skip': 'Přeskočit',
    'onboard.done': 'Hotovo',
    'onboard.dont_show': 'Nezobrazovat znovu',
    'onboard.step_main': 'Toto je hlavní časová osa. Zobrazuje požadované teploty během 24 hodin pro každou místnost.',
    'onboard.step_add': 'Přidejte tepelný blok přes + Přidat blok nebo dvojitým kliknutím na časovou osu.',
    'onboard.step_edit': 'Upravte nebo smažte blok dvojitým kliknutím. Použijte Dny v týdnu pro různé dny.',
    'onboard.reset': 'Zobrazit průvodce znovu',
    'onboard.reset_ok': 'Vítání se zobrazí příště.',

    // Pause
    'pause.menu_title': 'Pozastavit auto‑apply',
    'pause.off_1h': 'Pozastavit na 1 hodinu',
    'pause.off_5h': 'Pozastavit na 5 hodin',
    'pause.off_custom': 'Vlastní délka…',
    'pause.off_indef': 'Pozastavit do obnovení',
    'pause.resume': 'Obnovit nyní',
    'pause.close': 'Zavřít',
    'pause.active_until': 'Pozastaveno do {time}',
    'pause.active_indef': 'Pozastaveno',
    'editor.pausebtn.title': 'Tlačítko pozastavení',
    'editor.pausebtn.desc': 'Zobrazí globální tlačítko pozastavení v záhlaví karty. Během pauzy jsou všechny příkazy set_temperature potlačeny.',
    'editor.integration.connected': 'Integrace připravena',
    'editor.integration.disconnected': 'Integrace není k dispozici',

    // Profily
    'profiles.enable': 'Povolit profily (přepis)',
    'profiles.enable.desc': 'Povolit pojmenované denní rozvrhy, které můžete aktivovat pro přepsání hlavního plánu.',
  'profiles.button': 'Manuální plán',
    'profiles.editor.title': 'Profily',
    'profiles.add': 'Přidat profil',
    'profiles.rename': 'Přejmenovat',
    'profiles.delete': 'Smazat',
    'profiles.activate': 'Aktivovat',
    'profiles.deactivate': 'Deaktivovat',
    'profiles.active': 'Aktivní',
    'profiles.none': 'Žádný',
    'profiles.name_placeholder': 'Název profilu',
    'profiles.edit': 'Upravit',
    'profiles.preview_note': 'Pouze náhled. Rozvrhy se stanou aktivními po aktivaci profilu.',
    'profiles.active_label': 'Manuální profil aktivní:',

    // Svátky
    'editor.tabs.holidays': 'Svátky',
    'holidays.enable': 'Povolit svátky',
    'holidays.desc': 'Použít speciální denní rozvrh o svátcích.',
    'holidays.source': 'Zdroj svátků',
    'holidays.source.calendar': 'Kalendář',
    'holidays.source.manual': 'Manuální data',
    'holidays.entity': 'Entita svátků',
    'holidays.entity_desc': 'Vyberte kalendář, který hlásí pouze on/off. Má být on ve svátky a off v ostatní dny.',
    'holidays.dates': 'Data svátků',
    'holidays.add_date': 'Přidat datum',
    'holidays.editor.title': 'Rozvrh o svátcích',
    'holidays.edit': 'Upravit rozvrh o svátcích',
    'holidays.button': 'Svátky',
  },
};
const TT_LANG_ALIAS = { no: 'nb', cz: 'cs' };
function ttGetLangFromHass(hass) {
  const raw = hass?.locale?.language || hass?.language || navigator.language || 'en';
  return String(raw).toLowerCase();
}
function ttLocalize(key, langOrHass) {
  const raw = typeof langOrHass === 'string' ? langOrHass : ttGetLangFromHass(langOrHass);
  const lang = String(raw).toLowerCase();
  const parts = lang.split('-');
  const candidates = [
    lang,
    parts[0],
    TT_LANG_ALIAS[lang],
    TT_LANG_ALIAS[parts[0]],
    'en',
  ].filter(Boolean);
  for (const c of candidates) {
    const dict = TT_I18N[c];
    if (dict && dict[key]) return dict[key];
  }
  return TT_I18N.en[key] || key;
}
// ---- end i18n ----

/* eslint-disable no-undef */

// Simple runtime version to help with cache-busting diagnostics in HA.
// Update this when shipping changes so the version appears in the
// "Custom cards" panel and in logs.
const TT_CARD_VERSION = "2025.11.07-sync-delay-i18n";

class ThermostatTimelineCard extends HTMLElement {
  static get version() { return TT_CARD_VERSION; }
  static getConfigElement() { return document.createElement("thermostat-timeline-card-editor"); }
  static getStubConfig() {
    return {
      // Localize default title based on browser language; editor will further adapt to HA language
      title: ttLocalize('card.title_default', navigator.language || 'en'),
      entities: [],
      row_height: 64,
      default_temp: 20,
  max_temp: 25,
  min_temp: 5,
  temp_unit: null, // 'C' | 'F' | null(auto from HA)
  time_12h: null,
    time_source: 'browser', // 'browser' | 'ha'
      color_ranges: {}, // { [entity_id]: [ { from: number(C), to: number(C), color: string } ] }
  color_global: false, // when true, use one global set of colors (key "*") for all rooms
      now_update_ms: 60000,   // kun til UI 'nu'-stregen
      storage_entity: "sensor.thermostat_timeline",     // fx sensor.thermostat_timeline
      storage_enabled: false, // default: off -> only local per user
  storage_sync_mode: 'instant', // 'instant' | 'delay'
  storage_sync_min: 5,          // minutes when mode = 'delay' (legacy)
  storage_sync_sec: 15,         // seconds when mode = 'delay' (preferred, min 5s)
  backup_auto_enabled: false,
  backup_interval_days: 1,
      show_top_now: false,
      now_extend_px: 76,
  show_pause_button: true,
      auto_apply: true,        // sæt automatisk setpoint via climate.set_temperature
      apply_on_edit: true,     // NYT: anvend straks hvis den ønskede temp *nu* ændres af en redigering
      apply_on_default_change: true, // NYT: anvend straks hvis Standard °C ændrer den ønskede temp *nu*,
      labels: {},
      merges: {},              // { [primary_eid]: [linked_eid, ...] }
      temp_sensors: {},        // { [primary_eid]: sensor.temperature_entity_id }
  weekdays_enabled: false,
  weekdays_mode: 'weekday_weekend', // 'weekday_weekend' | 'weekday_sat_sun' | 'all_7'
      profiles_enabled: false,
      away: { enabled: false, persons: [], target_c: 17 },
      holidays_enabled: false,
      holidays_source: 'calendar', // 'calendar' | 'manual'
      holidays_entity: '',         // calendar.* or binary_sensor.* that is on/off for holiday
      holidays_dates: []           // [ 'YYYY-MM-DD', ... ]
    };
  }

  // ---------- Home Assistant hook ----------
  set hass(hass) {
    this._hass = hass; this._lang = ttGetLangFromHass(hass);
    // --- AUTO-DETECT storage entity if not provided ---
    if (!this._config?.storage_entity) {
      try {
        const st = hass.states || {};
        for (const id in st) {
          if (!id.startsWith("sensor.")) continue;
          const a = st[id]?.attributes || {};
          if (a.schedules && typeof a.schedules === "object" && a.settings && typeof a.settings === "object") {
            this._config.storage_entity = id;
            if (typeof this._config.storage_enabled === "undefined") {
              this._config.storage_enabled = true;
            }
            break;
          }
        }
      } catch (e) {}
    }

    // (Select-based global profile removed)


    // Detect Away mode changes and apply immediately
    try {
      const curAway = this._isAwayActive();
      if (this._lastAwayActive === null) {
        this._lastAwayActive = curAway;
      } else if (this._initialized && curAway !== this._lastAwayActive) {
        this._lastAwayActive = curAway;
        if (this._config?.auto_apply) {
          // Apply immediately on Away enter/exit
          this._applyCurrentSetpoints(true);
          this._scheduleNextApply();
        }
      }
    } catch {}

    // Hent fra sensor hvis version ændret
    if (this._config?.storage_enabled && this._config?.storage_entity) {
      const st = this._hass.states?.[this._config.storage_entity];
      const ver = Number(st?.state || 0);
      // Pick up settings changes immediately (profiles_enabled)
      try {
        const s = st?.attributes?.settings || {};
        const prevPE = !!this._config.profiles_enabled;
        const newPE = typeof s.profiles_enabled === 'boolean' ? !!s.profiles_enabled : prevPE;
        if (newPE !== prevPE) { this._config.profiles_enabled = newPE; if (!this._inlineEditing && !this._editing) this._render(); }
      } catch {}
      const handleUpdate = () => {
        this._lastVersion = ver;
        this._loadStore(true).then(() => {
          if (this._inlineEditing && this._inlineEntity && this._inlineTempDraft !== null) {
            const row = this._schedules[this._inlineEntity] || { defaultTemp: this._config.default_temp, blocks: [] }; row.defaultTemp = this._inlineTempDraft;
            this._schedules[this._inlineEntity] = row;
          }
          this._ensureSchedules();
          if (!this._inlineEditing && !this._editing) this._render();
          this._scheduleNextApply();
        });
      };
      if (!Number.isNaN(ver) && ver !== this._lastVersion) {
        if (this._saving) {
          // Retry shortly to avoid missing updates while card is saving
          clearTimeout(this._verRetryT);
          this._verRetryT = setTimeout(() => { if (this._hass) { handleUpdate(); } }, 800);
        } else {
          handleUpdate();
        }
      }
    }

    // When Sync is OFF, do not override local editor toggles (profiles_enabled) with sensor values.
    // Visibility of the Manual schedule button is driven by local config and localStorage only.

    // (Removed select/state subscription; card updates via version change as before)

    if (!this._initialized) {
      this._initialized = true;
      this._init();
      this._loadStore(true).then(() => {
        this._ensureSchedules();
        // Restore delayed sync countdown if previously scheduled
        try { this._restoreSyncDue(); } catch {}
        this._render();
        // Open deferred Holiday editor right after first render if flagged by editor
        try { this._maybeOpenDeferredHoliday && this._maybeOpenDeferredHoliday(); } catch {}
        // Ved load sætter vi korrekt setpoint én gang
        this._applyCurrentSetpoints(true);
        this._scheduleNextApply();
        // Push any YAML-provided settings to storage/local after first load
        // but avoid resetting a pending delayed sync countdown on hard refresh
        try {
          const hasPending = Number(this._storeDelayDue||0) > Date.now() || !!localStorage.getItem(this._syncDueKey());
          if (!(this._config?.storage_enabled && this._config?.storage_sync_mode === 'delay' && hasPending)) {
            this._debouncedSaveStore();
          }
        } catch {}
  // (Removed polling safety net)
      });
    } else {
      if (!this._inlineEditing && !this._editing) this._render();
    }
  }

  // ---------- Config ----------
  setConfig(config) {
    if (!config || !Array.isArray(config.entities)) throw new Error("Config skal have 'entities: [climate.xxx, ...]'.");
    const prevDefault = Number(this._config?.default_temp);
    const yamlSetsDefault = Object.prototype.hasOwnProperty.call(config, 'default_temp');
    let rowh = Number(config.row_height ?? 64); rowh = isNaN(rowh) ? 64 : Math.max(40, Math.min(120, Math.round(rowh)));
    let deft = Number(config.default_temp ?? 20); deft = isNaN(deft) ? 20 : Math.max(5, Math.min(35, deft));
  let nowms = Number(config.now_update_ms ?? 60000); nowms = isNaN(nowms) ? 60000 : Math.max(200, nowms);
  let maxt = Number(config.max_temp ?? 25); maxt = isNaN(maxt) ? 25 : Math.max(5, Math.min(50, maxt));
  let mint = Number(config.min_temp ?? 5); mint = isNaN(mint) ? 5 : Math.max(0, Math.min(45, mint));
    const showTop = Boolean(config.show_top_now ?? false);
    let extendPx = Number(config.now_extend_px ?? 76); extendPx = isNaN(extendPx) ? 76 : Math.max(48, Math.min(140, Math.round(extendPx)));

    // Mark which keys were explicitly provided in YAML so storage won't
    // override them on first hass() load
    this._yamlProvided = {
      labels: Object.prototype.hasOwnProperty.call(config, 'labels'),
      merges: Object.prototype.hasOwnProperty.call(config, 'merges'),
      color_ranges: Object.prototype.hasOwnProperty.call(config, 'color_ranges'),
      min_temp: Object.prototype.hasOwnProperty.call(config, 'min_temp'),
      max_temp: Object.prototype.hasOwnProperty.call(config, 'max_temp'),
      temp_sensors: Object.prototype.hasOwnProperty.call(config, 'temp_sensors'),
      show_pause_button: Object.prototype.hasOwnProperty.call(config, 'show_pause_button'),
      away: Object.prototype.hasOwnProperty.call(config, 'away'),
      time_12h: Object.prototype.hasOwnProperty.call(config, 'time_12h'),
      temp_unit: Object.prototype.hasOwnProperty.call(config, 'temp_unit'),
      holidays_enabled: Object.prototype.hasOwnProperty.call(config, 'holidays_enabled'),
      holidays_source: Object.prototype.hasOwnProperty.call(config, 'holidays_source'),
      holidays_entity: Object.prototype.hasOwnProperty.call(config, 'holidays_entity'),
      holidays_dates: Object.prototype.hasOwnProperty.call(config, 'holidays_dates'),
    };

    this._config = {
      // If no explicit title, localize a default based on HA/browser language
      title: (config.title !== undefined && config.title !== null)
        ? String(config.title)
        : ttLocalize('card.title_default', this._hass || this._lang || navigator.language || 'en'),
      entities: config.entities,
      row_height: rowh,
      default_temp: deft,
  max_temp: maxt,
    min_temp: mint,
      temp_unit: (config.temp_unit === undefined || config.temp_unit === null || config.temp_unit === 'auto')
        ? (this._detectPreferF() ? 'F' : 'C')
        : (String(config.temp_unit).toUpperCase()==='F'?'F':'C'),
      time_12h: (config.time_12h === undefined || config.time_12h === null || config.time_12h === 'auto')
        ? this._detectPrefer12h()
        : !!config.time_12h,
      time_source: (config.time_source === 'ha' ? 'ha' : 'browser'),
      now_update_ms: nowms,
      storage_entity: (config.storage_entity || "").trim(),
      storage_enabled: !!(config.storage_enabled ?? false),
  storage_sync_mode: (config.storage_sync_mode === 'delay' ? 'delay' : 'instant'),
  storage_sync_min: Number.isFinite(config.storage_sync_min) ? Math.max(0, Math.min(1440, Number(config.storage_sync_min))) : (this._config?.storage_sync_min ?? 5),
  storage_sync_sec: Number.isFinite(config.storage_sync_sec)
    ? Math.max(5, Math.min(86400, Math.round(config.storage_sync_sec)))
    : (Number.isFinite(config.storage_sync_min) ? Math.max(5, Math.min(86400, Math.round(Number(config.storage_sync_min)*60))) : (this._config?.storage_sync_sec ?? 15)),
  backup_auto_enabled: !!(config.backup_auto_enabled ?? this._config?.backup_auto_enabled ?? false),
  backup_interval_days: Number.isFinite(config.backup_interval_days) ? Math.max(1, Math.min(365, Math.round(config.backup_interval_days))) : (this._config?.backup_interval_days ?? 1),
      show_top_now: showTop,
      now_extend_px: extendPx,
  show_pause_button: !!(config.show_pause_button ?? true),
      auto_apply: config.auto_apply ?? true,
      apply_on_edit: config.apply_on_edit ?? true,
      apply_on_default_change: config.apply_on_default_change ?? true,
  labels: { ...(config.labels || {}) },
      merges: { ...(config.merges || {}) },
    temp_sensors: { ...(config.temp_sensors || {}) },
  color_ranges: { ...(config.color_ranges || {}) },
    color_global: !!(config.color_global ?? this._config?.color_global ?? false),
      weekdays_enabled: !!(config.weekdays_enabled ?? false),
  weekdays_mode: (config.weekdays_mode || 'weekday_weekend'),
    profiles_enabled: !!(config.profiles_enabled ?? false),
    away: { enabled: !!(config.away?.enabled ?? false), persons: [...(config.away?.persons || [])], target_c: Number.isFinite(config.away?.target_c) ? Number(config.away.target_c) : 17 }
  , holidays_enabled: !!(config.holidays_enabled ?? this._config?.holidays_enabled ?? false)
  , holidays_source: (config.holidays_source || this._config?.holidays_source || 'calendar')
  , holidays_entity: String(config.holidays_entity || this._config?.holidays_entity || '')
  , holidays_dates: Array.isArray(config.holidays_dates) ? [...config.holidays_dates] : ([...(this._config?.holidays_dates || [])])
    };

    // If YAML explicitly changed default_temp, update rows that still use the old
    // default value (do not overwrite rooms with a user-specific override)
    try {
      if (yamlSetsDefault && Number.isFinite(prevDefault)) {
        for (const eid of (this._config.entities || [])) {
          const r = this._schedules[eid];
          if (!r) continue;
          if (!Number.isFinite(r.defaultTemp) || Math.abs(Number(r.defaultTemp) - prevDefault) < 0.001) {
            r.defaultTemp = this._config.default_temp;
          }
        }
      }
    } catch {}

    if (this._initialized) {
      this._ensureSchedules();
      // Extra safety: if YAML changed default_temp, propagate to rows that
      // still used the previous global default
      try {
        if (yamlSetsDefault && Number.isFinite(prevDefault)) {
          for (const eid of (this._config.entities || [])) {
            const r = this._schedules[eid];
            if (!r) continue;
            if (!Number.isFinite(r.defaultTemp) || Math.abs(Number(r.defaultTemp) - prevDefault) < 0.001) {
              r.defaultTemp = this._config.default_temp;
            }
          }
        }
      } catch {}
      this._startUiTimer();
      if (!this._inlineEditing && !this._editing) this._render();
      this._scheduleNextApply();
      // Persist shared settings to storage so other users/dashboards pick them up
      this._debouncedSaveStore();
    }
    // Mark config as ready
    this._hasConfig = true;
  }

  getCardSize() { return 3 + (this._config?.entities?.length || 0) * 2; }

  // ---------- Lifecycle ----------
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._initialized = false;
  this._config = ThermostatTimelineCard.getStubConfig();
  // Guard: wait for setConfig before any apply logic
  this._hasConfig = false;
  // Track which YAML keys were explicitly provided so storage doesn't
  // override them on first load
  this._yamlProvided = {};

  // Pop-up overlays (block editor, weekday editor, copy-to-rooms, onboarding)
  // Enable by default so Weekday and Add buttons are visible
  this._disablePopups = false;
  // Disable the onboarding guide popup explicitly
  this._disableOnboard = true;

    // Data
    this._schedules = {};          // { [entity_id]: { defaultTemp:number, blocks:[{id,startMin,endMin,temp}] } }

    // UI state
    this._uiTimer = null;          // kun til at flytte "nu"-stregen
    this._transitionTimer = null;  // timer til næste setpoint-ændring
    this._active = null;           // { entity, id }
    this._lastTap = { t: 0, target: null };
    this._editing = null;          // { entity, blockId }
  // When a weekly block is opened from main timeline, auto-save the weekly draft on block save
  this._autoSaveWeeklyFromTimeline = false;
  // When a profile block is opened from main timeline, auto-save the profile draft on block save
  this._autoSaveProfileFromTimeline = false;

    // Inline edit hard-lock
    this._inlineEditing = false;   // er et inline input aktivt?
    this._inlineEntity = null;     // hvilken entitys Standard-felt?
    this._inlineTempDraft = null;  // den værdi man er i gang med at skrive

    // Sync/debounce
    this._saving = false;
    this._saveTimer = null;
    this._saveDebounceMs = 300;
  // Delayed sync scheduler
  this._storeDelayTimer = null;
  this._storeDelayDue = 0;
    this._lastVersion = 0;
  // Polling watcher to pick up sensor updates in case frontend misses events
  this._storeWatchTimer = null;
  this._storeWatchMs = 1200; // ms

    // Auto apply guard
    this._lastApplied = {}; // { [entity_id]: { min:number, temp:number } }
  this._lastAwayActive = null; // Track last away state to trigger immediate apply on change
    // Track per-row tools open state
    this._toolsOpen = {}; // { [entity_id]: boolean }

    // Copy/paste schedule state
    this._copyFrom = null;        // entity id of source room
    this._copyPayload = null;     // deep-cloned schedule from source

    // Weekday modal state
    this._weeklyOpen = false;
    this._weeklyEntity = null;
    this._weeklyDraft = null; // { mode, days: { mon:[], ... } }
    this._weeklyDayKey = null;
    this._weeklyOverlayHiddenForEditor = false;
      // Weekly copy/paste by group (weekdays/weekend/sat/sun/mon..sun)
      this._weeklyCopyFromGroup = null;
      this._weeklyCopyPayload = null;
      // Pending copy-to-rooms targets (applied on Save)
      this._weeklyCopyTargets = [];

    // Profiles modal state (per-room named daily schedules)
    this._profilesOpen = false;
    this._profilesEntity = null;   // entity id for which profiles are managed
    this._profilesSelected = null; // currently selected profile name
    this._profilesOverlayHiddenForEditor = false; // track if hidden while block editor is open
  this._profilesDraft = null;     // { name: string, blocks: [...], defaultTemp:number }
  this._profilesDirty = false;
  this._profilesSaveLock = false; // debounce guard to prevent double-prompt on Enter
  this._profilesRoom = null;      // current room eid being edited in profiles modal

  // Global profile (shared via integration settings)
  this._globalProfile = null;
  // Track settings version even when storage is off
  this._lastSettingsVersion = 0;
  // HA event subscription (state_changed for storage sensor)
  this._haEvtUnsub = null;
  this._subStorageEid = null;

    // Holidays modal state
    this._holidayOpen = false;
    this._holidayEntity = null;    // deprecated (use _holidayRoom)
    this._holidayRoom = null;      // current room eid being edited in holiday modal
    this._holidayDraft = null;     // { rooms: { [eid]: [blocks] } }
    this._holidayOverlayHiddenForEditor = false;

    // External refresh hook (from editor button)
    this._onExternalRefresh = () => { try { if (!this._inlineEditing && !this._editing) this._render(); } catch {} };
    try { window.addEventListener('thermostat-timeline-refresh', this._onExternalRefresh); } catch {}
  // External request to open holiday editor for a specific room
  this._onOpenHoliday = (ev)=>{ try { const eid = ev?.detail?.eid || (this._config?.entities||[])[0] || null; if (eid) { this._openHolidayEditor(eid); } } catch {} };
  try { window.addEventListener('tt-open-holiday', this._onOpenHoliday); } catch {}

    // Onboarding state
    this._onboardOpen = false;
    this._onboardStep = 0;
  this._onboardLastUrl = null;
    this._onboardSlides = [
      // Supports video (.mp4/.webm) or images (.webp/.png/.gif)
      { key: 'onboard.step_main', img: this._assetUrl('media/thermostat-guide/step1.mp4'), fallback: '/local/media/thermostat-guide/step1.mp4' },
      { key: 'onboard.step_add',  img: this._assetUrl('media/thermostat-guide/step2.mp4'), fallback: '/local/media/thermostat-guide/step2.mp4' },
      { key: 'onboard.step_edit', img: this._assetUrl('media/thermostat-guide/step3.mp4'), fallback: '/local/media/thermostat-guide/step3.mp4' },
    ];

    // Global pause state (temporary suppression of set_temperature)
    this._pauseIndef = false;        // boolean
    this._pauseUntilMs = 0;          // epoch ms; > now => paused until time
    this._resumeTimer = null;        // timer to auto-resume
    this._countdownTimer = null;     // 1s updater for header countdown
    // Sync countdown UI (for delayed sync)
    this._syncTimer = null;
    this._syncJustUntil = 0; // ms timestamp to show "done" message briefly
  }

  disconnectedCallback() {
    if (this._uiTimer) clearInterval(this._uiTimer);
    if (this._transitionTimer) clearTimeout(this._transitionTimer);
    if (this._saveTimer) clearTimeout(this._saveTimer);
    if (this._storeWatchTimer) clearInterval(this._storeWatchTimer);
    try { if (this._onExternalRefresh) window.removeEventListener('thermostat-timeline-refresh', this._onExternalRefresh); } catch {}
    try { if (this._onOpenHoliday) window.removeEventListener('tt-open-holiday', this._onOpenHoliday); } catch {}
    try { if (this._haEvtUnsub) { this._haEvtUnsub(); this._haEvtUnsub = null; } } catch {}
  }

  // Resolve a static asset URL so it works in both dev (/local) and HACS (/hacsfiles/<repo>) installs.
  // Place assets next to the JS file in your HACS repo (e.g. ./media/...),
  // or in Home Assistant's config/www (refer using media/...).
  _assetUrl(p){
    try {
      const rel = String(p||'').replace(/^[\/\\]+/, '');
      // Resolve relative to the current JS module location (works under /local and /hacsfiles)
      return new URL(rel, import.meta.url).href;
    } catch (e) {
      try { return `/local/${String(p||'').replace(/^[\/\\]+/, '')}`; } catch { return String(p||''); }
    }
  }

  // ---------- Storage (sensor attributes + fallback) ----------
  _storageAvailable() { const eid = this._config?.storage_entity; return !!(this._config?.storage_enabled && eid && this._hass?.states?.[eid]); }

  async _loadStore(preferSensor = true) {
    if (preferSensor && this._config?.storage_enabled && this._storageAvailable()) {
      try {
        const st = this._hass.states[this._config.storage_entity];
        const attrs = st?.attributes || {};
          if (attrs.schedules && typeof attrs.schedules === "object") {
          // Unwrap if an older/incorrect payload put the entire object under 'schedules'
          let sch = JSON.parse(JSON.stringify(attrs.schedules));
          if (sch && sch.schedules && typeof sch.schedules === 'object') sch = sch.schedules;
          this._schedules = sch;
          // If there is a pending delayed sync (due stored locally), prefer draft schedules
          try {
            const dueRaw = localStorage.getItem(this._syncDueKey()) || '';
            const due = Number(dueRaw);
            if (Number.isFinite(due) && due > Date.now()) {
              const dr = localStorage.getItem(this._draftKey()) || '';
              if (dr) {
                const parsed = JSON.parse(dr);
                const dsch = parsed?.schedules && parsed.schedules.schedules ? parsed.schedules.schedules : (parsed?.schedules || parsed || {});
                if (dsch && typeof dsch === 'object') {
                  this._schedules = dsch;
                }
              }
            }
          } catch {}
          // Optional shared settings
          if (attrs.settings && typeof attrs.settings === 'object') {
            try {
              const s = attrs.settings;
              // Do not override user-selected format/unit from shared storage
              // if (s.time_12h !== undefined) this._config.time_12h = !!s.time_12h;
              // if (s.temp_unit) this._config.temp_unit = String(s.temp_unit).toUpperCase()==='F'?'F':'C';
              if (s.color_ranges && typeof s.color_ranges==='object' && !this._yamlProvided?.color_ranges) this._config.color_ranges = { ...s.color_ranges };
              if (typeof s.color_global === 'boolean') this._config.color_global = !!s.color_global;
              if (Number.isFinite(s.min_temp) && !this._yamlProvided?.min_temp) this._config.min_temp = Number(s.min_temp);
              if (Number.isFinite(s.max_temp) && !this._yamlProvided?.max_temp) this._config.max_temp = Number(s.max_temp);
              if (s.merges && typeof s.merges === 'object' && !this._yamlProvided?.merges) this._config.merges = { ...s.merges };
              if (s.labels && typeof s.labels === 'object' && !this._yamlProvided?.labels) this._config.labels = { ...s.labels };
              if (s.temp_sensors && typeof s.temp_sensors === 'object' && !this._yamlProvided?.temp_sensors) this._config.temp_sensors = { ...s.temp_sensors };
              if (typeof s.show_pause_button === 'boolean' && !this._yamlProvided?.show_pause_button) this._config.show_pause_button = !!s.show_pause_button;
              if (typeof s.profiles_enabled === 'boolean' && !this._yamlProvided?.profiles_enabled) this._config.profiles_enabled = !!s.profiles_enabled;
              if (typeof s.apply_on_edit === 'boolean') this._config.apply_on_edit = !!s.apply_on_edit;
              // Holidays shared settings
              try {
                if (typeof s.holidays_enabled === 'boolean' && !this._yamlProvided?.holidays_enabled) this._config.holidays_enabled = !!s.holidays_enabled;
                if (typeof s.holidays_source === 'string' && !this._yamlProvided?.holidays_source) this._config.holidays_source = s.holidays_source === 'manual' ? 'manual' : 'calendar';
                if (typeof s.holidays_entity === 'string' && !this._yamlProvided?.holidays_entity) this._config.holidays_entity = s.holidays_entity || '';
                if (Array.isArray(s.holidays_dates) && !this._yamlProvided?.holidays_dates) this._config.holidays_dates = [...s.holidays_dates];
              } catch {}
              // Pick up a global profile selection from shared storage
              try { this._globalProfile = (typeof s.global_profile === 'string' && s.global_profile) ? String(s.global_profile) : null; } catch {}
              // Backup settings
              try {
                if (typeof s.backup_auto_enabled === 'boolean') this._config.backup_auto_enabled = !!s.backup_auto_enabled;
                if (Number.isFinite(s.backup_interval_days)) this._config.backup_interval_days = Math.max(1, Math.min(365, Math.round(Number(s.backup_interval_days))));
                else if (Number.isFinite(s.backup_interval_min)) this._config.backup_interval_days = Math.max(1, Math.min(365, Math.ceil(Number(s.backup_interval_min)/1440)));
              } catch {}
              if (s.away && typeof s.away === 'object') {
                try {
                  const a = s.away;
                  this._config.away = {
                    enabled: !!a.enabled,
                    persons: Array.isArray(a.persons) ? [...a.persons] : [],
                    target_c: Number.isFinite(a.target_c) ? Number(a.target_c) : (this._config.away?.target_c ?? 17)
                  };
                } catch {}
              }
              // Pause flags from shared storage
              try {
                this._pauseIndef = !!s.pause_indef;
                const pu = Number(s.pause_until_ms);
                this._pauseUntilMs = Number.isFinite(pu) ? pu : 0;
              } catch {}
              // Delayed sync due time from shared storage (persist across reloads)
              try {
                const due = Number(s.sync_pending_until_ms);
                if (Number.isFinite(due) && due > Date.now()) {
                  this._storeDelayDue = due;
                  try { localStorage.setItem(this._syncDueKey(), String(due)); } catch {}
                }
              } catch {}
            } catch {}
          }
          this._lastVersion = Number(st.state || 0) || 0;
          try { localStorage.setItem("thermostat_timeline_store", JSON.stringify({ schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, global_profile: this._globalProfile || null } })); } catch {}
          return;
        }
      } catch (e) { /* fallback */ }
    }
    try {
      const raw = localStorage.getItem("thermostat_timeline_store") || "";
      if (!raw) { this._schedules = {}; return; }
  const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.schedules) {
        // Unwrap legacy nested structure if present
        const sch = parsed.schedules && parsed.schedules.schedules ? parsed.schedules.schedules : parsed.schedules;
        this._schedules = sch || {};
  const s = parsed.settings || {}; 
  // Do not override user-selected format/unit from local browser storage
  // if (s.time_12h !== undefined) this._config.time_12h = !!s.time_12h;
  // if (s.temp_unit) this._config.temp_unit = String(s.temp_unit).toUpperCase()==='F'?'F':'C';
  if (s.color_ranges && typeof s.color_ranges==='object' && !this._yamlProvided?.color_ranges) this._config.color_ranges = { ...s.color_ranges };
    if (typeof s.color_global === 'boolean') this._config.color_global = !!s.color_global;
    if (Number.isFinite(s.min_temp) && !this._yamlProvided?.min_temp) this._config.min_temp = Number(s.min_temp);
    if (Number.isFinite(s.max_temp) && !this._yamlProvided?.max_temp) this._config.max_temp = Number(s.max_temp);
    if (s.merges && typeof s.merges==='object' && !this._yamlProvided?.merges) this._config.merges = { ...s.merges };
    if (s.labels && typeof s.labels==='object' && !this._yamlProvided?.labels) this._config.labels = { ...s.labels };
    if (s.temp_sensors && typeof s.temp_sensors==='object' && !this._yamlProvided?.temp_sensors) this._config.temp_sensors = { ...s.temp_sensors };
    if (typeof s.show_pause_button === 'boolean' && !this._yamlProvided?.show_pause_button) this._config.show_pause_button = !!s.show_pause_button;
    if (s.away && typeof s.away === 'object') {
      try {
        const a = s.away;
        this._config.away = { enabled: !!a.enabled, persons: Array.isArray(a.persons) ? [...a.persons] : [], target_c: Number.isFinite(a.target_c) ? Number(a.target_c) : (this._config.away?.target_c ?? 17) };
      } catch {}
    }
  // Load flags from local storage copy
    try { this._pauseIndef = !!s.pause_indef; const pu = Number(s.pause_until_ms); this._pauseUntilMs = Number.isFinite(pu) ? pu : 0; } catch {}
  try { if (typeof s.profiles_enabled === 'boolean' && !this._yamlProvided?.profiles_enabled) this._config.profiles_enabled = !!s.profiles_enabled; } catch {}
  try { if (typeof s.apply_on_edit === 'boolean') this._config.apply_on_edit = !!s.apply_on_edit; } catch {}
  try { this._globalProfile = (typeof s.global_profile === 'string' && s.global_profile) ? String(s.global_profile) : null; } catch {}
  try { if (typeof s.backup_auto_enabled === 'boolean') this._config.backup_auto_enabled = !!s.backup_auto_enabled; if (Number.isFinite(s.backup_interval_days)) this._config.backup_interval_days = Math.max(1, Math.min(365, Math.round(Number(s.backup_interval_days)))); else if (Number.isFinite(s.backup_interval_min)) this._config.backup_interval_days = Math.max(1, Math.min(365, Math.ceil(Number(s.backup_interval_min)/1440))); } catch {}
  // Sync policy from storage
  try {
  if (typeof s.sync_mode === 'string') this._config.storage_sync_mode = (s.sync_mode === 'delay') ? 'delay' : 'instant';
  if (Number.isFinite(s.sync_delay_min)) this._config.storage_sync_min = Math.max(0, Math.min(1440, Number(s.sync_delay_min)));
  if (Number.isFinite(s.sync_delay_sec)) this._config.storage_sync_sec = Math.max(5, Math.min(86400, Math.round(Number(s.sync_delay_sec))));
  else if (Number.isFinite(s.sync_delay_min)) this._config.storage_sync_sec = Math.max(5, Math.min(86400, Math.round(Number(s.sync_delay_min)*60)));
  } catch {}
  // Holidays from local storage
  try {
    if (typeof s.holidays_enabled === 'boolean' && !this._yamlProvided?.holidays_enabled) this._config.holidays_enabled = !!s.holidays_enabled;
    if (typeof s.holidays_source === 'string' && !this._yamlProvided?.holidays_source) this._config.holidays_source = s.holidays_source === 'manual' ? 'manual' : 'calendar';
    if (typeof s.holidays_entity === 'string' && !this._yamlProvided?.holidays_entity) this._config.holidays_entity = s.holidays_entity || '';
    if (Array.isArray(s.holidays_dates) && !this._yamlProvided?.holidays_dates) this._config.holidays_dates = [...s.holidays_dates];
  } catch {}
      } else {
        // backward compat: schedules stored directly
        this._schedules = parsed || {};
      }
    }
    catch { this._schedules = {}; }
  }

  async _saveStore() {
    try {
      localStorage.setItem("thermostat_timeline_store", JSON.stringify({
        schedules: this._schedules,
        settings: {
          time_12h: this._config.time_12h,
          temp_unit: this._config.temp_unit,
          time_source: this._config.time_source,
          color_ranges: this._config.color_ranges,
          color_global: !!this._config.color_global,
          min_temp: this._config.min_temp,
          max_temp: this._config.max_temp,
          away: this._config.away,
          merges: this._config.merges,
          labels: this._config.labels,
          temp_sensors: this._config.temp_sensors,
          show_pause_button: !!(this._config.show_pause_button ?? true),
          auto_apply_enabled: !!this._config.auto_apply,
          apply_on_edit: !!this._config.apply_on_edit,
          backup_auto_enabled: !!this._config.backup_auto_enabled,
          backup_interval_days: Number(this._config.backup_interval_days||1),
          profiles_enabled: !!this._config.profiles_enabled,
          global_profile: this._globalProfile || null,
          pause_indef: !!this._pauseIndef,
          pause_until_ms: Number(this._pauseUntilMs||0),
          holidays_enabled: !!this._config.holidays_enabled,
          holidays_source: this._config.holidays_source || 'calendar',
          holidays_entity: this._config.holidays_entity || '',
          holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [],
          sync_mode: (this._config.storage_sync_mode||'instant'),
          sync_delay_min: Number(Math.max(0, Math.round((this._config.storage_sync_sec||0)/60))),
          sync_delay_sec: Number(this._config.storage_sync_sec||0)
        }
      }));
    } catch {}
    // Always persist local browser copy immediately
    const writeRemote = async () => {
      if (!this._storageAvailable()) return;
      this._saving = true;
      try {
        if (this._config?.storage_enabled) {
          await this._hass.callService("thermostat_timeline", "set_store", { schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, time_source: this._config.time_source, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, apply_on_edit: !!this._config.apply_on_edit, backup_auto_enabled: !!this._config.backup_auto_enabled, backup_interval_days: Number(this._config.backup_interval_days||1), profiles_enabled: !!this._config.profiles_enabled, global_profile: this._globalProfile || null, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0), holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(Math.max(0, Math.round((this._config.storage_sync_sec||0)/60))), sync_delay_sec: Number(this._config.storage_sync_sec||0) } });
        } else {
          // disable background apply without touching schedules
          await this._hass.callService("thermostat_timeline", "set_store", { settings: { auto_apply_enabled: false, apply_on_edit: !!this._config.apply_on_edit, profiles_enabled: !!this._config.profiles_enabled, global_profile: this._globalProfile || null, show_pause_button: !!(this._config.show_pause_button ?? true), pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0), holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [] } });
        }
      }
      catch (e) { console.error("thermostat-timeline: save failed", e); }
      finally {
        setTimeout(() => {
          this._saving = false;
          // Show "done" for a short moment and ensure UI keeps ticking
          this._syncJustUntil = Date.now() + 2500;
          // Clear previous due so countdown disappears until next change
          this._storeDelayDue = 0;
          this._startSyncTimer();
          this._render();
        }, 600);
      }
    };

    // Decide sync policy
    const mode = this._config?.storage_sync_mode || 'instant';
    const secsCfg = Number(this._config?.storage_sync_sec || 0);
    const secs = Math.max(5, Math.min(86400, Number.isFinite(secsCfg) ? secsCfg : Math.max(0, Number(this._config?.storage_sync_min || 0))*60));
    if (this._config?.storage_enabled && mode === 'delay' && secs > 0) {
      // Trailing save after N minutes; coalesce multiple changes
      const delayMs = secs * 1000;
      if (this._storeDelayTimer) try { clearTimeout(this._storeDelayTimer); } catch {}
      this._storeDelayDue = Date.now() + delayMs;
  try { localStorage.setItem(this._syncDueKey(), String(this._storeDelayDue)); } catch {}
  // Save a draft of current schedules so they survive a hard refresh until delayed sync writes
  try { localStorage.setItem(this._draftKey(), JSON.stringify({ schedules: this._schedules })); } catch {}
  // Persist due time across reloads
  // If we just finished a sync, drop the "done" flag so countdown shows immediately
      this._syncJustUntil = 0;
      this._storeDelayTimer = setTimeout(() => { this._storeDelayTimer = null; this._writeStoreNow(); }, delayMs);
      try { this._startSyncTimer(); this._render(); } catch {}
    } else {
      // Instant (existing behavior with short debounce handled by callers)
      await this._writeStoreNow();
    }
  }

  _debouncedSaveStore() {
    // Keep short debounce for bursts; final saving respects sync policy inside _saveStore
    if (this._saveTimer) clearTimeout(this._saveTimer);
    // Persist a local draft immediately so edits survive hard refresh before save runs
    try { this._persistDraftNow(); } catch {}
    this._saveTimer = setTimeout(() => this._saveStore(), this._saveDebounceMs);
  }

  // ---------- Helpers ----------
  _sortBlocks(entity) { const r = this._schedules[entity]; r.blocks.sort((a,b)=>a.startMin - b.startMin || a.endMin - b.endMin); }
  _neighbors(entity, id) { const r = this._schedules[entity]; const i = r.blocks.findIndex(b=>b.id===id); if (i === -1) return {left:null, right:null, index:-1}; return { left: r.blocks[i-1] || null, right: r.blocks[i+1] || null, index:i }; }
  _applyNoOverlapResize(entity, b, edge, proposed) { this._sortBlocks(entity); const {left, right} = this._neighbors(entity, b.id); if (edge === "left") { let ns = this._clamp(Math.floor(proposed), 0, b.endMin - 5); if (left) ns = Math.max(ns, left.endMin); b.startMin = ns; } else if (edge === "right") { let ne = this._clamp(Math.ceil(proposed), b.startMin + 5, 1440); if (right) ne = Math.min(ne, right.startMin); b.endMin = ne; } this._sortBlocks(entity); }
  _label(min) {
    if (!Number.isFinite(min)) min = 0;
    const m = ((Math.floor(min) % 1440) + 1440) % 1440;
    const hh = Math.floor(m/60), mm = Math.round(m%60);
    if (this._config?.time_12h) {
      const am = hh < 12;
      let h = hh % 12; if (h === 0) h = 12;
      return `${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')} ${am ? 'AM' : 'PM'}`;
    }
    return `${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;
  }
  _timeParts(min){
    // Returns { main: 'hh:mm', mer: 'AM'|'PM'|null } according to current format
    if (!Number.isFinite(min)) min = 0;
    const m = ((Math.floor(min) % 1440) + 1440) % 1440;
    const hh = Math.floor(m/60), mm = Math.round(m%60);
    if (this._config?.time_12h) {
      const am = hh < 12;
      let h = hh % 12; if (h === 0) h = 12;
      return { main: `${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')}`, mer: am ? 'AM' : 'PM' };
    }
    return { main: `${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`, mer: null };
  }
  _hourLabel(h){ const min = (h%24)*60; return this._label(min); }
  _useHaTime(){ try { return String(this._config?.time_source||'browser') === 'ha'; } catch { return false; } }
  _getNowMin(){
    try {
      if (this._useHaTime() && this._hass?.config?.time_zone) {
        const tz = this._hass.config.time_zone;
        const fmt = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false });
        const parts = fmt.formatToParts(new Date());
        const hh = Number(parts.find(p=>p.type==='hour')?.value||'0');
        const mm = Number(parts.find(p=>p.type==='minute')?.value||'0');
        return hh*60 + mm;
      }
    } catch {}
    const d=new Date(); return d.getHours()*60 + d.getMinutes();
  }
  _clamp(v,a,b){ if (isNaN(v)) return a; return Math.min(Math.max(v,a),b); }
  _prettyName(eid){ const st=this._hass?.states?.[eid]; if (st?.attributes?.friendly_name) return st.attributes.friendly_name; const base=(eid||"").split(".")[1]||eid||""; return base.replace(/_/g," ").replace(/\b\w/g,(m)=>m.toUpperCase()); }
  
  _isCompactScale(){
    // Compact = show every other hour on small or touch devices (incl. mobile portrait)
    try {
      const isCoarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;
      // Prefer the card width when available, fallback to window width
      const hostW = (this.shadowRoot && this.shadowRoot.host && this.shadowRoot.host.clientWidth) || 0;
      const w = hostW || window.innerWidth || 0;
      // Consider compact on touch devices (phones/tablets) or narrow widths
      return isCoarse || w <= 720; // ~mobile/tablet portrait breakpoint
    } catch (e) { return false; }
  }
  _detectPrefer12h(){
    try {
      // Prefer Home Assistant locale if available
      const lf = this._hass?.locale?.time_format || this._hass?.locale?.time_format_preference || '';
      if (typeof lf === 'string') {
        const s = lf.toLowerCase();
        if (s.includes('12')) return true;
        if (s.includes('24')) return false;
      }
    } catch {}
    try {
      // Fallback: browser preference
      const fmt = new Intl.DateTimeFormat(navigator.language || undefined, { hour: 'numeric' });
      const ro = fmt.resolvedOptions?.() || {};
      if (typeof ro.hour12 === 'boolean') return ro.hour12;
    } catch {}
    // Final fallback: 24h
    return false;
  }
  _detectPreferF(){
    try {
      const u = this._hass?.config?.unit_system?.temperature || this._hass?.locale?.temperature || '';
      if (typeof u === 'string' && u.toUpperCase().includes('F')) return true;
    } catch {}
    try {
      const f = new Intl.NumberFormat(navigator.language || undefined, { style:'unit', unit:'fahrenheit' });
      // Heuristic: if formatter exists, still default to C; most regions outside US use C, but HA already covers primary preference
    } catch {}
    return false;
  }
  _getLocalProfilesEnabled(){
    try {
      const raw = localStorage.getItem('thermostat_timeline_store') || '';
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      const s = parsed?.settings || {};
      return !!s.profiles_enabled;
    } catch { return false; }
  }
  _isF(){ return (this._config?.temp_unit||'C')==='F'; }
  _unitSymbol(){ return this._isF()? '°F' : '°C'; }
  _toDisplayTemp(c){ return this._isF()? Math.round((c*9/5+32)*10)/10 : c; }
  _fromDisplayTemp(v){ return this._isF()? ( (v-32)*5/9 ) : v; }
  _maxDisplay(){ const c = Number(this._config?.max_temp ?? 25); return this._toDisplayTemp(c); }
  _minDisplay(){ const c = Number(this._config?.min_temp ?? 5); return this._toDisplayTemp(c); }
  _todayFullName(){
    try {
      const lang = ttGetLangFromHass(this._hass || this._lang || 'en');
      const opts = { weekday: 'long' };
      if (this._useHaTime() && this._hass?.config?.time_zone) Object.assign(opts, { timeZone: this._hass.config.time_zone });
      const s = new Intl.DateTimeFormat(lang, opts).format(new Date());
      return s.charAt(0).toUpperCase()+s.slice(1);
    } catch {
      const names = { mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday', sun:'Sunday' };
      return names[this._todayKey()] || 'Today';
    }
  }

  // Format ISO timestamp in a readable, localized way
  _fmtDateTimeIso(iso){
    try {
      if (!iso) return '';
      const d = new Date(iso);
      const lang = ttGetLangFromHass(this._hass || this._lang || 'en');
      const opts = { dateStyle: 'medium', timeStyle: 'short' };
      if (this._useHaTime() && this._hass?.config?.time_zone) opts.timeZone = this._hass.config.time_zone;
      return new Intl.DateTimeFormat(lang, opts).format(d);
    } catch { return String(iso||''); }
  }

  // --- Weekday helpers ---
  _weekdayNames(){ return ['mon','tue','wed','thu','fri','sat','sun']; }
  _todayKey(){
    try {
      if (this._useHaTime() && this._hass?.config?.time_zone) {
        const tz = this._hass.config.time_zone;
        const parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short' }).format(new Date());
        const map = { Mon:'mon', Tue:'tue', Wed:'wed', Thu:'thu', Fri:'fri', Sat:'sat', Sun:'sun' };
        return map[parts] || 'mon';
      }
    } catch {}
    const d=new Date(); const idx=((d.getDay()+6)%7); return this._weekdayNames()[idx];
  }
  _ensureWeeklyStruct(row){
    if (!row.weekly) { row.weekly = { mode: this._config?.weekdays_mode || 'weekday_weekend', days: {} }; }
    const names=this._weekdayNames();
    for (const k of names){ if (!Array.isArray(row.weekly.days[k])) row.weekly.days[k] = []; }
    // Maintain separate saved schedules per mode
    if (!row.weekly_modes) {
      row.weekly_modes = {
        weekday_weekend: { days: {} },
        weekday_sat_sun: { days: {} },
        all_7: { days: {} }
      };
      // Seed current into active mode bucket
      try {
        const curMode = row.weekly?.mode || this._config?.weekdays_mode || 'weekday_weekend';
        row.weekly_modes[curMode] = { days: JSON.parse(JSON.stringify(row.weekly?.days||{})) };
      } catch {}
    }
    try {
      const modes = ['weekday_weekend','weekday_sat_sun','all_7'];
      for (const m of modes){
        const bucket = row.weekly_modes[m] = row.weekly_modes[m] || { days: {} };
        for (const k of names){ if (!Array.isArray(bucket.days[k])) bucket.days[k] = []; }
      }
    } catch {}
    return row;
  }
  _getBlocksForDay(row, dayKey){ if (!this._config?.weekdays_enabled || !row?.weekly) return row?.blocks || []; const days = row.weekly.days || {}; return Array.isArray(days[dayKey]) ? days[dayKey] : (row.blocks||[]); }
  _weeklyEditableKeys(mode){ const all = this._weekdayNames(); if (!mode) mode = 'weekday_weekend'; if (mode==='weekday_weekend') return ['weekdays','weekend']; if (mode==='weekday_sat_sun') return ['weekdays','sat','sun']; if (mode==='all_7') return all; return ['weekdays','weekend']; }
  _effectiveDayKey(sel){ if (sel==='weekdays') return 'mon'; if (sel==='weekend') return 'sat'; return sel || 'mon'; }

  // --- Profiles (named daily schedules) helpers ---
  _ensureProfilesStruct(row){
    try {
      if (!row) return row;
      if (!row.profiles || typeof row.profiles !== 'object') row.profiles = {};
      if (!('activeProfile' in row)) row.activeProfile = null;
    } catch {}
    return row;
  }

  // --- Holidays helpers ---
  _ensureHolidayStruct(row){
    try { if (!row) return row; if (!row.holiday || !Array.isArray(row.holiday.blocks)) row.holiday = { blocks: [] }; } catch {} return row;
  }
  _todayISO(){
    try {
      if (this._useHaTime() && this._hass?.config?.time_zone) {
        const tz = this._hass.config.time_zone;
        const parts = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
        // en-CA gives YYYY-MM-DD
        return String(parts);
      }
    } catch {}
    try { const d=new Date(); const y=d.getFullYear(); const m=String(d.getMonth()+1).padStart(2,'0'); const dd=String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${dd}`; } catch { return ''; }
  }
  _isHolidayActive(){
    try {
      if (!this._config?.holidays_enabled) return false;
      const src = this._config.holidays_source || 'calendar';
      if (src === 'manual') {
        const list = Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [];
        const today = this._todayISO();
        return !!list.find(d=>String(d)===today);
      }
      // calendar/binary_sensor entity
      const eid = this._config.holidays_entity || '';
      if (!eid) return false;
      const st = this._hass?.states?.[eid];
      const s = String(st?.state||'').toLowerCase();
      return s === 'on';
    } catch { return false; }
  }

  // --- Merge helpers ---
  _groupPrimaryOf(eid){
    const prims = this._config?.entities || [];
    if (prims.includes(eid)) return eid;
    const merges = this._config?.merges || {};
    for (const p of prims){ const arr = merges[p]||[]; if (arr.includes(eid)) return p; }
    return eid;
  }
  _allTargetEntities(){
    const out = new Set();
    const merges = this._config?.merges || {};
    for (const p of (this._config?.entities||[])){
      out.add(p);
      for (const l of (merges[p]||[])) out.add(l);
    }
    return Array.from(out);
  }

  _desiredTempFor(eid, nowMin){ const primary = this._groupPrimaryOf(eid); const row = this._schedules[primary]; if (!row) return null; this._ensureHolidayStruct(row); let blocks = row.blocks||[];
    // Holidays override take highest precedence when enabled
    try {
      if (this._isHolidayActive() && row.holiday && Array.isArray(row.holiday.blocks) && row.holiday.blocks.length) {
        blocks = row.holiday.blocks || [];
      } else {
        // fall through
      }
    } catch {}
    // Profiles override take precedence when enabled and active
    try {
      if (this._config?.profiles_enabled && !(this._isHolidayActive() && row?.holiday?.blocks?.length)) {
        this._ensureProfilesStruct(row);
        const ap = row.activeProfile;
        if (ap && row.profiles && Array.isArray(row.profiles[ap]?.blocks)) {
          blocks = row.profiles[ap].blocks || [];
        } else if (this._config?.weekdays_enabled && row.weekly) {
          const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey);
        }
      } else if (this._config?.weekdays_enabled && row.weekly) {
        const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey);
      }
    } catch { /* fall back to default blocks */ }
    const hit = (blocks||[]).find(b => nowMin >= b.startMin && nowMin < b.endMin); let want = Number(hit ? hit.temp : row.defaultTemp);
    // Apply away override if active
    try {
      if (this._isAwayActive()) {
        const targetC = Number(this._config?.away?.target_c ?? 17);
        if (Number.isFinite(targetC)) want = Math.min(want, targetC);
      }
    } catch {}
    return want; }

  _isAwayActive(){
    try {
      const a = this._config?.away; if (!a || !a.enabled) return false;
      const persons = Array.isArray(a.persons) ? a.persons : [];
      if (!persons.length) return false;
      // Consider away if none are 'home'
      for (const p of persons){ const st = this._hass?.states?.[p]; const s = (st?.state||'').toLowerCase(); if (s === 'home') return false; }
      return true;
    } catch { return false; }
  }

  // ---- Pause helpers ----
  _isPaused(){
    try {
      if (this._pauseIndef) return true;
      const until = Number(this._pauseUntilMs||0);
      if (Number.isFinite(until) && until > Date.now()) return true;
    } catch {}
    return false;
  }
  _resumeAtMs(){ const u = Number(this._pauseUntilMs||0); return (Number.isFinite(u) && u>0) ? u : null; }
  _scheduleResumeTimer(){
    try {
      if (this._resumeTimer) clearTimeout(this._resumeTimer);
      if (!this._isPaused()) return;
      if (this._pauseIndef) return; // manual resume only
      const when = this._resumeAtMs();
      if (!when) return;
      const delay = Math.max(500, when - Date.now());
      this._resumeTimer = setTimeout(async ()=>{
        // Resume reached: re-render UI and apply immediately once
        try { this._render(); } catch {}
        await this._applyCurrentSetpoints(true);
        this._scheduleNextApply();
      }, delay);
    } catch {}
  }

  _formatPauseCountdown(){
    try {
      const until = Number(this._pauseUntilMs||0);
      const now = Date.now();
      if (!until || until <= now) return '';
      let ms = until - now;
      const totalSec = Math.floor(ms/1000);
      const h = Math.floor(totalSec/3600);
      const m = Math.floor((totalSec%3600)/60);
      const s = totalSec%60;
      const pad = (n)=>String(n).padStart(2,'0');
      if (h>0) return `${h}:${pad(m)}:${pad(s)}`;
      return `${m}:${pad(s)}`;
    } catch { return ''; }
  }
  _startCountdownTimer(){
    try {
      if (this._countdownTimer) clearInterval(this._countdownTimer);
      const wrap = this.shadowRoot && this.shadowRoot.querySelector('.pause-wrap');
      const etaEl = wrap && wrap.querySelector && wrap.querySelector('.pause-eta');
      if (!this._isPaused() || this._pauseIndef || !etaEl) return;
      const tick = ()=>{ try { if (!this._isPaused() || this._pauseIndef) { clearInterval(this._countdownTimer); this._countdownTimer=null; etaEl.textContent=''; return; } etaEl.textContent = this._formatPauseCountdown(); } catch {} };
      tick();
      this._countdownTimer = setInterval(tick, 1000);
    } catch {}
  }

  _nextBoundaryDate(){
    // HA timezone mode: compute delay in HA tz and return a local Date for the timeout
    if (this._useHaTime() && this._hass?.config?.time_zone) {
      const nowMin = this._getNowMin(); let bestT = null; let bestDelta = Infinity;
      for (const eid of (this._config.entities || [])){
        const row = this._schedules[eid]; if (!row) continue; const times = [];
        // Prefer active profile blocks when profiles are enabled
        let blocks = row.blocks||[];
        try {
          if (this._config?.profiles_enabled) {
            this._ensureProfilesStruct(row);
            const ap = row.activeProfile;
            if (ap && row.profiles && Array.isArray(row.profiles[ap]?.blocks)) {
              blocks = row.profiles[ap].blocks || [];
            } else if (this._config?.weekdays_enabled && row.weekly) {
              const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || [];
            }
          } else if (this._config?.weekdays_enabled && row.weekly) {
            const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || [];
          }
        } catch {}
        for (const b of blocks) { times.push(b.startMin, b.endMin); }
        for (const t of times){ let delta = (t - nowMin + 1440) % 1440; if (delta === 0) delta = 1; if (delta < bestDelta){ bestDelta = delta; bestT = t; } }
      }
      // Always consider midnight rollover (00:00)
      {
        let deltaMid = (1440 - nowMin) % 1440; const tMid = 0; if (deltaMid === 0) deltaMid = 1; if (deltaMid < bestDelta) { bestDelta = deltaMid; bestT = tMid; }
      }
      let delayMs;
      if (bestT == null) {
        delayMs = ((1440 - nowMin) % 1440) * 60000;
      } else {
        const diffMin = (bestT - nowMin + 1440) % 1440; delayMs = Math.max(500, diffMin * 60000);
      }
      if (delayMs <= 250) delayMs += 60000;
      return new Date(Date.now() + delayMs);
    }
    // Browser/local timezone mode (existing behavior)
    const now = new Date(); const nowMin = this._getNowMin(); let bestT = null; let bestDelta = Infinity; for (const eid of (this._config.entities || [])){
      const row = this._schedules[eid]; if (!row) continue; const times = [];
      // Prefer active profile blocks when profiles are enabled
      let blocks = row.blocks||[];
      try {
        if (this._config?.profiles_enabled) {
          this._ensureProfilesStruct(row);
          const ap = row.activeProfile;
          if (ap && row.profiles && Array.isArray(row.profiles[ap]?.blocks)) {
            blocks = row.profiles[ap].blocks || [];
          } else if (this._config?.weekdays_enabled && row.weekly) {
            const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || [];
          }
        } else if (this._config?.weekdays_enabled && row.weekly) {
          const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || [];
        }
      } catch {}
      for (const b of blocks) { times.push(b.startMin, b.endMin); }
      for (const t of times){ let delta = (t - nowMin + 1440) % 1440; if (delta === 0) delta = 1; if (delta < bestDelta){ bestDelta = delta; bestT = t; } }
    }
    // Always consider midnight rollover (00:00) as a boundary so we re-apply
    // the next day's desired temperature even if today's schedule has no block
    // ending/starting at 00:00. This makes day change bullet-proof.
    {
      let deltaMid = (1440 - nowMin) % 1440; // minutes until midnight
      const tMid = 0;
      if (deltaMid === 0) deltaMid = 1; // avoid scheduling "now"
      if (deltaMid < bestDelta) { bestDelta = deltaMid; bestT = tMid; }
    }
    if (bestT == null) { return new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0); }
    const dayOffset = (bestT >= nowMin) ? 0 : 1; const target = new Date(now.getFullYear(), now.getMonth(), now.getDate()+dayOffset, Math.floor(bestT/60), bestT%60, 0, 0); if (target.getTime() - now.getTime() <= 250) target.setTime(target.getTime() + 60000); return target; }

  // (removed next-boundary-per-row helper)

  _scheduleNextApply(){
    if (this._transitionTimer) clearTimeout(this._transitionTimer);
    // If auto-apply is off completely, do nothing
    if (!this._config?.auto_apply) return;
    // Don't schedule until config is available
    if (!this._hasConfig) return;
    // If paused indefinitely, don't schedule boundary timer; only resume via user action
    if (this._pauseIndef) { this._scheduleResumeTimer(); return; }
    // Choose earlier of boundary and pause-resume moment if set
    const boundary = this._nextBoundaryDate();
    let targetMs = boundary.getTime();
    const resumeMs = this._resumeAtMs();
    if (resumeMs && resumeMs < targetMs) targetMs = resumeMs;
    const delay = Math.max(500, targetMs - Date.now());
    this._transitionTimer = setTimeout(async () => {
      await this._applyCurrentSetpoints(true);
      this._scheduleNextApply();
    }, delay);
    // Also make sure we have a standalone resume timer if paused
    this._scheduleResumeTimer();
  }

  async _applyCurrentSetpoints(force=false){ if (!this._config?.auto_apply || !this._hass) return; if (!this._hasConfig) return; if (this._config?.storage_enabled) return; if (this._isPaused()) return; const nowMin = this._getNowMin(); const targets = this._allTargetEntities(); for (const eid of targets){
    // If this call is from boundary timer (force===true), only apply for entities that have boundary now
    if (force) {
      const primary = this._groupPrimaryOf(eid);
      const row = this._schedules[primary];
      if (!row || !this._entityHasBoundaryNow(row, nowMin)) { continue; }
    }
    let desired = this._desiredTempFor(eid, nowMin);
    const mx = this._config?.max_temp ?? 25; const mn = this._config?.min_temp ?? 5; if (Number.isFinite(mx)) desired = Math.min(desired, mx); if (Number.isFinite(mn)) desired = Math.max(desired, mn);
      if (desired == null || Number.isNaN(desired)) continue;
      const last = this._lastApplied[eid] || {};
      if (!force && last.min === nowMin && Math.abs((last.temp??NaN) - desired) < 0.05) continue;
      const st = this._hass.states?.[eid];
      const cur = Number(st?.attributes?.temperature ?? st?.attributes?.target_temperature ?? st?.attributes?.target_temp);
      if (Number.isFinite(cur) && Math.abs(cur - desired) < 0.05){ this._lastApplied[eid] = { min: nowMin, temp: desired }; continue; }
      try { await /* guarded */ (async()=>{ try { const __args = { entity_id: eid, temperature: desired }; const __eid = __args.entity_id; if (typeof __eid==='string' && __eid.includes('.') && __eid.split('.')[0]==='climate' && this._hass?.states?.[__eid]) { this._hass.callService('climate','set_temperature', { entity_id: eid, temperature: desired }); } } catch(e){ console.warn('set_temperature skipped/failed', e); } })(); this._lastApplied[eid] = { min: nowMin, temp: desired }; }
      catch (e) { console.warn('thermostat-timeline: set_temperature failed for', eid, e); }
    } }

  // ---------- "Apply on change" helper ----------
  _desiredNowSnapshot(){ const nowMin = this._getNowMin(); const snap = {}; for (const eid of this._allTargetEntities()) snap[eid] = this._desiredTempFor(eid, nowMin); return snap; }
  async _applyIfDesiredChanged(beforeSnap){ if (!this._config?.auto_apply) return; if (this._isPaused()) return; const after = this._desiredNowSnapshot(); const nowMin = this._getNowMin();
    if (this._config?.storage_enabled) {
      const delayMode = String(this._config.storage_sync_mode||'instant')==='delay';
      try {
        for (const eid of Object.keys(after)){
          let a = after[eid]; const b = beforeSnap[eid]; if (a == null) continue;
          const mx=this._config?.max_temp ?? 25; const mn=this._config?.min_temp ?? 5; if (Number.isFinite(mx)) a = Math.min(a, mx); if (Number.isFinite(mn)) a = Math.max(a, mn);
          if (b == null || Math.abs(a - b) > 0.049){
            if (delayMode) {
              // Immediate one-off apply even while sync is in delay mode
              try { await /* guarded */ (async()=>{ try { const __args = { entity_id: eid, temperature: a }; const __eid = __args.entity_id; if (typeof __eid==='string' && __eid.includes('.') && __eid.split('.')[0]==='climate' && this._hass?.states?.[__eid]) { this._hass.callService('climate','set_temperature', { entity_id: eid, temperature: a }); } } catch(e){ console.warn('set_temperature skipped/failed', e); } })(); this._lastApplied[eid] = { min: nowMin, temp: a }; } catch(e){ console.warn('thermostat-timeline: set_temperature (delay-mode) failed for', eid, e); }
            }
          }
        }
        if (delayMode) { await this._nudgeBackgroundApplyNow(); }
      } catch {}
      return;
    }
    for (const eid of Object.keys(after)){ let a = after[eid]; const b = beforeSnap[eid]; if (a == null) continue; const mx=this._config?.max_temp ?? 25; const mn=this._config?.min_temp ?? 5; if (Number.isFinite(mx)) a = Math.min(a, mx); if (Number.isFinite(mn)) a = Math.max(a, mn); if (b == null || Math.abs(a - b) > 0.049){ try { await /* guarded */ (async()=>{ try { const __args = { entity_id: eid, temperature: a }; const __eid = __args.entity_id; if (typeof __eid==='string' && __eid.includes('.') && __eid.split('.')[0]==='climate' && this._hass?.states?.[__eid]) { this._hass.callService('climate','set_temperature', { entity_id: eid, temperature: a }); } } catch(e){ console.warn('set_temperature skipped/failed', e); } })(); this._lastApplied[eid] = { min: nowMin, temp: a }; } catch(e){ console.warn('thermostat-timeline: set_temperature (on-change) failed for', eid, e); } } }
  }

  // Ping backend to apply now without waiting for delayed sync
  async _nudgeBackgroundApplyNow(){ try { if (!this._hass || !this._config?.storage_enabled || !this._config?.storage_entity) return; const settings = { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, time_source: this._config.time_source, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, show_pause_button: !!(this._config.show_pause_button ?? true), profiles_enabled: !!this._config.profiles_enabled, auto_apply_enabled: !!this._config.auto_apply, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0), holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(this._config.storage_sync_min||0) }; await this._hass.callService('thermostat_timeline','set_store', { settings, force: true }); } catch {} }

  // Apply a setpoint immediately for the given entity (and its merged entities)
  // using the provided temperature (in °C). Honours away override and min/max.
  async _applyImmediateForEntity(entity, tempC, nowMinOverride=null){
    try {
      if (!this._config?.auto_apply || !this._config?.apply_on_edit || !this._hass) return;
      // When shared storage is enabled, integration handles the apply; card should not send
      // Exception: in delay mode we apply immediately once for better UX
      if (this._config?.storage_enabled && String(this._config.storage_sync_mode||'instant')!=='delay') return;
      if (this._isPaused()) return;
      let desired = Number(tempC);
      // Away override
      try { if (this._isAwayActive()) { const a = Number(this._config?.away?.target_c ?? 17); if (Number.isFinite(a)) desired = Math.min(desired, a); } } catch {}
      // Clamp to min/max
      const mx = this._config?.max_temp ?? 25; const mn = this._config?.min_temp ?? 5;
      if (Number.isFinite(mx)) desired = Math.min(desired, mx);
      if (Number.isFinite(mn)) desired = Math.max(desired, mn);
      const nowMin = Number.isFinite(nowMinOverride) ? nowMinOverride : this._getNowMin();
      const targets = [entity, ...(this._config?.merges?.[entity] || [])];
      for (const eid of targets){
        try {
          const __eid = eid;
          if (!(typeof __eid==='string' && __eid.includes('.') && __eid.split('.')[0]==='climate' && this._hass?.states?.[__eid])) continue;
          // Avoid redundant command if thermostat already at desired
          const st = this._hass.states[__eid];
          const cur = Number(st?.attributes?.temperature ?? st?.attributes?.target_temperature ?? st?.attributes?.target_temp);
          if (Number.isFinite(cur) && Math.abs(cur - desired) < 0.049) { this._lastApplied[__eid] = { min: nowMin, temp: desired }; continue; }
          this._hass.callService('climate','set_temperature', { entity_id: eid, temperature: desired });
          this._lastApplied[__eid] = { min: nowMin, temp: desired };
        } catch {}
      }
    } catch {}
  }

  _entityHasBoundaryNow(row, nowMin){
    try {
      let blocks = row.blocks||[];
      if (this._config?.weekdays_enabled && row.weekly){ const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || []; }
      // Allow a 1-minute grace window because we intentionally schedule the
      // timer a tiny bit after the exact boundary to avoid races. Otherwise we
      // might miss the equality check and skip applying at the boundary.
      const prev = ((nowMin - 1) % 1440 + 1440) % 1440;
      for (const b of (blocks||[])){
        const s = Number(b.startMin), e = Number(b.endMin);
        if (Number.isFinite(s) && (s === nowMin || s === prev)) return true;
        if (Number.isFinite(e) && (e === nowMin || e === prev)) return true;
      }
    } catch {}
    return false;
  }

  // ---------- UI ----------
  _init() {
    this.shadowRoot.innerHTML = `
      <meta charset="UTF-8">
      <style>
        :host { display:block; }
    .card{ --pad-x:16px; background: var(--card-background-color); color: var(--primary-text-color); border-radius: var(--ha-card-border-radius, 12px); box-shadow: var(--ha-card-box-shadow, none); overflow:hidden }
  .header{display:grid;align-items:center;grid-template-columns: 1fr auto 1fr;gap:.75rem;padding:12px var(--pad-x);border-bottom:1px solid var(--divider-color); position:relative}
  .title{display:flex; align-items:center; gap:8px; font-weight:600;font-size:1rem;color:var(--primary-text-color)}
  /* Right header area aligns content to far right */
  .header .spacer{display:flex; justify-content:flex-end;}
  /* Absolute wrapper to ensure pause stays top-right regardless of center label */
  .header .pause-wrap{ position:absolute; right: var(--pad-x); top: 50%; transform: translateY(-50%); display:flex; align-items:center; gap:8px; }
  .header .pause-wrap .pause-eta{ font-size:.82rem; color: var(--primary-text-color); min-width:58px; text-align:center; padding:2px 8px; border:1px solid var(--divider-color); border-radius:999px; background: var(--secondary-background-color, rgba(0,0,0,.05)); }
  .weekday-full{ display:flex; align-items:center; justify-content:center; gap:8px; text-align:center; font-weight:700; font-size:1.15rem; color:var(--primary-text-color)}
  .profile-pill{ font-weight:600; font-size:.85rem; padding:2px 8px; border-radius:999px; border:1px solid var(--divider-color); background: var(--secondary-background-color, rgba(0,0,0,.05)); color: var(--primary-text-color); }
  .profile-pill.success{ background: var(--success-color, #2e7d32); color:#fff; border-color: var(--success-color, #2e7d32); }
  .scale{position:relative;padding:8px var(--pad-x);z-index:0;margin-bottom:6px;border-bottom:1px solid var(--divider-color)}
        .scale-inner{position:relative;height:48px;display:block}
        .rows{padding:0 var(--pad-x);position:relative}
        .tick{position:absolute;width:0}
        .tick.full{top:6px;bottom:8px;border-left:1px solid var(--divider-color)}
        .tick.short{top:22px;bottom:8px;border-left:1px solid var(--divider-color);opacity:1}
        .tick label{position:absolute;bottom:14px;left:50%;transform:translate(-50%,0);user-select:none;font-weight:500;font-size:.75rem;color:var(--secondary-text-color)}
  .tick label .t-main{display:block; line-height:1;}
  .tick label .mer{display:block; line-height:1; font-size:.65rem; text-align:center;}
        .row{border-bottom:1px solid var(--divider-color)}
        .row-head{display:flex;align-items:center;justify-content:space-between;padding:8px 0;background:transparent}
        .row-head .meta{display:flex;align-items:center;gap:.5rem;font-size:.8rem;color:var(--secondary-text-color)}
        .row-head input[type=number]{width:64px;padding:4px 6px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color);font-size:.8rem}
  /* Normalize button heights inside row header to avoid vertical shift */
  .row-head .btn{ display:inline-flex; align-items:center; height:32px; box-sizing:border-box; white-space: nowrap; }
  /* Collapsible tools on each row (Add/Copy/Weekdays) */
        .row-head .toolbar { display:flex; align-items:center; gap:6px; }
        /* Smooth slide container */
        .row-head .tools-wrap { display:flex; align-items:center; gap:6px; overflow:hidden; max-width:0; opacity:.0; transform: translateX(6px); white-space: nowrap;
          transition: max-width .35s cubic-bezier(.25,.8,.25,1), opacity .28s ease, transform .35s cubic-bezier(.25,.8,.25,1); will-change: max-width, opacity, transform; }
        .row-head .toolbar.open .tools-wrap { max-width:1000px; opacity:1; transform: translateX(0); }
  /* Per-button slide + fade for a more fluid feel (no scale to avoid vertical jump) */
  .row-head .tools-wrap > .btn { opacity:0; transform: translateX(12px); transition: transform .28s ease, opacity .28s ease; will-change: transform, opacity; flex: 0 0 auto; white-space: nowrap; }
  .row-head .toolbar.open .tools-wrap > .btn { opacity:1; transform: translateX(0); }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .row-head .tools-wrap, .row-head .tools-wrap > .btn { transition: none; }
        }
        .row-head .tools-toggle {
    width:24px; height:24px; border-radius:999px; box-sizing:border-box;
    border:1px solid var(--divider-color);
    background: var(--card-background-color); color: var(--primary-text-color);
    display:inline-flex; align-items:center; justify-content:center; cursor:pointer;
    font-size:14px; font-weight:700; line-height:1;
    transition: background-color .2s ease, border-color .2s ease, color .2s ease;
  }
  .row-head .tools-toggle ha-icon{ --mdc-icon-size: 14px; }
  /* Closed = primary (same blue as Add block) */
  .row-head .toolbar:not(.open) .tools-toggle { background: var(--primary-color); border-color: var(--primary-color); color: var(--text-primary-color, #fff); }
  /* Open = danger/red */
  .row-head .toolbar.open .tools-toggle { background: var(--error-color); border-color: var(--error-color); color: var(--text-primary-color, #fff); }
  /* Remove blue ring on click/focus */
  .row-head .tools-toggle:focus, .row-head .tools-toggle:focus-visible, .row-head .tools-toggle:active {
    outline:none; box-shadow:none;
  }
  /* Current temperature bubble */
  .sensor-bubble{ display:inline-flex; align-items:center; gap:6px; margin-left:8px; padding:2px 8px; border:1px solid var(--divider-color); border-radius:999px; background: var(--secondary-background-color, rgba(0,0,0,.05)); color: var(--primary-text-color); font-size:.78rem; }
    .btn{cursor:pointer;border:1px solid var(--divider-color);border-radius:10px;padding:6px 10px;font-size:.8rem;background:var(--card-background-color);color:var(--primary-text-color)}
  /* Make row toolbar buttons a bit lower than default */
  .row-head .btn{ padding:4px 10px; border-radius:8px; font-size:.78rem; }
        .btn.primary{background:var(--primary-color);color:var(--text-primary-color, #fff);border-color:var(--primary-color)}
    .btn.success{background:var(--success-color, #2e7d32);color:#fff;border-color:var(--success-color, #2e7d32)}
    .btn.danger{background:var(--error-color);color:var(--text-primary-color, #fff);border-color:var(--error-color)}
        .btn.ghost{background:var(--card-background-color);color:var(--primary-text-color)}
  .btn[disabled]{ opacity:.5; cursor:not-allowed }
        .track{position:relative;height:var(--row-height,64px);user-select:none;background:transparent}
        .block{position:absolute;top:6px;bottom:6px;border:1px solid var(--divider-color);border-radius:10px;background:var(--secondary-background-color, rgba(0,0,0,.05));display:flex;align-items:center;gap:10px;padding:0 10px;cursor:pointer;box-sizing:border-box}
        .block.active{outline:2px solid var(--primary-color)}
        .pill{font-size:.78rem;padding:2px 8px;border-radius:999px;border:1px solid var(--divider-color);background:var(--secondary-background-color, rgba(0,0,0,.05));color:inherit;white-space:nowrap}
  .now{position:absolute;top:var(--now-extend-top,-76px);bottom:0;width:2px;background:var(--primary-color);opacity:.9;z-index:1;pointer-events:none}
        .now-top{position:absolute;top:6px;bottom:6px;width:3px;background:var(--primary-color);border-radius:2px;z-index:40;pointer-events:none}
        .footer{height:28px;position:relative;border-top:1px solid var(--divider-color)}
        .label-end{position:absolute;left:var(--pad-x);right:var(--pad-x);top:4px;display:flex;justify-content:space-between;font-size:.7rem;color:var(--secondary-text-color)}
    .overlay{position:fixed;inset:0;display:none;place-items:center;background:rgba(0,0,0,.32);z-index:2147483000}
        .overlay.open{display:grid}

  /* Ensure modal content is always above any card decorations/lines */
  .overlay .modal{ position: relative; z-index:2147483001; }
  .overlay .modal .week-scale,
  .overlay .modal .week-track{ position:relative; z-index:2147483002; }

  .modal{width:min(80vw,320px);max-width:320px;border-radius:8px;padding:10px;background:var(--card-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color)}
  /* Wider modal when 12h editor controls (AM/PM) are shown */
  .modal.modal-12h{ width: min(92vw, 400px); max-width: 400px; }
  /* Wider weekday editor */
  .modal-week{ width: min(95vw, 640px); max-width: 640px; position: relative; }
  .modal-week .week-head{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin:0 0 6px; }
  .modal-week .week-room{ font-weight:600; color: var(--primary-text-color); opacity:.9; }
  /* Indent scale and track so ticks/blocks are not against the edge */
  .modal-week .week-scale{ margin: 0 16px; }
  .modal-week .week-track{ margin: 0 16px; }
  /* Weekday tabs */
  .modal-week .week-tabs{ display:flex; gap:8px; flex-wrap:wrap; border-bottom: 1px solid var(--divider-color); padding-bottom:4px; }
  .modal-week .wk-tab{ appearance:none; border:none; background:transparent; color: var(--secondary-text-color); cursor:pointer; padding:6px 10px; border-bottom:2px solid transparent; border-radius:0; font-weight:600; }
  .modal-week .wk-tab.active{ color: var(--primary-text-color); border-bottom-color: var(--primary-color); }
  .modal-week .wk-actions{ display:flex; gap:8px; align-items:center; }
  /* Copy to rooms modal */
  .modal-copyrooms{ width:min(92vw,420px); max-width:420px; }
  .copyrooms-list{ max-height: 260px; overflow:auto; border:1px solid var(--divider-color); border-radius:8px; padding:6px; display:grid; gap:6px; }
  .copyrooms-list label{ display:flex; align-items:center; gap:8px; }
  /* Onboarding modal */
  .modal-onboard{ width:min(96vw,820px); max-width:820px; }
  .ob-hero{ position:relative; width:100%; height:auto; max-height:60vh; border:1px dashed var(--divider-color); border-radius:10px; display:grid; place-items:center; overflow:hidden; background: var(--secondary-background-color, transparent); }
  .ob-hero img, .ob-hero video{ display:block; width:100%; height:auto; max-height:100%; object-fit:contain; }
  .ob-text{ margin-top:8px; font-size:.95rem; color: var(--primary-text-color); }
  .ob-steps{ display:flex; gap:6px; justify-content:center; margin-top:6px; }
  .ob-steps .dot{ width:8px; height:8px; border-radius:50%; background: var(--divider-color); }
  .ob-steps .dot.active{ background: var(--primary-color); }
  /* Inline tooltip for weekly blocks */
  .wk-tooltip{ position:absolute; z-index:2147483003; pointer-events:none; padding:6px 8px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); font-size:.85rem; box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0,0,0,.2)); }
  /* While any overlay is open, hide underlying timeline elements to avoid bleed-through lines from the editor */
  .card.overlay-open .scale,
  .card.overlay-open .rows,
  .card.overlay-open .footer { visibility: hidden; }
  .card.overlay-open .now { display: none !important; }
  /* Hide temp pill inside weekly preview blocks for cleaner look */
  .modal-week .week-track .block .pill{ display:none; }
  .modal-week .week-scale-inner .mer{ display:block; font-size:.65rem; color: var(--secondary-text-color); text-align:center; }
        .modal h3{margin:0 0 10px;font-size:1rem}
  .grid{display:grid;grid-template-columns:max-content max-content;column-gap:15px;row-gap:8px}
  /* Add a bit of inner padding so right time input isn't hugging the edge */
  .modal .grid{padding:0 4px}
        .grid>div{display:grid;gap:6px;align-items:start}
  .grid .time-inline{display:flex;flex-direction:row;align-items:center;gap:2px}
  .grid .time-inline label{margin:0 4px 0 0; width:auto; flex:0 0 auto; white-space:nowrap}
  /* Keep 'To' compact but readable */
  .grid .time-right label{margin:0 4px 0 0; width:auto; flex:0 0 auto}
  .grid .time-inline input[type=time]{flex:0 0 96px;min-width:96px;max-width:96px;box-sizing:border-box;border:1px solid var(--divider-color);border-radius:8px;background: var(--card-background-color);color: var(--primary-text-color);height:28px;padding:2px 6px}
  .grid .time-inline select.mer-select{flex:0 0 60px;min-width:60px;max-width:60px;height:28px;padding:2px 6px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}
  .grid>div.time-right{justify-content:flex-start;padding-right:0}
  /* Temperature input: compact and rounded */
  .grid .rowfull .ed-temp { width: 140px; height:28px; padding:2px 6px; box-sizing:border-box; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); }
      
        /* remove button */
  .remove-btn { flex-shrink: 0; padding:4px 8px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--error-color); display:inline-flex; align-items:center; gap:6px; cursor:pointer; user-select:none; }
  /* Make disabled state clearly visible on remove-style buttons */
  .remove-btn[disabled] { opacity: .55; cursor: not-allowed; filter: grayscale(60%); color: var(--disabled-text-color, var(--secondary-text-color)) !important; border-color: var(--divider-color) !important; pointer-events: none; }
  .remove-btn[disabled] ha-icon { filter: grayscale(100%); opacity: .7; }
  .remove-btn[disabled] span { color: var(--disabled-text-color, var(--secondary-text-color)); }
        
  .actions { display:flex; gap:8px; justify-content:flex-end; align-items:center; }
  /* Give modal action buttons some space from inputs */
  .modal .actions { margin-top: 10px; }
        .order-btn {
          display:inline-flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:8px;
          border:1px solid var(--divider-color);
          background: var(--card-background-color);
          cursor:pointer; user-select:none;
        }
        .order-btn[disabled] { opacity: .5; cursor: not-allowed; }
        
        /* Drag & drop */
        .drag-handle {
          display:inline-flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:8px;
          border:1px dashed var(--divider-color);
          background: var(--card-background-color);
          cursor: grab; user-select:none;
        }
        .drag-handle:active { cursor: grabbing; }
        .inline.drag-over { outline: 2px dashed var(--primary-color); outline-offset: 2px; }
        
        /* Pointer-driven drag */
        .drag-ghost {
          position: fixed;
          pointer-events: none;
          opacity: .9;
          z-index: 9999;
        }
        .placeholder { border:2px dashed var(--primary-color); border-radius:10px; margin:6px 0; }
        
        /* Merge chips */
        .linked-chips { display:flex; flex-wrap:wrap; gap:6px; }
        .pill-chip { display:inline-flex; align-items:center; gap:6px; padding:2px 8px; border:1px solid var(--divider-color); border-radius:999px; background: var(--secondary-background-color, transparent); color: var(--primary-text-color); }
        .pill-chip .rm { cursor:pointer; border:none; background:transparent; color: var(--error-color); font-weight:700; line-height:1; padding:0 2px; }
        .pill-chip .rm:focus { outline: 2px solid var(--primary-color); outline-offset:2px; }
        /* Hide all popups and popup-trigger buttons when card has .hide-popups */
  .card.hide-popups .overlay,
  .card.hide-popups .overlay-week,
  .card.hide-popups .overlay-profiles,
  .card.hide-popups .overlay-copyrooms,
  .card.hide-popups .overlay-onboard { display: none !important; }
  .card.hide-popups [data-role="addbtn"],
  .card.hide-popups [data-role="weekbtn"],
  .card.hide-popups [data-role="profbtn"] { display: none !important; }
  /* Global pause button */
  .pause-btn { width:26px; height:26px; border-radius:999px; border:1px solid var(--primary-color); background: var(--primary-color); color: var(--text-primary-color, #fff); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; }
  .pause-btn.paused { background: var(--error-color); color: var(--text-primary-color, #fff); border-color: var(--error-color); }
  .pause-btn ha-icon{ --mdc-icon-size: 16px; }
  .profiles-btn { height:26px; border-radius:999px; border:1px solid var(--primary-color); background: var(--card-background-color); color: var(--primary-text-color); padding:0 10px; display:inline-flex; align-items:center; gap:6px; cursor:pointer; }
  .profiles-btn.primary{ background: var(--primary-color); color: var(--text-primary-color, #fff); }
  .prof-toolbar .btn ha-icon{ --mdc-icon-size: 16px; }
  .prof-toolbar .btn.primary{ background: var(--primary-color) !important; color: var(--text-primary-color, #fff) !important; border-color: var(--primary-color) !important; }
        .modal-pause{ width:min(86vw, 320px); max-width:320px; border-radius:8px; padding:10px; background: var(--card-background-color); color: var(--primary-text-color); border:1px solid var(--divider-color); }
        .pause-list{ display:grid; gap:8px; }
  /* Profiles modal */
  /* Stack controls above preview to give them more space; match Weekly modal width */
  /* Make tooltip positions relative to the profiles modal */
  .modal-profiles, .modal-holiday{ width:min(95vw, 640px); max-width: 640px; border-radius:8px; padding:10px; background: var(--card-background-color); color: var(--primary-text-color); border:1px solid var(--divider-color); position: relative; }
  .prof-head{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin:0 0 6px; }
  .prof-body{ display:grid; grid-template-columns: 1fr; gap:12px; align-items:start; }
  .prof-controls{ display:grid; gap:8px; }
  .prof-list{ display:grid; gap:6px; border:1px solid var(--divider-color); border-radius:8px; padding:6px; max-height:260px; overflow:auto; background: var(--secondary-background-color, transparent); }
  .prof-item{ display:grid; grid-template-columns: 1fr auto; align-items:center; gap:6px; padding:4px 6px; border-radius:8px; }
  .prof-item.active{ background: var(--secondary-background-color, rgba(0,0,0,.05)); }
  .prof-chip{ display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border:1px solid var(--divider-color); border-radius:999px; background: var(--card-background-color); color: var(--primary-text-color); font-weight:600; }
  .prof-chip:focus, .prof-chip:focus-visible{ outline: none; box-shadow: none; }
  .prof-actions{ display:flex; gap:6px; align-items:center; }
  .prof-actions .btn{ height:28px; padding:2px 8px; border-radius:8px; font-size:.78rem; }
  /* Make profiles and holidays preview identical to weekday preview */
  .modal-profiles .week-scale, .modal-holiday .week-scale{ margin: 0 16px; }
  /* Hide the "Add profile" button – profiles are created on Save */
  .modal-profiles .prof-add{ display:none !important; }
  .modal-profiles .week-track, .modal-holiday .week-track{ margin: 0 16px; position:relative; height:64px; border:1px dashed var(--divider-color); border-radius:10px; overflow:hidden; }
  .modal-profiles .week-track .block .pill{ display:none; }
  .modal-profiles .week-scale-inner .mer, .modal-holiday .week-scale-inner .mer{ display:block; font-size:.65rem; color: var(--secondary-text-color); text-align:center; }
  /* Sync pill next to title */
  .sync-pill { margin-left: 8px; display:inline-flex; align-items:center; gap:6px; }
  .sync-pill.ghost { background: var(--secondary-background-color, transparent); color: var(--secondary-text-color); border-color: var(--divider-color); }
  .sync-pill.primary { background: var(--primary-color); color: var(--text-primary-color, #fff); border-color: var(--primary-color); }
  .sync-pill.success { background: color-mix(in oklab, #2e7d32 20%, var(--card-background-color)); color: var(--primary-text-color); border-color: color-mix(in oklab, #2e7d32 50%, var(--divider-color)); }
  .sync-pill ha-icon { --mdc-icon-size: 16px; }
        </style>
      <ha-card class="card">
  <div class="header"><div class="title"></div><div class="weekday-full" style="display:none;"></div><div class="spacer"></div></div>
        <div class="scale"><div class="scale-inner"></div></div>
        <div class="rows"></div>
  <div class="footer"><div class="label-end"><span class="lbl-start">00:00</span><span class="lbl-end">00:00</span></div></div>
        <div class="overlay" part="overlay">
          <div class="modal" role="dialog" aria-modal="true" aria-label="Redigér blok">
            <h3>Redigér blok</h3>
            <div class="grid">
              <div class="time-inline"><label>Fra</label><input class="ed-from" type="time" step="60" /><select class="mer-select ed-from-mer" style="display:none;"><option>AM</option><option>PM</option></select></div>
              <div class="time-inline time-right"><label>Til</label><input class="ed-to" type="time" step="60" /><select class="mer-select ed-to-mer" style="display:none;"><option>AM</option><option>PM</option></select></div>
              <div class="rowfull"><label>Temperatur (°C)</label><input class="ed-temp" type="number" step="0.5" min="0" max="50" /></div>
            </div>
            <div class="ed-error" role="alert" aria-live="assertive" style="color:var(--error-color); display:none; margin-top:8px; font-size:.95rem;"></div>
            <div class="actions"><button class="btn ghost danger ed-delete" type="button">Slet</button><button class="btn ghost ed-cancel" type="button">Annullér</button><button class="btn primary ed-save" type="button">Gem</button></div>
          </div>
        </div>
        <div class="overlay overlay-week" part="overlay">
          <div class="modal modal-week" role="dialog" aria-modal="true" aria-label="Ugedage">
            <div class="week-head"><h3 class="week-title">Ugedags-tidsplan</h3><div class="week-room"></div></div>
            <div style="display:grid; gap:10px;">
              <div style="display:grid; gap:4px;">
                <label style="font-size:.85rem; color: var(--secondary-text-color);" class="week-mode-label">Mode</label>
                <select class="week-mode" style="padding:6px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
                  <option value="weekday_weekend">Weekdays same, weekend same (2)</option>
                  <option value="weekday_sat_sun">Weekdays + Saturday + Sunday (3)</option>
                  <option value="all_7">All days (7)</option>
                </select>
              </div>
              <div class="week-tabs" role="tablist"></div>
              <div class="week-toolbar" style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div class="week-note" style="font-size:.85rem; color: var(--secondary-text-color);"></div>
                <div class="wk-actions"></div>
              </div>
              <div class="week-pastebar" style="display:none; padding:2px 0; gap:6px; flex-wrap:wrap;"></div>
              <div class="week-scale" style="position:relative; height:32px;">
                <div class="week-scale-inner" style="position:relative; height:100%;"></div>
              </div>
              <div class="week-track" style="position:relative; height:64px; border:1px dashed var(--divider-color); border-radius:10px; overflow:hidden;"></div>
              <div style="display:flex; gap:8px; justify-content:flex-end;">
                <button class="btn ghost wk-cancel" type="button">Annullér</button>
                <button class="btn primary wk-save" type="button">Gem</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Copy entire week to other rooms -->
        <!-- Profiles (named daily schedules per room) -->
        <div class="overlay overlay-profiles" part="overlay">
          <div class="modal modal-profiles" role="dialog" aria-modal="true">
            <div class="prof-head">
              <h3 class="prof-title">Profiles</h3>
              <div class="prof-room" style="opacity:.9;"></div>
            </div>
            <div class="prof-body">
              <div class="prof-controls" style="display:grid; gap:8px;">
                <div class="prof-list"></div>
                <button type="button" class="add-entity-btn prof-add"><ha-icon icon="mdi:plus"></ha-icon><span>Add profile</span></button>
              </div>
              <div style="display:grid; gap:8px; align-items:start;">
                <div class="prof-roomtabs" role="tablist" style="display:flex; gap:8px; flex-wrap:wrap;"></div>
                <div class="prof-note" style="font-size:.85rem; color: var(--secondary-text-color);"></div>
                <div class="week-scale" style="position:relative; height:32px;">
                  <div class="week-scale-inner" style="position:relative; height:100%;"></div>
                </div>
                <div class="week-track" style="position:relative;"></div>
                <div style="display:flex; gap:8px; justify-content:flex-end;">
                  <button class="btn primary prof-save" type="button">Gem</button>
                  <button class="btn ghost prof-close" type="button">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Holidays (single daily schedule per room) -->
        <div class="overlay overlay-holiday" part="overlay">
          <div class="modal modal-holiday" role="dialog" aria-modal="true">
            <div class="prof-head">
              <h3 class="holiday-title">Holidays</h3>
              <div class="holiday-room" style="opacity:.9;"></div>
            </div>
            <div style="display:grid; gap:8px; align-items:start;">
              <div class="holiday-roomtabs" role="tablist" style="display:flex; gap:8px; flex-wrap:wrap;"></div>
              <div class="holiday-note" style="font-size:.85rem; color: var(--secondary-text-color);"></div>
              <div class="week-scale" style="position:relative; height:32px;">
                <div class="week-scale-inner" style="position:relative; height:100%;"></div>
              </div>
              <div class="week-track" style="position:relative;"></div>
              <div style="display:flex; gap:8px; justify-content:flex-end;">
                <button class="btn primary holiday-save" type="button">Gem</button>
                <button class="btn ghost holiday-close" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Copy entire week to other rooms -->
        <div class="overlay overlay-copyrooms" part="overlay">
          <div class="modal modal-copyrooms" role="dialog" aria-modal="true">
            <h3 class="copyrooms-title">Copy week to rooms</h3>
            <div class="copyrooms-desc" style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:6px;"></div>
            <div class="copyrooms-list"></div>
            <div class="actions" style="margin-top:10px; display:flex; justify-content:flex-end; gap:8px;">
              <button class="btn ghost copyrooms-cancel" type="button">Cancel</button>
              <button class="btn primary copyrooms-apply" type="button">Apply</button>
            </div>
          </div>
        </div>
        <!-- First-time onboarding -->
        <div class="overlay overlay-onboard" part="overlay">
          <div class="modal modal-onboard" role="dialog" aria-modal="true">
            <h3 class="onb-title">Welcome</h3>
            <div class="ob-hero">
              <img class="onb-img" alt="guide" style="display:none;" />
              <video class="onb-vid" muted playsinline loop style="display:none;"></video>
            </div>
            <div class="ob-text onb-text"></div>
            <div class="ob-steps onb-dots"></div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-top:10px; gap:8px;">
              <label style="display:flex; align-items:center; gap:6px; font-size:.85rem; color: var(--secondary-text-color);"><input type="checkbox" class="onb-hide" /> <span class="onb-hide-lbl">Don't show again</span></label>
              <div class="actions" style="display:flex; gap:8px;">
                <button class="btn ghost onb-prev" type="button">Back</button>
                <button class="btn ghost onb-skip" type="button">Skip</button>
                <button class="btn primary onb-next" type="button">Next</button>
                <button class="btn primary onb-done" type="button" style="display:none;">Done</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Pause auto-apply -->
        <div class="overlay overlay-pause" part="overlay">
          <div class="modal modal-pause" role="dialog" aria-modal="true">
            <h3 class="pause-title">Auto apply</h3>
            <div class="pause-status" style="font-size:.9rem; color: var(--secondary-text-color); margin-bottom:6px;"></div>
            <div class="pause-list">
              <button type="button" class="btn ghost pause-1h">1h</button>
              <button type="button" class="btn ghost pause-5h">5h</button>
              <button type="button" class="btn ghost pause-custom">Custom…</button>
              <button type="button" class="btn ghost pause-indef">Pause until resume</button>
              <button type="button" class="btn success pause-resume">Resume</button>
              <button type="button" class="btn danger pause-close">Close</button>
            </div>
          </div>
        </div>
      </ha-card>`;    this._applyCardI18n();

    // Apply hide-popups class if requested
    try { const card = this.shadowRoot.querySelector('ha-card'); if (this._disablePopups && card) card.classList.add('hide-popups'); } catch {}


    this._ensureSchedules();
    this._startUiTimer();
    // Show onboarding for first-time users (disabled while popups are turned off)
    try { if (!this._disablePopups) this._maybeOpenOnboard(); } catch {}

    // Wire pause overlay actions
    try {
      const ov = this.shadowRoot.querySelector('.overlay-pause');
      const b1 = this.shadowRoot.querySelector('.pause-1h');
      const b5 = this.shadowRoot.querySelector('.pause-5h');
      const bc = this.shadowRoot.querySelector('.pause-custom');
      const bi = this.shadowRoot.querySelector('.pause-indef');
      const br = this.shadowRoot.querySelector('.pause-resume');
      const bx = this.shadowRoot.querySelector('.pause-close');
      b1?.addEventListener('click', ()=>{ this._setPauseForMinutes(60); });
      b5?.addEventListener('click', ()=>{ this._setPauseForMinutes(300); });
      bc?.addEventListener('click', ()=>{
        try {
          const txt = prompt(this._t('pause.off_custom') + ' (minutes):', '60');
          const m = Number(txt);
          if (Number.isFinite(m) && m > 0) this._setPauseForMinutes(m);
        } catch {}
      });
      bi?.addEventListener('click', ()=>{ this._setPauseIndef(); });
      br?.addEventListener('click', ()=>{ this._resumeNow(); });
      bx?.addEventListener('click', ()=>{ try { ov?.classList.remove('open'); } catch {} });
    } catch {}
  }

  _renderPauseStatus(){
    try {
      const st = this.shadowRoot && this.shadowRoot.querySelector('.pause-status');
      if (!st) return;
      if (!this._isPaused()) { st.textContent = ''; return; }
      if (this._pauseIndef) { st.textContent = this._t('pause.active_indef'); return; }
      const until = new Date(Number(this._pauseUntilMs||0));
      // Format time according to card preference
      const hh = until.getHours(), mm = until.getMinutes();
      let label;
      if (this._config?.time_12h) {
        const am = hh < 12; let h = hh % 12; if (h===0) h=12;
        label = `${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')} ${am?'AM':'PM'}`;
      } else {
        label = `${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;
      }
      const msgTmpl = this._t('pause.active_until');
      st.textContent = (msgTmpl || 'Paused until {time}').replace('{time}', label);
    } catch {}
  }

  // --- Sync countdown helpers (delayed sync UI) ---
  _formatSyncCountdown(){
    try {
      const leftMs = Math.max(0, Number(this._storeDelayDue||0) - Date.now());
      const s = Math.ceil(leftMs/1000);
      const mm = Math.floor(s/60), ss = s%60;
      return `${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
    } catch { return '00:00'; }
  }
  _startSyncTimer(){
    if (this._syncTimer) return;
    try { this._syncTimer = setInterval(()=>{ try { if (!this._inlineEditing && !this._editing) this._render(); } catch {} }, 1000); } catch {}
  }
  _stopSyncTimer(){ try { if (this._syncTimer) clearInterval(this._syncTimer); } catch {} this._syncTimer = null; }

  // Persist/restore delayed sync due time across hard refresh
  _syncDueKey(){ try { const eid = this._config?.storage_entity || 'default'; return `tt_sync_due:${eid}`; } catch { return 'tt_sync_due:default'; } }
  _draftKey(){ try { const eid = this._config?.storage_entity || 'default'; return `tt_sync_draft:${eid}`; } catch { return 'tt_sync_draft:default'; } }
  _persistDraftNow(){ try { localStorage.setItem(this._draftKey(), JSON.stringify({ ts: Date.now(), schedules: this._schedules })); } catch {} }
  _tryRestoreDraftRecent(maxAgeMs=15*60*1000){ try { const raw = localStorage.getItem(this._draftKey()) || ''; if (!raw) return false; const parsed = JSON.parse(raw); const ts = Number(parsed?.ts); if (!Number.isFinite(ts) || (Date.now()-ts) > maxAgeMs) return false; const sch = parsed?.schedules && parsed.schedules.schedules ? parsed.schedules.schedules : (parsed?.schedules || parsed || {}); if (sch && typeof sch === 'object') { this._schedules = sch; this._ensureSchedules(); return true; } } catch {} return false; }
  _restoreSyncDue(){
    try {
      if (!this._config?.storage_enabled || this._config?.storage_sync_mode !== 'delay') return;
      // Prefer value from storage (already read in _loadStore); fallback to localStorage
      if (Number.isFinite(this._storeDelayDue) && this._storeDelayDue > Date.now()) {
        // Restore any recent local draft so UI shows latest edits
        try { this._tryRestoreDraftRecent(); } catch {}
        const remaining = Math.max(500, this._storeDelayDue - Date.now());
        if (this._storeDelayTimer) { try { clearTimeout(this._storeDelayTimer); } catch {} }
        this._storeDelayTimer = setTimeout(()=>{ this._storeDelayTimer = null; this._writeStoreNow(); }, remaining);
        this._startSyncTimer();
        return;
      }
      const key = this._syncDueKey();
      const raw = localStorage.getItem(key) || '';
      const due = Number(raw);
      if (!Number.isFinite(due)) return;
      if (due <= Date.now()) { try { localStorage.removeItem(key); } catch {} return; }
      // Restore recent draft too
      try { this._tryRestoreDraftRecent(); } catch {}
      this._storeDelayDue = due;
      const remaining = Math.max(500, due - Date.now());
      if (this._storeDelayTimer) { try { clearTimeout(this._storeDelayTimer); } catch {} }
      this._storeDelayTimer = setTimeout(()=>{ this._storeDelayTimer = null; this._writeStoreNow(); }, remaining);
      this._startSyncTimer();
    } catch {}
  }

  async _writeStoreNow(){
    if (!this._storageAvailable()) return;
    this._saving = true;
    const key = this._syncDueKey();
    try {
      if (this._config?.storage_enabled) {
        await this._hass.callService("thermostat_timeline", "set_store", { schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, time_source: this._config.time_source, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, apply_on_edit: !!this._config.apply_on_edit, backup_auto_enabled: !!this._config.backup_auto_enabled, backup_interval_days: Number(this._config.backup_interval_days||1), profiles_enabled: !!this._config.profiles_enabled, global_profile: this._globalProfile || null, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0), holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(this._config.storage_sync_min||0) } });
      } else {
        await this._hass.callService("thermostat_timeline", "set_store", { settings: { auto_apply_enabled: false, apply_on_edit: !!this._config.apply_on_edit, profiles_enabled: !!this._config.profiles_enabled, global_profile: this._globalProfile || null, show_pause_button: !!(this._config.show_pause_button ?? true), pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0), holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [] } });
      }
    }
    catch (e) { console.error("thermostat-timeline: save failed", e); }
    finally {
      setTimeout(() => {
        this._saving = false;
        this._syncJustUntil = Date.now() + 2500;
        this._storeDelayDue = 0;
        try { localStorage.removeItem(key); } catch {}
        this._startSyncTimer();
        this._render();
      }, 600);
    }
  }

  _setPauseForMinutes(mins){
    try {
      const ms = Math.max(1, Math.round(Number(mins)||0)) * 60000;
      this._pauseIndef = false;
      this._pauseUntilMs = Date.now() + ms;
      // Persist to storage/local
      this._debouncedSaveStore();
      this._render();
      this._renderPauseStatus();
      // Reschedule apply/resume
      this._scheduleNextApply();
      // Notify backend immediately when shared storage is on
      try { if (this._config?.storage_enabled) this._saveStore(); } catch {}
      // Close overlay
      try { this.shadowRoot.querySelector('.overlay-pause')?.classList.remove('open'); } catch {}
    } catch {}
  }

  _setPauseIndef(){
    try {
      this._pauseIndef = true; this._pauseUntilMs = 0;
      this._debouncedSaveStore();
      this._render();
      this._renderPauseStatus();
      this._scheduleNextApply();
      try { if (this._config?.storage_enabled) this._saveStore(); } catch {}
      try { this.shadowRoot.querySelector('.overlay-pause')?.classList.remove('open'); } catch {}
    } catch {}
  }

  _resumeNow(){
    try {
      this._pauseIndef = false; this._pauseUntilMs = 0;
      this._debouncedSaveStore();
      this._render();
      this._scheduleNextApply();
      // Apply immediately to match plan "now"
      this._applyCurrentSetpoints(true);
      try { if (this._config?.storage_enabled) this._saveStore(); } catch {}
      try { this.shadowRoot.querySelector('.overlay-pause')?.classList.remove('open'); } catch {}
    } catch {}
  }

  // If the editor asked to open the Holiday modal after the user pressed Save,
  // read the flag from localStorage and open once, then clear the flag.
  _maybeOpenDeferredHoliday(){
    try {
      const flag = localStorage.getItem('tt_defer_holiday_open');
      if (flag === '1') {
        localStorage.removeItem('tt_defer_holiday_open');
        const first = (this._config?.entities||[])[0] || null;
        this._openHolidayEditor(first);
      }
    } catch {}
  }

  _ensureSchedules() {
    for (const eid of this._config.entities) {
      if (!this._schedules[eid]) this._schedules[eid] = { defaultTemp: this._config.default_temp, blocks: [] };
      // Always maintain structures so state is preserved if toggles are flipped later
      this._ensureProfilesStruct(this._schedules[eid]);
      this._ensureHolidayStruct(this._schedules[eid]);
      if (this._config?.weekdays_enabled) this._ensureWeeklyStruct(this._schedules[eid]);
    }
  }

  _startUiTimer() {
    if (this._uiTimer) clearInterval(this._uiTimer);
    this._uiTimer = setInterval(() => { if (!this._inlineEditing && !this._editing) this._render(); }, this._config.now_update_ms);
  }

  _startStoreWatchTimer(){
    try { if (this._storeWatchTimer) clearInterval(this._storeWatchTimer); } catch {}
    const ms = Math.max(800, Number(this._storeWatchMs||0) || 1200);
    this._storeWatchTimer = setInterval(()=>{
      try {
        const eid = this._config?.storage_entity; if (!eid) return;
        const st = this._hass?.states?.[eid]; if (!st) return;
        const ver = Number(st.state || 0);
        const s = st.attributes?.settings || {};
        const newGP = (typeof s.global_profile === 'string' && s.global_profile) ? String(s.global_profile) : null;
        const newPE = typeof s.profiles_enabled === 'boolean' ? !!s.profiles_enabled : this._config?.profiles_enabled;
        let changed = false;
        if (newGP !== this._globalProfile) { this._globalProfile = newGP; changed = true; }
        if (newPE !== this._config.profiles_enabled) { this._config.profiles_enabled = newPE; changed = true; }
        if (changed) {
          try {
            for (const id of (this._config?.entities||[])){
              const r = this._schedules[id]; if (!r) continue; this._ensureProfilesStruct(r);
              if (!this._globalProfile) { r.activeProfile = null; continue; }
              r.activeProfile = (r.profiles && r.profiles[this._globalProfile]) ? this._globalProfile : null;
            }
          } catch {}
          if (!this._inlineEditing && !this._editing) this._render();
          this._scheduleNextApply();
        }
        if (this._config?.storage_enabled && !this._saving && !Number.isNaN(ver) && ver !== this._lastVersion){
          this._lastVersion = ver;
          this._loadStore(true).then(()=>{ this._ensureSchedules(); if (!this._inlineEditing && !this._editing) this._render(); this._scheduleNextApply(); });
        }
      } catch {}
    }, ms);
  }

  _render() {
    const qs = (s) => this.shadowRoot.querySelector(s);
  const titleEl = qs('.title');
  const dayFull = qs('.weekday-full');
  const rowsEl = qs('.rows');
  const scaleEl = qs('.scale-inner');
  const headerEl = qs('.header');
    if (!rowsEl || !scaleEl || !titleEl) return;

    // Determine first active profile (if any) for header pill
    let _activeProfileName = null;
    try {
      if (this._config?.profiles_enabled) {
        for (const eid of (this._config?.entities || [])) {
          const row = this._schedules?.[eid];
          if (!row) continue;
          this._ensureProfilesStruct(row);
          const ap = row.activeProfile || null;
          if (ap) { _activeProfileName = String(ap); break; }
        }
      }
    } catch {}

    {
      const isDef = (txt)=>{
        try {
          const s = String(txt || '').trim();
          for (const k of Object.keys(TT_I18N || {})){
            const v = TT_I18N[k] && TT_I18N[k]['card.title_default'];
            if (v && String(v).trim() === s) return true;
          }
        } catch {}
        return false;
      };
      const shown = (!this._config.title || isDef(this._config.title)) ? this._t('card.title_default') : this._config.title;
      titleEl.innerHTML = '';
      const tspan = document.createElement('span'); tspan.className = 'title-text'; tspan.textContent = shown; titleEl.append(tspan);
      // Sync countdown/dots (left side, next to title)
      try {
        // Render only when shared storage enabled
        const useDelay = !!(this._config?.storage_enabled) && (this._config?.storage_sync_mode === 'delay');
        const due = Number(this._storeDelayDue||0);
        const justDone = Number(this._syncJustUntil||0) > Date.now();
        const running = !!this._saving;
        if (useDelay && (running || justDone || (due > Date.now()))) {
          const pill = document.createElement('span');
          pill.className = 'profile-pill sync-pill';
          const icon = document.createElement('ha-icon');
          const txt = document.createElement('span');
          txt.style.marginLeft = '6px';
          if (running) {
            icon.setAttribute('icon','mdi:sync');
            pill.classList.add('primary');
            txt.textContent = 'Igangværende sync…';
          } else if (justDone) {
            icon.setAttribute('icon','mdi:check-circle-outline');
            pill.classList.add('success');
            txt.textContent = 'Sync gennemført';
          } else {
            icon.setAttribute('icon','mdi:timer-outline');
            pill.classList.add('ghost');
            txt.textContent = this._formatSyncCountdown();
            this._startSyncTimer();
          }
          pill.append(icon, txt);
          titleEl.append(pill);
          if (!running && !justDone && !(due> Date.now())) this._stopSyncTimer();
        } else {
          this._stopSyncTimer();
        }
      } catch {}
      if (_activeProfileName) {
        const p = document.createElement('span'); p.className = 'profile-pill success'; const prefix = this._t('profiles.active_label') || 'Manual profile active:'; p.textContent = `${prefix} ${_activeProfileName}`; titleEl.append(p);
      }
    }
    // (Profile pill moved next to title; weekday center shows only day name now)
    // Center header: show current weekday name when weekday mode is enabled
    try {
      if (dayFull) {
        let label = '';
        // Prefer a Holiday label if holidays are active
        try { if (this._isHolidayActive && this._isHolidayActive()) { label = this._t('holidays.button') || 'Holidays'; } } catch {}
        if (!label && this._config?.weekdays_enabled) {
          // Localized full weekday, e.g., "Mandag"
          label = this._todayFullName();
        }
        if (label) {
          dayFull.textContent = label;
          dayFull.style.display = '';
        } else {
          dayFull.textContent = '';
          dayFull.style.display = 'none';
        }
      }
    } catch {}

    // Scale ticks
    scaleEl.innerHTML = '';
    const compact = this._isCompactScale();
    for (let i = 0; i <= 24; i++) {
      if (compact && i % 2 !== 0) continue;
      const t = document.createElement('div');
      t.className = 'tick ' + (i % 2 === 0 ? 'full' : 'short');
      t.style.left = `${(i / 24) * 100}%`;
      if (i % 2 === 0 || !compact) {
        const l = document.createElement('label');
        if (this._config?.time_12h){
          const p = this._timeParts(i===24?0:i*60);
          l.innerHTML = `<span class="t-main">${p.main}</span><span class="mer">${p.mer||''}</span>`;
        } else {
          l.textContent = (i === 24) ? this._label(0) : this._label(i*60);
        }
        t.append(l);
      }
      scaleEl.append(t);
    }

    // Rows
    rowsEl.innerHTML = '';
    // Right header tools: global pause toggle (absolute top-right)
    try {
      if (headerEl) {
        let wrap = headerEl.querySelector('.pause-wrap');
        if (!wrap) { wrap = document.createElement('div'); wrap.className = 'pause-wrap'; headerEl.append(wrap); }
        wrap.innerHTML = '';
        if (this._config?.show_pause_button ?? true) {
          const btn = document.createElement('button');
          btn.className = 'pause-btn' + (this._isPaused() ? ' paused' : '');
          btn.setAttribute('title', this._isPaused() ? this._t('pause.active_indef') : this._t('pause.menu_title'));
          btn.innerHTML = '<ha-icon icon="mdi:pause"></ha-icon>';
          btn.addEventListener('click', ()=>{
            try {
              const ov = this.shadowRoot && this.shadowRoot.querySelector('.overlay-pause');
              if (ov) ov.classList.add('open');
              this._renderPauseStatus();
            } catch {}
          });
          // Build optional bubble to the left
          const paused = this._isPaused();
          const until = Number(this._pauseUntilMs||0);
          const showCountdown = paused && !this._pauseIndef && until > Date.now();
          if (paused) {
            const eta = document.createElement('span'); eta.className = 'pause-eta';
            eta.textContent = showCountdown ? this._formatPauseCountdown() : (this._t('pause.off_indef'));
            wrap.append(eta);
            wrap.append(btn);
            if (showCountdown) this._startCountdownTimer();
            else if (this._countdownTimer) { try { clearInterval(this._countdownTimer); } catch {} this._countdownTimer = null; }
          } else {
            wrap.append(btn);
            if (this._countdownTimer) { try { clearInterval(this._countdownTimer); } catch {} this._countdownTimer = null; }
          }
        }
  // Global Profiles button next to pause (visible only when manual schedule/profiles are enabled)
  const wantProfilesBtn = !!(this._config?.profiles_enabled || this._getLocalProfilesEnabled());
  if ((this._config?.entities || []).length && wantProfilesBtn) {
          const pbtn = document.createElement('button');
          // Make the Profiles ("Skemaer") button blue like the other primary actions
          pbtn.className = 'profiles-btn primary';
          pbtn.setAttribute('type','button');
          pbtn.textContent = this._t('profiles.button');
          try { pbtn.dataset.role = 'profbtn-header'; } catch {}
          pbtn.addEventListener('click', ()=>{
            const first = (this._config?.entities||[])[0] || null;
            if (first) this._openProfilesEditor(first);
            else this._openProfilesEditor(this._config?.entities?.[0] || null);
          });
          wrap.append(pbtn);
          // Holidays button removed from header (requested hidden). Holiday editor can still be opened via
          // a custom event `tt-open-holiday` if needed, but no visible button is rendered here.
          try {
            /* intentionally no-op to hide Holidays button */
          } catch {}
        }
      }
    } catch {}
    const nowMin = this._getNowMin();
    const nowPct = (nowMin / 1440) * 100;
    const showTop = this._config.show_top_now;
    const extendPx = this._config.now_extend_px;
    for (const eid of this._config.entities) {
  const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
      const rowEl = document.createElement('div');
      rowEl.className = 'row';
      const head = document.createElement('div');
      head.className = 'row-head';
  const meta = document.createElement('div');
  meta.className = 'meta';
  const name = document.createElement('span');
      // Brug brugerdefineret label hvis sat i config.labels, ellers fallback til friendly_name/_prettyName
      const customLabel = (this._config.labels && this._config.labels[eid]) ? this._config.labels[eid] : null;
      name.textContent = customLabel || this._prettyName(eid);
      meta.append(name);
      // inline default temperature input removed from timeline to keep UI clean
      // Current room temperature bubble: show climate.current_temperature
      // If room is merged with additional thermostats, show the average temperature
      try {
        const wantF = this._isF();
        const group = [eid, ...(this._config?.merges?.[eid] || [])];
        const vals = [];
        const haU = String(this._hass?.config?.unit_system?.temperature || '').toUpperCase();
        const haIsF = haU.includes('F');
        for (const g of group) {
          const stg = this._hass?.states?.[g];
          const curg = Number(stg?.attributes?.current_temperature);
          if (!Number.isFinite(curg)) continue;
          let c = curg;
          if (haIsF && !wantF) c = (c - 32) * 5/9; // F -> C
          if (!haIsF && wantF) c = (c * 9/5) + 32; // C -> F
          vals.push(c);
        }
        if (vals.length) {
          const avg = vals.reduce((a,b)=>a+b,0) / vals.length;
          const sb = document.createElement('span');
          sb.className = 'sensor-bubble';
          sb.textContent = `${this._t('ui.current_temp')} ${String(Math.round(avg * 10) / 10)} ${this._unitSymbol()}`;
          meta.append(sb);
        }
      } catch {}
      // (manual indicator removed)
      head.append(meta);
  // Collapsible toolbar: tools slide out from a small arrow button
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar' + (this._toolsOpen[eid] ? ' open' : '');
  // Keep header height stable regardless of open/closed
  toolbar.style.minHeight = '32px';
  const toolsWrap = document.createElement('div');
  toolsWrap.className = 'tools-wrap';
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'tools-toggle';
  toggleBtn.type = 'button';
  toggleBtn.setAttribute('aria-label', 'Toggle actions');
  toggleBtn.textContent = this._toolsOpen[eid] ? '✕' : '❮';
      toggleBtn.addEventListener('click', () => {
        const bar = toggleBtn.parentElement;
        const wrap = toolsWrap;
        const willOpen = !this._toolsOpen[eid];
        this._toolsOpen[eid] = willOpen;
        if (willOpen) {
          // prepare then expand
          try { wrap.style.maxWidth = '0px'; } catch {}
          bar && bar.classList.add('open');
          toggleBtn.textContent = '✕';
          requestAnimationFrame(() => {
            try { const w = wrap.scrollWidth || 0; wrap.style.maxWidth = (w + 2) + 'px'; } catch {}
          });
        } else {
          // freeze width then collapse
          try { const w = wrap.scrollWidth || 0; wrap.style.maxWidth = (w + 2) + 'px'; } catch {}
          bar && bar.classList.remove('open');
          toggleBtn.textContent = '❮';
          requestAnimationFrame(() => { try { wrap.style.maxWidth = '0px'; } catch {} });
        }
      });
      // (resume schedule button removed)
  const addBtn = document.createElement('button');
      addBtn.className = 'btn primary';
      addBtn.textContent = '+ ' + this._t('ui.add_block');
  try { addBtn.dataset.role = 'addbtn'; if (this._disablePopups) addBtn.style.display = 'none'; } catch {}
      addBtn.addEventListener('click', () => {
        // If weekdays are enabled, open the block editor directly for today's weekly plan
        try {
          const row = this._schedules[eid];
          if (this._config?.weekdays_enabled && row) {
            // Ensure weekly structures exist
            this._ensureWeeklyStruct(row);
            const mode = row.weekly?.mode || this._config?.weekdays_mode || 'weekday_weekend';
            const today = this._todayKey();
            const isWeekday = ['mon','tue','wed','thu','fri'].includes(today);
            let sel = today;
            if (mode === 'weekday_weekend') sel = isWeekday ? 'weekdays' : 'weekend';
            else if (mode === 'weekday_sat_sun') sel = isWeekday ? 'weekdays' : today; // sat/sun
            // Prepare an in-memory weekly draft without opening the weekdays popup
            try {
              const src = row.weekly_modes?.[mode]?.days || {};
              const names = this._weekdayNames();
              const draftDays = JSON.parse(JSON.stringify(src));
              for (const k of names){ if (!Array.isArray(draftDays[k])) draftDays[k] = []; }
              this._weeklyDraft = { mode, days: draftDays };
            } catch {
              this._weeklyDraft = JSON.parse(JSON.stringify(row.weekly));
            }
            this._weeklyEntity = eid;
            this._weeklyDayKey = sel;
            this._autoSaveWeeklyFromTimeline = true;
            const now = this._getNowMin();
            this._openWeeklyBlockEditor(null, now);
            return;
          }
        } catch {}
        // Fallback: non-weekly add
        this._openNewEditor(eid);
      });
  toolsWrap.append(addBtn);
      // Copy/Paste schedule button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'btn ghost';
      const applyCopyStyle = (mode)=>{
        // mode: 'copy' | 'paste' | 'cancel'
        copyBtn.className = 'btn';
        if (mode === 'copy') copyBtn.classList.add('ghost');
        if (mode === 'paste') copyBtn.classList.add('success');
        if (mode === 'cancel') copyBtn.classList.add('danger');
      };
      const updateCopyBtn = ()=>{
        if (!this._copyFrom) { copyBtn.textContent = this._t('ui.copy_plan'); applyCopyStyle('copy'); }
        else if (this._copyFrom === eid) { copyBtn.textContent = this._t('ui.cancel'); applyCopyStyle('cancel'); }
        else { copyBtn.textContent = this._t('ui.paste_plan'); applyCopyStyle('paste'); }
      };
      updateCopyBtn();
      copyBtn.addEventListener('click', async () => {
        // Cancel on source row
        if (this._copyFrom && this._copyFrom === eid) {
          this._copyFrom = null; this._copyPayload = null; this._render(); return;
        }
        // Paste into this row when copy active
        if (this._copyFrom && this._copyPayload) {
          const before = this._desiredNowSnapshot();
          const src = this._copyPayload;
          try {
            const tgt = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
            // Deep copy
            const clone = JSON.parse(JSON.stringify(src));
            tgt.defaultTemp = Number.isFinite(clone.defaultTemp) ? clone.defaultTemp : (tgt.defaultTemp || this._config.default_temp);
            tgt.blocks = Array.isArray(clone.blocks) ? clone.blocks.map(b=>({ ...b, id: Math.random().toString(36).slice(2,9) })) : [];
            // Weekday structures (keep modes if present)
            if (clone.weekly) tgt.weekly = JSON.parse(JSON.stringify(clone.weekly));
            if (clone.weekly_modes) tgt.weekly_modes = JSON.parse(JSON.stringify(clone.weekly_modes));
            this._schedules[eid] = tgt;
            await this._saveStore();
            this._render();
            if (this._config.apply_on_edit) await this._applyIfDesiredChanged(before);
            this._scheduleNextApply();
          } catch(e){ console.warn('paste schedule failed', e); }
          return;
        }
        // Start copy from this row
        try {
          const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
          const payload = { defaultTemp: row.defaultTemp, blocks: (row.blocks||[]).map(b=>({ startMin:b.startMin, endMin:b.endMin, temp:b.temp })), weekly: row.weekly ? JSON.parse(JSON.stringify(row.weekly)) : undefined, weekly_modes: row.weekly_modes ? JSON.parse(JSON.stringify(row.weekly_modes)) : undefined };
          this._copyFrom = eid; this._copyPayload = payload;
          this._render();
        } catch(e){ console.warn('copy schedule failed', e); }
      });
  toolsWrap.append(copyBtn);
      if (this._config?.weekdays_enabled) {
        const weekBtn = document.createElement('button');
        weekBtn.className = 'btn ghost';
        weekBtn.textContent = this._t('week.button');
        try { weekBtn.dataset.role = 'weekbtn'; if (this._disablePopups) weekBtn.style.display = 'none'; } catch {}
        weekBtn.addEventListener('click', () => this._openWeeklyEditor(eid));
        toolsWrap.append(weekBtn);
      }
      // Row-level Manual schedule button removed – profiles button now lives in the header only
      try { /* intentionally no-op */ } catch {}
      // (Profiles button moved to header)
      toolbar.append(toolsWrap, toggleBtn);
      // Ensure correct initial width for open state without rerendering
      try {
        if (this._toolsOpen[eid]) {
          requestAnimationFrame(() => { try { toolsWrap.style.maxWidth = (toolsWrap.scrollWidth + 2) + 'px'; } catch {} });
        } else {
          toolsWrap.style.maxWidth = '0px';
        }
      } catch {}
      head.append(toolbar);
      rowEl.append(head);
      const track = document.createElement('div');
      track.className = 'track';
      track.style.setProperty('--row-height', `${this._config.row_height}px`);
  // Use today's blocks if weekdays enabled
  const dayKey = this._todayKey();
  this._ensureHolidayStruct(row);
  let showBlocks = (row.blocks || []);
  try {
    if (this._isHolidayActive() && row?.holiday?.blocks?.length) {
      showBlocks = row.holiday.blocks || [];
    } else if (this._config?.profiles_enabled) {
      this._ensureProfilesStruct(row);
      const ap = row.activeProfile;
      if (ap && row.profiles && Array.isArray(row.profiles[ap]?.blocks)) {
        showBlocks = row.profiles[ap].blocks || [];
      } else if (this._config?.weekdays_enabled) {
        showBlocks = this._getBlocksForDay(row, dayKey) || [];
      }
    } else if (this._config?.weekdays_enabled) {
      showBlocks = this._getBlocksForDay(row, dayKey) || [];
    }
  } catch {}
  for (const b of showBlocks) {
        const pctStart = (b.startMin / 1440) * 100;
        const pctWidth = ((b.endMin - b.startMin) / 1440) * 100;
        const bl = document.createElement('div');
        bl.className = 'block';
        bl.style.left = `${pctStart}%`;
        bl.style.width = `${pctWidth}%`;
    try {
          const clr = this._colorFor(eid, b.temp);
          if (clr) {
            bl.style.background = clr;
            bl.style.borderColor = clr;
            const txt = this._contrastTextColor(clr);
            if (txt) bl.style.color = txt;
          }
        } catch {}
        if (this._active?.entity === eid && this._active?.id === b.id) bl.classList.add('active');
  // Time will be shown in a hover tooltip (like the weekdays popup). Do not render time pill here.
        const pillTemp = document.createElement('span');
        pillTemp.className = 'pill';
  pillTemp.textContent = `${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
        bl.append(pillTemp);
        // If we colored the block, soften pill background so the color is visible
        try {
          const bg = bl.style.background || '';
          if (bg) {
            const pills = [pillTemp];
            const txt = bl.style.color || this._contrastTextColor(bg) || '';
            const pillBg = txt === '#ffffff' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.06)';
            const pillBo = txt === '#ffffff' ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.12)';
            for (const p of pills){ p.style.background = pillBg; p.style.borderColor = pillBo; }
          }
        } catch {}
        track.append(bl);

        // Ensure a tooltip element exists for main timeline (reuse weekly style)
        try {
          let tooltip = this.shadowRoot.querySelector('.wk-tooltip.main');
          const rowsEl = this.shadowRoot.querySelector('.rows');
          const modalHost = rowsEl || this.shadowRoot.querySelector('ha-card');
          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'wk-tooltip main';
            tooltip.style.display = 'none';
            // append to rows so positioning is relative to timeline
            if (modalHost) modalHost.append(tooltip);
          }
          const showTip = () => {
            const txt = `${this._label(b.startMin)} - ${this._label(b.endMin)} • ${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
            if (!tooltip) return;
            // Cancel any pending hide
            try { if (tooltip._hideTimer) { clearTimeout(tooltip._hideTimer); tooltip._hideTimer = null; } } catch {}
            // Do not show while editor popup is open
            try {
              const ov = this.shadowRoot.querySelector('.overlay');
              if (this._editing || (ov && ov.classList.contains('open'))) return;
            } catch {}
            tooltip.textContent = txt;
            const box = bl.getBoundingClientRect();
            const cont = (modalHost && modalHost.getBoundingClientRect) ? modalHost.getBoundingClientRect() : { left: 0, top: 0 };
            const left = box.left + box.width / 2 - (cont.left || 0);
            const top = (box.top - (cont.top || 0)) - 8;
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.style.transform = 'translate(-50%,-100%)';
            tooltip.style.display = '';
          };
          const hideTip = () => {
            if (!tooltip) return;
            // On coarse pointers (tablet) keep tooltip a bit longer
            const delay = (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) ? 3000 : 120;
            try { if (tooltip._hideTimer) clearTimeout(tooltip._hideTimer); } catch {}
            tooltip._hideTimer = setTimeout(() => { try { tooltip.style.display = 'none'; tooltip._hideTimer = null; } catch {} }, delay);
          };
          bl.addEventListener('mouseenter', showTip);
          bl.addEventListener('mouseleave', hideTip);
        } catch (e) { /* ignore tooltip errors */ }
        
        // Open editor only on double interaction:
        // - Desktop: double-click
        // - Touch/iPad: double-tap within 350ms on the same block
        const openEditor = () => {
          // If a manual profile is active, edit that profile directly instead of weekdays
          try {
            if (this._config?.profiles_enabled) {
              this._ensureProfilesStruct(row);
              const ap = row?.activeProfile;
              if (ap && row?.profiles && Array.isArray(row.profiles[ap]?.blocks)) {
                // Configure profile context and open profile block editor
                this._profilesEntity = eid;
                this._profilesSelected = ap;
                this._profilesRoom = eid;
                this._autoSaveProfileFromTimeline = true;
                this._openProfileBlockEditor(b.id);
                return;
              }
            }
          } catch {}

          // Else if weekdays are enabled, edit inline (no weekday popup); auto‑save back to weekdays
          try {
            const rowHasWeekly = !!(this._config?.weekdays_enabled && row?.weekly);
            if (rowHasWeekly) {
              // Prepare an in‑memory weekly draft for the current mode
              this._ensureWeeklyStruct(row);
              const mode = row.weekly?.mode || this._config?.weekdays_mode || 'weekday_weekend';
              const today = dayKey; // computed earlier
              const isWeekday = ['mon','tue','wed','thu','fri'].includes(today);
              let sel = today;
              if (mode === 'weekday_weekend') sel = isWeekday ? 'weekdays' : 'weekend';
              else if (mode === 'weekday_sat_sun') sel = isWeekday ? 'weekdays' : today; // sat/sun
              // Build draft from the selected mode bucket
              try {
                const src = row.weekly_modes?.[mode]?.days || {};
                const names = this._weekdayNames();
                const draftDays = JSON.parse(JSON.stringify(src));
                for (const k of names){ if (!Array.isArray(draftDays[k])) draftDays[k] = []; }
                this._weeklyDraft = { mode, days: draftDays };
              } catch { this._weeklyDraft = JSON.parse(JSON.stringify(row.weekly)); }
              this._weeklyEntity = eid;
              this._weeklyDayKey = sel;
              this._autoSaveWeeklyFromTimeline = true;
              // Locate corresponding block in effective day using midpoint
              const eff = this._effectiveDayKey(sel);
              const mid = Math.floor((b.startMin + b.endMin) / 2);
              const effArr = (this._weeklyDraft?.days?.[eff] || []);
              let targetId = b.id;
              if (eff !== today) {
                const match = effArr.find(x => mid >= x.startMin && mid < x.endMin);
                targetId = match ? match.id : null;
              }
              if (targetId) this._openWeeklyBlockEditor(targetId);
              else this._openWeeklyBlockEditor(null, mid);
              return;
            }
          } catch {}
          // Fallback to normal (non-weekly/non-profile) editor
          this._openEditor(eid, b.id);
        };

        // Desktop/mouse
        bl.addEventListener('dblclick', (e) => {
          try { e.preventDefault(); e.stopPropagation(); } catch {}
          openEditor();
        });

        // Touch/iPad: detect double-tap
        bl.addEventListener('touchend', (e) => {
          const now = Date.now();
          const last = this._lastTap || { t: 0, target: null };
          if (last.target === bl && (now - last.t) < 350) {
            try { e.preventDefault(); e.stopPropagation(); } catch {}
            this._lastTap = { t: 0, target: null };
            openEditor();
          } else {
            this._lastTap = { t: now, target: bl };
            // Clear after timeout to avoid stale reference
            setTimeout(() => {
              if (this._lastTap && this._lastTap.target === bl && (Date.now() - this._lastTap.t) > 350) {
                this._lastTap = { t: 0, target: null };
              }
            }, 360);
          }
        }, { passive: false });
        // Note: single click/tap no longer opens the editor
       }
      // Single-line NOW: rely on .now with extend; remove extra top pin
      /* now-top removed */
      rowEl.append(track);
      rowsEl.append(rowEl);
    }
    
    // Single global NOW line across all rows
    {
      const nowEl = document.createElement('div');
      nowEl.className = 'now';
      // left will be set in pixels to account for row padding
      rowsEl.append(nowEl);

      const updateNowGeom = () => {
        try {
          const tracks = Array.from(this.shadowRoot.querySelectorAll('.track'));
          const rowsBox = rowsEl.getBoundingClientRect();
          // Vertical placement/height
          if (tracks.length) {
            const overhang = 12;
            const firstBox = tracks[0].getBoundingClientRect();
            const lastBox = tracks[tracks.length - 1].getBoundingClientRect();
            const top = Math.round(firstBox.top - rowsBox.top - overhang);
            const bottom = Math.round(lastBox.bottom - rowsBox.top);
            nowEl.style.top = top + 'px';
            nowEl.style.height = (bottom - top) + 'px';
          }
          // Horizontal left: respect rows padding so it matches .track coordinate system
          const cs = getComputedStyle(rowsEl);
          const pl = parseFloat(cs.paddingLeft || '0') || 0;
          const pr = parseFloat(cs.paddingRight || '0') || 0;
          const contentW = rowsEl.clientWidth - pl - pr;
          const leftPx = pl + (nowMin / 1440) * contentW;
          nowEl.style.left = leftPx + 'px';
        } catch {}
      };

      updateNowGeom();

      const ro = new ResizeObserver(() => {
        updateNowGeom();
      });
      try { ro.observe(rowsEl); } catch {}
    }

    // Update footer labels to reflect time format
    try {
      const s = this.shadowRoot.querySelector('.lbl-start');
      const e = this.shadowRoot.querySelector('.lbl-end');
      if (s) s.textContent = this._label(0);
      if (e) e.textContent = this._label(0);
    } catch {}

    // Editor modal events
    const overlay = qs('.overlay');
    const edSave = qs('.ed-save');
    const edCancel = qs('.ed-cancel');
    const edDelete = qs('.ed-delete');
    if (edSave) edSave.addEventListener('click', () => this._saveEditor());
    if (edCancel) edCancel.addEventListener('click', () => this._closeEditor());
  if (edDelete) edDelete.addEventListener('click', () => this._deleteFromEditor());
  // Do not close editor when clicking outside; require explicit buttons
  overlay.addEventListener('click', (e) => { if (e.target === overlay) { e.preventDefault(); e.stopPropagation(); } });
    // Week overlay events
    const wov = qs('.overlay-week');
    const wsave = qs('.wk-save');
    const wcancel = qs('.wk-cancel');
    if (wsave) wsave.addEventListener('click', () => this._weeklySaveAll());
  if (wcancel) wcancel.addEventListener('click', () => this._closeWeeklyEditor());
  // Do not close weekly editor on outside click either
  if (wov) wov.addEventListener('click', (e) => { if (e.target === wov) { e.preventDefault(); e.stopPropagation(); } });

    // Profiles overlay events
  const pov = qs('.overlay-profiles');
  const pclose = qs('.prof-close');
  const psave = qs('.prof-save');
  if (psave) psave.addEventListener('click', () => { this._profilesSave(); });
  if (pclose) pclose.addEventListener('click', () => { this._closeProfilesEditor(); this._render(); });
    if (pov) pov.addEventListener('click', (e) => {
      // Close profiles overlay when clicking outside the modal
      if (e.target === pov) { e.preventDefault(); this._closeProfilesEditor(); }
    });

    // Holidays overlay events
    const hov = qs('.overlay-holiday');
    const hsave = qs('.holiday-save');
    const hclose = qs('.holiday-close');
    if (hsave) hsave.addEventListener('click', () => this._holidaySave());
    if (hclose) hclose.addEventListener('click', () => { this._closeHolidayEditor(); this._render(); });
    if (hov) hov.addEventListener('click', (e)=>{ if (e.target === hov) { e.preventDefault(); this._closeHolidayEditor(); } });

    // Onboarding controls
    try {
      const next = qs('.onb-next');
      const prev = qs('.onb-prev');
      const skip = qs('.onb-skip');
      const done = qs('.onb-done');
      const ov = qs('.overlay-onboard');
      next && (next.onclick = ()=>{ this._onboardStep = Math.min(this._onboardSlides.length-1, this._onboardStep+1); this._renderOnboard(); });
      prev && (prev.onclick = ()=>{ this._onboardStep = Math.max(0, this._onboardStep-1); this._renderOnboard(); });
      skip && (skip.onclick = ()=>{ this._closeOnboard(true); });
      done && (done.onclick = ()=>{ this._closeOnboard(true); });
      ov && ov.addEventListener('click', (e)=>{ if (e.target === ov) { e.preventDefault(); e.stopPropagation(); } });
    } catch {}
  }

  // Allow editor to nudge a repaint explicitly
  devRefreshFromEditor(){
    try { this._ensureSchedules(); } catch {}
    try { if (!this._inlineEditing && !this._editing) this._render(); } catch {}
  }

  _openEditor(entity, blockId) {
    if (!blockId) return this._openNewEditor(entity);
    this._editing = { entity, blockId };
    // Hide any tooltips while editing
    try {
      const tips = this.shadowRoot.querySelectorAll('.wk-tooltip');
      tips.forEach(t => { try { if (t._hideTimer) clearTimeout(t._hideTimer); } catch {} t.style.display = 'none'; });
    } catch {}
    const row = this._schedules[entity];
    if (!row) return;
    const b = row.blocks.find(x => x.id === blockId);
    if (!b) return;
    const edTemp = this.shadowRoot.querySelector(".ed-temp");
    const edFrom = this.shadowRoot.querySelector(".ed-from");
  const edTo = this.shadowRoot.querySelector(".ed-to");
  const fromMer = this.shadowRoot.querySelector('.ed-from-mer');
  const toMer = this.shadowRoot.querySelector('.ed-to-mer');
    const overlay = this.shadowRoot.querySelector(".overlay");
    const title = this.shadowRoot.querySelector('.modal h3');
    const delBtn = this.shadowRoot.querySelector('.ed-delete');
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
    if (this._config?.time_12h) {
      if (edFrom) edFrom.value = this._toTimeInput12h(b.startMin);
      if (edTo) edTo.value = this._toTimeInput12h(b.endMin);
      if (fromMer) { fromMer.style.display=''; fromMer.value = (b.startMin>=720)?'PM':'AM'; }
      if (toMer) { toMer.style.display=''; toMer.value = (b.endMin>=720 && b.endMin<1440)?'PM':'AM'; }
    } else {
      if (edFrom) edFrom.value = this._toTimeInput(b.startMin);
      if (edTo) edTo.value = this._toTimeInput(b.endMin);
      if (fromMer) fromMer.style.display='none';
      if (toMer) toMer.style.display='none';
    }
    if (title) title.textContent = this._t('ui.edit_block');
    if (delBtn) delBtn.style.display = '';
    const err = this.shadowRoot.querySelector(".ed-error");
    if (err) { err.style.display = "none"; err.textContent = ""; }

  try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
  overlay.classList.add("open");
    try { this.shadowRoot.querySelector('ha-card')?.classList.add('overlay-open'); } catch {}
    try {
      const onKey = (ev) => { if (ev.key === 'Escape') { this._closeEditor(); } };
      window.addEventListener('keydown', onKey, { once: true });
    } catch {}
    // Improved keyboard navigation between time fields (two-step Tab in "Fra")
    try {
      const fromInput = this.shadowRoot.querySelector(".ed-from");
      const toInput = this.shadowRoot.querySelector(".ed-to");
      if (fromInput && toInput) {
        // Focus "Fra" on open for fast editing
        setTimeout(() => { try { fromInput.focus(); fromInput.select?.(); } catch {} }, 0);
        // Two-step Tab inside "Fra": hours -> minutes -> move to "Til"
        let fraStep = 0;
        fromInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            try {
              const val = fromInput.value || "";
              if (fraStep === 0) {
                if (fromInput.setSelectionRange) {
                  setTimeout(() => { try { fromInput.setSelectionRange(3, 5); } catch {} }, 0);
                }
                fraStep = 1;
              } else {
                fraStep = 0;
                toInput.focus();
                toInput.select?.();
              }
            } catch {
              if (fraStep == 0) { fraStep = 1; } else { fraStep = 0; toInput.focus(); toInput.select?.(); }
            }
          }
        });
        // Shift+Tab from Til -> Fra
        toInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            fraStep = 1;
            fromInput.focus();
            try { fromInput.setSelectionRange?.(3,5); } catch {}
          }
        });
        fromInput.addEventListener("input", () => { fraStep = 0; });
      }
    } catch {}

    try {
      const onKey = (ev) => { if (ev.key === 'Escape') { this._closeEditor(); } };
      window.addEventListener('keydown', onKey, { once: true });
    } catch {}
    // Improved keyboard navigation between time fields
    try {
      const fromInput = this.shadowRoot.querySelector(".ed-from");
      const toInput = this.shadowRoot.querySelector(".ed-to");
      if (fromInput && toInput) {
        // Focus "Fra" on open for fast editing
        setTimeout(() => { try { fromInput.focus(); fromInput.select?.(); } catch {} }, 0);
        // Tab from Fra -> Til (skip any intermediary focusable elements like clock icons)
        fromInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            toInput.focus();
            toInput.select?.();
          }
        });
        // Shift+Tab from Til -> Fra
        toInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            fromInput.focus();
            fromInput.select?.();
          }
        });
      }
    } catch {}

    try {
      const onKey = (ev) => { if (ev.key === 'Escape') { this._closeEditor(); } };
      // Add once to avoid stacking listeners across multiple opens
      window.addEventListener('keydown', onKey, { once: true });
    } catch {}

      // Also reflect the current option on the global select entity instantly
      try {
        const selOpt = (()=>{
          const all = this._hass?.states || {};
          for (const eid in all){
            if (!Object.prototype.hasOwnProperty.call(all, eid)) continue;
            if (!eid.startsWith('select.')) continue;
            const st = all[eid];
            const fn = String(st?.attributes?.friendly_name || '').toLowerCase();
            if (fn === 'thermostat profile' || fn.startsWith('thermostat profile')){
              return String(st?.state || '');
            }
          }
          return null;
        })();
        if (selOpt !== null) {
          const norm = (v)=>{ const s = String(v||'').trim(); return (s.toLowerCase()==='none' || s==='') ? null : s; };
          const want = norm(selOpt);
          const changed = want !== this._globalProfile;
          if (changed) {
            this._globalProfile = want;
            if (want) this._config.profiles_enabled = true;
            // Update local schedules so UI reflects change instantly (no save)
            try {
              for (const eid of (this._config?.entities || [])){
                const r = this._schedules[eid]; if (!r) continue; this._ensureProfilesStruct(r);
                if (!want) { r.activeProfile = null; continue; }
                const has = !!(r.profiles && r.profiles[want]);
                r.activeProfile = has ? want : null;
              }
            } catch {}
            if (!this._inlineEditing && !this._editing) this._render();
            this._scheduleNextApply();
            // Persist back to integration so sensor version updates immediately
            try { this._debouncedSaveStore(); } catch {}
          }
        }
      } catch {}

  }
  _closeEditor(){
    this._editing = null;
  this.shadowRoot.querySelector(".overlay")?.classList.remove("open");
  try { this.shadowRoot.querySelector('ha-card')?.classList.remove('overlay-open'); } catch {}
    // If we hid the weekday modal for editing, decide whether to restore it
    // Only restore when the edit was initiated from inside the weekdays popup.
    // If the edit was initiated from the main timeline (auto-save flow), do not reopen the weekdays popup.
    if (this._weeklyOverlayHiddenForEditor && this._weeklyDraft) {
      const cameFromTimeline = !!this._autoSaveWeeklyFromTimeline;
      this._weeklyOverlayHiddenForEditor = false;
      if (cameFromTimeline) {
        // Do not bounce back into weekdays popup on cancel; reset the auto-save flag and close weekly context
        this._autoSaveWeeklyFromTimeline = false;
        this._closeWeeklyEditor();
      } else {
        const wov = this.shadowRoot.querySelector('.overlay-week');
        if (wov) wov.classList.add('open');
        this._renderWeeklyModal();
      }
    }
    // If we hid the profiles modal for editing, restore it on close
    if (this._profilesOverlayHiddenForEditor && this._profilesOpen) {
      this._profilesOverlayHiddenForEditor = false;
      const pov = this.shadowRoot.querySelector('.overlay-profiles');
      if (pov) pov.classList.add('open');
      this._renderProfilesModal();
    }
    // If we hid the holiday modal for editing, restore it on close
    if (this._holidayOverlayHiddenForEditor && this._holidayOpen) {
      this._holidayOverlayHiddenForEditor = false;
      const hov = this.shadowRoot.querySelector('.overlay-holiday');
      if (hov) hov.classList.add('open');
      this._renderHolidayModal();
    }
  }

  async _deleteFromEditor(){ if (!this._editing) return; const { entity, blockId, weeklyDay, profileName }=this._editing; if (!blockId) { this._closeEditor(); return; }
    if (weeklyDay && this._weeklyDraft) {
      const arr = this._weeklyDraft.days?.[weeklyDay] || [];
      const idx = arr.findIndex(x=>x.id===blockId);
      if (idx>=0) arr.splice(idx,1);
      // If the weekly editor was opened implicitly from the main timeline,
      // do NOT bounce back into the weekdays popup on delete. Instead, auto-save
      // the weekly draft and return to the main timeline view.
      if (this._autoSaveWeeklyFromTimeline) {
        this._autoSaveWeeklyFromTimeline = false;
        // Persist weekly changes (propagate groups) and close the weekly overlay
        this._weeklySaveAll();
        // Ensure the block editor modal is closed
        this._closeEditor();
      } else {
        // Regular flow when user is inside the weekdays popup: update preview and stay there
        this._renderWeeklyModal();
        this._closeEditor();
      }
      return;
    }
    if (this._editing.holiday && this._holidayDraft && this._holidayDraft.rooms) {
      try {
        const eid = this._editing.entity;
        const arr = (this._holidayDraft.rooms||{})[eid] || [];
        const idx = arr.findIndex(x=>x.id===blockId);
        if (idx>=0) arr.splice(idx,1);
        (this._holidayDraft.rooms||{})[eid] = arr;
        this._render(); this._closeEditor(); this._renderHolidayModal();
      } catch { this._closeEditor(); }
      return;
    }
    if (profileName) {
      try {
        // Ensure draft exists and operate on the current room's draft blocks map
        const isNewProf = (profileName === '__new__');
        const curRoom = this._profilesRoom || this._profilesEntity || entity;
        if (!this._profilesDraft || (!isNewProf && this._profilesDraft.name !== profileName)) {
          const row = this._schedules[entity];
          const roomsMap = {};
          for (const e of (this._config?.entities||[])){
            const src = !isNewProf ? (this._schedules[e]?.profiles?.[profileName]?.blocks || []) : [];
            roomsMap[e] = JSON.parse(JSON.stringify(src));
          }
          this._profilesDraft = { name: (isNewProf? null : profileName), rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
        }
        const arr = (this._profilesDraft.rooms||{})[curRoom] || [];
        const idx = arr.findIndex(x=>x.id===blockId);
        if (idx>=0) arr.splice(idx,1);
        (this._profilesDraft.rooms||{})[curRoom] = arr;
        this._profilesDirty = true;
        // If deletion was initiated from the main timeline, persist immediately
        if (this._autoSaveProfileFromTimeline) {
          try { this._autoSaveProfileFromTimeline = false; await this._profilesSaveDraft(); } catch {}
        }
        this._render(); this._closeEditor(); if (this._profilesOpen) this._renderProfilesModal();
      } catch { this._closeEditor(); }
      return;
    }
    this._deleteBlock(entity, blockId); this._closeEditor(); }

  _openNewEditor(entity){ this._editing = { entity, blockId: null }; const row = this._schedules[entity]; if (!row) return; const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to"); const overlay = this.shadowRoot.querySelector(".overlay"); const now = this._getNowMin(); const start = this._clamp(Math.round(now), 0, 1380); const end = this._clamp(start + 60, start + 15, 1440); if (edTemp) edTemp.value = String(this._toDisplayTemp(row.defaultTemp ?? 20)); if (edFrom) edFrom.value = this._toTimeInput(start); if (edTo)   edTo.value   = this._toTimeInput(end); const title = this.shadowRoot.querySelector('.modal h3'); if (title) title.textContent = this._t('ui.add_block'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); if (delBtn) delBtn.style.display = 'none'; const err = this.shadowRoot.querySelector(".ed-error"); if (err) { err.style.display = "none"; err.textContent = ""; }
  /* popups visible: continue */
  // Hide any tooltips while editing
  try { const tips = this.shadowRoot.querySelectorAll('.wk-tooltip'); tips.forEach(t => { try { if (t._hideTimer) clearTimeout(t._hideTimer); } catch {} t.style.display='none'; }); } catch {}
  try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
  // Open after a frame to avoid half-rendered UI flash
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { overlay.classList.add('open'); })); } catch { overlay.classList.add('open'); }
  try { const fromMer = this.shadowRoot.querySelector('.ed-from-mer'); const toMer = this.shadowRoot.querySelector('.ed-to-mer'); if (this._config?.time_12h) { if (edFrom) edFrom.value = this._toTimeInput12h(start); if (edTo) edTo.value = this._toTimeInput12h(end); if (fromMer){ fromMer.style.display=''; fromMer.value = (start>=720)?'PM':'AM'; } if (toMer){ toMer.style.display=''; toMer.value = (end>=720 && end<1440)?'PM':'AM'; } } else { if (fromMer) fromMer.style.display='none'; if (toMer) toMer.style.display='none'; } } catch {}
  if (edTemp) { edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
    try {
      const onKey = (ev) => { if (ev.key === 'Escape') { this._closeEditor(); } };
      window.addEventListener('keydown', onKey, { once: true });
    } catch {}
    // Improved keyboard navigation between time fields (two-step Tab in "Fra")
    try {
      const fromInput = this.shadowRoot.querySelector(".ed-from");
      const toInput = this.shadowRoot.querySelector(".ed-to");
      if (fromInput && toInput) {
        // Focus "Fra" on open for fast editing
        setTimeout(() => { try { fromInput.focus(); fromInput.select?.(); } catch {} }, 0);
        // Two-step Tab inside "Fra": hours -> minutes -> move to "Til"
        let fraStep = 0;
        fromInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            try {
              const val = fromInput.value || "";
              if (fraStep === 0) {
                if (fromInput.setSelectionRange) {
                  setTimeout(() => { try { fromInput.setSelectionRange(3, 5); } catch {} }, 0);
                }
                fraStep = 1;
              } else {
                fraStep = 0;
                toInput.focus();
                toInput.select?.();
              }
            } catch {
              if (fraStep == 0) { fraStep = 1; } else { fraStep = 0; toInput.focus(); toInput.select?.(); }
            }
          }
        });
        // Shift+Tab from Til -> Fra
        toInput.addEventListener("keydown", (e) => {
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            fraStep = 1;
            fromInput.focus();
            try { fromInput.setSelectionRange?.(3,5); } catch {}
          }
        });
        fromInput.addEventListener("input", () => { fraStep = 0; });
      }
    } catch {}
 }

  // ---------- Weekdays modal ----------
  _openWeeklyEditor(entity){
    this._weeklyEntity = entity;
    const row = this._schedules[entity] || { defaultTemp: this._config.default_temp, blocks: [] };
    this._ensureWeeklyStruct(row);
    // Reset any pending cross-room copies for this editing session
    this._weeklyCopyTargets = [];
    // Deep copy as draft from the dataset for current mode
    try {
      const curMode = (row.weekly?.mode) || (this._config?.weekdays_mode) || 'weekday_weekend';
      const src = row.weekly_modes?.[curMode]?.days || {};
      const names = this._weekdayNames();
      const draftDays = JSON.parse(JSON.stringify(src));
      for (const k of names){ if (!Array.isArray(draftDays[k])) draftDays[k] = []; }
      this._weeklyDraft = { mode: curMode, days: draftDays };
    } catch {
      this._weeklyDraft = JSON.parse(JSON.stringify(row.weekly));
    }
    this._weeklyDayKey = this._todayKey();
    this._weeklyOpen = true;
  const ov = this.shadowRoot.querySelector('.overlay-week');
  // Mark overlaying first to hide background artifacts
  try { this.shadowRoot.querySelector('ha-card')?.classList.add('overlay-open'); } catch {}
  // Build the modal while hidden
  this._renderWeeklyModal();
  // Open after a paint
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { if (ov) ov.classList.add('open'); })); } catch { if (ov) ov.classList.add('open'); }
  }
  _closeWeeklyEditor(){ this._weeklyOpen = false; this._weeklyEntity = null; this._weeklyDraft = null; this._weeklyDayKey = null; this.shadowRoot.querySelector('.overlay-week')?.classList.remove('open'); try { this.shadowRoot.querySelector('ha-card')?.classList.remove('overlay-open'); } catch {} }
  _weeklySaveAll(){ try { if (!this._weeklyEntity || !this._weeklyDraft) { this._closeWeeklyEditor(); return; } const entity = this._weeklyEntity; const row = this._schedules[entity]; if (!row) { this._closeWeeklyEditor(); return; }
      // Normalize by mode: propagate grouped days within the selected mode only
      const mode = this._weeklyDraft.mode || 'weekday_weekend';
      const d = this._weeklyDraft.days || {};
      const applyGroup = (keys, srcKey)=>{ const src = JSON.parse(JSON.stringify(d[srcKey]||[])); for (const k of keys){ d[k] = JSON.parse(JSON.stringify(src)); } };
      if (mode === 'weekday_weekend') {
        applyGroup(['tue','wed','thu','fri'], 'mon');
        applyGroup(['sun'], 'sat');
      } else if (mode === 'weekday_sat_sun') {
        applyGroup(['tue','wed','thu','fri'], 'mon');
      } // all_7 -> keep individual
      this._ensureWeeklyStruct(row);
      // Save into mode bucket and set active weekly to this mode
      try { row.weekly_modes[mode] = { days: JSON.parse(JSON.stringify(d)) }; } catch { row.weekly_modes[mode] = { days: d }; }
      row.weekly = { mode, days: JSON.parse(JSON.stringify(d)) };
      this._schedules[entity] = row;
      // Also apply to any pending target rooms selected via "copy week to rooms"
      const targets = Array.isArray(this._weeklyCopyTargets) ? this._weeklyCopyTargets : [];
      if (targets.length) {
        for (const eid of targets){
          try {
            const trow = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
            this._ensureWeeklyStruct(trow);
            trow.weekly_modes[mode] = { days: JSON.parse(JSON.stringify(d)) };
            trow.weekly = { mode, days: JSON.parse(JSON.stringify(d)) };
            this._schedules[eid] = trow;
          } catch {}
        }
      }
      // Clear pending list after Save
      this._weeklyCopyTargets = [];
      const before = this._desiredNowSnapshot();
  try { this._persistDraftNow(); } catch {}
  this._saveStore();
  this._closeWeeklyEditor();
  this._render();
      if (this._config.apply_on_edit) this._applyIfDesiredChanged(before);
      this._scheduleNextApply();
    } catch(e){ console.warn('weekly save failed', e); this._closeWeeklyEditor(); }
  }
  _renderWeeklyModal(){ try {
  const modeSel = this.shadowRoot.querySelector('.week-mode');
  const titleEl = this.shadowRoot.querySelector('.week-title');
  const roomEl = this.shadowRoot.querySelector('.week-room');
    const note = this.shadowRoot.querySelector('.week-note');
    const tabsWrap = this.shadowRoot.querySelector('.week-tabs');
    const pasteBar = this.shadowRoot.querySelector('.week-pastebar');
    const actionsWrap = this.shadowRoot.querySelector('.wk-actions');
    const track = this.shadowRoot.querySelector('.week-track');
    const scale = this.shadowRoot.querySelector('.week-scale-inner');
    const modalWeek = this.shadowRoot.querySelector('.modal-week');
    if (!this._weeklyDraft || !tabsWrap || !track) return;
      // i18n
      if (titleEl) titleEl.textContent = this._t('week.editor.title');
      // Room name on the same header line
      try {
        if (roomEl) {
          const eid = this._weeklyEntity;
          let name = '';
          if (eid) {
            const custom = (this._config?.labels && this._config.labels[eid]) ? this._config.labels[eid] : null;
            name = custom || this._prettyName(eid);
          }
          roomEl.textContent = name || '';
        }
      } catch {}
      const modeLab = this.shadowRoot.querySelector('.week-mode-label');
      if (modeLab) modeLab.textContent = this._t('week.mode');
  if (note) note.textContent = this._t('week.editor.preview_note');
      if (modeSel) {
        modeSel.value = this._weeklyDraft.mode || 'weekday_weekend';
        // set option labels i18n
        for (const opt of Array.from(modeSel.options)){
          if (opt.value==='weekday_weekend') opt.textContent = this._t('week.mode.weekday_weekend');
          if (opt.value==='weekday_sat_sun') opt.textContent = this._t('week.mode.weekday_sat_sun');
          if (opt.value==='all_7') opt.textContent = this._t('week.mode.all_7');
        }
        modeSel.onchange = () => {
          const newMode = modeSel.value;
          this._weeklyDraft.mode = newMode;
          try {
            const row = this._schedules[this._weeklyEntity];
            this._ensureWeeklyStruct(row);
            const src = row.weekly_modes?.[newMode]?.days || {};
            const names = this._weekdayNames();
            const draftDays = JSON.parse(JSON.stringify(src));
            for (const k of names){ if (!Array.isArray(draftDays[k])) draftDays[k] = []; }
            this._weeklyDraft.days = draftDays;
          } catch {}
          this._renderWeeklyModal();
        };
      }
      // Copy/Paste day logic
      // Helper to resolve which real days are in a group for current mode
      const groupDaysForMode = (mode, key)=>{
        if (mode === 'weekday_weekend') {
          if (key==='weekdays') return ['mon','tue','wed','thu','fri'];
          if (key==='weekend') return ['sat','sun'];
        } else if (mode === 'weekday_sat_sun') {
          if (key==='weekdays') return ['mon','tue','wed','thu','fri'];
          if (key==='sat') return ['sat'];
          if (key==='sun') return ['sun'];
        } else if (mode === 'all_7') {
          return [key];
        }
        return [this._effectiveDayKey(key)];
      };
      // Build per-day action buttons (unique DOM per tab)
      const renderActions = () => {
        if (!actionsWrap) return;
        actionsWrap.innerHTML = '';
        const curGroup = this._weeklyDayKey || 'weekdays';
        const mode = this._weeklyDraft.mode || 'weekday_weekend';
        // Global action: copy entire week to other rooms
        const copyAllBtn = document.createElement('button');
        copyAllBtn.type = 'button';
        copyAllBtn.className = 'btn ghost wk-copyall';
        copyAllBtn.textContent = this._t('week.copy_to_rooms');
        copyAllBtn.onclick = (e)=>{ e.preventDefault(); this._openCopyWeekToRooms(); };
        actionsWrap.append(copyAllBtn);
        const itemsKeys = [];
        if (this._weeklyDraft.mode === 'weekday_weekend') itemsKeys.push('weekdays','weekend');
        else if (this._weeklyDraft.mode === 'weekday_sat_sun') itemsKeys.push('weekdays','sat','sun');
        else itemsKeys.push('mon','tue','wed','thu','fri','sat','sun');
        for (const key of itemsKeys){
          const box = document.createElement('div');
          box.style.display = key === curGroup ? 'flex' : 'none';
          box.style.gap = '8px';
          box.setAttribute('data-key', key);
          // Copy/Paste button (contextual)
          const cp = document.createElement('button');
          cp.type = 'button';
          cp.className = 'btn';
          const setCpStyle = (m)=>{ cp.className='btn'; if (m==='copy') cp.classList.add('ghost'); if (m==='paste') cp.classList.add('success'); };
          if (!this._weeklyCopyFromGroup) { cp.textContent = this._t('ui.copy_day'); setCpStyle('copy'); }
          else if (this._weeklyCopyFromGroup === key) { cp.textContent = this._t('ui.copy_day'); setCpStyle('copy'); }
          else { cp.textContent = this._t('ui.paste_day'); setCpStyle('paste'); }
          // Disable on source day while copy mode is active
          cp.disabled = !!this._weeklyCopyFromGroup && this._weeklyCopyFromGroup === key;
          cp.onclick = (ev)=>{
            ev.preventDefault(); ev.stopPropagation();
            if (cp.disabled) return;
            const modeNow = this._weeklyDraft.mode || 'weekday_weekend';
            if (!this._weeklyCopyFromGroup) {
              const gDays = groupDaysForMode(modeNow, key);
              const srcDay = (modeNow==='all_7') ? this._effectiveDayKey(key) : gDays[0];
              const arr = (this._weeklyDraft?.days?.[srcDay] || []);
              this._weeklyCopyFromGroup = key;
              this._weeklyCopyPayload = JSON.parse(JSON.stringify(arr));
              renderActions();
              return;
            }
            if (this._weeklyCopyFromGroup === key) {
              // Refresh payload from same source, stay in copy mode
              const gDays = groupDaysForMode(modeNow, key);
              const srcDay = (modeNow==='all_7') ? this._effectiveDayKey(key) : gDays[0];
              const arr = (this._weeklyDraft?.days?.[srcDay] || []);
              this._weeklyCopyPayload = JSON.parse(JSON.stringify(arr));
              return;
            }
            // Paste into this key
            try {
              const payload = Array.isArray(this._weeklyCopyPayload) ? this._weeklyCopyPayload.map(x=>({ ...x, id: Math.random().toString(36).slice(2,9) })) : [];
              const targets = (modeNow==='all_7') ? [this._effectiveDayKey(key)] : groupDaysForMode(modeNow, key);
              const daysClone = { ...(this._weeklyDraft.days || {}) };
              for (const dk of targets){
                const arr = payload.map(x=>({ ...x }));
                arr.sort((a,b)=>a.startMin-b.startMin||a.endMin-b.endMin);
                daysClone[dk] = arr;
              }
              this._weeklyDraft.days = daysClone;
              this._ensureWeeklyStruct(this._schedules[this._weeklyEntity] || { weekly:{} });
            } catch(e){ console.warn('weekly paste failed', e); }
            this._weeklyDayKey = key; this._renderWeeklyModal();
          };
          // Add block button (per day) — doubles as Cancel while in copy mode
          const add = document.createElement('button');
          add.type = 'button';
          const applyAddState = ()=>{
            const inCopy = !!this._weeklyCopyFromGroup;
            add.className = 'btn ' + (inCopy ? 'danger' : 'primary');
            add.textContent = inCopy ? this._t('ui.cancel') : ('+ ' + this._t('ui.add_block'));
          };
          applyAddState();
          add.onclick = ()=>{
            if (this._weeklyCopyFromGroup) {
              // Cancel copy mode
              this._weeklyCopyFromGroup = null; this._weeklyCopyPayload = null; renderActions();
            } else {
              this._weeklyDayKey = key; this._openWeeklyBlockEditor(null);
            }
          };
          box.append(cp, add);
          actionsWrap.append(box);
        }
      };
      renderActions();
      // Ensure pastebar stays hidden with the new contextual control
      try { const pb = this.shadowRoot.querySelector('.week-pastebar'); if (pb) { pb.style.display='none'; pb.innerHTML=''; } } catch{}
      // Paste target bar (always real days mon..sun). Visible only in copy mode
      if (pasteBar) {
        if (!this._weeklyCopyFrom) {
          pasteBar.style.display = 'none'; pasteBar.innerHTML = '';
        } else {
          pasteBar.style.display = 'flex'; pasteBar.innerHTML = '';
          const names = this._weekdayNames();
          for (const k of names){
            const btn = document.createElement('button'); btn.type='button';
            if (k === this._weeklyCopyFrom) {
              btn.className = 'btn danger'; btn.textContent = this._t('ui.cancel');
              btn.onclick = ()=>{ this._weeklyCopyFrom = null; this._weeklyCopyPayload = null; this._renderWeeklyModal(); };
            } else {
              btn.className = 'btn success';
              const lab = (this._t('week.days_full.'+k) || this._t('week.days.'+k) || k);
              btn.textContent = this._t('ui.paste_day') + ' ' + lab;
              btn.onclick = ()=>{
                try {
                  const payload = Array.isArray(this._weeklyCopyPayload) ? this._weeklyCopyPayload.map(x=>({ ...x, id: Math.random().toString(36).slice(2,9) })) : [];
                  this._weeklyDraft.days[k] = payload.sort((a,b)=>a.startMin-b.startMin||a.endMin-b.endMin);
                  this._renderWeeklyModal();
                } catch(e){ console.warn('paste day target failed', e); }
              };
            }
            pasteBar.append(btn);
          }
        }
      }
      // Build group/day tabs reflecting mode grouping
      tabsWrap.innerHTML = '';
      const editable = this._weeklyEditableKeys(this._weeklyDraft.mode);
      const items = [];
      if (this._weeklyDraft.mode === 'weekday_weekend') {
        items.push({key:'weekdays', label: (this._t('week.group.weekdays')||'Weekdays')});
        items.push({key:'weekend', label: (this._t('week.group.weekend')||'Weekend')});
      } else if (this._weeklyDraft.mode === 'weekday_sat_sun') {
        items.push({key:'weekdays', label: (this._t('week.group.weekdays')||'Weekdays')});
        items.push({key:'sat', label: this._t('week.days_full.sat') || this._t('week.days.sat')});
        items.push({key:'sun', label: this._t('week.days_full.sun') || this._t('week.days.sun')});
      } else { // all_7
        for (const k of this._weekdayNames()) items.push({key:k, label:(this._t('week.days_full.'+k) || this._t('week.days.'+k))});
      }
      if (!editable.includes(this._weeklyDayKey)) this._weeklyDayKey = editable[0] || 'weekdays';
      // Helper: group -> array of real day keys
  const groupDays2 = (mode, key)=>{
        if (mode === 'weekday_weekend') {
          if (key==='weekdays') return ['mon','tue','wed','thu','fri'];
          if (key==='weekend') return ['sat','sun'];
        } else if (mode === 'weekday_sat_sun') {
          if (key==='weekdays') return ['mon','tue','wed','thu','fri'];
          if (key==='sat') return ['sat'];
          if (key==='sun') return ['sun'];
        } else if (mode === 'all_7') {
          return [key];
        }
        return [this._effectiveDayKey(key)];
      };
      for (const it of items){
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'wk-tab' + (it.key === this._weeklyDayKey ? ' active' : '');
        tab.textContent = it.label;
        tab.addEventListener('click', ()=>{ this._weeklyDayKey = it.key; this._renderWeeklyModal(); });
        tabsWrap.append(tab);
      }
      // Rebuild actions so the visible set matches active tab
      renderActions();
      // Compact scale ticks (every 2 hours)
      if (scale) {
        scale.innerHTML = '';
        for (let i=0;i<=24;i+=2){
          const t = document.createElement('div');
          t.style.position='absolute';
          t.style.left = (i/24*100)+'%';
          t.style.top='4px'; t.style.bottom='4px';
          t.style.borderLeft='1px solid var(--divider-color)';
          const lab = document.createElement('div'); lab.style.position='absolute'; lab.style.top='-2px'; lab.style.transform='translate(-50%,0)'; lab.style.left='0'; lab.style.fontSize='.75rem'; lab.style.color='var(--secondary-text-color)';
          if (this._config?.time_12h){ const p=this._timeParts(i===24?0:i*60); lab.innerHTML = `<div class="t-main">${p.main}</div><div class="mer">${p.mer||''}</div>`; } else { lab.textContent = (i===24? this._label(0) : this._label(i*60)); }
          t.append(lab); scale.append(t);
        }
      }
      // Render preview track with today's selected day blocks
      track.innerHTML = '';
  const effKey = this._effectiveDayKey(this._weeklyDayKey);
  const blocks = (this._weeklyDraft.days?.[effKey] || []);
      // Ensure tooltip exists
      let tooltip = this.shadowRoot.querySelector('.wk-tooltip');
      if (!tooltip) { tooltip = document.createElement('div'); tooltip.className='wk-tooltip'; tooltip.style.display='none'; modalWeek?.append(tooltip); }
      for (const b of blocks){
        const div = document.createElement('div');
        div.className = 'block';
        div.style.position='absolute';
        div.style.top='6px'; div.style.bottom='6px';
        div.style.left = (b.startMin/1440*100)+'%';
        div.style.width = ((b.endMin-b.startMin)/1440*100)+'%';
  // Only show temperature in the block in the weekly popup (hide time)
  const t2 = document.createElement('span'); t2.className='pill'; t2.textContent = `${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`; div.append(t2);
  try {
          const clr = this._colorFor(this._weeklyEntity, b.temp);
          if (clr) {
            div.style.background = clr;
            div.style.borderColor = clr;
            const txt = this._contrastTextColor(clr);
            if (txt) div.style.color = txt;
          }
        } catch {}
        // double-click to edit (prevent bubbling to track handler)
        div.addEventListener('dblclick', (ev)=>{ try { ev.stopPropagation(); ev.preventDefault(); } catch {} this._openWeeklyBlockEditor(b.id); });
        // Hover -> show tooltip with full time range + temp (no click needed)
        const showTip = ()=>{
          const txt = `${this._label(b.startMin)} - ${this._label(b.endMin)} • ${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
          if (!tooltip) return;
          try { if (tooltip._hideTimer) { clearTimeout(tooltip._hideTimer); tooltip._hideTimer = null; } } catch {}
          // Do not show while editor popup is open
          try {
            const ov = this.shadowRoot.querySelector('.overlay');
            if (this._editing || (ov && ov.classList.contains('open'))) return;
          } catch {}
          tooltip.textContent = txt;
          const box = div.getBoundingClientRect();
          const cont = modalWeek?.getBoundingClientRect();
          const left = box.left + box.width/2 - (cont?.left||0);
          const top = (box.top - (cont?.top||0)) - 8; // a little above
          tooltip.style.left = left + 'px';
          tooltip.style.top = top + 'px';
          tooltip.style.transform = 'translate(-50%,-100%)';
          tooltip.style.display = '';
        };
        const hideTip = ()=>{
          if (!tooltip) return;
          const delay = (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) ? 3000 : 120;
          try { if (tooltip._hideTimer) clearTimeout(tooltip._hideTimer); } catch {}
          tooltip._hideTimer = setTimeout(() => { try { tooltip.style.display='none'; tooltip._hideTimer = null; } catch {} }, delay);
        };
        div.addEventListener('mouseenter', showTip);
        div.addEventListener('mouseleave', hideTip);
        track.append(div);
      }
      // Add click on empty area to add
      track.addEventListener('dblclick', (e)=>{
        try {
          if (e.target && (e.target.closest && e.target.closest('.block'))) return;
          const box = track.getBoundingClientRect();
          const rel = (e.clientX - box.left) / box.width; const min = this._clamp(Math.round(rel*1440),0,1439);
          this._openWeeklyBlockEditor(null, min);
        } catch { this._openWeeklyBlockEditor(null); }
      });
  track.addEventListener('mouseleave', ()=>{
    const tip = this.shadowRoot.querySelector('.wk-tooltip');
    if (!tip) return;
    try { if (tip._hideTimer) { clearTimeout(tip._hideTimer); tip._hideTimer = null; } } catch {}
  const delay = (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) ? 3000 : 120;
    tip._hideTimer = setTimeout(()=>{ try { tip.style.display='none'; tip._hideTimer = null; } catch{} }, delay);
  });
    } catch(e){ console.warn('render weekly modal failed', e); }
  }
  // ---------- Profiles modal ----------
  _openProfilesEditor(entity){
    try {
      this._profilesEntity = entity;
      const row = this._schedules[entity] || { defaultTemp: this._config.default_temp, blocks: [] };
      this._ensureProfilesStruct(row);
      // New creation by default: empty timeline
  this._profilesSelected = null;
  // Initialize empty draft for ALL rooms
  const roomsMap = {}; for (const eid of (this._config?.entities||[])) roomsMap[eid] = [];
  this._profilesDraft = { name: null, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
      this._profilesDirty = false;
      this._profilesEditingNew = true;
  this._profilesRoom = (this._config?.entities||[])[0] || entity;
      this._profilesOpen = true;
  const ov = this.shadowRoot && this.shadowRoot.querySelector('.overlay-profiles');
  // Mark overlaying, render while hidden, then open after paint
  try { this.shadowRoot.querySelector('ha-card')?.classList.add('overlay-open'); } catch {}
  this._renderProfilesModal();
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { if (ov) ov.classList.add('open'); })); } catch { if (ov) ov.classList.add('open'); }
    } catch { /* no-op */ }
  }
  _closeProfilesEditor(){
    this._profilesOpen = false; this._profilesEntity = null; this._profilesSelected = null; this.shadowRoot.querySelector('.overlay-profiles')?.classList.remove('open');
    // Always re-render main timeline after closing, so fallback (weekdays/base) is visible if no profile is active
    try { this._render(); } catch {}
    try { this.shadowRoot.querySelector('ha-card')?.classList.remove('overlay-open'); } catch {}
  }
  _renderProfilesModal(){ try {
      const title = this.shadowRoot.querySelector('.prof-title'); if (title) title.textContent = this._t('profiles.editor.title');
      const roomEl = this.shadowRoot.querySelector('.prof-room'); if (roomEl) { const eid = this._profilesEntity; const custom = (this._config?.labels?.[eid]) || null; roomEl.textContent = custom || this._prettyName(eid||''); }
  const note = this.shadowRoot.querySelector('.prof-note'); if (note) note.textContent = this._t('profiles.preview_note');
  const list = this.shadowRoot.querySelector('.prof-list');
  const addBtn = this.shadowRoot.querySelector('.prof-add');
  const closeBtn = this.shadowRoot.querySelector('.prof-close');
  const modalProf = this.shadowRoot.querySelector('.modal-profiles');
  const scale = modalProf?.querySelector('.week-scale-inner') || this.shadowRoot.querySelector('.week-scale-inner');
  const track = modalProf?.querySelector('.week-track') || this.shadowRoot.querySelector('.week-track');
  const roomTabs = modalProf?.querySelector('.prof-roomtabs');
      if (!list || !track || !this._profilesEntity) return;
      const row = this._schedules[this._profilesEntity] || { defaultTemp: this._config.default_temp, blocks: [] };
      this._ensureProfilesStruct(row);
      // Build room tabs (one per configured entity)
      if (roomTabs) {
        roomTabs.innerHTML = '';
        const ents = this._config?.entities || [];
        if (!this._profilesRoom || !ents.includes(this._profilesRoom)) this._profilesRoom = ents[0] || null;
        for (const eid of ents){
          const btn = document.createElement('button'); btn.type='button'; btn.className='wk-tab' + (eid===this._profilesRoom?' active':'');
          let label = this._config?.labels?.[eid] || (this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1]||eid));
          btn.textContent = label; btn.addEventListener('click', ()=>{ this._profilesRoom = eid; this._renderProfilesModal(); });
          roomTabs.append(btn);
        }
      }
      // Build list
      list.innerHTML = '';
  const names = Object.keys(row.profiles || {});
      if (!names.length) {
        const p = document.createElement('div'); p.style.fontSize = '.9rem'; p.style.color='var(--secondary-text-color)'; p.textContent = this._t('profiles.none'); list.append(p);
      }
      for (const name of names){
  const item = document.createElement('div'); item.className = 'prof-item' + (this._profilesSelected===name ? ' active' : '');
  const left = document.createElement('button'); left.type='button'; left.className='prof-chip'; left.textContent = name; left.addEventListener('click', ()=>{ this._profilesSelected = name; this._profilesEditingNew = false; try { const roomsMap = {}; for (const eid of (this._config?.entities||[])){ const src = this._schedules[eid]?.profiles?.[name]?.blocks || []; roomsMap[eid] = JSON.parse(JSON.stringify(src)); } this._profilesDraft = { name, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) }; this._profilesDirty = false; } catch { this._profilesDraft=null; this._profilesDirty=false; } this._renderProfilesModal(); });
        const actions = document.createElement('div'); actions.className = 'prof-actions';
  const editBtn = document.createElement('button'); editBtn.type='button'; editBtn.className='btn ghost'; editBtn.textContent=this._t('profiles.edit');
  editBtn.addEventListener('click', ()=>{ this._profilesSelected = name; this._profilesEditingNew = false; try { const roomsMap = {}; for (const eid of (this._config?.entities||[])){ const src = this._schedules[eid]?.profiles?.[name]?.blocks || []; roomsMap[eid] = JSON.parse(JSON.stringify(src)); } this._profilesDraft = { name, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) }; this._profilesDirty = false; } catch { this._profilesDraft=null; this._profilesDirty=false; } this._renderProfilesModal(); try { const trk = modalProf?.querySelector('.week-track'); trk?.scrollIntoView({ behavior:'smooth', block:'center' }); } catch {} });
        const act = document.createElement('button'); act.type='button'; act.className = 'btn ' + (row.activeProfile===name?'success':'ghost'); act.textContent = (row.activeProfile===name)? this._t('profiles.deactivate') : this._t('profiles.activate');
        act.addEventListener('click', async ()=>{
          const before = this._desiredNowSnapshot();
          // Toggle global activation: if already globally selected, turn off; else activate this name for all rooms
          const enable = (this._globalProfile !== name);
          if (enable) {
            this._globalProfile = name;
            this._config.profiles_enabled = true;
          } else {
            this._globalProfile = null;
            // Keep profiles_enabled as-is; user can still have per-room profiles
          }
          // Apply across all configured rooms
          for (const eid of (this._config?.entities || [])){
            const r = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
            this._ensureProfilesStruct(r);
            if (enable) {
              r.activeProfile = (r.profiles && r.profiles[name]) ? name : null;
            } else {
              r.activeProfile = null;
            }
            this._schedules[eid] = r;
          }
          await this._saveStore();
          this._render();
          this._renderProfilesModal();
          try {
            if (this._config?.auto_apply && !this._config?.storage_enabled && !this._isPaused()) {
              await this._applyIfDesiredChanged(before);
            }
          } catch {}
          this._scheduleNextApply();
        });
        const ren = document.createElement('button'); ren.type='button'; ren.className='btn ghost'; ren.textContent=this._t('profiles.rename'); ren.addEventListener('click', async ()=>{
          const cur = name; const txt = prompt(this._t('profiles.rename'), cur) || '';
          const nn = txt.trim(); if (!nn || nn===cur) return;
          if (row.profiles[nn]) { alert('Name exists'); return; }
          row.profiles[nn] = row.profiles[cur]; delete row.profiles[cur]; if (row.activeProfile===cur) row.activeProfile = nn; if (this._profilesSelected===cur) this._profilesSelected = nn; await this._saveStore(); this._renderProfilesModal(); this._render();
        });
        const del = document.createElement('button'); del.type='button'; del.className='remove-btn'; del.innerHTML = '<ha-icon icon="mdi:close"></ha-icon><span>'+this._t('profiles.delete')+'</span>';
  del.addEventListener('click', async ()=>{ if (!confirm(this._t('profiles.delete')+'?')) return; delete row.profiles[name]; if (row.activeProfile===name) row.activeProfile=null; if (this._profilesSelected===name) this._profilesSelected = Object.keys(row.profiles||{})[0]||null; await this._saveStore(); this._renderProfilesModal(); this._render(); this._scheduleNextApply(); });
  actions.append(editBtn, act, ren, del); item.append(left, actions); list.append(item);
      }
  if (addBtn) {
        try { const sp = addBtn.querySelector('span'); if (sp) sp.textContent = this._t('profiles.add'); } catch {}
        addBtn.classList.remove('btn','primary'); addBtn.classList.add('add-entity-btn');
        addBtn.onclick = ()=>{
          // Reset to a brand‑new draft (empty timeline)
          try {
            const eid = this._profilesEntity; const row = this._schedules[eid] || { defaultTemp: this._config.default_temp };
            this._profilesSelected = null; this._profilesEditingNew = true;
            this._profilesDraft = { name: null, blocks: [], defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
            this._profilesDirty = false; this._renderProfilesModal();
          } catch {}
        };
      }
  if (closeBtn) { try { closeBtn.textContent = this._t('ui.cancel') || 'Close'; } catch {} }
      // Draw scale
      try {
        if (scale) {
          scale.innerHTML = '';
          // Match the weekly preview: ticks every 2 hours using simple borders and small labels
          for (let i=0;i<=24;i+=2){
            const t = document.createElement('div');
            t.style.position='absolute';
            t.style.left = (i/24*100)+'%';
            t.style.top='4px'; t.style.bottom='4px';
            t.style.borderLeft='1px solid var(--divider-color)';
            const lab = document.createElement('div');
            lab.style.position='absolute'; lab.style.top='-2px'; lab.style.transform='translate(-50%,0)'; lab.style.left='0'; lab.style.fontSize='.75rem'; lab.style.color='var(--secondary-text-color)';
            if (this._config?.time_12h){ const p=this._timeParts(i===24?0:i*60); lab.innerHTML = `<div class="t-main">${p.main}</div><div class="mer">${p.mer||''}</div>`; } else { lab.textContent = (i===24 ? this._label(0) : this._label(i*60)); }
            t.append(lab); scale.append(t);
          }
        }
      } catch {}
      // Draw track for selected profile
      track.innerHTML = '';
  const sel = this._profilesSelected;
  let pblocks = [];
  const curRoom = this._profilesRoom || this._profilesEntity;
  if (this._profilesDraft && (!sel || this._profilesDraft.name===sel)) {
    const rooms = this._profilesDraft.rooms || {}; pblocks = rooms[curRoom] || [];
  } else if (sel) {
    // Fallback: show blocks from the current room's saved profile
    const r = this._schedules[curRoom] || {}; pblocks = (r.profiles?.[sel]?.blocks) || [];
  }
      const addBtnInline = document.createElement('button'); addBtnInline.type='button'; addBtnInline.className='btn primary'; addBtnInline.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>'+this._t('ui.add_block')+'</span>'; addBtnInline.addEventListener('click', ()=>{
        this._openProfileBlockEditor(null, this._getNowMin());
      });
      const toolbar = document.createElement('div'); toolbar.className='prof-toolbar'; toolbar.style.display='flex'; toolbar.style.justifyContent='flex-end'; toolbar.style.gap='8px'; toolbar.append(addBtnInline);
      // Place toolbar ABOVE the time scale (before the .week-scale container)
      try {
        const outerScale = (scale && scale.closest) ? scale.closest('.week-scale') : (modalProf?.querySelector('.week-scale') || null);
        const parent = outerScale?.parentElement || track.parentElement;
        if (parent) {
          Array.from(parent.querySelectorAll('.prof-toolbar')).forEach(el=>el.remove());
          if (outerScale) parent.insertBefore(toolbar, outerScale); else parent.insertBefore(toolbar, track);
        }
      } catch {}
      // Tooltip (same style as weekdays)
      let tooltip = this.shadowRoot.querySelector('.wk-tooltip.prof');
      if (!tooltip) { tooltip = document.createElement('div'); tooltip.className='wk-tooltip prof'; tooltip.style.display='none'; modalProf?.append(tooltip); }
      for (const b of pblocks){
        const pctStart = (b.startMin/1440)*100; const pctW = ((b.endMin-b.startMin)/1440)*100;
        const bl = document.createElement('div'); bl.className='block'; bl.style.left=`${pctStart}%`; bl.style.width=`${pctW}%`;
        try { const clr = this._colorFor(this._profilesEntity, b.temp); if (clr){ bl.style.background=clr; bl.style.borderColor=clr; const txt=this._contrastTextColor(clr); if (txt) bl.style.color=txt; } } catch {}
        // Hide pill via CSS; use hover tooltip like weekdays
        const pillTemp = document.createElement('span'); pillTemp.className='pill'; pillTemp.textContent = `${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`; bl.append(pillTemp);
        bl.addEventListener('dblclick', ()=> this._openProfileBlockEditor(b.id));
        const showTip = ()=>{
          const txt = `${this._label(b.startMin)} - ${this._label(b.endMin)} • ${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
          if (!tooltip) return;
          try { if (tooltip._hideTimer) { clearTimeout(tooltip._hideTimer); tooltip._hideTimer = null; } } catch {}
          // Suppress while block editor is open
          try { const ov = this.shadowRoot.querySelector('.overlay'); if (this._editing || (ov && ov.classList.contains('open'))) return; } catch {}
          tooltip.textContent = txt;
          const box = bl.getBoundingClientRect(); const cont = modalProf?.getBoundingClientRect();
          const left = box.left + box.width/2 - (cont?.left||0); const top = (box.top - (cont?.top||0)) - 8;
          tooltip.style.left = left + 'px'; tooltip.style.top = top + 'px'; tooltip.style.transform = 'translate(-50%,-100%)'; tooltip.style.display='';
        };
        const hideTip = ()=>{ if (!tooltip) return; const delay = (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) ? 3000 : 120; try { if (tooltip._hideTimer) clearTimeout(tooltip._hideTimer); } catch {}; tooltip._hideTimer = setTimeout(()=>{ try { tooltip.style.display='none'; tooltip._hideTimer=null; } catch{} }, delay); };
        bl.addEventListener('mouseenter', showTip);
        bl.addEventListener('mouseleave', hideTip);
        track.append(bl);
      }
    } catch { /* ignore */ }
  }
  _openProfileBlockEditor(blockId, atMin=null){
    try {
  const eid = this._profilesRoom || this._profilesEntity; const name = this._profilesSelected; if (!eid) return;
      const row = this._schedules[eid]; this._ensureProfilesStruct(row);
      // Use draft while editing
      if (!this._profilesDraft || this._profilesDraft.name !== name) {
        try {
          const roomsMap = {};
          for (const e of (this._config?.entities||[])){
            const src = name ? (this._schedules[e]?.profiles?.[name]?.blocks || []) : [];
            roomsMap[e] = JSON.parse(JSON.stringify(src));
          }
          this._profilesDraft = { name, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
          this._profilesDirty = false;
        } catch {
          const roomsMap = {}; for (const e of (this._config?.entities||[])) roomsMap[e] = [];
          this._profilesDraft = { name, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) }; this._profilesDirty = false;
        }
      }
      const arr = (this._profilesDraft.rooms||{})[eid] || [];
      const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error'); const fromMer = this.shadowRoot.querySelector('.ed-from-mer'); const toMer = this.shadowRoot.querySelector('.ed-to-mer');
      if (!blockId){
        // New block default around now
        const now = Number.isFinite(atMin) ? atMin : this._getNowMin(); const start = this._clamp(Math.round(now), 0, 1380); const end = this._clamp(start+60, start+15, 1440);
  this._editing = { entity: eid, blockId: null, profileName: (name || '__new__') };
        if (edTemp) { const base = Number(row.defaultTemp||this._config.default_temp||20); edTemp.value = String(this._toDisplayTemp(base)); edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
        if (this._config?.time_12h) { if (edFrom) edFrom.value=this._toTimeInput12h(start); if (edTo) edTo.value=this._toTimeInput12h(end); if (fromMer){ fromMer.style.display=''; fromMer.value=(start>=720)?'PM':'AM'; } if (toMer){ toMer.style.display=''; toMer.value=(end>=720 && end<1440)?'PM':'AM'; } } else { if (edFrom) edFrom.value=this._toTimeInput(start); if (edTo) edTo.value=this._toTimeInput(end); if (fromMer) fromMer.style.display='none'; if (toMer) toMer.style.display='none'; }
        if (title) title.textContent = this._t('ui.add_block'); if (delBtn) delBtn.style.display='none'; if (err){ err.style.display='none'; err.textContent=''; }
      } else {
        const b = arr.find(x=>x.id===blockId); if (!b) return;
  this._editing = { entity: eid, blockId, profileName: (name || '__new__') };
        if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
        if (this._config?.time_12h) { if (edFrom) edFrom.value=this._toTimeInput12h(b.startMin); if (edTo) edTo.value=this._toTimeInput12h(b.endMin); if (fromMer){ fromMer.style.display=''; fromMer.value=(b.startMin>=720)?'PM':'AM'; } if (toMer){ toMer.style.display=''; toMer.value=(b.endMin>=720 && b.endMin<1440)?'PM':'AM'; } } else { if (edFrom) edFrom.value=this._toTimeInput(b.startMin); if (edTo) edTo.value=this._toTimeInput(b.endMin); if (fromMer) fromMer.style.display='none'; if (toMer) toMer.style.display='none'; }
        if (title) title.textContent = this._t('ui.edit_block'); if (delBtn) delBtn.style.display=''; if (err){ err.style.display='none'; err.textContent=''; }
      }
      // Hide profiles overlay while editing
      const pov = this.shadowRoot.querySelector('.overlay-profiles'); if (pov) pov.classList.remove('open'); this._profilesOverlayHiddenForEditor = true;
      try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
    try { requestAnimationFrame(()=> requestAnimationFrame(()=> { overlay.classList.add('open'); })); } catch { overlay.classList.add('open'); }
    } catch {}
  }
  async _profilesSaveDraft(){
    try {
      const eid = this._profilesEntity; const sel = this._profilesSelected; const d = this._profilesDraft;
      if (!eid || !sel || !d || d.name !== sel) return;
      const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
      this._ensureProfilesStruct(row);
      // Persist current draft into storage structure
      const blocks = (d.rooms && d.rooms[eid]) ? d.rooms[eid] : [];
      row.profiles[sel] = { defaultTemp: row.defaultTemp, blocks: JSON.parse(JSON.stringify(blocks)) };
      this._schedules[eid] = row;
      await this._saveStore();
      // Clear dirty flag and revert Add/Save button immediately
      this._profilesDirty = false;
      try {
        const btn = this.shadowRoot && this.shadowRoot.querySelector('.prof-add');
        const sp = btn && btn.querySelector && btn.querySelector('span');
        if (btn && sp) { sp.textContent = this._t('profiles.add'); btn.classList.remove('btn','primary'); btn.classList.add('add-entity-btn'); btn.onclick = null; }
      } catch {}
      // Refresh UI and reschedule transitions
      this._render();
      this._renderProfilesModal();
      this._scheduleNextApply();
    } catch (e) { console.warn('profiles save failed', e); }
  }
  async _profilesSave(){
    try {
      // Prevent double-trigger when user presses Enter to confirm the prompt
      if (this._profilesSaveLock) return; this._profilesSaveLock = true;
  const eid = this._profilesEntity; if (!eid) return;
  const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] }; this._ensureProfilesStruct(row);
  const draft = this._profilesDraft || { name:null, rooms:{} };
      // New profile: prompt for name
      if (this._profilesEditingNew || !this._profilesSelected) {
        const base = this._t('profiles.name_placeholder');
        const txt = prompt(base||'Profile name', 'Profile');
        const name = (txt||'').trim(); if (!name) return;
        if (row.profiles[name]) { alert('Name exists'); return; }
        // Save this profile for ALL rooms from the draft map
        for (const rid of (this._config?.entities||[])){
          const rrow = this._schedules[rid] || { defaultTemp: this._config.default_temp, blocks: [] };
          this._ensureProfilesStruct(rrow);
          const blocks = (draft.rooms?.[rid] || []);
          rrow.profiles = rrow.profiles || {}; rrow.profiles[name] = { defaultTemp: rrow.defaultTemp, blocks: JSON.parse(JSON.stringify(blocks)) };
          this._schedules[rid] = rrow;
        }
        // Persist and reset timeline for a fresh new draft (ready for next)
        this._profilesDirty = false;
        await this._saveStore();
        try {
          this._profilesSelected = null; this._profilesEditingNew = true;
          const roomsMap = {}; for (const rid of (this._config?.entities||[])) roomsMap[rid] = [];
          this._profilesDraft = { name: null, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
        } catch {}
        // Move focus away from Save to avoid immediate re-click from Enter
        try { (this.shadowRoot && this.shadowRoot.activeElement && this.shadowRoot.activeElement.blur && this.shadowRoot.activeElement.blur()); } catch {}
        this._renderProfilesModal(); this._render(); this._scheduleNextApply();
        return;
      }
      // Edit existing: save without renaming, then reset timeline for next
      const sel = this._profilesSelected;
      for (const rid of (this._config?.entities||[])){
        const rrow = this._schedules[rid] || { defaultTemp: this._config.default_temp, blocks: [] };
        this._ensureProfilesStruct(rrow);
        const blocks = (draft.rooms?.[rid] || []);
        rrow.profiles = rrow.profiles || {}; rrow.profiles[sel] = { defaultTemp: rrow.defaultTemp, blocks: JSON.parse(JSON.stringify(blocks)) };
        this._schedules[rid] = rrow;
      }
      this._profilesDirty = false;
      await this._saveStore();
      try { (this.shadowRoot && this.shadowRoot.activeElement && this.shadowRoot.activeElement.blur && this.shadowRoot.activeElement.blur()); } catch {}
      // Clear selection and show empty preview ready for a new schedule
      try {
        this._profilesSelected = null; this._profilesEditingNew = true;
        const roomsMap = {}; for (const rid of (this._config?.entities||[])) roomsMap[rid] = [];
        this._profilesDraft = { name: null, rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
      } catch {}
      this._renderProfilesModal(); this._render(); this._scheduleNextApply();
    } catch (e) { console.warn('profiles save failed', e); }
    finally { setTimeout(()=>{ this._profilesSaveLock = false; }, 300); }
  }
  _openCopyWeekToRooms(){ try {
      // Build list of target rooms (exclude current)
      const list = this.shadowRoot.querySelector('.copyrooms-list');
      const title = this.shadowRoot.querySelector('.copyrooms-title');
      const desc = this.shadowRoot.querySelector('.copyrooms-desc');
      const ov = this.shadowRoot.querySelector('.overlay-copyrooms');
      if (title) title.textContent = this._t('week.copy_to_rooms.title');
      if (desc) desc.textContent = this._t('week.copy_to_rooms.select');
      if (list) {
        list.innerHTML = '';
        const ents = (this._config?.entities || []);
        for (const eid of ents){
          if (eid === this._weeklyEntity) continue;
          const lbl = (this._config?.labels && this._config.labels[eid]) ? this._config.labels[eid] : this._prettyName(eid);
          const row = document.createElement('label');
          const cb = document.createElement('input'); cb.type='checkbox'; cb.value=eid;
          const span = document.createElement('span'); span.textContent = lbl;
          row.append(cb, span); list.append(row);
        }
      }
      const cancel = this.shadowRoot.querySelector('.copyrooms-cancel');
      const apply = this.shadowRoot.querySelector('.copyrooms-apply');
      if (cancel) cancel.onclick = ()=>{ ov?.classList.remove('open'); };
      if (apply) apply.onclick = ()=> this._applyCopyWeekToRooms();
      ov?.classList.add('open');
    } catch(e){ console.warn('open copy rooms failed', e); }
  }
  async _applyCopyWeekToRooms(){ try {
      const list = this.shadowRoot.querySelector('.copyrooms-list');
      const ov = this.shadowRoot.querySelector('.overlay-copyrooms');
      if (!this._weeklyDraft) { ov?.classList.remove('open'); return; }
      const checked = Array.from(list?.querySelectorAll('input[type=checkbox]:checked') || []).map(x=>x.value);
      // Queue the targets; actual copy occurs on Save in weekly editor
      this._weeklyCopyTargets = checked;
      ov?.classList.remove('open');
      // Optionally re-render header/note to reflect queued action (no persistence yet)
      this._renderWeeklyModal();
    } catch(e){ console.warn('apply copy rooms failed', e); }
  }
  _openWeeklyBlockEditor(blockId, atMin=null){ if (!this._weeklyDraft) return; const day = this._effectiveDayKey(this._weeklyDayKey || 'mon'); const arr = this._weeklyDraft.days?.[day] || []; if (!blockId){
      // open new
      const start = Number.isFinite(atMin) ? this._clamp(Math.round(atMin),0,1380) : this._clamp(Math.round(this._getNowMin()),0,1380);
      const end = this._clamp(start+60, start+15, 1440);
      const row = this._schedules[this._weeklyEntity] || { defaultTemp: this._config.default_temp };
  const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error'); const fromMer = this.shadowRoot.querySelector('.ed-from-mer'); const toMer = this.shadowRoot.querySelector('.ed-to-mer');
      this._editing = { entity: this._weeklyEntity, blockId: null, weeklyDay: day };
  // Hide any tooltips while editing
  try { const tips = this.shadowRoot.querySelectorAll('.wk-tooltip'); tips.forEach(t => { try { if (t._hideTimer) clearTimeout(t._hideTimer); } catch {} t.style.display='none'; }); } catch {}
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(row.defaultTemp||20)); edTemp.max= String(this._maxDisplay()); }
      if (this._config?.time_12h) {
        if (edFrom) edFrom.value = this._toTimeInput12h(start);
        if (edTo) edTo.value = this._toTimeInput12h(end);
        if (fromMer){ fromMer.style.display=''; fromMer.value = (start>=720)?'PM':'AM'; }
        if (toMer){ toMer.style.display=''; toMer.value = (end>=720 && end<1440)?'PM':'AM'; }
      } else {
        if (edFrom) edFrom.value = this._toTimeInput(start);
        if (edTo) edTo.value = this._toTimeInput(end);
        if (fromMer) fromMer.style.display='none';
        if (toMer) toMer.style.display='none';
      }
      if (title) title.textContent = this._t('ui.add_block'); if (delBtn) delBtn.style.display='none'; if (err){ err.style.display='none'; err.textContent=''; }
      // Hide weekday overlay while editing to avoid double-popups
      const wov = this.shadowRoot.querySelector('.overlay-week'); if (wov) wov.classList.remove('open'); this._weeklyOverlayHiddenForEditor = true;
  try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { overlay.classList.add('open'); })); } catch { overlay.classList.add('open'); }
    } else {
  const b = arr.find(x=>x.id===blockId);
      if (!b) return;
  const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error'); const fromMer = this.shadowRoot.querySelector('.ed-from-mer'); const toMer = this.shadowRoot.querySelector('.ed-to-mer');
      this._editing = { entity: this._weeklyEntity, blockId, weeklyDay: day };
  // Hide any tooltips while editing
  try { const tips = this.shadowRoot.querySelectorAll('.wk-tooltip'); tips.forEach(t => { try { if (t._hideTimer) clearTimeout(t._hideTimer); } catch {} t.style.display='none'; }); } catch {}
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max= String(this._maxDisplay()); }
      if (this._config?.time_12h) {
        if (edFrom) edFrom.value = this._toTimeInput12h(b.startMin);
        if (edTo) edTo.value = this._toTimeInput12h(b.endMin);
        if (fromMer){ fromMer.style.display=''; fromMer.value = (b.startMin>=720)?'PM':'AM'; }
        if (toMer){ toMer.style.display=''; toMer.value = (b.endMin>=720 && b.endMin<1440)?'PM':'AM'; }
      } else {
        if (edFrom) edFrom.value = this._toTimeInput(b.startMin);
        if (edTo) edTo.value = this._toTimeInput(b.endMin);
        if (fromMer) fromMer.style.display='none';
        if (toMer) toMer.style.display='none';
      }
      if (title) title.textContent = this._t('ui.edit_block'); if (delBtn) delBtn.style.display=''; if (err){ err.style.display='none'; err.textContent=''; }
      const wov = this.shadowRoot.querySelector('.overlay-week'); if (wov) wov.classList.remove('open'); this._weeklyOverlayHiddenForEditor = true;
  try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
  overlay.classList.add('open');
    }
  }

  // ---------- Holidays modal ----------
  _openHolidayEditor(entity){
    try {
      const ents = this._config?.entities || [];
      this._holidayRoom = entity || ents[0] || null;
      // Build a rooms map draft from all rooms
      const roomsMap = {};
      for (const eid of ents){
        const r = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
        this._ensureHolidayStruct(r);
        roomsMap[eid] = Array.isArray(r.holiday?.blocks) ? JSON.parse(JSON.stringify(r.holiday.blocks)) : [];
      }
      this._holidayDraft = { rooms: roomsMap };
  this._holidayOpen = true;
  const ov = this.shadowRoot && this.shadowRoot.querySelector('.overlay-holiday');
  // Mark card overlay state first, then render while hidden
  try { this.shadowRoot.querySelector('ha-card')?.classList.add('overlay-open'); } catch {}
  this._renderHolidayModal();
  // Open after a paint so timeline is fully laid out
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { if (ov) ov.classList.add('open'); })); } catch { if (ov) ov.classList.add('open'); }
    } catch {}
  }
  _closeHolidayEditor(){ this._holidayOpen = false; this._holidayEntity = null; this._holidayRoom = null; this._holidayDraft = null; this.shadowRoot.querySelector('.overlay-holiday')?.classList.remove('open'); try { this.shadowRoot.querySelector('ha-card')?.classList.remove('overlay-open'); } catch {} }
  _renderHolidayModal(){ try {
    const title = this.shadowRoot && this.shadowRoot.querySelector('.holiday-title'); if (title) title.textContent = this._t('holidays.editor.title');
    const roomEl = this.shadowRoot && this.shadowRoot.querySelector('.holiday-room'); if (roomEl) { const eid = this._holidayRoom; const custom = (this._config?.labels?.[eid]) || null; roomEl.textContent = custom || this._prettyName(eid||''); }
    const note = this.shadowRoot && this.shadowRoot.querySelector('.holiday-note'); if (note) note.textContent = this._t('week.editor.preview_note');
    try { const sv = this.shadowRoot.querySelector('.holiday-save'); if (sv) sv.textContent = this._t('ui.save'); const cl = this.shadowRoot.querySelector('.holiday-close'); if (cl) cl.textContent = this._t('ui.cancel'); } catch {}
    const modalHost = this.shadowRoot && this.shadowRoot.querySelector('.modal-holiday');
    const scale = modalHost?.querySelector('.week-scale-inner') || this.shadowRoot.querySelector('.week-scale-inner');
    const track = modalHost?.querySelector('.week-track') || this.shadowRoot.querySelector('.week-track');
    if (!track) return;
  // Build room tabs
  const tabs = modalHost?.querySelector('.holiday-roomtabs');
    if (tabs) {
      tabs.innerHTML = '';
      const ents = this._config?.entities || [];
      if (!this._holidayRoom || !ents.includes(this._holidayRoom)) this._holidayRoom = ents[0] || null;
      for (const eid of ents){ const btn=document.createElement('button'); btn.type='button'; btn.className='wk-tab'+(eid===this._holidayRoom?' active':''); let label = this._config?.labels?.[eid] || (this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1]||eid)); btn.textContent=label; btn.addEventListener('click', ()=>{ this._holidayRoom=eid; this._renderHolidayModal(); }); tabs.append(btn); }
    }
    // Draw scale every 2 hours
    if (scale) {
      scale.innerHTML = '';
      for (let i=0;i<=24;i+=2){
        const t = document.createElement('div'); t.style.position='absolute'; t.style.left=(i/24*100)+'%'; t.style.top='4px'; t.style.bottom='4px'; t.style.borderLeft='1px solid var(--divider-color)';
        const lab = document.createElement('div'); lab.style.position='absolute'; lab.style.top='-2px'; lab.style.transform='translate(-50%,0)'; lab.style.left='0'; lab.style.fontSize='.75rem'; lab.style.color='var(--secondary-text-color)';
        if (this._config?.time_12h){ const p=this._timeParts(i===24?0:i*60); lab.innerHTML = `<div class="t-main">${p.main}</div><div class="mer">${p.mer||''}</div>`; } else { lab.textContent = (i===24 ? this._label(0) : this._label(i*60)); }
        t.append(lab); scale.append(t);
      }
    }
    // Toolbar with Add
  const addBtnInline = document.createElement('button'); addBtnInline.type='button'; addBtnInline.className='btn primary'; addBtnInline.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>'+this._t('ui.add_block')+'</span>';
    addBtnInline.addEventListener('click', ()=>{ this._openHolidayBlockEditor(null, this._getNowMin()); });
    const toolbar = document.createElement('div'); toolbar.className='prof-toolbar'; toolbar.style.display='flex'; toolbar.style.justifyContent='flex-end'; toolbar.style.gap='8px'; toolbar.append(addBtnInline);
    try {
      const outerScale = (scale && scale.closest) ? scale.closest('.week-scale') : (modalHost?.querySelector('.week-scale') || null);
      const parent = outerScale?.parentElement || track.parentElement;
      if (parent) {
        Array.from(parent.querySelectorAll('.prof-toolbar')).forEach(el=>el.remove());
        if (outerScale) parent.insertBefore(toolbar, outerScale); else parent.insertBefore(toolbar, track);
      }
    } catch {}
    // Draw blocks
    track.innerHTML = '';
  const blocks = (this._holidayDraft && this._holidayDraft.rooms) ? (this._holidayDraft.rooms[this._holidayRoom] || []) : [];
    // Tooltip like weekly
    let tooltip = this.shadowRoot.querySelector('.wk-tooltip.holiday');
    if (!tooltip) { tooltip = document.createElement('div'); tooltip.className='wk-tooltip holiday'; tooltip.style.display='none'; modalHost?.append(tooltip); }
    for (const b of blocks){
      const pctStart=(b.startMin/1440)*100, pctW=((b.endMin-b.startMin)/1440)*100; const bl=document.createElement('div'); bl.className='block'; bl.style.left=pctStart+'%'; bl.style.width=pctW+'%';
  try { const clr=this._colorFor(this._holidayRoom, b.temp); if (clr){ bl.style.background=clr; bl.style.borderColor=clr; const txt=this._contrastTextColor(clr); if (txt) bl.style.color=txt; } } catch {}
      const pill=document.createElement('span'); pill.className='pill'; pill.textContent = `${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`; bl.append(pill);
      bl.addEventListener('dblclick', ()=> this._openHolidayBlockEditor(b.id));
      const showTip = ()=>{ const txt=`${this._label(b.startMin)} - ${this._label(b.endMin)} • ${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`; if (!tooltip) return; try { if (tooltip._hideTimer) clearTimeout(tooltip._hideTimer); tooltip._hideTimer=null; } catch {} const box=bl.getBoundingClientRect(); const cont=modalHost?.getBoundingClientRect(); const left=box.left+box.width/2-(cont?.left||0); const top=(box.top-(cont?.top||0))-8; tooltip.textContent=txt; tooltip.style.left=left+'px'; tooltip.style.top=top+'px'; tooltip.style.transform='translate(-50%,-100%)'; tooltip.style.display=''; };
      const hideTip = ()=>{ if (!tooltip) return; const delay=(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches)?3000:120; try{ if(tooltip._hideTimer) clearTimeout(tooltip._hideTimer);}catch{} tooltip._hideTimer=setTimeout(()=>{ try{ tooltip.style.display='none'; tooltip._hideTimer=null; }catch{} }, delay); };
      bl.addEventListener('mouseenter', showTip); bl.addEventListener('mouseleave', hideTip);
      track.append(bl);
    }
    // Add on empty area
    track.addEventListener('dblclick', (e)=>{ try { if (e.target && (e.target.closest && e.target.closest('.block'))) return; const box=track.getBoundingClientRect(); const rel=(e.clientX-box.left)/box.width; const min=this._clamp(Math.round(rel*1440),0,1439); this._openHolidayBlockEditor(null, min); } catch { this._openHolidayBlockEditor(null); } });
  } catch {}
  }
  _openHolidayBlockEditor(blockId, atMin=null){ try {
    const eid = this._holidayRoom; if (!eid) return; const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] }; this._ensureHolidayStruct(row);
    if (!this._holidayDraft || !this._holidayDraft.rooms) {
      const roomsMap={}; for (const rid of (this._config?.entities||[])){ const src=this._schedules[rid]?.holiday?.blocks || []; roomsMap[rid]=JSON.parse(JSON.stringify(src)); }
      this._holidayDraft = { rooms: roomsMap };
    }
    const arr = (this._holidayDraft.rooms||{})[eid] || [];
    const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error'); const fromMer = this.shadowRoot.querySelector('.ed-from-mer'); const toMer = this.shadowRoot.querySelector('.ed-to-mer');
    if (!blockId){
      const now = Number.isFinite(atMin) ? atMin : this._getNowMin(); const start = this._clamp(Math.round(now), 0, 1380); const end = this._clamp(start+60, start+15, 1440);
  this._editing = { entity: eid, blockId: null, holiday: true };
      if (edTemp) { const base = Number(row.defaultTemp||this._config.default_temp||20); edTemp.value = String(this._toDisplayTemp(base)); edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
      if (this._config?.time_12h) { if (edFrom) edFrom.value=this._toTimeInput12h(start); if (edTo) edTo.value=this._toTimeInput12h(end); if (fromMer){ fromMer.style.display=''; fromMer.value=(start>=720)?'PM':'AM'; } if (toMer){ toMer.style.display=''; toMer.value=(end>=720 && end<1440)?'PM':'AM'; } } else { if (edFrom) edFrom.value=this._toTimeInput(start); if (edTo) edTo.value=this._toTimeInput(end); if (fromMer) fromMer.style.display='none'; if (toMer) toMer.style.display='none'; }
      if (title) title.textContent = this._t('ui.add_block'); if (delBtn) delBtn.style.display='none'; if (err){ err.style.display='none'; err.textContent=''; }
    } else {
  const b = arr.find(x=>x.id===blockId); if (!b) return; this._editing = { entity: eid, blockId, holiday: true };
      if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max = String(this._maxDisplay()); edTemp.min = String(this._minDisplay()); }
      if (this._config?.time_12h) { if (edFrom) edFrom.value=this._toTimeInput12h(b.startMin); if (edTo) edTo.value=this._toTimeInput12h(b.endMin); if (fromMer){ fromMer.style.display=''; fromMer.value=(b.startMin>=720)?'PM':'AM'; } if (toMer){ toMer.style.display=''; toMer.value=(b.endMin>=720 && b.endMin<1440)?'PM':'AM'; } } else { if (edFrom) edFrom.value=this._toTimeInput(b.startMin); if (edTo) edTo.value=this._toTimeInput(b.endMin); if (fromMer) fromMer.style.display='none'; if (toMer) toMer.style.display='none'; }
      if (title) title.textContent = this._t('ui.edit_block'); if (delBtn) delBtn.style.display=''; if (err){ err.style.display='none'; err.textContent=''; }
    }
    // Hide holiday overlay while editing to avoid double-popups
    const hov = this.shadowRoot.querySelector('.overlay-holiday'); if (hov) hov.classList.remove('open'); this._holidayOverlayHiddenForEditor = true;
    try { const modalEl = this.shadowRoot.querySelector('.overlay .modal:not(.modal-week)'); if (modalEl) modalEl.classList.toggle('modal-12h', !!this._config?.time_12h); } catch {}
  try { requestAnimationFrame(()=> requestAnimationFrame(()=> { overlay.classList.add('open'); })); } catch { overlay.classList.add('open'); }
  } catch {}
  }
  async _holidaySave(){ try {
    if (!this._holidayDraft || !this._holidayDraft.rooms) { this._closeHolidayEditor(); return; }
    const rooms = this._holidayDraft.rooms || {};
    for (const eid of (this._config?.entities||[])){
      const row = this._schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] };
      this._ensureHolidayStruct(row);
      row.holiday = { blocks: JSON.parse(JSON.stringify(rooms[eid] || [])) };
      this._schedules[eid] = row;
    }
    const before = this._desiredNowSnapshot();
    await this._saveStore();
    this._closeHolidayEditor(); this._render();
    if (this._config.apply_on_edit) await this._applyIfDesiredChanged(before);
    this._scheduleNextApply();
  } catch {}
  }

  async _saveEditor(){ const errElGlobal = this.shadowRoot?.querySelector('.ed-error'); try { if (!this._editing) return; const { entity, blockId, weeklyDay, profileName, holiday } = this._editing; const row = this._schedules[entity]; if (!row) return; let b = null; let sourceBlocks = row.blocks; if (profileName) { this._ensureProfilesStruct(row); // Use the current draft for overlap/checks instead of stored profile
    const curRoom = this._profilesRoom || this._profilesEntity || entity; const draftArr = (this._profilesDraft?.rooms?.[curRoom]) || []; sourceBlocks = draftArr; b = blockId ? draftArr.find(x=>x.id===blockId) : null; } else if (weeklyDay && this._weeklyDraft) { sourceBlocks = (this._weeklyDraft.days?.[weeklyDay] || []); b = blockId ? sourceBlocks.find(x=>x.id===blockId) : null; } else if (holiday && Array.isArray(this._holidayDraft)) { sourceBlocks = this._holidayDraft; b = blockId ? sourceBlocks.find(x=>x.id===blockId) : null; } else { if (blockId) b = row.blocks.find(x => x.id === blockId); }
    const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to");
    const fromMerSel = this.shadowRoot.querySelector('.ed-from-mer'); const toMerSel = this.shadowRoot.querySelector('.ed-to-mer');
    const rawFrom = String(edFrom.value || "");
    const rawTo = String(edTo.value || "");
    let start = this._fromTimeInput(rawFrom);
    let end = this._fromTimeInput(rawTo);
    // If 12h mode, adjust using AM/PM selects
    if (this._config?.time_12h) {
      const merF = (fromMerSel?.value || 'AM').toUpperCase();
      const merT = (toMerSel?.value || 'AM').toUpperCase();
      let sh = Math.floor(start/60), sm = start%60;
      let eh = Math.floor(end/60), em = end%60;
      if (sh <= 12) { if (merF==='AM' && sh===12) sh = 0; if (merF==='PM' && sh<12) sh += 12; }
      if (eh <= 12) { if (merT==='AM' && eh===12) eh = 0; if (merT==='PM' && eh<12) eh += 12; }
      start = sh*60 + sm; end = eh*60 + em;
    }
    // Treat end time 00:00 as end of day (24:00 -> 1440 minutes)
    if (rawTo === '00:00') end = 1440;
  let tempRaw = String(edTemp.value || "").replace(",", "."); let temp = parseFloat(tempRaw);
  if (isNaN(start)) start = 0; if (isNaN(end)) end = 60; if (isNaN(temp)) temp = row.defaultTemp || 20;
  const maxLimit = this._maxDisplay(); const minLimit = this._minDisplay(); if (Number.isFinite(maxLimit)) temp = Math.min(temp, maxLimit); if (Number.isFinite(minLimit)) temp = Math.max(temp, minLimit);
    start = this._clamp(Math.floor(start), 0, 1439); end   = this._clamp(Math.ceil(end),   1, 1440);

    // Helper to check overlap in an array of blocks (ignore current 'b' if provided)
    const hasOverlap = (arr, s, e, ignoreId=null) => {
      const othersArr = (arr||[]).filter(x=>!ignoreId || x.id !== ignoreId);
      return othersArr.find(o => !(e <= o.startMin || s >= o.endMin));
    };

    // If interval crosses midnight (end <= start), split into two blocks
    const crossesMidnight = end <= start;
  // Early overlap check only for base/weekly/holiday editors; profiles are handled below using the draft state
  if (!crossesMidnight && !profileName) {
      const overlap = hasOverlap(sourceBlocks, start, end, b?.id);
      if (overlap) {
        const overlapStart = Math.max(start, overlap.startMin);
        const overlapEnd = Math.min(end, overlap.endMin);
        const errEl = this.shadowRoot.querySelector('.ed-error');
        if (errEl) {
          const msg = this._t('ui.overlap_msg').replace('{start}', this._label(overlapStart)).replace('{end}', this._label(overlapEnd));
          const fixStartLab = this._t('ui.fix_start_to').replace('{time}', this._label(overlap.endMin));
          const fixEndLab = this._t('ui.fix_end_to').replace('{time}', this._label(overlap.startMin));
          // Decide which fixes are relevant
          const startInside = start >= overlap.startMin && start < overlap.endMin;
          const endInside = end > overlap.startMin && end <= overlap.endMin;
          const showStart = startInside || (!startInside && endInside && end > overlap.endMin); // overlap at right edge
          const showEnd = endInside || (!endInside && startInside && start < overlap.startMin);  // overlap at left edge
          let btns = '';
          if (showStart) btns += `<button class="btn success ed-fix-start" type="button">${fixStartLab}</button>`;
          if (showEnd) btns += `<button class="btn success ed-fix-end" type="button">${fixEndLab}</button>`;
          // No extra cancel button here; bottom Cancel handles it
          errEl.innerHTML = `<div>${msg}</div><div style="margin-top:8px; display:flex; gap:8px; justify-content:flex-end; flex-wrap:wrap;">${btns}</div>`;
          errEl.style.display = 'block';
          const applyFix = (kind)=>{
            // Adjust inputs then re-run save
            try {
              const edFrom = this.shadowRoot.querySelector('.ed-from');
              const edTo = this.shadowRoot.querySelector('.ed-to');
              const fromMerSel = this.shadowRoot.querySelector('.ed-from-mer');
              const toMerSel = this.shadowRoot.querySelector('.ed-to-mer');
              if (kind==='start') {
                const ns = overlap.endMin;
                if (this._config?.time_12h) {
                  if (edFrom) edFrom.value = this._toTimeInput12h(ns);
                  if (fromMerSel) fromMerSel.value = (ns>=720 && ns<1440)?'PM':'AM';
                } else {
                  if (edFrom) edFrom.value = this._toTimeInput(ns);
                }
              } else if (kind==='end') {
                const ne = overlap.startMin;
                if (this._config?.time_12h) {
                  if (edTo) edTo.value = this._toTimeInput12h(ne);
                  if (toMerSel) toMerSel.value = (ne>=720 && ne<1440)?'PM':'AM';
                } else {
                  if (edTo) edTo.value = this._toTimeInput(ne);
                }
              }
            } catch {}
            try { errEl.style.display='none'; errEl.textContent=''; } catch {}
            // Defer to allow DOM to update
            setTimeout(()=>{ this._saveEditor(); }, 0);
          };
          errEl.querySelector('.ed-fix-start')?.addEventListener('click', ()=>applyFix('start'));
          errEl.querySelector('.ed-fix-end')?.addEventListener('click', ()=>applyFix('end'));
          // No extra cancel handler
        }
        return;
      }
    }
  temp = this._fromDisplayTemp(temp);
  const before = this._desiredNowSnapshot();
    if (profileName) {
      // Save into a draft for the selected profile; persist only when user presses Save
      const hasOverlap = (arr, s, e, ignoreId=null) => { const othersArr = (arr||[]).filter(x=>!ignoreId || x.id !== ignoreId); return othersArr.find(o => !(e <= o.startMin || s >= o.endMin)); };
      const crossesMidnight = end <= start;
      // Ensure draft exists for current room; don't re-init when creating a new (unnamed) profile
      const isNewProf = (profileName === '__new__');
      const curRoom = this._profilesRoom || this._profilesEntity || Object.keys(this._schedules)[0];
      if (!this._profilesDraft || (!isNewProf && this._profilesDraft.name !== profileName)) {
        try {
          const roomsMap = {};
          for (const e of (this._config?.entities||[])){
            const src = !isNewProf ? (this._schedules[e]?.profiles?.[profileName]?.blocks || []) : [];
            roomsMap[e] = JSON.parse(JSON.stringify(src));
          }
          this._profilesDraft = { name: (isNewProf? null : profileName), rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
        } catch {
          const roomsMap = {}; for (const e of (this._config?.entities||[])) roomsMap[e] = [];
          this._profilesDraft = { name: (isNewProf? null : profileName), rooms: roomsMap, defaultTemp: Number(row.defaultTemp||this._config.default_temp||20) };
        }
      }
      const arr = (this._profilesDraft.rooms||{})[curRoom] || [];
      // Find the block within the draft, not the stored profile
      let b = blockId ? arr.find(x=>x.id===blockId) : null;
      if (crossesMidnight) {
        const ov1 = hasOverlap(arr, start, 1440, b?.id);
        const ov2 = hasOverlap(arr, 0, end, null);
        if (ov1 || ov2) { const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const overlap = ov1 || ov2; const msg = this._t('ui.overlap_msg').replace('{start}', this._label(ov1?Math.max(start, ov1.startMin):0)).replace('{end}', this._label(ov1?Math.min(1440, ov1.endMin):end)); errEl.innerHTML = `<div>${msg}</div>`; errEl.style.display='block'; } return; }
        if (!b) { const id1=Math.random().toString(36).slice(2,9); const id2=Math.random().toString(36).slice(2,9); arr.push({ id:id1, startMin:start, endMin:1440, temp: this._fromDisplayTemp(temp) }); arr.push({ id:id2, startMin:0, endMin:end, temp: this._fromDisplayTemp(temp) }); } else { b.temp=this._fromDisplayTemp(temp); b.startMin=start; b.endMin=1440; const id2=Math.random().toString(36).slice(2,9); arr.push({ id:id2, startMin:0, endMin:end, temp: this._fromDisplayTemp(temp) }); }
      } else {
        const overlap = hasOverlap(arr, start, end, b?.id);
        if (overlap) { const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const msg = this._t('ui.overlap_msg').replace('{start}', this._label(Math.max(start, overlap.startMin))).replace('{end}', this._label(Math.min(end, overlap.endMin))); errEl.innerHTML = `<div>${msg}</div>`; errEl.style.display='block'; } return; }
        if (!b) { const id=Math.random().toString(36).slice(2,9); arr.push({ id, startMin:start, endMin:end, temp:this._fromDisplayTemp(temp) }); } else { b.temp=this._fromDisplayTemp(temp); b.startMin=start; b.endMin=end; }
      }
  (this._profilesDraft.rooms||{})[curRoom] = arr.sort((a,bx)=>a.startMin-bx.startMin||a.endMin-bx.endMin);
      this._profilesDirty = true;
      // If the profile edit originated from the main timeline, persist immediately
      if (this._autoSaveProfileFromTimeline) {
        try {
          this._autoSaveProfileFromTimeline = false;
          // Persist draft for current room/profile
          await this._profilesSaveDraft();
          // Apply immediately if edit affects current time
          try {
            if (this._config?.auto_apply && this._config?.apply_on_edit) {
              const nowMin = this._getNowMin();
              const arrNow = Array.isArray((this._profilesDraft?.rooms||{})[curRoom]) ? this._profilesDraft.rooms[curRoom] : [];
              const hit = arrNow.find(x => nowMin >= x.startMin && nowMin < x.endMin);
              if (hit) { await this._applyImmediateForEntity(entity, Number(hit.temp), nowMin); this._scheduleNextApply(); }
            }
          } catch {}
          this._closeEditor();
          return;
        } catch {
          // Fall back to non-persisting flow
        }
      }
      this._render(); this._closeEditor(); this._renderProfilesModal();
      return;
    }
  if (weeklyDay && this._weeklyDraft) {
      if (crossesMidnight) {
        // Split into two parts on the SAME day: [start..1440] and [0..end]
        const dayKey = weeklyDay;
        const arrToday = this._weeklyDraft.days?.[dayKey] || [];
        // Check overlaps for each part against the same day
        const ov1 = hasOverlap(arrToday, start, 1440, b?.id);
        const ov2 = hasOverlap(arrToday, 0, end, b?.id);
        if (ov1 || ov2){
          const errEl = this.shadowRoot.querySelector('.ed-error');
          if (errEl) {
            const overlap = ov1 || ov2;
            const msg = this._t('ui.overlap_msg').replace('{start}', this._label(Math.max((ov1?start:0), overlap.startMin))).replace('{end}', this._label(Math.min((ov1?1440:end), overlap.endMin)));
            errEl.innerHTML = `<div>${msg}</div>`; errEl.style.display='block';
          }
          return;
        }
        // Apply changes on same day
        if (!b) {
          const id1 = Math.random().toString(36).slice(2,9);
          const id2 = Math.random().toString(36).slice(2,9);
          arrToday.push({ id:id1, startMin:start, endMin:1440, temp });
          arrToday.push({ id:id2, startMin:0, endMin:end, temp });
        } else {
          b.temp = temp; b.startMin = start; b.endMin = 1440;
          const id2 = Math.random().toString(36).slice(2,9);
          arrToday.push({ id:id2, startMin:0, endMin:end, temp });
        }
        this._weeklyDraft.days[dayKey] = arrToday.sort((a,bx)=>a.startMin-bx.startMin||a.endMin-bx.endMin);
      } else {
        if (!b) {
          const id = Math.random().toString(36).slice(2,9);
          b = { id, startMin: start, endMin: end, temp };
          sourceBlocks.push(b);
        } else {
          b.temp = temp; b.startMin = start; b.endMin = end;
        }
        sourceBlocks.sort((a,bx)=>a.startMin - bx.startMin || a.endMin - bx.endMin);
      }
      // If started from main timeline, auto-save the whole weekly plan now
      if (this._autoSaveWeeklyFromTimeline) {
        this._autoSaveWeeklyFromTimeline = false;
        this._closeEditor();
        // Persist weekly draft (propagate groups) and apply if needed
        this._weeklySaveAll();
      } else {
        // Close editor and re-render weekly preview; no immediate apply
        this._closeEditor();
        this._renderWeeklyModal();

        // If "apply on edit" is enabled, and this weekly edit affects "right now",
        // apply the new temperature immediately without requiring full Week Save.
        try {
          if (this._config?.auto_apply && this._config?.apply_on_edit) {
            const today = this._todayKey();
            // Determine if the edit impacts today given the current week mode and selected group
            const mode = (this._weeklyDraft?.mode) || (row.weekly?.mode) || (this._config?.weekdays_mode) || 'weekday_weekend';
            const selKey = this._weeklyDayKey || weeklyDay || today; // group key the user was editing

            const isWeekday = ['mon','tue','wed','thu','fri'].includes(today);
            let editImpactsToday = false;
            let sourceKeyForToday = today; // which draft day array reflects today after grouping
            if (mode === 'weekday_weekend') {
              if (selKey === 'weekdays' && isWeekday) { editImpactsToday = true; sourceKeyForToday = 'mon'; }
              if (selKey === 'weekend' && (today==='sat' || today==='sun')) { editImpactsToday = true; sourceKeyForToday = 'sat'; }
              if (selKey === today) { editImpactsToday = true; sourceKeyForToday = today; }
            } else if (mode === 'weekday_sat_sun') {
              if (selKey === 'weekdays' && isWeekday) { editImpactsToday = true; sourceKeyForToday = 'mon'; }
              if ((selKey === 'sat' && today==='sat') || (selKey==='sun' && today==='sun')) { editImpactsToday = true; sourceKeyForToday = today; }
              if (selKey === today) { editImpactsToday = true; sourceKeyForToday = today; }
            } else { // all_7
              if (selKey === today) { editImpactsToday = true; sourceKeyForToday = today; }
            }

            if (editImpactsToday) {
              const nowMin = this._getNowMin();
              const arrNow = Array.isArray(this._weeklyDraft?.days?.[sourceKeyForToday]) ? this._weeklyDraft.days[sourceKeyForToday] : [];
              const hit = arrNow.find(x => nowMin >= x.startMin && nowMin < x.endMin);
              if (hit) {
                // Apply immediately to reflect the new block that currently covers "now"
                await this._applyImmediateForEntity(entity, Number(hit.temp), nowMin);
                this._scheduleNextApply();
              }
            }
          }
        } catch {}
      }
      return;
    }
    if (holiday && Array.isArray(this._holidayDraft)) {
      // Work on holiday draft only; persist on Holiday Save
      const arr = this._holidayDraft;
      if (crossesMidnight) {
        const ov1 = hasOverlap(arr, start, 1440, b?.id);
        const ov2 = hasOverlap(arr, 0, end, null);
        if (ov1 || ov2) { const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const overlap = ov1 || ov2; const msg = this._t('ui.overlap_msg').replace('{start}', this._label(ov1?Math.max(start, ov1.startMin):0)).replace('{end}', this._label(ov1?Math.min(1440, ov1.endMin):end)); errEl.innerHTML = `<div>${msg}</div>`; errEl.style.display='block'; } return; }
        if (!b) { const id1=Math.random().toString(36).slice(2,9); const id2=Math.random().toString(36).slice(2,9); arr.push({ id:id1, startMin:start, endMin:1440, temp: this._fromDisplayTemp(temp) }); arr.push({ id:id2, startMin:0, endMin:end, temp: this._fromDisplayTemp(temp) }); } else { b.temp=this._fromDisplayTemp(temp); b.startMin=start; b.endMin=1440; const id2=Math.random().toString(36).slice(2,9); arr.push({ id:id2, startMin:0, endMin:end, temp: this._fromDisplayTemp(temp) }); }
      } else {
        const overlap = hasOverlap(arr, start, end, b?.id);
        if (overlap) { const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const msg = this._t('ui.overlap_msg').replace('{start}', this._label(Math.max(start, overlap.startMin))).replace('{end}', this._label(Math.min(end, overlap.endMin))); errEl.innerHTML = `<div>${msg}</div>`; errEl.style.display='block'; } return; }
        if (!b) { const id=Math.random().toString(36).slice(2,9); arr.push({ id, startMin:start, endMin:end, temp:this._fromDisplayTemp(temp) }); } else { b.temp=this._fromDisplayTemp(temp); b.startMin=start; b.endMin=end; }
      }
      this._holidayDraft = arr.sort((a,bx)=>a.startMin-bx.startMin||a.endMin-bx.endMin);
      this._render(); this._closeEditor(); this._renderHolidayModal();
      return;
    }
    // Normal (non-weekly) save
    if (crossesMidnight) {
      // Check overlaps for both parts
      const ov1 = hasOverlap(row.blocks, start, 1440, b?.id);
      const ov2 = hasOverlap(row.blocks, 0, end, null);
      if (ov1 || ov2) {
        const errEl = this.shadowRoot.querySelector('.ed-error');
        if (errEl) {
          const overlap = ov1 || ov2;
          const msg = this._t('ui.overlap_msg').replace('{start}', this._label(ov1?Math.max(start, ov1.startMin):0)).replace('{end}', this._label(ov1?Math.min(1440, ov1.endMin):end));
          const fixStartLab = this._t('ui.fix_start_to').replace('{time}', this._label((ov1?1440:overlap.endMin)));
          const fixEndLab = this._t('ui.fix_end_to').replace('{time}', this._label((ov2?0:overlap.startMin)));
          // Relevance: if first part [start..1440] overlaps -> offer start fix; if second part [0..end] overlaps -> offer end fix
          const showStart = !!ov1;
          const showEnd = !!ov2;
          let btns = '';
          if (showStart) btns += `<button class="btn success ed-fix-start" type="button">${fixStartLab}</button>`;
          if (showEnd) btns += `<button class="btn success ed-fix-end" type="button">${fixEndLab}</button>`;
          // No extra cancel here; use the modal cancel button
          errEl.innerHTML = `<div>${msg}</div><div style=\"margin-top:8px; display:flex; gap:8px; justify-content:flex-end; flex-wrap:wrap;\">${btns}</div>`;
          errEl.style.display='block';
          const applyFix = (kind)=>{
            try {
              const edFrom = this.shadowRoot.querySelector('.ed-from');
              const edTo = this.shadowRoot.querySelector('.ed-to');
              const fromMerSel = this.shadowRoot.querySelector('.ed-from-mer');
              const toMerSel = this.shadowRoot.querySelector('.ed-to-mer');
              if (kind==='start') {
                const ns = ov1 ? Math.max(start, (ov1.endMin||start)) : (overlap.endMin||start);
                if (this._config?.time_12h) { if (edFrom) edFrom.value = this._toTimeInput12h(ns); if (fromMerSel) fromMerSel.value = (ns>=720 && ns<1440)?'PM':'AM'; } else { if (edFrom) edFrom.value = this._toTimeInput(ns); }
              } else {
                const ne = ov2 ? Math.min(end, (ov2.startMin||end)) : (overlap.startMin||end);
                if (this._config?.time_12h) { if (edTo) edTo.value = this._toTimeInput12h(ne); if (toMerSel) toMerSel.value = (ne>=720 && ne<1440)?'PM':'AM'; } else { if (edTo) edTo.value = this._toTimeInput(ne); }
              }
            } catch {}
            try { errEl.style.display='none'; errEl.textContent=''; } catch {}
            setTimeout(()=>{ this._saveEditor(); }, 0);
          };
          errEl.querySelector('.ed-fix-start')?.addEventListener('click', ()=>applyFix('start'));
          errEl.querySelector('.ed-fix-end')?.addEventListener('click', ()=>applyFix('end'));
          // No extra cancel handler
        }
        return;
      }
      if (!b) {
        const id1 = Math.random().toString(36).slice(2,9);
        const id2 = Math.random().toString(36).slice(2,9);
        row.blocks.push({ id:id1, startMin:start, endMin:1440, temp });
        row.blocks.push({ id:id2, startMin:0, endMin:end, temp });
      } else {
        // Update current b to first part and add second
        b.temp = temp; b.startMin = start; b.endMin = 1440;
        const id2 = Math.random().toString(36).slice(2,9);
        row.blocks.push({ id:id2, startMin:0, endMin:end, temp });
      }
      row.blocks.sort((a,bx)=>a.startMin-bx.startMin||a.endMin-bx.endMin);
    } else {
      if (!b) { const id = Math.random().toString(36).slice(2,9); b = { id, startMin: start, endMin: end, temp }; row.blocks.push(b); } else { b.temp = temp; b.startMin = start; b.endMin = end; }
      this._applyNoOverlapResize(entity, b, "left", b.startMin); this._applyNoOverlapResize(entity, b, "right", b.endMin);
    }
  // Persist local draft immediately for resilience
  try { this._persistDraftNow(); } catch {}
  await this._saveStore(); this._render(); this._closeEditor();
    // Immediate apply if a block now covers the current time (non-weekly path)
    try {
      if (this._config?.auto_apply && this._config?.apply_on_edit) {
        const nowMin = this._getNowMin();
        const arrNow = Array.isArray(row.blocks) ? row.blocks : [];
        const hitNow = arrNow.find(x => nowMin >= x.startMin && nowMin < x.endMin);
        if (hitNow) await this._applyImmediateForEntity(entity, Number(hitNow.temp), nowMin);
      }
    } catch {}
    if (this._config.apply_on_edit) await this._applyIfDesiredChanged(before); this._scheduleNextApply(); } catch (e) { console.error('[thermostat-timeline] _saveEditor error', e); if (errElGlobal) { errElGlobal.style.display = 'block'; errElGlobal.textContent = 'Fejl: ' + (e && e.message ? e.message : String(e)); } }}

  _toTimeInput(min){ if (!Number.isFinite(min)) min = 0; const m = ((Math.floor(min) % 1440) + 1440) % 1440; const hh=Math.floor(m/60), mm=Math.floor(m%60); return `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}`; }
  _fromTimeInput(str){ const m=/(\d{1,2}):(\d{2})$/.exec(str||""); if(!m) return 0; const h=Math.max(0,Math.min(23,parseInt(m[1],10))); const mi=Math.max(0,Math.min(59,parseInt(m[2],10))); return h*60+mi; }
  _toTimeInput12h(min){ if (!Number.isFinite(min)) min=0; const m=((Math.floor(min)%1440)+1440)%1440; let hh=Math.floor(m/60); const mm=Math.floor(m%60); let h=hh%12; if(h===0) h=12; return `${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')}`; }

  // ---------- Onboarding ----------
  _onboardStorageKey(){ return 'thermostat_timeline_onboard_seen_v1'; }
  _maybeOpenOnboard(){
    try {
      // Respect explicit disable flag
      if (this._disableOnboard) return;
      const flag = localStorage.getItem(this._onboardStorageKey());
      if (!flag) this._openOnboard();
    } catch {}
  }
  _openOnboard(){
    try {
      this._onboardOpen = true; this._onboardStep = 0; this._renderOnboard();
      const ov = this.shadowRoot && this.shadowRoot.querySelector('.overlay-onboard');
      if (ov) ov.classList.add('open');
    } catch {}
  }
  _closeOnboard(markSeen=false){
    try {
      const ov = this.shadowRoot && this.shadowRoot.querySelector('.overlay-onboard'); if (ov) ov.classList.remove('open');
      this._onboardOpen = false;
      // store preference
      const cb = this.shadowRoot && this.shadowRoot.querySelector('.onb-hide');
      if (markSeen || (cb && cb.checked)) {
        try { localStorage.setItem(this._onboardStorageKey(), '1'); } catch {}
      }
    } catch {}
  }
  _renderOnboard(){
    try {
  const img = this.shadowRoot && this.shadowRoot.querySelector('.onb-img');
  const vid = this.shadowRoot && this.shadowRoot.querySelector('.onb-vid');
      const hero = this.shadowRoot && this.shadowRoot.querySelector('.ob-hero');
      const txt = this.shadowRoot && this.shadowRoot.querySelector('.onb-text');
      const dots = this.shadowRoot && this.shadowRoot.querySelector('.onb-dots');
      const next = this.shadowRoot && this.shadowRoot.querySelector('.onb-next');
      const done = this.shadowRoot && this.shadowRoot.querySelector('.onb-done');
      const step = Math.max(0, Math.min(this._onboardSlides.length-1, this._onboardStep));
      const slide = this._onboardSlides[step] || { key:'onboard.step_main', img:'', fallback:'' };
      if (img && vid) {
        // First try HACS/relative asset; on error, try /local fallback if provided
        const nextUrl = slide.img || slide.fallback || '';
        if (this._onboardLastUrl !== nextUrl) {
          this._onboardLastUrl = nextUrl;
          const isVideo = /\.(mp4|webm|mov)(\?|#|$)/i.test(nextUrl);
          // Reset state
          img.style.display = 'none';
          vid.style.display = 'none';
          // Remove any previous message
          try { const m = hero && hero.querySelector('.onb-missing'); if (m) m.remove(); } catch {}
          if (isVideo) {
            // Setup video
            vid.onerror = null; vid.onloadeddata = null; vid.oncanplay = null;
            vid.muted = true; vid.playsInline = true; vid.loop = true; vid.autoplay = true;
            vid.onloadeddata = ()=>{ try { vid.style.display=''; img.style.display='none'; vid.play().catch(()=>{}); } catch{} };
            vid.onerror = ()=>{
              try {
                if (slide.fallback && vid.src !== slide.fallback) { vid.src = slide.fallback; vid.load?.(); return; }
                vid.style.display='none';
                if (hero) { let msg = hero.querySelector('.onb-missing'); if (!msg){ msg=document.createElement('div'); msg.className='onb-missing'; msg.style.fontSize='.9rem'; msg.style.color='var(--secondary-text-color)'; msg.style.padding='8px'; hero.append(msg); } msg.textContent='Video not found'; }
              } catch{}
            };
            vid.src = nextUrl; vid.load?.();
          } else {
            // Setup image
            img.onerror = null; img.onload = null;
            img.onerror = ()=>{
              try {
                if (slide.fallback && img.src !== slide.fallback) { img.src = slide.fallback; return; }
                img.style.display='none';
                if (hero) { let msg = hero.querySelector('.onb-missing'); if (!msg){ msg=document.createElement('div'); msg.className='onb-missing'; msg.style.fontSize='.9rem'; msg.style.color='var(--secondary-text-color)'; msg.style.padding='8px'; hero.append(msg); } msg.textContent='Image not found'; }
              } catch{}
            };
            img.onload = ()=>{ try { img.style.display=''; vid.style.display='none'; } catch{} };
            img.src = nextUrl;
          }
        }
      }
      if (txt) txt.textContent = this._t(slide.key);
      if (dots) {
        dots.innerHTML = '';
        for (let i=0;i<this._onboardSlides.length;i++){
          const d = document.createElement('div'); d.className = 'dot' + (i===step?' active':''); dots.append(d);
        }
      }
      if (next) next.style.display = step < this._onboardSlides.length-1 ? '' : 'none';
      if (done) done.style.display = step === this._onboardSlides.length-1 ? '' : 'none';
      // Apply i18n for title/buttons
      this._applyCardI18n();
    } catch {}
  }

  // ---------- Mutations ----------
  _addBlock(entity){ const before = this._desiredNowSnapshot(); const row=this._schedules[entity]; const now=this._getNowMin(); const start=this._clamp(Math.round(now),0,1380); const end=this._clamp(Math.round(start+60), start+15, 1440); const id=Math.random().toString(36).slice(2,9); let t=(row.defaultTemp||20)+2; const mx=this._config?.max_temp ?? 25; if (Number.isFinite(mx)) t=Math.min(t,mx); const b={id,startMin:start,endMin:end,temp:t}; row.blocks.push(b); this._applyNoOverlapResize(entity,b,"left",b.startMin); this._applyNoOverlapResize(entity,b,"right",b.endMin); this._active={entity,id}; this._debouncedSaveStore(); this._render(); if (this._config.apply_on_edit) this._applyIfDesiredChanged(before); this._scheduleNextApply(); }
  _deleteBlock(entity,id){ const before = this._desiredNowSnapshot(); const row=this._schedules[entity]; row.blocks=row.blocks.filter(b=>b.id!==id); if(this._active&&this._active.entity===entity&&this._active.id===id) this._active=null; this._debouncedSaveStore(); this._render(); if (this._config.apply_on_edit) this._applyIfDesiredChanged(before); this._scheduleNextApply(); }

  _t(k){ return ttLocalize(k, this._lang || this._hass || 'en'); }

  _applyCardI18n(){
    try {
      const t = (k)=> this._t(k);
      // Modal header + aria
      const modal = this.shadowRoot && this.shadowRoot.querySelector('.modal');
      if (modal) {
        modal.setAttribute('aria-label', t('ui.edit_block'));
        const h3 = modal.querySelector('h3');
        if (h3) h3.textContent = t('ui.edit_block');
      }
      // Field labels
      const fromLab = this.shadowRoot && this.shadowRoot.querySelector('.time-inline label');
      if (fromLab) fromLab.textContent = t('ui.from');
      const toLab = this.shadowRoot && this.shadowRoot.querySelector('.time-right label');
      if (toLab) toLab.textContent = t('ui.to');
  const tempLab = this.shadowRoot && this.shadowRoot.querySelector('.rowfull label');
  if (tempLab) tempLab.textContent = t('ui.temperature') + ' ('+ this._unitSymbol() +')';
      // Buttons
      const del = this.shadowRoot && this.shadowRoot.querySelector('.ed-delete');
      if (del) del.textContent = t('ui.delete');
      const cancel = this.shadowRoot && this.shadowRoot.querySelector('.ed-cancel');
      if (cancel) cancel.textContent = t('ui.cancel');
      const save = this.shadowRoot && this.shadowRoot.querySelector('.ed-save');
      if (save) save.textContent = t('ui.save');
  // Profiles modal buttons
  try { const ps = this.shadowRoot && this.shadowRoot.querySelector('.prof-save'); if (ps) ps.textContent = t('ui.save'); const pc = this.shadowRoot && this.shadowRoot.querySelector('.prof-close'); if (pc) pc.textContent = t('ui.cancel'); } catch {}
  // Week modal buttons
  const wcancelBtn = this.shadowRoot && this.shadowRoot.querySelector('.wk-cancel');
  if (wcancelBtn) wcancelBtn.textContent = t('ui.cancel');
  const wsaveBtn = this.shadowRoot && this.shadowRoot.querySelector('.wk-save');
  if (wsaveBtn) wsaveBtn.textContent = t('ui.save');
      // Header title fallback
      const titleEl = this.shadowRoot && this.shadowRoot.querySelector('.title');
      if (titleEl && (!this._config || !this._config.title)) {
        titleEl.textContent = t('card.title_default');
      }
      // Add button: '+ Tilføj' -> localized
      const addBtns = this.shadowRoot && this.shadowRoot.querySelectorAll('.btn.primary');
      if (addBtns) {
        addBtns.forEach((btn)=>{
          if (btn.textContent && btn.textContent.trim().startsWith('+')) {
            btn.textContent = '+ ' + t('ui.add_block');
          }
        });
      }
      // Week modal add button
      const wkAdd = this.shadowRoot && this.shadowRoot.querySelector('.wk-add');
      if (wkAdd) wkAdd.textContent = '+ ' + t('ui.add_block');
      // Week modal labels
      try {
        const wt = this.shadowRoot && this.shadowRoot.querySelector('.week-title'); if (wt) wt.textContent = t('week.editor.title');
        const wml = this.shadowRoot && this.shadowRoot.querySelector('.week-mode-label'); if (wml) wml.textContent = t('week.mode');
        const wnote = this.shadowRoot && this.shadowRoot.querySelector('.week-note'); if (wnote) wnote.textContent = t('week.editor.preview_note');
        const wsel = this.shadowRoot && this.shadowRoot.querySelector('.week-mode'); if (wsel) {
          for (const opt of Array.from(wsel.options)){
            if (opt.value==='weekday_weekend') opt.textContent = t('week.mode.weekday_weekend');
            if (opt.value==='weekday_sat_sun') opt.textContent = t('week.mode.weekday_sat_sun');
            if (opt.value==='all_7') opt.textContent = t('week.mode.all_7');
          }
        }
        // Copy-to-rooms modal localization
        try {
          const crt = this.shadowRoot && this.shadowRoot.querySelector('.copyrooms-title'); if (crt) crt.textContent = t('week.copy_to_rooms.title');
          const crd = this.shadowRoot && this.shadowRoot.querySelector('.copyrooms-desc'); if (crd) crd.textContent = t('week.copy_to_rooms.select');
          const crc = this.shadowRoot && this.shadowRoot.querySelector('.copyrooms-cancel'); if (crc) crc.textContent = t('ui.cancel');
          const cra = this.shadowRoot && this.shadowRoot.querySelector('.copyrooms-apply'); if (cra) cra.textContent = t('week.copy_to_rooms.apply');
        } catch {}
        // Weekdays button text in rows is set during render via this._t('week.button')
      } catch {}
      // Pause overlay strings
      try {
        const pt = this.shadowRoot && this.shadowRoot.querySelector('.pause-title'); if (pt) pt.textContent = t('pause.menu_title');
        const p1 = this.shadowRoot && this.shadowRoot.querySelector('.pause-1h'); if (p1) p1.textContent = t('pause.off_1h');
        const p5 = this.shadowRoot && this.shadowRoot.querySelector('.pause-5h'); if (p5) p5.textContent = t('pause.off_5h');
        const pc = this.shadowRoot && this.shadowRoot.querySelector('.pause-custom'); if (pc) pc.textContent = t('pause.off_custom');
        const pi = this.shadowRoot && this.shadowRoot.querySelector('.pause-indef'); if (pi) pi.textContent = t('pause.off_indef');
        const pr = this.shadowRoot && this.shadowRoot.querySelector('.pause-resume'); if (pr) pr.textContent = t('pause.resume');
        const px = this.shadowRoot && this.shadowRoot.querySelector('.pause-close'); if (px) px.textContent = t('pause.close');
      } catch {}
    } catch (e) { /* ignore */ }
  }

  _colorFor(eid, tempC){
    try {

      // Onboarding i18n
      try {
        const ttl = this.shadowRoot && this.shadowRoot.querySelector('.onb-title'); if (ttl) ttl.textContent = t('onboard.title');
        const prev = this.shadowRoot && this.shadowRoot.querySelector('.onb-prev'); if (prev) prev.textContent = t('onboard.prev');
        const next = this.shadowRoot && this.shadowRoot.querySelector('.onb-next'); if (next) next.textContent = t('onboard.next');
        const skip = this.shadowRoot && this.shadowRoot.querySelector('.onb-skip'); if (skip) skip.textContent = t('onboard.skip');
        const done = this.shadowRoot && this.shadowRoot.querySelector('.onb-done'); if (done) done.textContent = t('onboard.done');
        const hideLbl = this.shadowRoot && this.shadowRoot.querySelector('.onb-hide-lbl'); if (hideLbl) hideLbl.textContent = t('onboard.dont_show');
      } catch {}
      // Support merged entities by always resolving to primary
  const primary = this._groupPrimaryOf ? this._groupPrimaryOf(eid) : eid;
  const cr = (this._config?.color_ranges) || {};
  const globalFirst = !!this._config?.color_global;
  const candidates = globalFirst ? ['*', 'default', primary, eid] : [primary, eid, '*', 'default'];
      let ranges = [];
      for (const k of candidates){ if (Array.isArray(cr[k]) && cr[k].length){ ranges = cr[k]; break; } }
      for (const r of ranges){
        const from = Number(r.from);
        const to = Number(r.to);
        if (!Number.isFinite(from) || !Number.isFinite(to)) continue;
        if (tempC >= Math.min(from,to) && tempC <= Math.max(from,to)) return r.color || '';
      }
    } catch {}
    return '';
  }

  // Compute readable text color for a given background
  _contrastTextColor(bg){
    try {
      const rgb = (c)=>{
        if(!c) return null;
        let s=String(c).trim();
        if (s.startsWith('rgb')){
          const m=s.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i); if(!m) return null; return {r:+m[1], g:+m[2], b:+m[3]};
        }
        if (s[0]==='#') s=s.slice(1);
        if (s.length===3) s = s.split('').map(x=>x+x).join('');
        if (s.length!==6) return null;
        const r=parseInt(s.slice(0,2),16), g=parseInt(s.slice(2,4),16), b=parseInt(s.slice(4,6),16);
        if ([r,g,b].some(x=>Number.isNaN(x))) return null; return {r,g,b};
      };
      const o = rgb(bg); if (!o) return null;
      // Perceived luminance (sRGB)
      const lum = (v)=>{ v/=255; return v<=0.03928? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
      const L = 0.2126*lum(o.r) + 0.7152*lum(o.g) + 0.0722*lum(o.b);
      return L > 0.5 ? '#000000' : '#ffffff';
    } catch { return null; }
  }

}
customElements.define("thermostat-timeline-card", ThermostatTimelineCard);

/* ----------------- LIGHTWEIGHT PICKER (TTEntityPicker) ----------------- */
class TTEntityPicker extends HTMLElement {
  static get observedAttributes(){ return ['include-domains','label','disabled']; }
  constructor(){
    super();
    this.attachShadow({ mode: 'open' });
    this._hass = null;
    this._value = '';
    this._filter = null; // function
    this._domains = [];
    this._disabled = false;
  }
  set hass(h){ this._hass = h; this._render(); }
  get hass(){ return this._hass; }
  set value(v){ this._value = v || ''; this._render(); }
  get value(){ return this._value || ''; }
  set entityFilter(fn){ this._filter = typeof fn === 'function' ? fn : null; this._render(); }
  get entityFilter(){ return this._filter; }
  set disabled(v){ this._disabled = !!v; this._render(); }
  get disabled(){ return !!this._disabled; }
  attributeChangedCallback(name, _old, val){
    if (name === 'disabled') this._disabled = val !== null;
    this._render();
  }
  connectedCallback(){ this._render(); }
  _parseDomains(){
    try {
      const a = this.getAttribute('include-domains');
      if (!a) return [];
      const v = typeof a === 'string' ? JSON.parse(a) : a;
      return Array.isArray(v) ? v.map(x=>String(x)) : [];
    } catch { return []; }
  }
  _render(){
    const label = this.getAttribute('label') || '';
    this._domains = this._parseDomains();
    const opts = [];
    try {
      const states = this._hass?.states || {};
      for (const id of Object.keys(states)){
        const dom = id.split('.')[0];
        if (this._domains.length && !this._domains.includes(dom)) continue;
        const st = states[id];
        if (this._filter && !this._filter(st)) continue;
        const name = st?.attributes?.friendly_name || (id.split('.')[1] || id);
        opts.push({ id, name });
      }
    } catch {}
    opts.sort((a,b)=> a.name.localeCompare(b.name,'en',{sensitivity:'base'}));
    const selOpts = ['<option value="">'+(label||'Select')+'</option>'].concat(
      opts.map(o=>`<option value="${o.id}">${o.name} (${o.id})</option>`)
    );
    const css = `
      :host{ display:block; }
      .wrap{ width:100%; min-width:250px; max-width:440px; }
      .sel{ position: relative; }
      select{ width:100%; height:36px; min-height:36px; appearance:none; -webkit-appearance:none; -moz-appearance:none; padding:6px 34px 6px 10px; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); box-sizing: border-box; }
      select:focus{ outline:none; border-color: var(--primary-color); box-shadow: 0 0 0 2px color-mix(in oklab, var(--primary-color) 35%, transparent); }
      select:hover{ border-color: color-mix(in oklab, var(--primary-text-color) 20%, var(--divider-color)); }
      select:disabled{ opacity:.6; cursor: not-allowed; }
      .dd-arrow{ position:absolute; right:12px; top:50%; transform: translateY(-50%); width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid var(--secondary-text-color); pointer-events:none; }
      select:disabled + .dd-arrow{ opacity:.6; }
      .label{ font-size:.85rem; color: var(--secondary-text-color); margin: 2px 0 4px; display:none; }
    `;
    this.shadowRoot.innerHTML = `<style>${css}</style><div class="wrap"><div class="label"></div><div class="sel"><select aria-label="${label}">${selOpts.join('')}</select><span class="dd-arrow" aria-hidden="true"></span></div></div>`;
    const select = this.shadowRoot.querySelector('select');
    if (select) {
      try { select.value = this._value || ''; } catch {}
      try { select.disabled = !!this._disabled; } catch {}
      select.onchange = (e)=>{
        this._value = e.target.value || '';
        this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this._value }, bubbles: true, composed: true }));
      };
    }
  }
}
customElements.define('tt-entity-picker', TTEntityPicker);

/* ----------------- CONFIG EDITOR ----------------- */
class ThermostatTimelineCardEditor extends HTMLElement {
  setConfig(config) { this._config = { ...ThermostatTimelineCard.getStubConfig(), ...(config||{}) }; this._render(); }
  set hass(hass) { this._hass = hass; this._lang = ttGetLangFromHass(hass);
  // Avoid clobbering inputs while user is typing (preserve previous behavior)
  const ae = this.shadowRoot && this.shadowRoot.activeElement;
  if (this._suspendRender) return;
  if (ae) {
    try {
      if (ae.classList?.contains("def") || ae.classList?.contains("rowh") || ae.classList?.contains("title") || ae.classList?.contains('label-input')
          || ae.classList?.contains('mi-from') || ae.classList?.contains('mi-to') || ae.classList?.contains('mi-temp')
          || (ae.closest && ae.closest('.mini-ed'))) return;
      if (ae.closest && (ae.closest('ha-entity-picker') || ae.closest('tt-entity-picker'))) return;
    } catch {}
  }
  // Keep title preset in sync with language when user hasn't customized it
  try {
    if (this._config) {
      const cur = String(this._config.title || '');
      if (!cur || this._isDefaultTitle(cur)) {
        const next = ttLocalize('card.title_default', this._hass || this._lang || 'en');
        if (next && next !== cur) { this._config.title = next; this._emit(); }
      }
    }
  } catch {}
  // Full render and i18n apply (normal path)
  this._render(); this._applyEditorI18n();
  // Ensure entity pickers are hydrated with hass after hard refresh
  try { this._forcePickerRefresh && this._forcePickerRefresh(); } catch {}
  // Also run a lightweight service-availability-only check in case services changed while editor open
  try {
    const root = this.shadowRoot;
    if (root) {
      const hasService = !!(this._hass && this._hass.services && this._hass.services['thermostat_timeline']);
      if (!hasService) {
        const warnText = this._t ? this._t('editor.store_missing') : null;
  const msg = warnText && warnText !== 'editor.store_missing' ? warnText : 'Integration "Thermostat Pro Timeline Sync" is not installed. Shared storage is unavailable.';
        let warn = root.querySelector('.store-missing');
        if (!warn) {
          warn = document.createElement('div'); warn.className = 'store-missing'; warn.style.color = 'var(--error-color)'; warn.style.fontSize = '.9rem'; warn.style.marginTop = '6px';
          const controls = root.querySelector('.store-controls'); if (controls && controls.parentNode) controls.parentNode.insertBefore(warn, controls);
        }
        while (warn.firstChild) warn.removeChild(warn.firstChild);
          warn.appendChild(document.createTextNode(msg.replace(/\.$/, '') + '. '));
          (function(){
            let link = document.createElement('a');
            // Use my.home-assistant.io deep link to the HACS repository page
            link.href = 'https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=thermostat-pro-timeline-sync';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.color = 'var(--error-color)';
            link.style.textDecoration = 'underline';
            link.style.fontWeight = '500';
            link.textContent = 'Åbn i HACS';
            warn.appendChild(link);
          })();
        const sw = root.querySelector('.store-enable'); if (sw) sw.disabled = true;
        const picker = root.querySelector('.storage'); if (picker) picker.disabled = true;
      } else {
        const rootWarn = root.querySelector('.store-missing'); if (rootWarn && rootWarn.parentNode) rootWarn.parentNode.removeChild(rootWarn);
        const sw = root.querySelector('.store-enable'); if (sw) sw.disabled = false;
        const picker = root.querySelector('.storage'); if (picker) picker.disabled = false;
      }
      // Update integration status chip in tabs
      try {
        const chip = root.querySelector('.int-status');
        const icon = chip?.querySelector('ha-icon');
        const txt = chip?.querySelector('.text');
        if (chip && icon && txt) {
          if (hasService) {
            chip.classList.remove('bad'); chip.classList.add('ok');
            icon.setAttribute('icon','mdi:cloud-check-outline');
            txt.textContent = this._t ? this._t('editor.integration.connected') : 'Connected to integration';
          } else {
            chip.classList.remove('ok'); chip.classList.add('bad');
            icon.setAttribute('icon','mdi:cloud-off-outline');
            txt.textContent = this._t ? this._t('editor.integration.disconnected') : 'Not connected to integration';
          }
          // Click to jump to Sync tab
          try { chip.style.userSelect='none'; chip.onclick = ()=>{ this._activeTab='sync'; this._render(); }; } catch {}
        }
      } catch {}
    }
  } catch {}
 }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  this._openCount = 0;
    this._pendingEmit = false;
  this._openRows = new Set();
  this._openColorRows = new Set();
  this._suspendRender = false;
  this._activeTab = 'settings';
  // Holidays inline editor state
  this._holDraft = null;      // { rooms: { [eid]: [ {id,startMin,endMin,temp} ] } }
  this._holRoom = null;       // active room eid
  this._holEditing = null;    // { room, blockId }
  this._holMini = null;       // { room, blk }
    this.shadowRoot.innerHTML = `
      <style>
        .wrap { padding:8px 12px; display:grid; gap:16px; max-width: 480px; }
        .row { display:grid; gap:10px; }
        .label { font-size:.85rem; color: var(--secondary-text-color); }
        .entities { display:grid; gap:10px; }
        /* Entity row (summary + collapsible details) */
        .inline { transition: none; display:grid; gap:6px; max-width: 480px; grid-template-columns: 1fr; grid-auto-rows: auto; align-items: start; }
        /* actions are inside summary; details always stack below summary */
        .inline > div:first-child { grid-column:  1; grid-row: 1 / span 2; }
        .inline > .actions { grid-column: 2; grid-row: 2; align-self: center; }

        .inline .summary { display:flex; align-items:center; justify-content:space-between; padding:6px; border:1px dashed var(--divider-color); border-radius:8px; background: var(--secondary-background-color, transparent); }
        .inline .summary-left { display:flex; align-items:center; gap:8px; min-width:0; }
        .inline .summary-title { font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width: 320px; }
        /* New: subtitle below title with merged entities */
        .inline .summary-text { display:grid; gap:2px; min-width:0; }
        .inline .summary-sub { font-size:.8rem; color: var(--secondary-text-color); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width: 320px; }
        .inline .expander { width:28px; height:28px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; }
        .inline.open .expander { transform: rotate(180deg); }
  .inline .details { display:none; grid-template-columns: minmax(250px, 440px); gap:6px; padding:6px; border:1px dashed var(--divider-color); border-radius:8px; background: var(--secondary-background-color, transparent); }
  /* segmented control */
  .seg { display:inline-flex; border:1px solid var(--divider-color); border-radius:10px; overflow:hidden; }
  .seg button { padding:6px 10px; background: var(--card-background-color); color: var(--primary-text-color); border:0; cursor:pointer; }
  .seg button.active { background: var(--primary-color); color: var(--text-primary-color, #fff); }
        .inline.open .details { display:grid; }
         ha-textfield { width:100%; max-width:440px; }
    .label-input { width:100%; max-width:440px; display:block; }
    /* Custom input style matching pickers */
    .tt-input { height:36px; min-height:36px; padding:6px 10px; box-sizing:border-box; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); }
  /* entity picker width constraint */
  .inline ha-entity-picker, .inline tt-entity-picker { width: 100%; min-width: 250px; max-width: 440px; overflow: hidden; text-overflow: ellipsis; display:block; min-height: 48px; }
        /* Add entity button styles */
.add-entity-btn {
  display:inline-flex; align-items:center; gap:8px;
  width:max-content; padding:8px 12px;
  border-radius:10px; border:1px solid var(--divider-color);
  background: var(--card-background-color);
  color: var(--primary-text-color);
  cursor:pointer; user-select:none;
  max-width: 480px;
}
.add-entity-btn:focus { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      
        /* remove button */
        .remove-btn { flex-shrink: 0; padding:4px 8px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--error-color); display:inline-flex; align-items:center; gap:6px; cursor:pointer; user-select:none; }
        
        .actions { display:flex; gap:8px; justify-content:flex-end; align-items:center; }
        .order-btn {
          display:inline-flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:8px;
          border:1px solid var(--divider-color);
          background: var(--card-background-color);
          cursor:pointer; user-select:none;
        }
        .order-btn[disabled] { opacity: .5; cursor: not-allowed; }
        
        /* Drag & drop */
        .drag-handle {
          display:inline-flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:8px;
          border:1px dashed var(--divider-color);
          background: var(--card-background-color);
          cursor: grab; user-select:none;
        }
        .drag-handle:active { cursor: grabbing; }
        .inline.drag-over { outline: 2px dashed var(--primary-color); outline-offset: 2px; }
        
        /* Pointer-driven drag */
        .drag-ghost {
          position: fixed;
          pointer-events: none;
          opacity: .9;
          z-index: 9999;
        }
        .placeholder { border:2px dashed var(--primary-color); border-radius:10px; margin:6px 0; }
        
        /* Merge chips */
        .linked-chips { display:flex; flex-wrap:wrap; gap:6px; }
        .pill-chip { display:inline-flex; align-items:center; gap:6px; padding:2px 8px; border:1px solid var(--divider-color); border-radius:999px; background: var(--secondary-background-color, transparent); color: var(--primary-text-color); }
        .pill-chip .rm { cursor:pointer; border:none; background:transparent; color: var(--error-color); font-weight:700; line-height:1; padding:0 2px; }
        .pill-chip .rm:focus { outline: 2px solid var(--primary-color); outline-offset:2px; }
  /* Tabs */
  /* Tabs: show as two rows (3 columns) to avoid cramped layout */
  /* Tabs: wrap to next line when space runs out; keep nice gaps */
  .tabs { display:flex; flex-wrap: wrap; gap:12px 18px; align-items:flex-end; padding:0 6px; margin:8px 0; border-bottom: 1px solid var(--divider-color); position:relative; z-index:3; }
  .tab-btn { appearance:none; border:none; background:transparent; color: var(--secondary-text-color); padding:10px 2px; margin:0; cursor:pointer; font-weight:600; position:relative; max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .tab-btn::after { content:""; position:absolute; left:0; right:0; bottom:-1px; height:2px; background: transparent; border-radius:2px; }
  .tab-btn.active { color: var(--primary-text-color); }
  .tab-btn.active::after { background: var(--primary-color); }
  /* Integration availability status (small badge under tabs) */
  .status-wrap { display:flex; justify-content:flex-start; padding:0 6px 4px; }
  .int-status { display:inline-flex; align-items:center; gap:4px; padding:2px 6px; border:1px solid var(--divider-color); border-radius:999px; background: var(--secondary-background-color, transparent); cursor:pointer; }
  .int-status.ok { color: var(--success-color, #2e7d32); border-color: color-mix(in oklab, var(--success-color, #2e7d32) 50%, var(--divider-color)); }
  .int-status.bad { color: var(--error-color); border-color: color-mix(in oklab, var(--error-color) 50%, var(--divider-color)); }
  .int-status ha-icon { --mdc-icon-size: 14px; }
  .int-status .text { font-size:.8rem; white-space:nowrap; }
  /* Remove blue focus ring on click; keep it for keyboard users only */
  .tab-btn:focus { outline: none; }
  .tab-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset:2px; border-radius:4px; }
  /* Compact inputs for Colors tab */
  .colors-row { display:grid; grid-template-columns: 88px 88px 48px 1fr; gap:8px; align-items:center; padding-right:6px; }
  .colors-row input[type=number] { width:88px; height:28px; padding:4px 6px; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); box-sizing: border-box; display:block; }
  .colors-row input[type=color] { width:48px; height:28px; padding:0; border:1px solid var(--divider-color); border-radius:6px; background: transparent; box-sizing: border-box; display:block; }
  .colors-row .remove-btn { padding:4px 10px; width:auto; justify-self:end; align-self:center; }
  .colors-head { display:grid; grid-template-columns: 88px 88px 48px 1fr; gap:8px; align-items:center; margin:0; color: var(--secondary-text-color); font-size:.8rem; line-height:1; }
  /* Visual card for each color range */
  .color-item { border:1px dashed var(--divider-color); border-radius:10px; padding:6px; background: var(--secondary-background-color, transparent); }
  .color-item + .color-item { margin-top:6px; }
  /* Compact info icon with native tooltip (title) */
  .info-icon { width:18px; height:18px; display:inline-flex; align-items:center; justify-content:center; border:1px solid var(--divider-color); border-radius:50%; color: var(--secondary-text-color); font-weight:700; font-size:.75rem; cursor:pointer; background: transparent; }
  .info-icon::after { content:'?'; line-height:1; }
  .info-pop { position: fixed; z-index: 10000; max-width: 520px; padding: 10px 12px; border-radius: 8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); box-shadow: var(--ha-card-box-shadow, 0 4px 12px rgba(0,0,0,.2)); font-size:.9rem; }
  .info-pop.hidden { display:none; }
  /* Space the add button away from header line */
  .tab-colors .add-entity-btn { margin-top:6px; }
  .colors-head span:nth-child(1),
  .colors-head span:nth-child(2),
  .colors-head span:nth-child(3) { padding-left:10px; }
  /* Away tab: fix picker width */
  .tab-away .away-person-picker { width: 320px; min-width: 320px; max-width: 320px; }
  /* Colors tab actions row */
  .tab-colors .colors-actions { display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-top:6px; }
  /* Bottom action row: align heights of buttons */
  .row-bottom-actions .reset-onboard { padding:4px 8px; border-radius:8px; display:none !important; }
        /* Empty state + attention pulse */
        .empty-box { border:1px dashed var(--divider-color); border-radius:10px; padding:14px; max-width:480px; color: var(--secondary-text-color); display:grid; gap:10px; }
        .pulse-attn { position:relative; }
        .pulse-attn.pulse { animation: tt-pulse 1.2s ease-in-out 0s 4; }
        @keyframes tt-pulse { 0% { box-shadow: 0 0 0 0 rgba(var(--rgb-primary-color, 3,155,229), .8); }
          70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); } }
        /* Store controls: dropdown above, then buttons side-by-side */
        .store-controls { display:flex; flex-direction: column; gap:8px; align-items: flex-start; }
        .store-controls .storage { width: 100%; }
  .store-controls .store-btns { display:flex; gap:8px; align-items:stretch; flex-wrap: nowrap; justify-content: flex-start; width:100%; }
  .store-controls .store-btns .remove-btn { flex: 1 1 0; justify-content: center; height:100%; text-align:center; }
  /* Holidays inline editor */
  .holiday-ed { display:grid; gap:8px; }
  .holiday-ed .wk-tab{ appearance:none; border:none; background:transparent; color: var(--secondary-text-color); cursor:pointer; padding:6px 10px; border-bottom:2px solid transparent; border-radius:0; font-weight:600; }
  .holiday-ed .wk-tab.active{ color: var(--primary-text-color); border-bottom-color: var(--primary-color); }
  .holiday-ed .week-scale{ position:relative; height:32px; margin:0 6px; }
  .holiday-ed .week-track{ position:relative; height:64px; border:1px dashed var(--divider-color); border-radius:10px; overflow:hidden; margin:0 6px; }
  .holiday-ed .block{ position:absolute; top:6px; bottom:6px; border:1px solid var(--divider-color); border-radius:10px; background: var(--secondary-background-color, rgba(0,0,0,.05)); display:flex; align-items:center; gap:10px; padding:0 10px; box-sizing:border-box; }
  .holiday-ed .block .pill{ display:none; }
  .holiday-ed .hol-toolbar{ display:flex; justify-content:flex-end; gap:8px; }
  .holiday-ed .mini-ed{ border:1px solid var(--divider-color); border-radius:10px; padding:8px; display:grid; gap:8px; max-width: 460px; background: var(--secondary-background-color, transparent); }
  .holiday-ed .mini-ed .row{ display:flex; gap:8px; align-items:center; }
  .holiday-ed input[type=time], .holiday-ed input[type=number]{ height:28px; padding:2px 6px; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); }
  /* Make mini-editor buttons same height */
  .holiday-ed .mini-ed .row .add-entity-btn,
  .holiday-ed .mini-ed .row .remove-btn{ height:36px; min-height:36px; display:inline-flex; align-items:center; }
  /* Make Backup row buttons equal height */
  .tab-backup .add-entity-btn,
  .tab-backup .remove-btn{ height:40px; min-height:40px; display:inline-flex; align-items:center; }
  /* Match add-date button height to date input */
  .tab-holidays .settings-card .add-entity-btn { height:36px; min-height:36px; display:inline-flex; align-items:center; }
  .tab-holidays .settings-card input.tt-input[type=date] { height:36px; min-height:36px; }
  /* Tooltip style (same as card) */
  .wk-tooltip{ position:absolute; z-index:10000; pointer-events:none; padding:6px 8px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); font-size:.85rem; box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0,0,0,.2)); }
        </style>
  <div class="status-wrap"><span class="int-status" role="status"><ha-icon class="icon" icon="mdi:cloud-off-outline"></ha-icon><span class="text">Not connected</span></span></div>
  <div class="tabs" role="tablist"><button class="tab-btn tab-settings-btn active" role="tab" aria-selected="true">Settings</button><button class="tab-btn tab-rooms-btn" role="tab" aria-selected="false">Rooms</button><button class="tab-btn tab-colors-btn" role="tab" aria-selected="false">Colors</button><button class="tab-btn tab-holidays-btn" role="tab" aria-selected="false">Holidays</button><button class="tab-btn tab-away-btn" role="tab" aria-selected="false">Away</button><button class="tab-btn tab-sync-btn" role="tab" aria-selected="false">Sync</button><button class="tab-btn tab-backup-btn" role="tab" aria-selected="false">Backup</button></div>
      <div class="wrap tab-settings">
        <div class="row"><div class="label">Titel</div><ha-textfield class="title" label="Titel"></ha-textfield></div>
        
        
        
<style>
/* Settings (grouped card with separators) */
.settings-card {
  border:1px solid var(--divider-color);
  border-radius:12px;
  background: var(--card-background-color);
  padding:12px;
  display:grid;
  gap:10px;
  max-width: 480px;
}
.settings-card .grid2 {
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap:10px;
  margin-bottom: 6px;
}
.settings-card .sfield { display:grid; gap:2px; align-items:start; }
.settings-card .slabel { font-size:.8rem; color: var(--secondary-text-color); line-height:1; padding-left:4px; }
.settings-card .settings-input { width:88px; height:28px; padding:4px 6px; border:1px solid var(--divider-color); border-radius:8px; background: var(--card-background-color); color: var(--primary-text-color); box-sizing:border-box; }
.settings-card .setting {
  display:grid;
  grid-template-columns: 1fr auto;
  align-items:center;
  gap:10px;
  padding:10px 4px;
}
.settings-card .setting + .setting {
  border-top: 1px solid var(--divider-color);
}
.settings-card .title { font-weight:600; }
.settings-card .desc { font-size:.85rem; color: var(--secondary-text-color); margin-top:2px; }
</style>
<div class="settings-card">
  <div class="grid2">
    <div class="sfield">
      <div class="slabel slabel-def">Standard °C</div>
      <input class="def settings-input" type="number" min="5" max="35" step="0.5" />
    </div>
    <div class="sfield">
      <div class="slabel slabel-rowh">Rækkens højde (px)</div>
      <input class="rowh settings-input" type="number" min="40" max="120" step="1" />
    </div>
    <div class="sfield">
      <div class="slabel slabel-minc">Min °C</div>
      <input class="minc settings-input" type="number" min="0" max="45" step="0.5" />
    </div>
    <div class="sfield">
      <div class="slabel slabel-maxc">Max °C</div>
      <input class="maxc settings-input" type="number" min="5" max="50" step="0.5" />
    </div>
  </div>

  <div class="setting">
    <div class="text">
      <div class="title">Auto apply</div>
      <div class="desc">Når slået til forsøger kortet automatisk at sætte temperaturen på de valgte <code>climate</code>-entities, så den matcher den planlagte værdi for “lige nu”.</div>
    </div>
    <ha-switch class="auto"></ha-switch>
  </div>

  <div class="setting">
    <div class="text">
      <div class="title">Ved redigering</div>
      <div class="desc">Når du ændrer blokke i tidslinjen, og ændringen påvirker den aktuelle tid, anvendes den nye temperatur med det samme.</div>
    </div>
    <ha-switch class="applyedit"></ha-switch>
  </div>

  <div class="setting">
    <div class="text">
      <div class="title">Ved Standard °C ændring</div>
      <div class="desc">Når “Standard °C” ændres og det påvirker temperaturen for nuværende tidsrum, anvendes den nye temperatur straks.</div>
    </div>
    <ha-switch class="applydef"></ha-switch>
  </div>
  <div class="setting pausebtn-setting">
    <div class="text">
      <div class="title pausebtn-title">Pause button</div>
      <div class="desc pausebtn-desc">Show global pause button in the card header.</div>
    </div>
    <ha-switch class="pausebtn-enable"></ha-switch>
  </div>
  <div class="setting">
    <div class="text">
      <div class="title timefmt-title">Time format</div>
      <div class="desc timefmt-desc">Choose 24-hour or 12-hour (AM/PM) display for times on the card.</div>
    </div>
    <div class="seg timefmt">
      <button type="button" class="fmt24">24h</button>
      <button type="button" class="fmt12">12h</button>
    </div>
  </div>

  <div class="setting">
    <div class="text">
      <div class="title timesrc-title">Time source</div>
      <div class="desc timesrc-desc">Choose whether the card uses the browser time or Home Assistant time zone for “now”.</div>
    </div>
    <div class="seg timesrc">
      <button type="button" class="srcBrowser">Browser</button>
      <button type="button" class="srcHa">Home Assistant</button>
    </div>
  </div>

  <div class="setting">
    <div class="text">
      <div class="title tempfmt-title">Temperature unit</div>
      <div class="desc tempfmt-desc">Choose Celsius (°C) or Fahrenheit (°F) for display in the card and editors.</div>
    </div>
    <div class="seg tempfmt">
      <button type="button" class="unitC">°C</button>
      <button type="button" class="unitF">°F</button>
    </div>
  </div>
  <div class="setting week-setting">
    <div class="text">
      <div class="title">Ugedage</div>
      <div class="desc week-enable-desc">Aktivér plan per ugedag. Hvis slået fra, bruges samme plan hver dag.</div>
    </div>
    <ha-switch class="week-enable"></ha-switch>
  </div>
  <div class="setting profiles-setting">
    <div class="text">
      <div class="title">Profiles</div>
      <div class="desc profiles-enable-desc">Allow named daily schedules you can activate to override the main plan.</div>
    </div>
    <ha-switch class="profiles-enable"></ha-switch>
  </div>
  <div class="setting holidays-setting">
    <div class="text">
      <div class="title">Holidays</div>
      <div class="desc holidays-enable-desc">Use a special daily schedule on public holidays.</div>
    </div>
    <ha-switch class="holidays-enable"></ha-switch>
  </div>
</div>
  </div>
  <div class="wrap tab-rooms" style="display:none;">
    <div class="row">
      <div class="label">Rooms</div>
      <div class="entities"></div>
      <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
        <button class="add-entity-btn add-room-btn" type="button"><ha-icon icon="mdi:plus"></ha-icon><span>Tilføj entity</span></button>
      </div>
    </div>
  </div>
  <div class="wrap tab-colors" style="display:none;"></div>
  <div class="wrap tab-holidays" style="display:none; max-width:480px;"></div>
  <div class="wrap tab-away" style="display:none; max-width:480px;">
    <div class="settings-card">
      <div class="setting">
        <div class="text">
          <div class="title away-enable-title">Away</div>
          <div class="desc away-desc">Lower temperature when nobody is home.</div>
        </div>
        <ha-switch class="away-enable"></ha-switch>
      </div>
      <div class="setting">
        <div class="text">
          <div class="title away-temp-title">Away temperature</div>
          <div class="desc away-temp-desc"></div>
        </div>
        <input class="away-temp settings-input" type="number" step="0.5" />
      </div>
      <div class="setting">
        <div class="text">
          <div class="title away-persons-title">People</div>
          <div class="desc away-persons-desc"></div>
        </div>
        <div style="display:grid; gap:8px;">
          <ha-entity-picker class="away-person-picker" include-domains='["person"]'></ha-entity-picker>
          <div class="linked-chips away-chips"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="wrap tab-sync" style="display:none;">
    <div class="row">
      <div class="label"></div>
      <div class="settings-card store-card">
        <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <div style="display:grid; gap:2px;">
            <div class="store-title" style="font-weight:600; display:flex; align-items:center; gap:6px;"><span class="store-title-text">Shared storage + background control</span><button type="button" class="info-icon" aria-label="Info"></button></div>
            <div class="store-desc" style="font-size:.85rem; color:var(--secondary-text-color);"><span class="store-desc-text">Saves schedules to the selected sensor and enables background control.</span></div>
          </div>
          <ha-switch class="store-enable"></ha-switch>
        </div>
        
        <div class="store-controls" style="display:flex; flex-direction:column; gap:8px; align-items:flex-start; margin-top:6px;">
          <tt-entity-picker class="storage" label="sensor.thermostat_timeline" include-domains='["sensor"]'></tt-entity-picker>
          <!-- Sync policy controls -->
          <div class="setting" style="grid-template-columns: 1fr auto; width:100%;">
            <div class="text">
              <div class="title">Sync frequency</div>
              <div class="desc">Choose instant save or delay writes to storage.</div>
            </div>
            <div class="seg syncmode">
              <button type="button" class="sync-inst">Instant</button>
              <button type="button" class="sync-del">Delay</button>
            </div>
          </div>
          <div class="setting sync-delay-row" style="grid-template-columns: 1fr auto; width:100%; display:none;">
        <div class="text">
          <div class="title sync-delay-title">Delay (seconds)</div>
          <div class="desc sync-delay-desc">Save after no changes for this many seconds.</div>
            </div>
            <input class="sync-sec settings-input" type="number" min="5" max="86400" step="1" value="15" />
          </div>
          <div class="store-btns">
            <button type="button" class="remove-btn migrate-to-store"><ha-icon icon="mdi:upload"></ha-icon><span>Transfer browser data to storage</span></button>
            <button type="button" class="remove-btn clear-all"><ha-icon icon="mdi:delete"></ha-icon><span>Clear all data</span></button>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom actions: clear local + reset onboarding -->
    <div class="row row-bottom-actions" style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
      <button class="remove-btn clear-local-only" type="button"><ha-icon icon="mdi:delete-outline"></ha-icon><span>Clear local only</span></button>
      <button class="add-entity-btn reset-onboard" type="button"><ha-icon icon="mdi:movie-play"></ha-icon><span>Show welcome again</span></button>
    </div>
  </div>
  <!-- Backup tab (top-level sibling) -->
  <div class="wrap tab-backup" style="display:none; max-width:480px;">
    <div class="settings-card">
      <div class="setting">
        <div class="text">
          <div class="title backup-title">Backup</div>
          <div class="desc backup-desc">Kopiér hele indholdet af din sync‑sensor til backup‑sensoren og gendan den igen ved behov.</div>
        </div>
        <div></div>
      </div>
      <div class="setting" style="grid-template-columns: 1fr 1fr;">
        <button type="button" class="add-entity-btn btn-backup-now"><ha-icon icon="mdi:archive-arrow-down"></ha-icon><span class="backup-now-label">Backup now</span></button>
        <button type="button" class="remove-btn btn-restore-now"><ha-icon icon="mdi:archive-arrow-up"></ha-icon><span class="backup-restore-label">Restore</span></button>
      </div>
      <div class="setting">
        <div class="text">
          <div class="title backup-auto-title">Auto backup</div>
          <div class="desc backup-auto-desc">Lav automatisk backup med faste intervaller.</div>
        </div>
        <ha-switch class="backup-auto"></ha-switch>
      </div>
      <div class="setting backup-interval-row">
        <div class="text">
          <div class="title backup-int-title">Interval (dage)</div>
          <div class="desc backup-int-desc">Hvor mange dage der skal gå mellem automatiske backups (min. 1).</div>
        </div>
        <input class="backup-days settings-input" type="number" min="1" max="365" step="1" />
      </div>
      <div class="setting">
        <div class="text">
          <div class="title backup-sensor-title">Backup sensor</div>
          <div class="desc">sensor.thermostat_timeline_backup</div>
        </div>
        <div></div>
      </div>
      <div class="setting">
        <div class="text">
          <div class="title backup-last-title">Sidste backup</div>
          <div class="desc last-backup-desc"></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>`;    this._applyEditorI18n();

    const qs = (s)=>this.shadowRoot.querySelector(s);
    qs(".title")?.addEventListener("change", e => this._upd("title", e.target.value));
    qs(".storage")?.addEventListener("value-changed", e => this._upd("storage_entity", e.detail.value));
    qs('.store-enable')?.addEventListener('change', e => {
      const on = !!e.target.checked;
      this._upd('storage_enabled', on);
      const picker = this.shadowRoot.querySelector('.storage');
      if (picker) picker.disabled = !on;
      // Disable the bottom "Clear local only" button when shared storage is ON
      try {
        const clrLocal = this.shadowRoot.querySelector('.clear-local-only');
        if (clrLocal) {
          clrLocal.disabled = on;
          clrLocal.setAttribute('aria-disabled', on ? 'true' : 'false');
          clrLocal.title = on ? 'Disabled while shared storage is ON' : '';
          // Hide button entirely when shared storage is enabled (requested)
          clrLocal.style.display = on ? 'none' : '';
        }
      } catch {}
      // Show/hide storage controls when shared storage is toggled
      try {
        const ctrls = this.shadowRoot.querySelector('.store-controls');
        if (ctrls) ctrls.style.display = on ? 'flex' : 'none';
      } catch {}
      // Disable sync controls when off
      try {
        const seg = this.shadowRoot.querySelector('.syncmode');
  const row = this.shadowRoot.querySelector('.sync-delay-row');
  const min = this.shadowRoot.querySelector('.sync-sec');
        if (seg) seg.style.opacity = on ? '' : '.6';
        if (row) row.style.opacity = on ? '' : '.6';
        if (min) min.disabled = !on;
      } catch {}
  this._applyEditorI18n();
      // Re-render so Colors tab shared-clear button visibility updates immediately
  try { this._render(); } catch {}
  // Ensure integration side knows current auto-apply state when enabling shared storage
  try { if (on) this._pushSettingsToStoreDebounced(); } catch {}
      // On enabling shared storage: offer to migrate local browser data to storage
      try {
        if (on) {
          const localRaw = localStorage.getItem('thermostat_timeline_store');
          const hasLocal = !!(localRaw && localRaw.length > 2);
          const target = this._config.storage_entity;
          if (hasLocal && target) {
            const ok = confirm(this._t('editor.migrate_confirm'));
            if (ok) {
              // Properly unwrap the local payload and send both schedules and settings
              let parsed = {};
              try { parsed = JSON.parse(localRaw || '{}'); } catch { parsed = {}; }
              let schedules = parsed && typeof parsed === 'object' && parsed.schedules ? parsed.schedules : (parsed || {});
              let settings = parsed && typeof parsed === 'object' && parsed.settings ? parsed.settings : { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(Math.max(0, Math.round((this._config.storage_sync_sec||0)/60))), sync_delay_sec: Number(this._config.storage_sync_sec||0) };
              settings = { ...settings, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0) };
              if (this._hass) {
                this._hass.callService('thermostat_timeline', 'set_store', { schedules, settings });
              }
            } else {
              // If user cancels, offer to import schedules FROM storage into local browser
              try {
                const st = this._hass?.states?.[target];
                const attrs = st?.attributes || {};
                let sch = attrs && typeof attrs.schedules === 'object' ? attrs.schedules : {};
                // Unwrap in case of legacy nested structure
                if (sch && sch.schedules && typeof sch.schedules === 'object') sch = sch.schedules;
                let set = attrs && typeof attrs.settings === 'object' ? attrs.settings : { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(Math.max(0, Math.round((this._config.storage_sync_sec||0)/60))), sync_delay_sec: Number(this._config.storage_sync_sec||0) };
                if (Object.keys(sch || {}).length) {
                  const pull = confirm(this._t('editor.migrate_pull_confirm'));
                  if (pull) {
                    try { localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules: sch, settings: set })); } catch {}
                  }
                }
              } catch {}
            }
          }
        }
      } catch {}
    });
  // Sync mode controls
  try {
  const seg = this.shadowRoot.querySelector('.syncmode');
  const bI = this.shadowRoot.querySelector('.sync-inst');
  const bD = this.shadowRoot.querySelector('.sync-del');
  const row = this.shadowRoot.querySelector('.sync-delay-row');
  const min = this.shadowRoot.querySelector('.sync-sec');
    const applyUi = ()=>{
      const mode = this._config.storage_sync_mode || 'instant';
      if (bI && bD){ bI.classList.toggle('active', mode==='instant'); bD.classList.toggle('active', mode==='delay'); }
  if (row) row.style.display = mode==='delay' ? '' : 'none';
  if (min && min !== this.shadowRoot.activeElement) min.value = String(this._config.storage_sync_sec || 15);
    };
    if (bI) bI.onclick = ()=>{ this._upd('storage_sync_mode','instant'); applyUi(); try { this._pushSettingsToStoreDebounced(); } catch {} };
    if (bD) bD.onclick = ()=>{ this._upd('storage_sync_mode','delay'); applyUi(); try { this._pushSettingsToStoreDebounced(); } catch {} };
  if (min) min.addEventListener('change', (e)=>{ let v = Math.round(Number(e.target.value||15)); if (!Number.isFinite(v)) v = 15; v = Math.max(5, Math.min(86400, v)); this._upd('storage_sync_sec', v); e.target.value = String(v); try { this._pushSettingsToStoreDebounced(); } catch {} });
    applyUi();
  } catch {}
  qs(".def")  ?.addEventListener("change", e => {
      let raw=String(e.target.value||"").replace(",",".");
      let vDisp=Number(raw);
      // Convert from display units to Celsius for storage
      let vC = isNaN(vDisp)? (this._config?.default_temp ?? 20) : this._fromDisplayTemp(vDisp);
      const mxC = Number(this._config?.max_temp ?? 25);
      const mnC = Number(this._config?.min_temp ?? 5);
      vC = Math.max(mnC, Math.min(mxC, vC));
      this._upd("default_temp", vC);
      // reflect display value after clamp
      const input = qs(".def"); if (input) input.value = String(this._toDisplayTemp(vC));
    });
    qs(".rowh") ?.addEventListener("change", e => { let v=Number(e.target.value); v=isNaN(v)?64:Math.max(40,Math.min(120,Math.round(v))); this._upd("row_height",v); qs(".rowh").value=String(v); });
  qs(".add-room-btn")?.addEventListener("click", () => this._addEntity());
  // (reload buttons removed)
    qs(".auto")?.addEventListener("change", e => {
      const on = !!e.target.checked;
      this._upd("auto_apply", on);
      try { if (this._config?.storage_enabled) this._pushSettingsToStoreDebounced(); } catch {}
    });
  qs(".applyedit")?.addEventListener("change", e => { this._upd("apply_on_edit", e.target.checked); try { if (this._config?.storage_enabled) this._pushSettingsToStoreDebounced(); } catch {} });
  qs(".applydef")?.addEventListener("change", e => this._upd("apply_on_default_change", e.target.checked));
  qs('.pausebtn-enable')?.addEventListener('change', e => { this._upd('show_pause_button', !!e.target.checked); try { this._pushSettingsToStoreDebounced(); } catch {} });
  qs('.maxc')?.addEventListener('change', e => {
      let raw=String(e.target.value||"").replace(",",".");
      let vDisp=Number(raw);
      let vC = isNaN(vDisp)? (this._config?.max_temp ?? 25) : this._fromDisplayTemp(vDisp);
      vC = Math.max(5, Math.min(50, Math.round(vC)));
      this._upd('max_temp', vC);
      // Clamp existing color ranges to new max
      try {
        const cr = { ...(this._config.color_ranges || {}) };
        for (const k of Object.keys(cr)){
          cr[k] = (cr[k]||[]).map(r=>({
            ...r,
            from: Math.min(Number(r.from ?? 0), vC),
            to: Math.min(Number(r.to ?? 0), vC)
          }));
        }
        this._config.color_ranges = cr;
      } catch {}
      const mxEl=this.shadowRoot.querySelector('.maxc'); if(mxEl) mxEl.value=String(this._toDisplayTemp(vC));
      // Repaint so Colors inputs pick up new max attribute
      this._render();
    });
    // Min temp change
    qs('.minc')?.addEventListener('change', e => {
      let raw=String(e.target.value||"").replace(",",".");
      let vDisp=Number(raw);
      let vC = isNaN(vDisp)? (this._config?.min_temp ?? 5) : this._fromDisplayTemp(vDisp);
      // Keep within 0..(max-1)
      const mxC = Number(this._config?.max_temp ?? 25);
      vC = Math.max(0, Math.min(mxC, Math.round(vC)));
      this._upd('min_temp', vC);
      // Clamp defaults and color ranges to new min
      try {
        // Default temp
        const defEl = this.shadowRoot.querySelector('.def');
        if (defEl) {
          let d= this._fromDisplayTemp(Number(defEl.value));
          if (!isNaN(d) && d < vC) { d = vC; defEl.value = String(this._toDisplayTemp(d)); this._upd('default_temp', d); }
        }
        const cr = { ...(this._config.color_ranges || {}) };
        for (const k of Object.keys(cr)){
          cr[k] = (cr[k]||[]).map(r=>({
            ...r,
            from: Math.max(Number(r.from ?? vC), vC)
          }));
        }
        this._config.color_ranges = cr;
      } catch {}
      const mnEl=this.shadowRoot.querySelector('.minc'); if(mnEl) mnEl.value=String(this._toDisplayTemp(vC));
      this._render();
    });
    // Weekdays enable (mode selection removed from editor)
    qs('.week-enable')?.addEventListener('change', e => {
      const on = !!e.target.checked; this._upd('weekdays_enabled', on);
    });
    // Profiles enable
    qs('.profiles-enable')?.addEventListener('change', e => {
      const on = !!e.target.checked;
      this._upd('profiles_enabled', on);
      // Immediately push the new state to shared storage so all dashboards stay in sync
      try { this._pushSettingsToStoreDebounced(); } catch {}
      // If Sync is OFF, persist the flag to local storage only
      try {
        if (!this._config?.storage_enabled) {
          const raw = localStorage.getItem('thermostat_timeline_store') || '';
          let parsed = {};
          try { parsed = JSON.parse(raw || '{}'); } catch { parsed = {}; }
          const schedules = parsed && typeof parsed === 'object' && parsed.schedules ? parsed.schedules : {};
          const prevSettings = parsed && typeof parsed === 'object' && parsed.settings ? parsed.settings : {};
          const settings = { ...prevSettings, profiles_enabled: !!on };
          try { localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules, settings })); } catch {}
        }
      } catch {}
    });
      // Holidays enable
      qs('.holidays-enable')?.addEventListener('change', e => {
        const on = !!e.target.checked; this._upd('holidays_enabled', on);
        if (on) { this._activeTab = 'holidays'; this._render(); }
      });
    // (clear storage only button removed)

    // Clear all data (storage + local)
    qs('.clear-all')?.addEventListener('click', async () => {
      const msg = this._t('editor.clear_all_confirm');
      if (!confirm(msg)) return;
      try {
        // Wipe local browser copy
        try { localStorage.removeItem('thermostat_timeline_store'); } catch {}
        // Also wipe in-memory schedules so UI reflects deletion immediately
        try {
          this._schedules = {};
          // Reset any profiles editing state
          this._profilesSelected = null; this._profilesDraft = null; this._profilesDirty = false; this._profilesEditingNew = false;
        } catch {}
        if (this._hass && this._config.storage_entity) {
          await this._hass.callService('thermostat_timeline', 'set_store', { schedules: {} });
        }
        // Repaint editor/live cards
        try { this._emit(true); } catch {}
        try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
      } catch (e) { console.warn('clear-all failed', e); }
    });

    // Clear local only (bottom)
    qs('.clear-local-only')?.addEventListener('click', async (ev) => {
      // Hard guard: do nothing if shared storage is enabled
      if (this._config?.storage_enabled) { try { ev.preventDefault(); ev.stopPropagation(); } catch {} return; }
      const msg = this._t('editor.clear_local_only_confirm');
      if (!confirm(msg)) return;
      try {
        localStorage.removeItem('thermostat_timeline_store');
        // Clear in-memory schedules when using local storage only
        this._schedules = {};
        this._profilesSelected = null; this._profilesDraft = null; this._profilesDirty = false; this._profilesEditingNew = false;
        this._emit(true);
        try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
      } catch {}
    });
    // Reset onboarding (show intro again)
    qs('.reset-onboard')?.addEventListener('click', async () => {
      try { localStorage.removeItem('thermostat_timeline_onboard_seen_v1'); } catch {}
      try { alert(this._t('onboard.reset_ok') || 'Welcome will be shown next time.'); } catch {}
    });
    qs('.migrate-to-store')?.addEventListener('click', async () => {
      try {
  const target = this._config.storage_entity;
  if (!target) { alert(this._t('editor.select_storage_first')); return; }
        const raw = localStorage.getItem('thermostat_timeline_store') || '';
        if (!raw) { alert(this._t('editor.no_local_data')); return; }
        const ok = confirm(this._t('editor.migrate_confirm'));
        if (!ok) return;
    const parsed = JSON.parse(raw || '{}');
    const schedules = parsed.schedules || parsed || {};
  let settings = parsed.settings || { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, profiles_enabled: !!this._config.profiles_enabled, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [] };
  settings = { ...settings, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0) };
        if (this._hass) {
          await this._hass.callService('thermostat_timeline', 'set_store', { schedules, settings });
        }
      } catch (e) {
        console.warn('migrate-to-store failed', e);
      }
    });
    // Time format segmented control
    try {
      const fmt24 = this.shadowRoot.querySelector('.fmt24');
      const fmt12 = this.shadowRoot.querySelector('.fmt12');
      const applyFmtUi = ()=>{
        if (!fmt24 || !fmt12) return;
        const on12 = !!this._config.time_12h;
        fmt12.classList.toggle('active', on12);
        fmt24.classList.toggle('active', !on12);
      };
      if (fmt24) fmt24.addEventListener('click', ()=>{ this._upd('time_12h', false); applyFmtUi(); });
      if (fmt12) fmt12.addEventListener('click', ()=>{ this._upd('time_12h', true); applyFmtUi(); });

      // Time source buttons
      const srcB = this.shadowRoot.querySelector('.srcBrowser');
      const srcH = this.shadowRoot.querySelector('.srcHa');
      const applySrcUi = ()=>{
        const useHa = String(this._config?.time_source||'browser')==='ha';
        try { srcB && srcB.classList.toggle('active', !useHa); } catch {}
        try { srcH && srcH.classList.toggle('active', useHa); } catch {}
      };
      if (srcB) srcB.addEventListener('click', ()=>{ this._upd('time_source','browser'); applySrcUi(); try { this._startUiTimer(); this._render(); this._scheduleNextApply(); } catch {} });
      if (srcH) srcH.addEventListener('click', ()=>{ this._upd('time_source','ha'); applySrcUi(); try { this._startUiTimer(); this._render(); this._scheduleNextApply(); } catch {} });
      applySrcUi();
      applyFmtUi();
    } catch {}
    // Temperature unit segmented control
    try {
      const uC = this.shadowRoot.querySelector('.unitC');
      const uF = this.shadowRoot.querySelector('.unitF');
      const applyUnitUi = ()=>{
        const isF = (this._config.temp_unit||'C')==='F';
        if (uC && uF){
          uF.classList.toggle('active', isF);
          uC.classList.toggle('active', !isF);
        }
      };
      if (uC) uC.addEventListener('click', ()=>{ this._upd('temp_unit','C'); applyUnitUi(); });
      if (uF) uF.addEventListener('click', ()=>{ this._upd('temp_unit','F'); applyUnitUi(); });
      applyUnitUi();
    } catch {}
    // Tabs behavior
    try {
      const sBtn = this.shadowRoot.querySelector('.tab-settings-btn');
      const rBtn = this.shadowRoot.querySelector('.tab-rooms-btn');
      const cBtn = this.shadowRoot.querySelector('.tab-colors-btn');
      const hBtn = this.shadowRoot.querySelector('.tab-holidays-btn');
      const aBtn = this.shadowRoot.querySelector('.tab-away-btn');
      const yBtn = this.shadowRoot.querySelector('.tab-sync-btn');
      if (sBtn) sBtn.onclick = ()=> { this._activeTab='settings'; this._render(); };
  if (rBtn) rBtn.onclick = ()=> { this._activeTab='rooms'; this._render(); setTimeout(()=>this._forcePickerRefresh(), 0); };
      if (cBtn) cBtn.onclick = ()=> { this._activeTab='colors'; this._render(); };
      if (hBtn) hBtn.onclick = ()=> { this._activeTab='holidays'; this._render(); };
      if (aBtn) aBtn.onclick = ()=> { this._activeTab='away'; this._render(); };
      if (yBtn) yBtn.onclick = ()=> { this._activeTab='sync'; this._render(); };
    } catch {}
  }

  // --- Local helpers for unit/time conversions (editor context) ---
  _isF(){ try { return (this._config?.temp_unit||'C')==='F'; } catch { return false; } }
  _unitSymbol(){ return this._isF() ? '°F' : '°C'; }
  _toDisplayTemp(c){ try { return this._isF() ? Math.round((Number(c)*9/5+32)*10)/10 : Number(c); } catch { return c; } }
  _fromDisplayTemp(v){ try { return this._isF() ? ((Number(v)-32)*5/9) : Number(v); } catch { return Number(v); } }

  

  // Force re-hydration of entity pickers on the Rooms tab with the latest hass
  // reference. This helps cases where the tab was hidden during first render
  // or after a hard refresh and the picker didn't populate.
  _forcePickerRefresh(){
    try {
      const tab = this.shadowRoot && this.shadowRoot.querySelector('.tab-rooms');
      if (!tab) return;
      const pickers = Array.from(tab.querySelectorAll('ha-entity-picker, tt-entity-picker'));
      for (const p of pickers){
        try {
          p.hass = this._hass;
          p.style.display = 'block';
          p.style.minHeight = '48px';
          if (typeof p.requestUpdate === 'function') p.requestUpdate();
          // Fallback: if element still has no height, poke its internal input later
          setTimeout(()=>{ try { if (p.offsetHeight < 8 && typeof p.requestUpdate === 'function') p.requestUpdate(); } catch {} }, 50);
        } catch {}
      }
    } catch {}
  }

  connectedCallback(){
    this._render();
    try {
      // Suspend render while interacting with any entity picker to avoid closing dropdowns
      this.shadowRoot.addEventListener('focusin', (e)=>{
        try { if (e.target?.closest && (e.target.closest('ha-entity-picker') || e.target.closest('tt-entity-picker'))) this._suspendRender = true; } catch {}
        try {
          // Also suspend while editing inputs in Colors tab (prevents HA hass updates from re-rendering and killing focus)
          const t = e.target;
          if (t && t.closest && t.closest('.tab-colors')) {
            if (t.tagName === 'INPUT' || t.classList?.contains('remove-btn')) {
              this._suspendRender = true;
            }
          }
        } catch {}
      });
      this.shadowRoot.addEventListener('focusout', ()=>{
        // Give a tiny delay so click into next field doesn't flicker
        setTimeout(()=>{ this._suspendRender = false; }, 150);
      });
      this.shadowRoot.addEventListener('value-changed', (e)=>{
        try {
          const tag = e.target?.tagName?.toLowerCase();
          if (tag === 'ha-entity-picker' || tag === 'tt-entity-picker') { this._suspendRender = false; }
        } catch {}
      });
      // After hard refresh, wait for HA to define pickers and hydrate them
      try {
        customElements.whenDefined('ha-entity-picker').then(()=>{ try { this._forcePickerRefresh(); } catch {} });
      } catch {}
      // Extra retry shortly after mount
      try { setTimeout(()=>{ try { this._forcePickerRefresh(); } catch {} }, 300); } catch {}
    } catch {}
  }

  // Debounced push of settings (labels/merges/colors/min/max/away/unit/format) to shared storage
  _pushSettingsToStoreDebounced(){
    clearTimeout(this._storePushTimer);
    this._storePushTimer = setTimeout(()=>this._pushSettingsToStore(), 500);
  }
  async _pushSettingsToStore(){
    try {
      if (!this._hass || !this._config?.storage_enabled || !this._config?.storage_entity) return;
      const settings = {
        time_12h: this._config.time_12h,
        temp_unit: this._config.temp_unit,
        time_source: this._config.time_source,
        color_ranges: this._config.color_ranges,
        color_global: !!this._config.color_global,
        min_temp: this._config.min_temp,
        max_temp: this._config.max_temp,
        away: this._config.away,
        merges: this._config.merges,
        labels: this._config.labels,
        temp_sensors: this._config.temp_sensors,
        show_pause_button: !!(this._config.show_pause_button ?? true),
  profiles_enabled: !!this._config.profiles_enabled,
  backup_auto_enabled: !!this._config.backup_auto_enabled,
  backup_interval_min: Number(this._config.backup_interval_min||1440),
        apply_on_edit: !!this._config.apply_on_edit,
        auto_apply_enabled: !!this._config.auto_apply,
        pause_indef: !!this._pauseIndef,
        pause_until_ms: Number(this._pauseUntilMs||0),
        holidays_enabled: !!this._config.holidays_enabled,
        holidays_source: this._config.holidays_source || 'calendar',
        holidays_entity: this._config.holidays_entity || '',
        holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [],
        sync_mode: (this._config.storage_sync_mode||'instant'),
        sync_delay_min: Number(this._config.storage_sync_min||0)
      };
      await this._hass.callService('thermostat_timeline','set_store', { settings });
    } catch {}
  }

  // Replace this editor element with a fresh instance (simulates closing/reopening)
  _hardReloadEditor(){
    try {
      const cfg = JSON.parse(JSON.stringify(this._config || {}));
      const hass = this._hass;
      const parent = this.parentNode || (this.getRootNode && this.getRootNode().host && this.getRootNode().host.parentNode) || null;
      const next = this.nextSibling || null;
      const fresh = document.createElement('thermostat-timeline-card-editor');
      try { fresh.setConfig(cfg); } catch {}
      try { if (hass) fresh.hass = hass; } catch {}
      if (parent) {
        parent.insertBefore(fresh, next);
        parent.removeChild(this);
      } else {
        // Fallback: force re-render + picker refresh
        this._render();
        this._forcePickerRefresh && this._forcePickerRefresh();
      }
    } catch (e) {
      try { this._render(); this._forcePickerRefresh && this._forcePickerRefresh(); } catch {}
    }
  }

  // Full dashboard reload with cache-busting query param
  _hardReloadPage(){
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('ttcb', String(Date.now()));
      window.location.replace(url.toString());
    } catch {
      try { window.location.reload(); } catch {}
    }
  }

  _render(){
    if(!this._hass || !this.shadowRoot || !this._config) return;
    if(this._openCount > 0) return;

    // If HA hasn't registered core editor elements yet (after hard refresh),
    // re-render once they are defined so pickers/textfields upgrade properly.
    try {
      if (!customElements.get('ha-entity-picker')) {
        customElements.whenDefined('ha-entity-picker').then(()=>{ try { this._render(); } catch {} });
      }
      if (!customElements.get('ha-textfield')) {
        customElements.whenDefined('ha-textfield').then(()=>{ try { this._render(); } catch {} });
      }
    } catch {}

    // Robust tab delegation (ensure any tab can be opened reliably)
    if (!this._tabHandlersBound) {
      this._tabHandlersBound = true;
      try {
        this.shadowRoot.addEventListener('click', (ev)=>{
          const t = ev.target && ev.target.closest ? ev.target : (ev.composedPath && ev.composedPath()[0]);
          const el = t && t.closest ? t.closest('.tab-btn') : null;
          if (!el) return;
          if (el.classList.contains('tab-settings-btn')) { this._activeTab = 'settings'; this._render(); }
          if (el.classList.contains('tab-rooms-btn')) { this._activeTab = 'rooms'; this._render(); setTimeout(()=>this._forcePickerRefresh(), 0); }
          if (el.classList.contains('tab-colors-btn')) { this._activeTab = 'colors'; this._render(); }
          if (el.classList.contains('tab-holidays-btn')) { this._activeTab = 'holidays'; this._render(); }
          if (el.classList.contains('tab-away-btn')) { this._activeTab = 'away'; this._render(); }
          if (el.classList.contains('tab-sync-btn')) { this._activeTab = 'sync'; this._render(); }
          if (el.classList.contains('tab-backup-btn')) { this._activeTab = 'backup'; this._render(); }
        });
      } catch {}
    }

  const t = this.shadowRoot.querySelector(".title");
  const d = this.shadowRoot.querySelector(".def");
  const mx= this.shadowRoot.querySelector('.maxc');
  const mn= this.shadowRoot.querySelector('.minc');
    const rh= this.shadowRoot.querySelector(".rowh");
  const se= this.shadowRoot.querySelector(".storage");
  const seEn = this.shadowRoot.querySelector('.store-enable');
    const au= this.shadowRoot.querySelector(".auto");
    const aed= this.shadowRoot.querySelector(".applyedit");
    const adf= this.shadowRoot.querySelector(".applydef");
  const pbe = this.shadowRoot.querySelector('.pausebtn-enable');
  const wek = this.shadowRoot.querySelector('.week-enable');
  const prf = this.shadowRoot.querySelector('.profiles-enable');
  const hol = this.shadowRoot.querySelector('.holidays-enable');
    if (t)  t.value  = this._config.title ?? "";
  if (d && d !== this.shadowRoot.activeElement) d.value = String(this._toDisplayTemp(this._config.default_temp ?? 20));
  if (mx && mx !== this.shadowRoot.activeElement) mx.value = String(this._toDisplayTemp(this._config.max_temp ?? 25));
    if (mn && mn !== this.shadowRoot.activeElement) mn.value = String(this._toDisplayTemp(this._config.min_temp ?? 5));
    if (rh && rh !== this.shadowRoot.activeElement) rh.value = String(this._config.row_height ?? 64);
    if (se) { try { se.hass = this._hass; } catch {} try { se.value = this._config.storage_entity || ""; } catch {} }
    if (seEn) {
      const enabled = !!this._config.storage_enabled;
      seEn.checked = enabled;
      if (se) { try { se.disabled = !enabled; } catch {} try { if (enabled) se.removeAttribute('disabled'); else se.setAttribute('disabled',''); } catch {} }
      // Ensure controls visibility matches toggle
      try {
        const ctrls = this.shadowRoot.querySelector('.store-controls');
        if (ctrls) ctrls.style.display = enabled ? 'flex' : 'none';
      } catch {}
      // Reflect sync controls state
      try {
        const seg = this.shadowRoot.querySelector('.syncmode');
        const row = this.shadowRoot.querySelector('.sync-delay-row');
        const min = this.shadowRoot.querySelector('.sync-min');
        if (seg) seg.style.opacity = enabled ? '' : '.6';
        if (row) row.style.opacity = enabled ? '' : '.6';
        if (min) min.disabled = !enabled;
        // Also set button active states and input value
        const bI = this.shadowRoot.querySelector('.sync-inst');
        const bD = this.shadowRoot.querySelector('.sync-del');
        const mode = this._config.storage_sync_mode || 'instant';
        if (bI && bD){ bI.classList.toggle('active', mode==='instant'); bD.classList.toggle('active', mode==='delay'); }
  if (row) row.style.display = (mode==='delay' && enabled) ? '' : 'none';
  if (min && min !== this.shadowRoot.activeElement) min.value = String(this._config.storage_sync_sec || 15);
      } catch {}
      // Reflect state for bottom "Clear local only" button
      try {
        const clrLocal = this.shadowRoot.querySelector('.clear-local-only');
        if (clrLocal) {
          clrLocal.disabled = enabled;
          clrLocal.setAttribute('aria-disabled', enabled ? 'true' : 'false');
          clrLocal.title = enabled ? 'Disabled while shared storage is ON' : '';
          // Hide when shared storage is enabled
          clrLocal.style.display = enabled ? 'none' : '';
        }
      } catch {}
    }
    this._applyEditorI18n();
    if (au) { au.checked = !!this._config.auto_apply; }
    if (aed){ aed.checked = !!this._config.apply_on_edit; }
    if (adf){ adf.checked = !!this._config.apply_on_default_change; }
  if (wek){ wek.checked = !!this._config.weekdays_enabled; }
  if (prf){ prf.checked = !!this._config.profiles_enabled; }
  if (hol){ hol.checked = !!this._config.holidays_enabled; }
  // Hide legacy Holidays toggle in Settings tab (moved to Holidays tab)
  try { const hs = this.shadowRoot.querySelector('.holidays-setting'); if (hs) hs.style.display = 'none'; } catch {}
  if (pbe){ pbe.checked = !!(this._config.show_pause_button ?? true); }
  // Backup tab controls
  try {
  const bAuto = this.shadowRoot.querySelector('.backup-auto');
  const bMin = this.shadowRoot.querySelector('.backup-days');
  const bRow = this.shadowRoot.querySelector('.backup-interval-row');
    const bBtn = this.shadowRoot.querySelector('.btn-backup-now');
    const rBtn = this.shadowRoot.querySelector('.btn-restore-now');
    const lastDesc = this.shadowRoot.querySelector('.last-backup-desc');
  if (bAuto) bAuto.checked = !!this._config.backup_auto_enabled;
  if (bRow) bRow.style.display = (!!this._config.backup_auto_enabled) ? '' : 'none';
    if (bMin && bMin !== this.shadowRoot.activeElement) bMin.value = String(this._config.backup_interval_days || 1);
    if (lastDesc && this._hass){
      const st=this._hass.states['sensor.thermostat_timeline_backup'];
      const ts=st?.attributes?.last_backup_ts;
      const fmt = (iso)=>{ try{ if(!iso) return ''; const d=new Date(iso); const lang = ttGetLangFromHass(this._hass || this._lang || 'en'); const opts={ dateStyle:'medium', timeStyle:'short' }; if (this._config?.time_source==='ha' && this._hass?.config?.time_zone) opts.timeZone=this._hass.config.time_zone; return new Intl.DateTimeFormat(lang, opts).format(d);} catch{ return String(iso||''); } };
      lastDesc.textContent = ts ? fmt(ts) : '';
    }
  bBtn && (bBtn.onclick = async ()=>{ try { await this._hass.callService('thermostat_timeline','backup_now',{}); setTimeout(()=>{ try { this._render(); } catch{} }, 800); } catch {} });
  rBtn && (rBtn.onclick = async ()=>{ try { if (confirm('Restore from backup? This will overwrite current schedules and settings.')) { await this._hass.callService('thermostat_timeline','restore_now',{}); setTimeout(()=>{ try { this._render(); } catch{} }, 800); } } catch {} });
  bAuto && bAuto.addEventListener('change', (e)=>{ const on=!!e.target.checked; this._upd('backup_auto_enabled', on); if (bRow) bRow.style.display = on? '' : 'none'; try { this._pushSettingsToStoreDebounced(); } catch {} });
    bMin && bMin.addEventListener('change', (e)=>{ let v=Math.round(Number(e.target.value||1)); if(!Number.isFinite(v)) v=1; v=Math.max(1, Math.min(365, v)); e.target.value=String(v); this._upd('backup_interval_days', v); try { this._pushSettingsToStoreDebounced(); } catch {} });
  } catch {}
  // No mode dropdown in editor

    // Reflect time format segmented control state
    try {
      const fmt24 = this.shadowRoot.querySelector('.fmt24');
      const fmt12 = this.shadowRoot.querySelector('.fmt12');
      if (fmt24 && fmt12) {
        const on12 = !!this._config.time_12h;
        fmt12.classList.toggle('active', on12);
        fmt24.classList.toggle('active', !on12);
      }
    } catch {}
    // Reflect temperature unit segmented control state
    try {
      const uC = this.shadowRoot.querySelector('.unitC');
      const uF = this.shadowRoot.querySelector('.unitF');
      if (uC && uF) {
        const isF = (this._config.temp_unit||'C')==='F';
        uF.classList.toggle('active', isF);
        uC.classList.toggle('active', !isF);
      }
    } catch {}

    const wrap = this.shadowRoot.querySelector(".entities");
    if(!wrap) return;

    // Rebuild rows; preserve which are open using a stable key per row (entity id or placeholder)
    const want = (this._config.entities || []).length;
    wrap.innerHTML = '';
    for (let i=0;i<want;i++) {
      const line = this._makeEntityRow(i);
      const key = (this._config.entities?.[i]) || `#idx:${i}`;
      if (this._openRows.has(key)) line.classList.add('open');
      wrap.append(line);
    }

    // If Rooms tab is visible, proactively hydrate all pickers
    try { if (this._activeTab === 'rooms') this._forcePickerRefresh(); } catch {}

  for (let i=0;i<want;i++){
      const row = wrap.children[i];
      const picker = row.querySelector("tt-entity-picker, ha-entity-picker");
      if (picker) {
        picker.hass = this._hass;
        try { picker.style.display = 'block'; picker.style.minHeight = '48px'; } catch {}
        try { if (typeof picker.requestUpdate === 'function') picker.requestUpdate(); } catch {}
        picker.value = this._config.entities[i] || "";
        // Exclude entities already selected in other rows, or linked elsewhere; allow the current selection
        picker.entityFilter = (st) => {
          try {
            const id = st?.entity_id || st?.entityId || st?.entityID || "";
            if (!id) return false;
            const chosenPrim = (this._config.entities || []).filter(Boolean);
            const allLinked = Object.values(this._config.merges || {}).flat();
            const blocked = new Set([...chosenPrim, ...allLinked]);
            const current = this._config.entities[i];
            return !blocked.has(id) || id === current;
          } catch { return true; }
        };
      }

      // Update header title and label input to reflect current selection/override
      try {
        const eid = this._config.entities[i] || "";
        const labels = this._config.labels || {};
        const titleEl = row.querySelector('.summary-title');
        const subEl = row.querySelector('.summary-sub');
        const nameInp = row.querySelector('.label-input');
        const friendly = eid ? (this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1] || eid)) : '';
  const shown = labels[eid] || friendly || this._t('editor.entity_placeholder');
        if (titleEl) titleEl.textContent = shown;
        if (nameInp && nameInp !== this.shadowRoot.activeElement) nameInp.value = labels[eid] || '';
        // Build merged subtitle text
        if (subEl) {
          const linked = (this._config.merges?.[eid] || []).map(id => (
            this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1] || id)
          ));
          const parts = [];
          if (eid) parts.push(eid);
          if (linked.length) parts.push(`${this._t('editor.merged_with')}: ${linked.join(', ')}`);
          subEl.textContent = parts.join(' • ');
        }
      } catch {}

      // Rebuild merge chips every render
      try {
        const eid = this._config.entities[i] || '';
        const chips = row.querySelector('.linked-chips');
        const mergePicker = row.querySelector('.merge-picker');
        if (mergePicker) mergePicker.hass = this._hass;
        if (chips && eid){
          chips.innerHTML = '';
          const links = (this._config.merges?.[eid] || []);
          for (const l of links){
            const chip = document.createElement('span');
            chip.className = 'pill-chip';
            const txt = document.createElement('span');
            txt.textContent = this._hass?.states?.[l]?.attributes?.friendly_name || (l.split('.')[1]||l);
            const rm = document.createElement('button');
            rm.type = 'button'; rm.className = 'rm'; rm.textContent = '×';
            rm.setAttribute('aria-label', this._t('editor.remove'));
            rm.addEventListener('click', ()=>{
              const merges = { ...(this._config.merges || {}) };
              merges[eid] = (merges[eid]||[]).filter(x=>x!==l);
              if (!merges[eid]?.length) delete merges[eid];
              this._config.merges = merges;
              this._emit(true);
            });
            chip.append(txt, rm);
            chips.append(chip);
          }
        }

          // (colors tab content and visibility now rendered once outside the entity loop)
      } catch {}
     }

    // Build colors tab content (always render once, even with zero rooms)
    try {
      const root = this.shadowRoot.querySelector('.tab-colors');
      if (root) {
        root.innerHTML = '';

        // Colors mode toggle (Per room | All rooms)
        const modeWrap = document.createElement('div');
        modeWrap.style.display = 'flex';
        modeWrap.style.alignItems = 'center';
        modeWrap.style.justifyContent = 'space-between';
        modeWrap.style.gap = '10px';
        modeWrap.style.marginBottom = '6px';
        const modeText = document.createElement('div');
        modeText.style.display = 'grid';
        modeText.style.gap = '2px';
        const modeTitle = document.createElement('div'); modeTitle.className = 'colors-mode-title'; modeTitle.style.fontWeight = '600'; modeTitle.textContent = this._t('editor.colors.mode') || 'Color mode';
        const modeDesc = document.createElement('div'); modeDesc.className = 'colors-mode-desc'; modeDesc.style.fontSize = '.85rem'; modeDesc.style.color = 'var(--secondary-text-color)'; modeDesc.textContent = this._t('editor.colors.mode.desc') || 'Choose per-room colors or one set for all rooms.';
        modeText.append(modeTitle, modeDesc);
        const seg = document.createElement('div'); seg.className = 'seg colors-mode';
        const bRoom = document.createElement('button'); bRoom.type = 'button'; bRoom.className = 'mode-room'; bRoom.textContent = this._t('editor.colors.mode_per_room') || 'Per room';
        const bGlob = document.createElement('button'); bGlob.type = 'button'; bGlob.className = 'mode-global'; bGlob.textContent = this._t('editor.colors.mode_global') || 'All rooms';
        const applySegUi = ()=>{ const on = !!this._config.color_global; bGlob.classList.toggle('active', on); bRoom.classList.toggle('active', !on); };
        bRoom.onclick = ()=>{ this._config.color_global = false; this._emit(true); this._pushSettingsToStoreDebounced(); };
        bGlob.onclick = ()=>{ this._config.color_global = true; this._emit(true); this._pushSettingsToStoreDebounced(); };
        seg.append(bRoom, bGlob);
        applySegUi();
        modeWrap.append(modeText, seg);
        root.append(modeWrap);

        const isGlobal = !!this._config.color_global;

        // If per-room mode and there are no rooms yet, show helper box
        if (!isGlobal && want === 0) {
          const box = document.createElement('div'); box.className = 'empty-box';
          const p = document.createElement('div'); p.textContent = this._t('editor.colors.empty') || 'No rooms added yet.';
          const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'add-entity-btn'; btn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>' + (this._t('editor.colors.go_add') || 'Add room') + '</span>';
          btn.onclick = () => {
            this._activeTab = 'rooms'; this._render();
            const add = this.shadowRoot.querySelector('.add-room-btn');
            if (add) { add.classList.add('pulse-attn','pulse'); setTimeout(() => add.classList.remove('pulse'), 3500); add.scrollIntoView({ behavior:'smooth', block:'center' }); }
          };
          box.append(p, btn); root.append(box);
        }

        // Global mode editor (single set applied to all rooms under key "*")
        if (isGlobal) {
          const eid = '*';
          const line = document.createElement('div'); line.className = 'inline';
          const summary = document.createElement('div'); summary.className = 'summary';
          const sumLeft = document.createElement('div'); sumLeft.className = 'summary-left';
          const exp = document.createElement('button'); exp.className = 'expander'; exp.innerHTML = '<ha-icon icon="mdi:chevron-down"></ha-icon>';
          const txtWrap = document.createElement('div'); txtWrap.className = 'summary-text';
          const titleSpan = document.createElement('span'); titleSpan.className = 'summary-title'; titleSpan.textContent = this._t('editor.colors.global_title') || 'All rooms';
          txtWrap.append(titleSpan); sumLeft.append(exp, txtWrap); summary.append(sumLeft);
          line.append(summary);
          const details = document.createElement('div'); details.className = 'details'; line.append(details);
          const colorsWrap = document.createElement('div'); colorsWrap.style.display = 'grid'; colorsWrap.style.gap = '0px'; details.append(colorsWrap);
          const head = document.createElement('div'); head.className = 'colors-head';
          head.innerHTML = `<span>${this._t('editor.colors.col_from')}</span><span>${this._t('editor.colors.col_to')}</span><span>${this._t('editor.colors.col_color')}</span><span></span>`;
          try { if (this._openColorRows.has(eid)) line.classList.add('open'); } catch {}
          const renderRanges = () => {
            colorsWrap.innerHTML = '';
            const ranges = (this._config.color_ranges?.[eid]) || [];
            if (ranges.length > 0) colorsWrap.append(head);
            ranges.forEach((r, ri) => {
              const outer = document.createElement('div'); outer.className = 'color-item';
              const row = document.createElement('div'); row.className = 'colors-row';
              const f = document.createElement('input'); f.type = 'number'; f.step = '0.5'; f.value = String(this._toDisplayTemp(r.from ?? 0)); f.setAttribute('aria-label', this._t('editor.colors.col_from')); f.title = this._t('editor.colors.col_from');
              const t = document.createElement('input'); t.type = 'number'; t.step = '0.5'; t.value = String(this._toDisplayTemp(r.to ?? 0)); t.setAttribute('aria-label', this._t('editor.colors.col_to')); t.title = this._t('editor.colors.col_to');
              const c = document.createElement('input'); c.type = 'color'; c.value = r.color || '#ffb347'; c.setAttribute('aria-label', this._t('editor.colors.col_color')); c.title = this._t('editor.colors.col_color');
              const maxDisp = this._toDisplayTemp(this._config.max_temp ?? 25);
              const minDisp = this._toDisplayTemp(this._config.min_temp ?? 5);
              f.min = String(minDisp); t.min = String(minDisp);
              f.max = String(maxDisp); t.max = String(maxDisp);
              const rm = document.createElement('button'); rm.type = 'button'; rm.className = 'remove-btn'; rm.innerHTML = '<ha-icon icon="mdi:close"></ha-icon><span>' + (this._t('editor.remove') || 'Remove') + '</span>';
              const repaint = ()=>{ this._emit(true); try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {} try { document.querySelectorAll('thermostat-timeline-card').forEach(el=>el?.devRefreshFromEditor?.()); } catch {} };
              f.onchange = () => { let v=parseFloat(f.value); if (isNaN(v)) v=minDisp; v=Math.max(minDisp, Math.min(maxDisp, v)); f.value=String(v); r.from = this._fromDisplayTemp(v); this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] }; repaint(); };
              t.onchange = () => { let v=parseFloat(t.value); if (isNaN(v)) v=minDisp; v=Math.max(minDisp, Math.min(maxDisp, v)); t.value=String(v); r.to = this._fromDisplayTemp(v); this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] }; repaint(); };
              c.onchange = () => { r.color = c.value; this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] }; repaint(); };
              rm.onclick = () => { ranges.splice(ri, 1); this._config.color_ranges[eid] = ranges; this._emit(true); renderRanges(); };
              row.append(f, t, c, rm); outer.append(row); colorsWrap.append(outer);
            });
            const add = document.createElement('button'); add.className = 'add-entity-btn'; add.type = 'button'; add.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>' + (this._t('editor.heat_colors.add') || 'Add color range') + '</span>';
            add.onclick = () => { const arr = [...(this._config.color_ranges?.[eid] || [])]; arr.push({ from: this._config.default_temp || 20, to: this._config.default_temp || 20, color: '#ffb347' }); this._config.color_ranges = { ...(this._config.color_ranges || {}), [eid]: arr }; this._emit(true); renderRanges(); };
            colorsWrap.append(add);
          };
          renderRanges();
          exp.onclick = () => { line.classList.toggle('open'); const key = eid; if (line.classList.contains('open')) this._openColorRows.add(key); else this._openColorRows.delete(key); };
          root.append(line);
        }

        // Per-room editors
        for (let i = 0; !isGlobal && i < want; i++) {
          const eid = this._config.entities[i]; if (!eid) continue;
          const line = document.createElement('div'); line.className = 'inline';
          const summary = document.createElement('div'); summary.className = 'summary';
          const sumLeft = document.createElement('div'); sumLeft.className = 'summary-left';
          const exp = document.createElement('button'); exp.className = 'expander'; exp.innerHTML = '<ha-icon icon="mdi:chevron-down"></ha-icon>';
          const txtWrap = document.createElement('div'); txtWrap.className = 'summary-text';
          const titleSpan = document.createElement('span'); titleSpan.className = 'summary-title';
          try {
            const labels = this._config.labels || {};
            const display = labels[eid] || this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1] || eid);
            titleSpan.textContent = display;
          } catch { titleSpan.textContent = this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1] || eid); }
          txtWrap.append(titleSpan); sumLeft.append(exp, txtWrap); summary.append(sumLeft);
          line.append(summary);
          const details = document.createElement('div'); details.className = 'details'; line.append(details);
          const colorsWrap = document.createElement('div'); colorsWrap.style.display = 'grid'; colorsWrap.style.gap = '0px'; details.append(colorsWrap);
          // Header labels for inputs (appended only when ranges exist)
          const head = document.createElement('div'); head.className = 'colors-head';
          head.innerHTML = `<span>${this._t('editor.colors.col_from')}</span><span>${this._t('editor.colors.col_to')}</span><span>${this._t('editor.colors.col_color')}</span><span></span>`;
          // Restore open state for this entity in Colors tab
          try { if (this._openColorRows.has(eid)) line.classList.add('open'); } catch {}
          const renderRanges = () => {
            colorsWrap.innerHTML = '';
            const ranges = (this._config.color_ranges?.[eid]) || [];
            if (ranges.length > 0) colorsWrap.append(head);
            ranges.forEach((r, ri) => {
              const outer = document.createElement('div'); outer.className = 'color-item';
              const row = document.createElement('div'); row.className = 'colors-row';
              const f = document.createElement('input'); f.type = 'number'; f.step = '0.5'; f.value = String(this._toDisplayTemp(r.from ?? 0)); f.setAttribute('aria-label', this._t('editor.colors.col_from')); f.title = this._t('editor.colors.col_from');
              const t = document.createElement('input'); t.type = 'number'; t.step = '0.5'; t.value = String(this._toDisplayTemp(r.to ?? 0)); t.setAttribute('aria-label', this._t('editor.colors.col_to')); t.title = this._t('editor.colors.col_to');
              const c = document.createElement('input'); c.type = 'color'; c.value = r.color || '#ffb347'; c.setAttribute('aria-label', this._t('editor.colors.col_color')); c.title = this._t('editor.colors.col_color');
              // Apply min/max constraints based on max_temp (respect display units)
              const maxDisp = this._toDisplayTemp(this._config.max_temp ?? 25);
              const minDisp = this._toDisplayTemp(this._config.min_temp ?? 5);
              f.min = String(minDisp); t.min = String(minDisp);
              f.max = String(maxDisp); t.max = String(maxDisp);
              const rm = document.createElement('button'); rm.type = 'button'; rm.className = 'remove-btn'; rm.innerHTML = '<ha-icon icon="mdi:close"></ha-icon><span>' + (this._t('editor.remove') || 'Remove') + '</span>';
              const repaint = ()=>{
                this._emit(true);
                try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
                try { document.querySelectorAll('thermostat-timeline-card').forEach(el=>el?.devRefreshFromEditor?.()); } catch {}
              };
              f.onchange = () => {
                let v=parseFloat(f.value); if (isNaN(v)) v=minDisp; v=Math.max(minDisp, Math.min(maxDisp, v)); f.value=String(v);
                r.from = this._fromDisplayTemp(v);
                // replace with new objects to ensure HA detects changes
                this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] };
                repaint();
              };
              t.onchange = () => {
                let v=parseFloat(t.value); if (isNaN(v)) v=minDisp; v=Math.max(minDisp, Math.min(maxDisp, v)); t.value=String(v);
                r.to = this._fromDisplayTemp(v);
                this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] };
                repaint();
              };
              c.onchange = () => {
                r.color = c.value;
                this._config.color_ranges = { ...(this._config.color_ranges||{}), [eid]: [...ranges] };
                repaint();
              };
              rm.onclick = () => { ranges.splice(ri, 1); this._config.color_ranges[eid] = ranges; this._emit(true); renderRanges(); };
              row.append(f, t, c, rm); outer.append(row); colorsWrap.append(outer);
            });
            const add = document.createElement('button'); add.className = 'add-entity-btn'; add.type = 'button'; add.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>' + (this._t('editor.heat_colors.add') || 'Add color range') + '</span>';
            add.onclick = () => { const arr = [...(this._config.color_ranges?.[eid] || [])]; arr.push({ from: this._config.default_temp || 20, to: this._config.default_temp || 20, color: '#ffb347' }); this._config.color_ranges = { ...(this._config.color_ranges || {}), [eid]: arr }; this._emit(true); renderRanges(); };
            colorsWrap.append(add);
          };
          renderRanges();
          exp.onclick = () => {
            line.classList.toggle('open');
            const key = eid;
            if (line.classList.contains('open')) this._openColorRows.add(key);
            else this._openColorRows.delete(key);
          };
          root.append(line);
        }

  // Add explicit refresh/apply button for colors
  const refresh = document.createElement('button');
        refresh.className = 'add-entity-btn';
        refresh.type = 'button';
        refresh.innerHTML = '<ha-icon icon="mdi:refresh"></ha-icon><span>' + (this._t('editor.colors.refresh') || 'Update schedule') + '</span>';
  refresh.onclick = async () => {
          // Persist color settings to local/shared storage so live card instances pick them up
          try {
            const settings = { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: this._config.color_ranges, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, profiles_enabled: !!this._config.profiles_enabled, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates) ? this._config.holidays_dates : [], sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(this._config.storage_sync_min||0) };
            let schedules = {};
            // Prefer current storage sensor schedules when enabled
            try {
              if (this._config.storage_enabled && this._config.storage_entity && this._hass?.states?.[this._config.storage_entity]){
                const st = this._hass.states[this._config.storage_entity];
                const attrs = st?.attributes || {};
                if (attrs && typeof attrs.schedules === 'object') {
                  schedules = JSON.parse(JSON.stringify(attrs.schedules));
                  // Unwrap legacy nested structure if present
                  if (schedules && schedules.schedules && typeof schedules.schedules === 'object') {
                    schedules = schedules.schedules;
                  }
                }
              }
            } catch {}
            // Fallback to localStorage copy
            if (!schedules || Object.keys(schedules).length===0){
              try {
                const raw = localStorage.getItem('thermostat_timeline_store') || '';
                const parsed = JSON.parse(raw||'{}');
                schedules = parsed.schedules || {};
                // Unwrap if accidentally saved nested
                if (schedules && schedules.schedules && typeof schedules.schedules === 'object') schedules = schedules.schedules;
              } catch {}
            }
            // Write local copy
            try { localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules, settings: { ...settings, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0) } })); } catch {}
            // And update shared storage if available
            try {
              if (this._config.storage_enabled && this._config.storage_entity && this._hass?.states?.[this._config.storage_entity]){
                await this._hass.callService('thermostat_timeline','set_store', { schedules, settings: { ...settings, show_pause_button: !!(this._config.show_pause_button ?? true), auto_apply_enabled: !!this._config.auto_apply, pause_indef: !!this._pauseIndef, pause_until_ms: Number(this._pauseUntilMs||0) } });
              }
            } catch {}
          } catch {}
          // Emit config change and force preview card re-render
          this._emit(true);
          try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
          try { document.querySelectorAll('thermostat-timeline-card').forEach(el=>el?.devRefreshFromEditor?.()); } catch {}
        };
  // Append buttons stacked (each on its own line) and aligned left
  // Update schedule button
  root.append(refresh);

        // Single button: clear all color data (local + shared if available)
        const clrAll = document.createElement('button');
        clrAll.className = 'remove-btn clr-colors-all-btn';
        clrAll.type = 'button';
        try { clrAll.style.width = 'max-content'; clrAll.style.justifySelf = 'start'; } catch {}
        clrAll.innerHTML = '<ha-icon icon="mdi:delete-alert"></ha-icon><span>' + (this._t('editor.colors.clear_all') || 'Clear all color data') + '</span>';
        clrAll.onclick = async () => {
          const ok = confirm(this._t('editor.colors.clear_all_confirm') || 'This will delete all color ranges from both local and shared storage. Continue?');
          if (!ok) return;
          try {
            // 1) Clear in-memory config
            this._config.color_ranges = {};
            // 2) Clear localStorage copy
            try {
              const raw = localStorage.getItem('thermostat_timeline_store') || '';
              let schedules = {};
              let settings = { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: {}, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(this._config.storage_sync_min||0) };
              if (raw) {
                try {
                  const parsed = JSON.parse(raw || '{}');
                  schedules = parsed.schedules || {};
                  const prev = parsed.settings || {};
                  settings = { ...prev, color_ranges: {} };
                } catch {}
              }
              localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules, settings }));
            } catch {}
            // 3) Clear shared storage if entity available
            try {
              if (this._hass && this._config.storage_entity) {
                let schedules = {};
                let settings = { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit, color_ranges: {}, color_global: !!this._config.color_global, min_temp: this._config.min_temp, max_temp: this._config.max_temp, away: this._config.away, merges: this._config.merges, labels: this._config.labels, temp_sensors: this._config.temp_sensors, sync_mode: (this._config.storage_sync_mode||'instant'), sync_delay_min: Number(this._config.storage_sync_min||0) };
                try {
                  const st = this._hass.states?.[this._config.storage_entity];
                  const attrs = st?.attributes || {};
                  if (attrs && typeof attrs.schedules === 'object') schedules = JSON.parse(JSON.stringify(attrs.schedules));
                  if (attrs && typeof attrs.settings === 'object') settings = { ...attrs.settings, color_ranges: {} };
                } catch {}
                await this._hass.callService('thermostat_timeline', 'set_store', { schedules, settings });
              }
            } catch (e) { console.warn('clear-all-colors (shared) failed', e); }
          } catch {}
          // Repaint editor + live cards
          this._emit(true);
          try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
          try { document.querySelectorAll('thermostat-timeline-card').forEach(el=>el?.devRefreshFromEditor?.()); } catch {}
        };
        root.append(clrAll);
      }
    } catch {}

    // Build Holidays tab content
    try {
      const root = this.shadowRoot.querySelector('.tab-holidays');
      if (root) {
        root.innerHTML = '';
        // Toggle enable inside Holidays tab
        const enableCard = document.createElement('div'); enableCard.className = 'settings-card';
        const enRow = document.createElement('div'); enRow.className='setting';
        const enText = document.createElement('div'); enText.className='text';
        const enTitle = document.createElement('div'); enTitle.className='title'; enTitle.textContent = this._t('holidays.enable');
        const enDesc = document.createElement('div'); enDesc.className='desc'; enDesc.textContent = this._t('holidays.desc');
        enText.append(enTitle, enDesc);
        const enSwitch = document.createElement('ha-switch'); enSwitch.className = 'holidays-enable'; enSwitch.checked = !!this._config.holidays_enabled;
        enSwitch.addEventListener('change', (e)=>{ const on = !!e.target.checked; this._upd('holidays_enabled', on); try { contentWrap.style.display = on ? '' : 'none'; } catch {} });
        enRow.append(enText, enSwitch); enableCard.append(enRow); root.append(enableCard);
        // Container for remaining content (shown only when enabled)
        const contentWrap = document.createElement('div'); contentWrap.className='holidays-content'; contentWrap.style.display = this._config.holidays_enabled ? '' : 'none'; root.append(contentWrap);
        // Enable hint if no rooms
        if ((this._config.entities||[]).length === 0) {
          const box = document.createElement('div'); box.className='empty-box';
          const p = document.createElement('div'); p.textContent = this._t('editor.select_entities');
          const btn = document.createElement('button'); btn.type='button'; btn.className='add-entity-btn'; btn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>'+(this._t('editor.add_entity')||'Add room')+'</span>';
          btn.onclick = ()=>{ this._activeTab='rooms'; this._render(); };
          box.append(p, btn); contentWrap.append(box);
        }
        // Source selector
        const sourceWrap = document.createElement('div'); sourceWrap.className='settings-card';
        const sRow = document.createElement('div'); sRow.className='setting';
        const sText = document.createElement('div'); sText.className='text';
        const sTitle = document.createElement('div'); sTitle.className='title'; sTitle.textContent = this._t('holidays.source');
        const sDesc = document.createElement('div'); sDesc.className='desc'; sDesc.textContent = this._t('holidays.desc');
        sText.append(sTitle, sDesc);
  const sSeg = document.createElement('div'); sSeg.className='seg';
  const bCal = document.createElement('button'); bCal.type='button'; bCal.className='h-src-cal'; bCal.textContent = this._t('holidays.source.calendar');
  const bMan = document.createElement('button'); bMan.type='button'; bMan.className='h-src-man'; bMan.textContent = this._t('holidays.source.manual');
  const applySegUi = ()=>{ const src = this._config.holidays_source || 'calendar'; bCal.classList.toggle('active', src==='calendar'); bMan.classList.toggle('active', src==='manual'); };
  bCal.onclick = ()=>{ this._config.holidays_source='calendar'; applySegUi(); this._emit(true); };
  bMan.onclick = ()=>{ this._config.holidays_source='manual'; applySegUi(); this._emit(true); };
  sSeg.append(bCal, bMan); sRow.append(sText, sSeg); sourceWrap.append(sRow); applySegUi();
        // Calendar entity picker
    const rowCal = document.createElement('div'); rowCal.className='setting'; rowCal.style.display = (this._config.holidays_source||'calendar')==='calendar' ? 'grid' : 'none';
    // Override layout to single-column so description can sit under the dropdown
    try { rowCal.style.gridTemplateColumns = '1fr'; } catch {}
    const calTxt = document.createElement('div'); calTxt.className='text';
    const calTitle = document.createElement('div'); calTitle.className='title'; calTitle.textContent = this._t('holidays.entity');
    calTxt.append(calTitle);
  const picker = document.createElement('tt-entity-picker'); picker.className='holiday-entity'; picker.setAttribute('include-domains','["calendar"]'); picker.setAttribute('label', this._t('holidays.entity'));
        try { picker.hass = this._hass; picker.value = this._config.holidays_entity || ''; } catch {}
        picker.addEventListener('value-changed', (e)=>{ this._upd('holidays_entity', e.detail.value||''); });
    // Description moved below the dropdown to avoid cramped layout
    const calDesc = document.createElement('div'); calDesc.className='desc'; calDesc.textContent = this._t('holidays.entity_desc');
  rowCal.append(calTxt, picker, calDesc); sourceWrap.append(rowCal);
        // Manual dates list
        const rowMan = document.createElement('div'); rowMan.className='setting'; rowMan.style.display = (this._config.holidays_source||'calendar')==='manual' ? 'grid' : 'none';
        const manTxt = document.createElement('div'); manTxt.className='text';
        const manTitle = document.createElement('div'); manTitle.className='title'; manTitle.textContent = this._t('holidays.dates');
        const manDesc = document.createElement('div'); manDesc.className='desc'; manDesc.textContent=''; manTxt.append(manTitle, manDesc);
        const manWrap = document.createElement('div'); manWrap.style.display='grid'; manWrap.style.gap='8px';
        const addRow = document.createElement('div'); addRow.style.display='flex'; addRow.style.gap='8px'; addRow.style.alignItems='center';
        const inp = document.createElement('input'); inp.type='date'; inp.className='tt-input';
        const addBtn = document.createElement('button'); addBtn.type='button'; addBtn.className='add-entity-btn'; addBtn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>'+(this._t('holidays.add_date')||'Add date')+'</span>';
        addBtn.onclick = ()=>{ const v=inp.value; if (!v) return; const arr = Array.isArray(this._config.holidays_dates)?[...this._config.holidays_dates]:[]; if (!arr.includes(v)) arr.push(v); this._config.holidays_dates = arr.sort(); inp.value=''; this._emit(true); };
        addRow.append(inp, addBtn); manWrap.append(addRow);
        const chips = document.createElement('div'); chips.className='linked-chips';
        const arr = Array.isArray(this._config.holidays_dates)?this._config.holidays_dates:[];
        chips.innerHTML='';
        for (const d of arr){ const chip=document.createElement('span'); chip.className='pill-chip'; const txt=document.createElement('span'); txt.textContent=d; const rm=document.createElement('button'); rm.type='button'; rm.className='rm'; rm.textContent='×'; rm.addEventListener('click', ()=>{ const v=(this._config.holidays_dates||[]).filter(x=>x!==d); this._config.holidays_dates=v; this._emit(true); }); chip.append(txt, rm); chips.append(chip); }
    manWrap.append(chips); rowMan.append(manTxt, manWrap); sourceWrap.append(rowMan);
    contentWrap.append(sourceWrap);
        // Inline Holidays editor (preview + edit) inside editor
  const edWrap = document.createElement('div'); edWrap.className = 'holiday-ed'; edWrap.style.position = 'relative';
        // Room tabs
        const tabs = document.createElement('div'); tabs.className='hol-tabs'; tabs.style.display='flex'; tabs.style.gap='8px'; tabs.style.flexWrap='wrap'; edWrap.append(tabs);
        const note = document.createElement('div'); note.style.fontSize='.85rem'; note.style.color='var(--secondary-text-color)'; note.textContent = this._t('week.editor.preview_note'); edWrap.append(note);
        // Scale
        const scaleOuter = document.createElement('div'); scaleOuter.className='week-scale'; const scale = document.createElement('div'); scale.className='week-scale-inner'; scaleOuter.append(scale); edWrap.append(scaleOuter);
        // Track
        const track = document.createElement('div'); track.className='week-track'; edWrap.append(track);
        // Toolbar
  const tools = document.createElement('div'); tools.className='hol-toolbar';
  const addBlkBtn = document.createElement('button'); addBlkBtn.className='add-entity-btn'; addBlkBtn.innerHTML = '<ha-icon icon="mdi:plus"></ha-icon><span>'+ (this._t('ui.add_block') || 'Add block') +'</span>';
  const saveBtn = document.createElement('button'); saveBtn.className='add-entity-btn'; saveBtn.innerHTML = '<ha-icon icon="mdi:content-save"></ha-icon><span>'+ (this._t('ui.save')||'Save') +'</span>';
  tools.append(addBlkBtn, saveBtn); edWrap.append(tools);
        // Inline mini block editor panel
        const mini = document.createElement('div'); mini.className='mini-ed'; mini.style.display='none'; mini.innerHTML = `
          <div class="row"><label style="min-width:64px;">${this._t('ui.from')}</label><input class="mi-from" type="time" step="60"></div>
          <div class="row"><label style="min-width:64px;">${this._t('ui.to')}</label><input class="mi-to" type="time" step="60"></div>
          <div class="row"><label style="min-width:64px;">${this._t('ui.temperature')}</label><input class="mi-temp" type="number" step="0.5"></div>
          <div class="row" style="justify-content:flex-end; gap:8px;">
            <button type="button" class="remove-btn mi-del"><ha-icon icon="mdi:close"></ha-icon><span>${this._t('ui.delete')}</span></button>
            <button type="button" class="add-entity-btn mi-cancel"><ha-icon icon="mdi:close-circle-outline"></ha-icon><span>${this._t('ui.cancel')}</span></button>
            <button type="button" class="add-entity-btn mi-save"><ha-icon icon="mdi:content-save"></ha-icon><span>${this._t('ui.save')}</span></button>
          </div>
        `;
  edWrap.append(mini);
  contentWrap.append(edWrap);

        // Helpers
        const toTime = (min)=>{ min=(Number(min)||0)%1440; const hh=String(Math.floor(min/60)).padStart(2,'0'); const mm=String(min%60).padStart(2,'0'); return `${hh}:${mm}`; };
        const fromTime = (s)=>{ const m=(/^(\d{1,2}):(\d{2})$/).exec(String(s||'')); if(!m) return 0; let h=Number(m[1]); let mi=Number(m[2]); h=Math.min(23,Math.max(0,h)); mi=Math.min(59,Math.max(0,mi)); return h*60+mi; };
        const toDisp = (c)=> this._toDisplayTemp(Number(c));
        const fromDisp = (v)=> this._fromDisplayTemp(Number(v));

        // Color helpers (mirror of card logic)
        const colorFor = (eid, tempC)=>{
          try {
            const cr = this._config?.color_ranges || {};
            const list = this._config?.color_global ? (cr['*'] || []) : (cr[eid] || cr['*'] || []);
            for (const r of (list||[])){
              const f = Number(r.from); const t = Number(r.to);
              if (Number.isFinite(f) && Number.isFinite(t) && tempC >= f && tempC <= t) return r.color || null;
            }
          } catch {}
          return null;
        };
        const contrastText = (hex)=>{
          try { const h = String(hex||'').replace('#',''); if (h.length!==6) return '#000000'; const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16); const yiq=(r*299+g*587+b*114)/1000; return yiq>=140 ? '#000000' : '#ffffff'; } catch { return '#000000'; }
        };

        const ensureHolDraft = ()=>{
          if (this._holDraft) return;
          let schedules = {}; let settings={};
          try { if (this._config.storage_enabled && this._config.storage_entity && this._hass?.states?.[this._config.storage_entity]){ const st=this._hass.states[this._config.storage_entity]; const attrs=st?.attributes||{}; schedules=attrs.schedules||{}; if (schedules.schedules) schedules=schedules.schedules; settings=attrs.settings||{}; } } catch {}
          if (!Object.keys(schedules||{}).length){ try { const raw=localStorage.getItem('thermostat_timeline_store')||''; const parsed=JSON.parse(raw||'{}'); schedules=parsed.schedules||{}; if (schedules.schedules) schedules=schedules.schedules; settings=parsed.settings||{}; } catch {} }
          const roomsMap={}; for (const eid of (this._config?.entities||[])){ const row=schedules[eid]||{}; const arr=(row.holiday && Array.isArray(row.holiday.blocks))?row.holiday.blocks:[]; roomsMap[eid]=JSON.parse(JSON.stringify(arr)); }
          this._holDraft={ rooms: roomsMap }; this._holRoom = this._holRoom || (this._config?.entities||[])[0] || null;
        };

        const paintScale = ()=>{ scale.innerHTML=''; for(let i=0;i<=24;i+=2){ const t=document.createElement('div'); t.style.position='absolute'; t.style.left=(i/24*100)+'%'; t.style.top='4px'; t.style.bottom='4px'; t.style.borderLeft='1px solid var(--divider-color)'; const lab=document.createElement('div'); lab.style.position='absolute'; lab.style.top='-2px'; lab.style.transform='translate(-50%,0)'; lab.style.left='0'; lab.style.fontSize='.75rem'; lab.style.color='var(--secondary-text-color)'; lab.textContent=(i===24?'00:00':toTime(i*60)); t.append(lab); scale.append(t);} };

        const paintTabs = ()=>{ tabs.innerHTML=''; const ents=this._config?.entities||[]; if (!this._holRoom || !ents.includes(this._holRoom)) this._holRoom=ents[0]||null; for (const eid of ents){ const b=document.createElement('button'); b.type='button'; b.className='wk-tab'+(eid===this._holRoom?' active':''); let lbl=this._config?.labels?.[eid] || (this._hass?.states?.[eid]?.attributes?.friendly_name || (eid.split('.')[1]||eid)); b.textContent=lbl; b.onclick=()=>{ this._holRoom=eid; paintTrack(); }; tabs.append(b);} };

        const openMini = (blk)=>{ mini.style.display=''; const f=mini.querySelector('.mi-from'); const t=mini.querySelector('.mi-to'); const tmp=mini.querySelector('.mi-temp'); f.value=toTime(blk.startMin); t.value=toTime(blk.endMin%1440); tmp.value=String(toDisp(blk.temp)); this._holMini = { room: this._holRoom, blk: { id: blk.id, startMin: blk.startMin, endMin: blk.endMin, temp: blk.temp } };
          // Focus first field so global editor render guard keeps panel open
          try { f.focus(); f.select && f.select(); } catch {}
          mini.querySelector('.mi-save').onclick=()=>{ const s=fromTime(f.value); let e=fromTime(t.value); if (e===0 && t.value==='00:00') e=1440; const arr=(this._holDraft.rooms||{})[this._holRoom]||[]; let b=arr.find(x=>x.id===blk.id); if (!b) { b = { id: blk.id, startMin:s, endMin:e, temp: fromDisp(tmp.value) }; arr.push(b); } else { b.startMin=Math.max(0,Math.min(1439,s)); b.endMin=Math.max(1,Math.min(1440,e)); b.temp=fromDisp(tmp.value); } arr.sort((a,bx)=>a.startMin-bx.startMin||a.endMin-bx.endMin); (this._holDraft.rooms||{})[this._holRoom]=arr; this._holMini = null; mini.style.display='none'; paintTrack(); };
          mini.querySelector('.mi-cancel').onclick=()=>{ this._holMini = null; mini.style.display='none'; };
          mini.querySelector('.mi-del').onclick=()=>{ const arr=(this._holDraft.rooms||{})[this._holRoom]||[]; const i=arr.findIndex(x=>x.id===blk.id); if (i>=0) { arr.splice(i,1); (this._holDraft.rooms||{})[this._holRoom]=arr; paintTrack(); } this._holMini = null; mini.style.display='none'; };
        };

        const paintTrack = ()=>{ ensureHolDraft(); paintTabs(); paintScale(); track.innerHTML='';
          // Ensure tooltip exists once
          let tip = edWrap.querySelector('.ed-hol-tooltip');
          if (!tip) { tip = document.createElement('div'); tip.className='wk-tooltip ed-hol-tooltip'; tip.style.display='none'; edWrap.append(tip); }
          const arr=(this._holDraft.rooms||{})[this._holRoom]||[];
          for (const b of arr){ const div=document.createElement('div'); div.className='block'; div.style.left=(b.startMin/1440*100)+'%'; div.style.width=((b.endMin-b.startMin)/1440*100)+'%';
            // Apply heat color if configured
            try { const clr = colorFor(this._holRoom, Number(b.temp)); if (clr) { div.style.background = clr; div.style.borderColor = clr; const txt=contrastText(clr); if (txt) div.style.color = txt; } } catch {}
            const showTip = ()=>{
              const txt = `${toTime(b.startMin)} - ${toTime(b.endMin)} • ${toDisp(b.temp)} ${this._isF()? '°F':'°C'}`;
              tip.textContent = txt; tip.style.display = '';
              const box = div.getBoundingClientRect();
              const cont = edWrap.getBoundingClientRect();
              const tbox = track.getBoundingClientRect();
              // Base center: visual center of the hovered block element
              let center = box.left + box.width/2 - cont.left;
              const tipW = tip.offsetWidth || 0; const tipH = tip.offsetHeight || 0; const pad = 8;
              const minC = (tbox.left - cont.left) + pad + tipW/2;
              const maxC = (tbox.right - cont.left) - pad - tipW/2;
              center = Math.max(minC, Math.min(maxC, center));
              // Prefer above the block; if not enough space, flip below
              const yAbove = box.top - cont.top - 8; // anchor a bit above block
              const yBelow = box.bottom - cont.top + 8; // a bit below block
              if (yAbove - tipH < pad) {
                tip.style.top = Math.min(cont.height - pad, yBelow) + 'px';
                tip.style.transform = 'translate(-50%,0)';
              } else {
                // Place right above the block top edge
                tip.style.top = Math.max(pad, box.top - cont.top + 6) + 'px';
                tip.style.transform = 'translate(-50%,-100%)';
              }
              tip.style.left = center + 'px';
            };
            const hideTip = ()=>{ const delay = (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) ? 3000 : 120; if (tip._hideTimer) try{ clearTimeout(tip._hideTimer);}catch{}; tip._hideTimer = setTimeout(()=>{ try { tip.style.display='none'; tip._hideTimer = null; } catch{} }, delay); };
            div.addEventListener('mouseenter', showTip); div.addEventListener('mouseleave', hideTip);
            div.ondblclick=()=>openMini(b); track.append(div);
          }
          // Re-open mini editor if it was open before a re-render
          if (this._holMini && this._holMini.room === this._holRoom) {
            openMini(this._holMini.blk);
          }
        };

  addBlkBtn.onclick = ()=>{ ensureHolDraft(); const now=new Date(); const m=now.getHours()*60+now.getMinutes(); const start=Math.max(0,Math.min(1380, Math.round(m))); const end=Math.min(1440,start+60); const blk={ id: Math.random().toString(36).slice(2,9), startMin:start, endMin:end, temp: fromDisp(this._config.default_temp||20) }; openMini(blk); };

        saveBtn.onclick = async ()=>{ ensureHolDraft(); let schedules={}; let settings={}; try { if (this._config.storage_entity && this._hass?.states?.[this._config.storage_entity]){ const st=this._hass.states[this._config.storage_entity]; const a=st?.attributes||{}; schedules=a.schedules||{}; if (schedules.schedules) schedules=schedules.schedules; settings=a.settings||{}; } } catch {} if (!Object.keys(schedules||{}).length){ try { const raw=localStorage.getItem('thermostat_timeline_store')||''; const parsed=JSON.parse(raw||'{}'); schedules=parsed.schedules||{}; if (schedules.schedules) schedules=schedules.schedules; settings=parsed.settings||{}; } catch {} } for (const eid of (this._config?.entities||[])){ const row=schedules[eid] || { defaultTemp: this._config.default_temp, blocks: [] }; const arr=(this._holDraft.rooms||{})[eid]||[]; row.holiday={ blocks: JSON.parse(JSON.stringify(arr)) }; schedules[eid]=row; } try { localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules, settings: { ...settings, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates)?this._config.holidays_dates:[] } })); } catch {} try { if (this._config.storage_enabled && this._config.storage_entity) { await this._hass.callService('thermostat_timeline','set_store',{ schedules, settings: { ...settings, holidays_enabled: !!this._config.holidays_enabled, holidays_source: this._config.holidays_source || 'calendar', holidays_entity: this._config.holidays_entity || '', holidays_dates: Array.isArray(this._config.holidays_dates)?this._config.holidays_dates:[] } }); } } catch {} try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {} };

        // Initial render
        ensureHolDraft(); paintTrack();
      }
    } catch {}

    // Apply tab visibility/class based on state (always run)
    try {
  const sBtn = this.shadowRoot.querySelector('.tab-settings-btn');
      const rBtn = this.shadowRoot.querySelector('.tab-rooms-btn');
      const cBtn = this.shadowRoot.querySelector('.tab-colors-btn');
      const hBtn = this.shadowRoot.querySelector('.tab-holidays-btn');
      const aBtn = this.shadowRoot.querySelector('.tab-away-btn');
      const yBtn = this.shadowRoot.querySelector('.tab-sync-btn');
  const bBtn = this.shadowRoot.querySelector('.tab-backup-btn');
  const sSec = this.shadowRoot.querySelector('.tab-settings');
      const rSec = this.shadowRoot.querySelector('.tab-rooms');
      const cSec = this.shadowRoot.querySelector('.tab-colors');
      const hSec = this.shadowRoot.querySelector('.tab-holidays');
      const aSec = this.shadowRoot.querySelector('.tab-away');
      const ySec = this.shadowRoot.querySelector('.tab-sync');
  const bSec = this.shadowRoot.querySelector('.tab-backup');
      const isRooms = this._activeTab === 'rooms';
      const isColors = this._activeTab === 'colors';
      const isSettings = this._activeTab === 'settings';
      const isHolidays = this._activeTab === 'holidays';
      const isAway = this._activeTab === 'away';
      const isSync = this._activeTab === 'sync';
      const isBackup = this._activeTab === 'backup';
      const showBackup = !!this._config.storage_enabled;
      // If backup is not allowed, ensure we don't stay on that tab
      if (!showBackup && this._activeTab === 'backup') {
        this._activeTab = 'sync';
      }
      if (sBtn && rBtn && cBtn && aBtn && sSec && rSec && cSec && aSec && yBtn && ySec) {
        sBtn.classList.toggle('active', isSettings);
        rBtn.classList.toggle('active', isRooms);
        cBtn.classList.toggle('active', isColors);
        if (hBtn) hBtn.classList.toggle('active', isHolidays);
        aBtn.classList.toggle('active', isAway);
        yBtn.classList.toggle('active', this._activeTab === 'sync');
        if (bBtn) {
          bBtn.classList.toggle('active', this._activeTab === 'backup');
          // Hide/show backup tab button based on storage_enabled
          bBtn.style.display = showBackup ? '' : 'none';
        }
        sSec.style.display = isSettings ? '' : 'none';
        rSec.style.display = isRooms ? '' : 'none';
        cSec.style.display = isColors ? '' : 'none';
        if (hSec) hSec.style.display = isHolidays ? '' : 'none';
        aSec.style.display = isAway ? '' : 'none';
        ySec.style.display = (this._activeTab === 'sync') ? '' : 'none';
        if (bSec) bSec.style.display = (showBackup && this._activeTab === 'backup') ? '' : 'none';
      }
    } catch {}

    // Populate Away tab controls
    try {
      const en = this.shadowRoot.querySelector('.away-enable');
      if (en) en.checked = !!(this._config.away?.enabled);
      en?.addEventListener('change', (e)=>{
        const cur = { ...(this._config.away || {}) };
        cur.enabled = !!e.target.checked; this._config.away = cur; this._emit();
      });
      const temp = this.shadowRoot.querySelector('.away-temp');
      if (temp && temp !== this.shadowRoot.activeElement) temp.value = String(this._toDisplayTemp(this._config.away?.target_c ?? 17));
      temp?.setAttribute('min', String(this._toDisplayTemp(this._config.min_temp ?? 5)));
      temp?.setAttribute('max', String(this._toDisplayTemp(this._config.max_temp ?? 25)));
      temp?.addEventListener('change', (e)=>{
        let raw = String(e.target.value||"").replace(",",".");
        let vDisp = Number(raw);
        let vC = isNaN(vDisp) ? (this._config.away?.target_c ?? 17) : this._fromDisplayTemp(vDisp);
        const mn = this._config.min_temp ?? 5; const mx = this._config.max_temp ?? 25;
        vC = Math.max(mn, Math.min(mx, vC));
        const cur = { ...(this._config.away || {}) };
        cur.target_c = vC; this._config.away = cur; this._emit();
      });
      const picker = this.shadowRoot.querySelector('.away-person-picker');
      if (picker) { picker.hass = this._hass; picker.value = ''; }
      picker?.addEventListener('value-changed', (e)=>{
        const val = e.detail.value; if (!val) return; picker.value = '';
        const cur = { ...(this._config.away || { enabled:false, persons:[], target_c:17 }) };
        const set = new Set(cur.persons || []); set.add(val); cur.persons = Array.from(set); this._config.away = cur; this._emit(true);
      });
      const chips = this.shadowRoot.querySelector('.away-chips');
      if (chips) {
        chips.innerHTML = '';
        const arr = (this._config.away?.persons || []);
        for (const p of arr) {
          const chip = document.createElement('span'); chip.className = 'pill-chip';
          const txt = document.createElement('span'); txt.textContent = this._hass?.states?.[p]?.attributes?.friendly_name || (p.split('.')[1]||p);
          const rm = document.createElement('button'); rm.type='button'; rm.className='rm'; rm.textContent='×'; rm.setAttribute('aria-label', this._t('editor.remove'));
          rm.addEventListener('click', ()=>{ const cur = { ...(this._config.away || {}) }; cur.persons = (cur.persons||[]).filter(x=>x!==p); this._config.away = cur; this._emit(true); });
          chip.append(txt, rm); chips.append(chip);
        }
      }
    } catch {}

  }

  // Pointer-driven Drag & Drop (works reliably inside HA editors)
  _startPointerDnd(line, idx){
    const wrap = line.parentElement;
    if (!wrap) return;
    if (this._pointerDndActive) return;
    this._pointerDndActive = true;
    // Avoid any re-render while dragging which could disrupt DOM
    try { this._suspendRender = true; } catch {}

    const rect = line.getBoundingClientRect();
    const ghost = line.cloneNode(true);
    ghost.classList.add('drag-ghost');
    ghost.style.width = rect.width + 'px';
    ghost.style.height = rect.height + 'px';
    ghost.style.top = rect.top + 'px';
    ghost.style.left = rect.left + 'px';

    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    placeholder.style.height = rect.height + 'px';

    // place placeholder where line was, and hide line
    wrap.insertBefore(placeholder, line);
    line.style.display = 'none';
    document.body.appendChild(ghost);

    const readClient = (e)=>{
      if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      return { x: e.clientX, y: e.clientY };
    };

    const onMove = (ev)=>{
      try { ev.preventDefault(); } catch {}
      const { y, x } = readClient(ev);
      ghost.style.top = (y - rect.height/2) + 'px';

      // find element under pointer within this shadowRoot
      let el = this.shadowRoot && this.shadowRoot.elementFromPoint(x, y);
      // climb to row in the same wrap
      while (el && el !== wrap && !el.classList?.contains('inline')) el = el.parentElement;
      if (!el || el===placeholder || el===wrap) return;
      const targetRect = el.getBoundingClientRect();
      const before = (y - targetRect.top) < targetRect.height/2;
      if (before) wrap.insertBefore(placeholder, el);
      else wrap.insertBefore(placeholder, el.nextSibling);
    };

    const endDrag = ()=>{
      window.removeEventListener('mousemove', onMove, true);
      window.removeEventListener('mouseup', onUp, true);
      window.removeEventListener('touchmove', onMove, true);
      window.removeEventListener('touchend', onUp, true);
      ghost.remove();
      // compute new order
      const from = idx;
      const to = Array.prototype.indexOf.call(wrap.children, placeholder);
      const arr = [...(this._config.entities||[])];
      const [item] = arr.splice(from,1);
      const correctedTo = Math.max(0, Math.min(to, arr.length));
      arr.splice(correctedTo, 0, item);
      placeholder.remove();
      line.style.display = '';
      this._pointerDndActive = false;
      this._config.entities = arr;
      try { this._suspendRender = false; } catch {}
      this._emit(true);
    };

    const onUp = (ev)=>{ try { ev.preventDefault?.(); } catch {} endDrag(); };

    window.addEventListener('mousemove', onMove, true);
    window.addEventListener('mouseup', onUp, true);
    window.addEventListener('touchmove', onMove, true);
    window.addEventListener('touchend', onUp, true);
  }

  // Async creator used with lit's `until` to delay row insertion until HA elements are ready
  async _createRoomLine(ent, idx){
    try { await customElements.whenDefined('ha-entity-picker'); } catch {}
    try { await customElements.whenDefined('ha-textfield'); } catch {}
    const line = this._makeEntityRow(idx);
    // Restore open state for this row
    try {
      const key = ent || `#idx:${idx}`;
      if (this._openRows.has(key)) line.classList.add('open');
    } catch {}
    return line;
  }

    _makeEntityRow(idx){
    const line = document.createElement("div"); line.className = "inline";

    // Summary bar (collapsed row header)
    const summary = document.createElement('div');
    summary.className = 'summary';
    const sumLeft = document.createElement('div'); sumLeft.className = 'summary-left';
    const expander = document.createElement('button'); expander.className = 'expander'; expander.innerHTML = `<ha-icon icon="mdi:chevron-down"></ha-icon>`; sumLeft.append(expander);
    // Title and subtitle container
    const textWrap = document.createElement('div'); textWrap.className = 'summary-text';
  const titleSpan = document.createElement('span'); titleSpan.className = 'summary-title'; titleSpan.textContent = this._t('editor.entity_placeholder');
    const subSpan = document.createElement('span'); subSpan.className = 'summary-sub'; subSpan.textContent = '';
    textWrap.append(titleSpan, subSpan);
    sumLeft.append(textWrap);
    summary.append(sumLeft);
    const actions = document.createElement("div"); actions.className = "actions";
  const handle = document.createElement("button"); handle.className = "drag-handle"; handle.setAttribute("draggable","true"); handle.setAttribute("title", this._t('editor.drag_reorder')); handle.innerHTML = `<ha-icon icon="mdi:drag"></ha-icon>`; actions.append(handle);
    // Start pointer-driven drag on mousedown (more reliable inside HA editors than native DnD)
    handle.addEventListener('mousedown', (ev)=>{
      ev.preventDefault();
      try {
        const wrap = line.parentElement;
        const curIdx = wrap ? Array.prototype.indexOf.call(wrap.children, line) : idx;
        this._startPointerDnd(line, curIdx);
      } catch { this._startPointerDnd(line, idx); }
    });
    // Touch support
    handle.addEventListener('touchstart', (ev)=>{
      try { ev.preventDefault(); } catch {}
      try {
        const wrap = line.parentElement;
        const curIdx = wrap ? Array.prototype.indexOf.call(wrap.children, line) : idx;
        this._startPointerDnd(line, curIdx);
      } catch { this._startPointerDnd(line, idx); }
    }, { passive: false });
  const del = document.createElement("button"); del.className = "remove-btn"; del.innerHTML = `<ha-icon icon="mdi:close"></ha-icon><span>${this._t('editor.remove')}</span>`; actions.append(del);
    summary.append(actions);

    // Details (expanded content)
    const details = document.createElement('div'); details.className = 'details';

    // Left column: entity picker + optional label + merge UI
    const left = document.createElement("div"); left.style.display = "grid"; left.style.gap = "6px";

  const pick = document.createElement("tt-entity-picker");
  try { pick.style.display = 'block'; pick.style.minHeight = '48px'; } catch {}
  try { pick.hass = this._hass; } catch {}
  try { pick.value = this._config.entities[idx] || ""; } catch {}
    pick.setAttribute("include-domains", '["climate"]');
    pick.setAttribute("label", this._t("editor.entity_placeholder"));
    // Filter out already-selected entities in other pickers (but allow the current one)
    pick.entityFilter = (st) => {
      try {
        const id = st?.entity_id || st?.entityId || st?.entityID || "";
        if (!id) return false;
        const chosenPrim = (this._config.entities || []).filter(Boolean);
        const allLinked = Object.values(this._config.merges || {}).flat();
        const blocked = new Set([...chosenPrim, ...allLinked]);
        const current = this._config.entities[idx];
        return !blocked.has(id) || id === current;
      } catch { return true; }
    };

  const nameInp = document.createElement("input");
    nameInp.type = 'text';
    nameInp.className = "label-input tt-input";
    nameInp.setAttribute("placeholder", this._t('editor.display_name_optional'));
    try {
      const curEid = this._config.entities[idx];
      const curLbl = (this._config.labels || {})[curEid] || '';
      nameInp.value = curLbl;
    } catch {}
    nameInp.addEventListener("change", (e)=>{
      const eid = this._config.entities[idx];
      if (!eid) return;
      const labels = { ...(this._config.labels || {}) };
      const val = (e.target.value || "").trim();
      if (val) labels[eid] = val; else delete labels[eid];
      this._config.labels = labels;
      // Repaint so the summary header updates immediately with the custom name
      this._emit(true);
      // Persist label to local browser storage so live preview doesn’t get
      // overwritten by periodic hass() reloads when shared storage is OFF
      try {
        const raw = localStorage.getItem('thermostat_timeline_store') || '';
        let parsed = {};
        try { parsed = JSON.parse(raw || '{}'); } catch {}
        const schedules = parsed.schedules || {};
        const prevSettings = parsed.settings || {};
        const settings = { ...prevSettings, labels: { ...(prevSettings.labels||{}), ...labels } };
        localStorage.setItem('thermostat_timeline_store', JSON.stringify({ schedules, settings }));
      } catch {}
      // Nudge any live preview card instances to refresh immediately
      try { window.dispatchEvent(new CustomEvent('thermostat-timeline-refresh')); } catch {}
      try { document.querySelectorAll('thermostat-timeline-card').forEach(el=>el?.devRefreshFromEditor?.()); } catch {}
      try { this._pushSettingsToStoreDebounced(); } catch {}
    });

    // Merge/Link section
  const linkWrap = document.createElement('div');
  linkWrap.style.display = 'grid';
  linkWrap.style.gap = '6px';
  // Visible label for merge/link section
  const linkLabel = document.createElement('div');
  linkLabel.className = 'label';
  linkLabel.textContent = this._t('editor.merge_label') || 'Flet med (tilføj ekstra termostat)';
  const linkPicker = document.createElement('tt-entity-picker');
  try { linkPicker.style.display = 'block'; linkPicker.style.minHeight = '48px'; } catch {}
    linkPicker.className = 'merge-picker';
    linkPicker.setAttribute('include-domains', '["climate"]');
    linkPicker.setAttribute('label', this._t('editor.merge_label') || 'Flet med (tilføj ekstra termostat)');
    linkPicker.hass = this._hass;
    const linkFilter = (st) => {
      try {
        const id = st?.entity_id || st?.entityId || st?.entityID || '';
        if (!id) return false;
        const prims = (this._config.entities || []).filter(Boolean);
        const allLinked = Object.values(this._config.merges || {}).flat();
        const used = new Set([...prims, ...allLinked]);
        // Allow selecting if not already used anywhere and not equal to current primary
        const cur = this._config.entities[idx];
        return !used.has(id) && id !== cur;
      } catch { return true; }
    };
    linkPicker.entityFilter = linkFilter;
    linkPicker.addEventListener('value-changed', (e)=>{
      const toAdd = e.detail.value;
      linkPicker.value = '';
      const primary = this._config.entities[idx];
      if (!primary || !toAdd) return;
      const merges = { ...(this._config.merges || {}) };
      const arr = Array.from(new Set([...(merges[primary] || []), toAdd]));
      merges[primary] = arr;
      this._config.merges = merges;
      this._emit(true);
      try { this._pushSettingsToStoreDebounced(); } catch {}
    });

    const chips = document.createElement('div');
    chips.className = 'linked-chips';

  left.append(pick, nameInp, linkWrap, chips);
    details.append(left);

    // Expand/collapse
    const toggle = ()=>{
      line.classList.toggle('open');
      try {
        const eid = this._config.entities[idx] || `#idx:${idx}`;
        if (line.classList.contains('open')) this._openRows.add(eid);
        else this._openRows.delete(eid);
      } catch {}
      // When a row is opened, force-hydrate the pickers so they render immediately
      try {
        if (line.classList.contains('open')) {
          // Primary picker
          try {
            pick.hass = this._hass;
            pick.style.display = 'block';
            pick.style.minHeight = '48px';
            if (typeof pick.requestUpdate === 'function') pick.requestUpdate();
            // Nudge again after layout for stubborn cases
            setTimeout(()=>{ try { if (typeof pick.requestUpdate === 'function') pick.requestUpdate(); } catch {} }, 50);
          } catch {}
          // Merge picker
          try {
            linkPicker.hass = this._hass;
            linkPicker.style.display = 'block';
            linkPicker.style.minHeight = '48px';
            if (typeof linkPicker.requestUpdate === 'function') linkPicker.requestUpdate();
            setTimeout(()=>{ try { if (typeof linkPicker.requestUpdate === 'function') linkPicker.requestUpdate(); } catch {} }, 50);
          } catch {}
        }
      } catch {}
    };
    expander.addEventListener('click', (e)=>{ e.stopPropagation(); toggle(); });
    sumLeft.addEventListener('click', (e)=>{ if (e.target === expander) return; toggle(); });

    line.append(summary, details);

    // populate chips on render
    const refreshChips = () => {
      try {
        linkPicker.hass = this._hass;
        const primary = this._config.entities[idx];
        const links = (this._config.merges?.[primary] || []);
        chips.innerHTML = '';
        for (const l of links){
          const chip = document.createElement('span');
          chip.className = 'pill-chip';
          const txt = document.createElement('span');
          txt.textContent = this._hass?.states?.[l]?.attributes?.friendly_name || (l.split('.')[1]||l);
          const rm = document.createElement('button');
          rm.type = 'button'; rm.className = 'rm'; rm.textContent = '×';
          rm.setAttribute('aria-label', this._t('editor.remove'));
          rm.addEventListener('click', ()=>{
            const merges = { ...(this._config.merges || {}) };
            merges[primary] = (merges[primary]||[]).filter(x=>x!==l);
            if (!merges[primary]?.length) delete merges[primary];
            this._config.merges = merges;
            this._emit(true);
            try { this._pushSettingsToStoreDebounced(); } catch {}
          });
          chip.append(txt, rm);
          chips.append(chip);
        }
        // Update subtitle after chip changes
        try {
          const subEl = line.querySelector('.summary-sub');
          const linkedNames = links.map(id => this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1]||id));
          const parts = [];
          const eid = primary;
          if (eid) parts.push(eid);
          if (linkedNames.length) parts.push(`${this._t('editor.merged_with')}: ${linkedNames.join(', ')}`);
          if (subEl) subEl.textContent = parts.join(' • ');
        } catch {}
        linkWrap.innerHTML = '';
        linkWrap.append(linkLabel, linkPicker);
      } catch {}
    };

    // Initial render of merge section
    refreshChips();

    // Remove this room/entity
    del.addEventListener('click', () => {
      try {
        const arr = [...(this._config.entities || [])];
        const primary = arr[idx];
        // Remove the primary from entities
        arr.splice(idx, 1);
        // Clean up labels
        const labels = { ...(this._config.labels || {}) };
        if (primary && labels[primary]) delete labels[primary];
        // Clean up merges: remove mapping for this primary and remove it from other arrays
        const merges = { ...(this._config.merges || {}) };
        if (primary && merges[primary]) delete merges[primary];
        for (const k of Object.keys(merges)) {
          merges[k] = (merges[k] || []).filter((e) => e !== primary);
          if (!merges[k].length) delete merges[k];
        }
        this._config.entities = arr;
        this._config.labels = labels;
        this._config.merges = merges;
        this._emit(true);
      } catch (e) {
        console.warn('remove entity failed', e);
      }
    });

    // When picker changes primary value, migrate merges
    pick.addEventListener("value-changed", (e)=>{
      const oldPrimary = this._config.entities[idx];
      const newPrimary = e.detail.value;
      if (oldPrimary && newPrimary && oldPrimary !== newPrimary){
        const merges = { ...(this._config.merges || {}) };
        if (merges[oldPrimary] && !merges[newPrimary]) { merges[newPrimary] = merges[oldPrimary]; delete merges[oldPrimary]; }
        else if (merges[oldPrimary] && merges[newPrimary]) { merges[newPrimary] = Array.from(new Set([...(merges[newPrimary]||[]), ...(merges[oldPrimary]||[])])); delete merges[oldPrimary]; }
        this._config.merges = merges;
        // migrate temp sensor mapping to new primary key
        try {
          const sensors = { ...(this._config.temp_sensors || {}) };
          if (sensors[oldPrimary] && !sensors[newPrimary]) sensors[newPrimary] = sensors[oldPrimary];
          if (sensors[oldPrimary]) delete sensors[oldPrimary];
          this._config.temp_sensors = sensors;
        } catch {}
      }
      this._config.entities[idx] = newPrimary;
      // Move open-state key from old -> new entity id
      try {
        const oldKey = oldPrimary || `#idx:${idx}`;
        const newKey = newPrimary || `#idx:${idx}`;
        if (this._openRows.has(oldKey)) { this._openRows.delete(oldKey); this._openRows.add(newKey); }
      } catch {}
  try { nameInp.value = (this._config.labels || {})[newPrimary] || ""; if (nameInp && typeof nameInp.requestUpdate === 'function') nameInp.requestUpdate(); } catch {}
  if (this._openCount > 0) this._pendingEmit = true; else this._emit(true);
  try { this._pushSettingsToStoreDebounced(); } catch {}
      refreshChips();
      // Also update subtitle on primary change
      try {
        const subEl = line.querySelector('.summary-sub');
        const eid = this._config.entities[idx];
        const linkedNames = (this._config.merges?.[eid] || []).map(id => this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1]||id));
        const parts = [];
        if (eid) parts.push(eid);
        if (linkedNames.length) parts.push(`${this._t('editor.merged_with')}: ${linkedNames.join(', ')}`);
        if (subEl) subEl.textContent = parts.join(' • ');
      } catch {}
    });

    return line;
  }

  // (Removed unused pointer-driven drag & drop prototype)

  _addEntity(){ this._config.entities = [...(this._config.entities||[]), ""]; this._emit(true); }
  _upd(key,val){ this._config[key] = val; this._emit(); }
  _emit(repaint=false){
    if (this._openCount > 0) { this._pendingEmit = true; return; }
    // Emit a fresh cloned config to ensure HA editor detects changes immediately
    let cfg;
    try { cfg = JSON.parse(JSON.stringify(this._config)); }
    catch { cfg = { ...this._config }; }
    this.dispatchEvent(new CustomEvent("config-changed", { detail:{ config: cfg }, bubbles:true, composed:true }));
    if (repaint) this._render();
  }

  _t(k){ return ttLocalize(k, this._lang || this._hass || 'en'); }

  _applyEditorI18n(){
    try {
      
      const t = (k)=> this._t(k);
      const root = this.shadowRoot;
      if (!root) return;
      // Title row
      const titleRow = root.querySelector('.row .title')?.closest('.row');
      const titleLabel = titleRow?.querySelector('.label') || root.querySelector('.row .label');
      if (titleLabel) titleLabel.textContent = t('editor.title_label');
      const titleField = root.querySelector('ha-textfield.title');
      if (titleField) {
        titleField.setAttribute('label', t('editor.title_label'));
        // Show localized preset when empty, and keep it updated with language
        try { titleField.setAttribute('placeholder', this._t('card.title_default')); } catch {}
      }

      // Storage entity (use the .storage picker to find its label robustly)
      const storagePicker = root.querySelector('.storage');
      if (storagePicker) {
        const storageLabel = storagePicker.closest('.row')?.querySelector('.label');
  // Hide the label text for the storage section
  if (storageLabel) storageLabel.textContent = '';
        // toggle texts
        const stTitle = root.querySelector('.store-title');
        const stDesc = root.querySelector('.store-desc');
        // Title + info icon (click to open popover)
        const stTitleText = root.querySelector('.store-title .store-title-text');
        if (stTitleText) stTitleText.textContent = t('editor.store_enable.title');
        if (stDesc) {
          const shortTxt = this._t('editor.store_enable.short');
          const icon = root.querySelector('.info-icon');
          const textSpan = root.querySelector('.store-desc-text');
          if (textSpan) textSpan.textContent = shortTxt !== 'editor.store_enable.short' ? shortTxt : (this._t('editor.store_enable.title') || '');

          // Build popover once
          let pop = root.querySelector('.info-pop');
          if (!pop) {
            pop = document.createElement('div');
            pop.className = 'info-pop hidden';
            pop.setAttribute('role','dialog');
            root.append(pop);
          }
          const openPop = () => {
            const desc = this._t('editor.store_enable.desc');
            pop.textContent = desc;
            const r = icon.getBoundingClientRect();
            const maxW = Math.min(520, Math.max(240, Math.floor(window.innerWidth*0.9)));
            pop.style.maxWidth = maxW + 'px';
            let left = Math.max(8, Math.min(window.innerWidth - maxW - 8, r.left));
            let top = r.bottom + 8;
            pop.style.left = left + 'px';
            pop.style.top = top + 'px';
            pop.classList.remove('hidden');
          };
          const closePop = () => { if (pop) pop.classList.add('hidden'); };

          // Bind click/tap once
          if (icon && !icon.dataset.bound) {
            icon.dataset.bound = '1';
            icon.addEventListener('click', (e) => { e.stopPropagation(); if (pop.classList.contains('hidden')) openPop(); else closePop(); });
            icon.addEventListener('touchend', (e) => { try { e.preventDefault(); } catch{}; e.stopPropagation(); if (pop.classList.contains('hidden')) openPop(); else closePop(); }, { passive:false });
            // Close on outside click or ESC
            const onOutside = (ev)=>{
              const path = ev.composedPath ? ev.composedPath() : [];
              if (path.includes(icon) || path.includes(pop)) return; closePop();
            };
            window.addEventListener('click', onOutside);
            window.addEventListener('keydown', (ev)=>{ if (ev.key==='Escape') closePop(); });
          }
        }
        // Check that the thermostat_timeline integration/service exists in Home Assistant
        try {
          const hasService = !!(this._hass && this._hass.services && this._hass.services['thermostat_timeline']);
          let warn = root.querySelector('.store-missing');
          const warnText = this._t ? this._t('editor.store_missing') : null;
          const msg = warnText && warnText !== 'editor.store_missing'
            ? warnText
            : 'Integration "Thermostat Pro Timeline Sync" is not installed. Shared storage is unavailable.';
          var githubLink = ' <a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=thermostat-pro-timeline-sync" target="_blank" rel="noopener noreferrer" style="color:var(--error-color);text-decoration:underline;font-weight:500;">[Åbn i HACS]</a>';
          if (!warn) {
            warn = document.createElement('div');
            warn.className = 'store-missing';
            warn.style.color = 'var(--error-color)';
            warn.style.fontSize = '.9rem';
            warn.style.marginTop = '6px';
            warn.style.display = 'none';
            const controls = root.querySelector('.store-controls');
            if (controls && controls.parentNode) controls.parentNode.insertBefore(warn, controls);
          }
          // Always update warning content
          // Sæt tekst og link som separate child nodes
          // Fjern alle eksisterende child nodes
          while (warn.firstChild) warn.removeChild(warn.firstChild);
          // Tilføj tekst og link igen
          warn.appendChild(document.createTextNode(msg.replace(/\.$/, '') + '. '));
          let link = document.createElement('a');
          link.href = 'https://my.home-assistant.io/redirect/hacs_repository/?owner=qlerup&repository=thermostat-pro-timeline-sync';
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.style.color = 'var(--error-color)';
          link.style.textDecoration = 'underline';
          link.style.fontWeight = '500';
          link.textContent = 'Åbn i HACS';
          warn.appendChild(link);
          if (!hasService) {
            warn.style.display = 'block';
            const sw = root.querySelector('.store-enable'); if (sw) sw.disabled = true;
            const picker = root.querySelector('.storage'); if (picker) { try { picker.disabled = true; picker.setAttribute('disabled',''); } catch {} }
          } else {
            warn.style.display = 'none';
            const sw = root.querySelector('.store-enable'); if (sw) sw.disabled = false;
            const picker = root.querySelector('.storage'); if (picker) { try { picker.disabled = false; picker.removeAttribute('disabled'); } catch {} }
          }
          // Update small status chip in tabs
          try {
            const chip = root.querySelector('.int-status');
            const icon = chip?.querySelector('ha-icon');
            const txt = chip?.querySelector('.text');
            if (chip && icon && txt) {
              if (hasService) {
                chip.classList.remove('bad'); chip.classList.add('ok');
                icon.setAttribute('icon', 'mdi:cloud-check-outline');
                txt.textContent = t('editor.integration.connected') || 'Connected to integration';
              } else {
                chip.classList.remove('ok'); chip.classList.add('bad');
                icon.setAttribute('icon', 'mdi:cloud-off-outline');
                txt.textContent = t('editor.integration.disconnected') || 'Not connected to integration';
              }
              // Make the chip clickable to jump to Sync tab
              chip.style.userSelect = 'none';
              chip.addEventListener('click', ()=>{ try { this._activeTab = 'sync'; this._render(); } catch {} });
            }
          } catch {}
        } catch {}
  // (clear storage only button removed)
        const clrAllBtn = root.querySelector('.clear-all span');
        if (clrAllBtn) clrAllBtn.textContent = t('editor.clear_all');
        const migBtn = root.querySelector('.migrate-to-store span');
        if (migBtn) migBtn.textContent = t('editor.migrate_to_store');
      }
      const clrLocalBtn = root.querySelector('.clear-local-only span');
      if (clrLocalBtn) clrLocalBtn.textContent = t('editor.clear_local_only');
    const resetOnbBtn = root.querySelector('.reset-onboard span');
    if (resetOnbBtn) resetOnbBtn.textContent = t('onboard.reset');

      // Entities section label (use the .entities container to find its label robustly)
      const entitiesWrap = root.querySelector('.entities');
      if (entitiesWrap) {
        const entitiesLabel = entitiesWrap.closest('.row')?.querySelector('.label');
        if (entitiesLabel) entitiesLabel.textContent = t('editor.select_entities');
      }

  // Add room button text (target only the actual add-room control)
  const addBtn = root.querySelector('.add-room-btn span');
  if (addBtn) addBtn.textContent = t('editor.add_entity');

      // Settings labels (compact inputs)
  const defLbl = root.querySelector('.slabel-def');
      if (defLbl) defLbl.textContent = t('editor.default_c').replace('°C', this._unitSymbol());
      const rowLbl = root.querySelector('.slabel-rowh');
      if (rowLbl) rowLbl.textContent = t('editor.row_height_px');
      const maxLbl = root.querySelector('.slabel-maxc');
      if (maxLbl) maxLbl.textContent = t('editor.max_c').replace('°C', this._unitSymbol());
  const minLbl = root.querySelector('.slabel-minc');
  if (minLbl) minLbl.textContent = t('editor.min_c').replace('°C', this._unitSymbol());

      // Settings titles/descriptions
      const settings = Array.from(root.querySelectorAll('.settings-card .setting'));
      if (settings[0]) { // Auto apply
        const ti = settings[0].querySelector('.title'); if (ti) ti.textContent = t('editor.auto_apply.title');
        const de = settings[0].querySelector('.desc'); if (de) de.textContent = t('editor.auto_apply.desc');
      }
      if (settings[1]) { // On editing
        const ti = settings[1].querySelector('.title'); if (ti) ti.textContent = t('editor.apply_edit.title');
        const de = settings[1].querySelector('.desc'); if (de) de.textContent = t('editor.apply_edit.desc');
      }
      if (settings[2]) { // On Default change
        const ti = settings[2].querySelector('.title'); if (ti) ti.textContent = t('editor.apply_default.title');
        const de = settings[2].querySelector('.desc'); if (de) de.textContent = t('editor.apply_default.desc');
      }
      // Weekdays enable section (select by class to avoid index issues)
      try {
        const ws = root.querySelector('.week-setting');
        if (ws){
          const ti = ws.querySelector('.title'); if (ti) ti.textContent = t('week.enable');
          const de = ws.querySelector('.week-enable-desc') || ws.querySelector('.desc');
          if (de) de.textContent = t('week.enable.desc');
        }
      } catch {}
      // Profiles enable section
      try {
        const ps = root.querySelector('.profiles-setting');
        if (ps){
          const ti = ps.querySelector('.title'); if (ti) ti.textContent = t('profiles.enable');
          const de = ps.querySelector('.profiles-enable-desc') || ps.querySelector('.desc');
          if (de) de.textContent = t('profiles.enable.desc');
        }
      } catch {}
      // Holidays enable section
      try {
        const hs = root.querySelector('.holidays-setting');
        if (hs){
          const ti = hs.querySelector('.title'); if (ti) ti.textContent = t('holidays.enable');
          const de = hs.querySelector('.holidays-enable-desc') || hs.querySelector('.desc');
          if (de) de.textContent = t('holidays.desc');
        }
      } catch {}
      // Time format section (always last)
      try {
        const tfTitle = root.querySelector('.timefmt-title'); if (tfTitle) tfTitle.textContent = t('editor.timefmt.title');
        const tfDesc = root.querySelector('.timefmt-desc'); if (tfDesc) tfDesc.textContent = t('editor.timefmt.desc');
      } catch {}
      // Time source section
      try {
        const tsTitle = root.querySelector('.timesrc-title'); if (tsTitle) tsTitle.textContent = t('editor.timesrc.title');
        const tsDesc = root.querySelector('.timesrc-desc'); if (tsDesc) tsDesc.textContent = t('editor.timesrc.desc');
        const b1 = root.querySelector('.srcBrowser'); if (b1) b1.textContent = t('editor.timesrc.browser');
        const b2 = root.querySelector('.srcHa'); if (b2) b2.textContent = t('editor.timesrc.ha');
      } catch {}
      // Temperature unit section
      try {
        const tuTitle = root.querySelector('.tempfmt-title'); if (tuTitle) tuTitle.textContent = t('editor.tempfmt.title');
        const tuDesc = root.querySelector('.tempfmt-desc'); if (tuDesc) tuDesc.textContent = t('editor.tempfmt.desc');
      } catch {}
      // Pause button section
      try {
        const pTitle = root.querySelector('.pausebtn-title'); if (pTitle) pTitle.textContent = t('editor.pausebtn.title');
        const pDesc = root.querySelector('.pausebtn-desc'); if (pDesc) pDesc.textContent = t('editor.pausebtn.desc');
      } catch {}
      // Tabs labels
      try {
  const sBtn = root.querySelector('.tab-settings-btn'); if (sBtn) sBtn.textContent = t('editor.tabs.settings');
  const rBtn = root.querySelector('.tab-rooms-btn'); if (rBtn) rBtn.textContent = t('editor.tabs.rooms');
        const cBtn = root.querySelector('.tab-colors-btn'); if (cBtn) cBtn.textContent = t('editor.tabs.colors');
        const aBtn = root.querySelector('.tab-away-btn'); if (aBtn) aBtn.textContent = t('editor.tabs.away');
    const yBtn = root.querySelector('.tab-sync-btn'); if (yBtn) yBtn.textContent = t('editor.tabs.sync');
    const bBtn = root.querySelector('.tab-backup-btn'); if (bBtn) bBtn.textContent = t('editor.tabs.backup') || 'Backup';
    const hBtn = root.querySelector('.tab-holidays-btn'); if (hBtn) hBtn.textContent = t('editor.tabs.holidays');
    // Holidays tab inner labels
    try {
      const srcTitle = root.querySelector('.tab-holidays .settings-card .setting .title'); if (srcTitle) srcTitle.textContent = t('holidays.source');
      const srcDesc = root.querySelector('.tab-holidays .settings-card .setting .desc'); if (srcDesc) srcDesc.textContent = t('holidays.desc');
      const calTitle = root.querySelector('.tab-holidays .settings-card .setting:nth-child(2) .title'); if (calTitle) calTitle.textContent = t('holidays.entity');
      const manTitle = root.querySelector('.tab-holidays .settings-card .setting:nth-child(3) .title'); if (manTitle) manTitle.textContent = t('holidays.dates');
      const editBtns = root.querySelectorAll('.tab-holidays .inline .actions .btn'); editBtns.forEach(b=>{ try { b.textContent = t('holidays.edit'); } catch{} });
      const segCal = root.querySelector('.tab-holidays .h-src-cal'); if (segCal) segCal.textContent = t('holidays.source.calendar');
      const segMan = root.querySelector('.tab-holidays .h-src-man'); if (segMan) segMan.textContent = t('holidays.source.manual');
      const addDate = root.querySelector('.tab-holidays .add-entity-btn span'); if (addDate) addDate.textContent = t('holidays.add_date');
    } catch {}
        // (reload buttons removed)
    // Colors mode labels
    const cmTitle = root.querySelector('.colors-mode-title'); if (cmTitle) cmTitle.textContent = t('editor.colors.mode');
    const cmDesc = root.querySelector('.colors-mode-desc'); if (cmDesc) cmDesc.textContent = t('editor.colors.mode.desc');
    const cmRoom = root.querySelector('.colors-mode .mode-room'); if (cmRoom) cmRoom.textContent = t('editor.colors.mode_per_room');
    const cmGlob = root.querySelector('.colors-mode .mode-global'); if (cmGlob) cmGlob.textContent = t('editor.colors.mode_global');
  // Colors tab action label (single clear-all button)
  const clrAllBtn = root.querySelector('.clr-colors-all-btn span'); if (clrAllBtn) clrAllBtn.textContent = t('editor.colors.clear_all');
        // Away tab labels
        const awayTitle = root.querySelector('.away-enable-title'); if (awayTitle) awayTitle.textContent = t('away.enable');
        const awayDesc = root.querySelector('.away-desc'); if (awayDesc) awayDesc.textContent = t('away.desc');
        const awayTemp = root.querySelector('.away-temp-title'); if (awayTemp) awayTemp.textContent = t('away.temp');
        const awayPersons = root.querySelector('.away-persons-title'); if (awayPersons) awayPersons.textContent = t('away.persons');
      } catch {}

      // Sync delay labels (seconds)
      try {
        const sdT = root.querySelector('.sync-delay-title');
        if (sdT) {
          const tx = t('sync.delay.title_sec');
          sdT.textContent = (tx && tx !== 'sync.delay.title_sec') ? tx : 'Delay (seconds)';
        }
        const sdD = root.querySelector('.sync-delay-desc');
        if (sdD) {
          const dx = t('sync.delay.desc_sec');
          sdD.textContent = (dx && dx !== 'sync.delay.desc_sec') ? dx : 'Save after no changes for this many seconds.';
        }
      } catch {}

      // Backup tab labels
      try {
        const bt = root.querySelector('.backup-title'); if (bt) bt.textContent = t('backup.title') || 'Backup';
        const bd = root.querySelector('.backup-desc'); if (bd) bd.textContent = t('backup.desc') || 'Copy schedules/settings to backup and restore when needed.';
        const bn = root.querySelector('.backup-now-label'); if (bn) bn.textContent = t('backup.now') || 'Backup now';
        const brl = root.querySelector('.backup-restore-label'); if (brl) brl.textContent = t('backup.restore') || 'Restore';
        const bat = root.querySelector('.backup-auto-title'); if (bat) bat.textContent = t('backup.auto');
        const bad = root.querySelector('.backup-auto-desc'); if (bad) bad.textContent = t('backup.auto.desc');
        const bit = root.querySelector('.backup-int-title'); if (bit) bit.textContent = t('backup.interval');
        const bid = root.querySelector('.backup-int-desc'); if (bid) bid.textContent = t('backup.interval.desc');
        const bst = root.querySelector('.backup-sensor-title'); if (bst) bst.textContent = t('backup.sensor');
        const blt = root.querySelector('.backup-last-title'); if (blt) blt.textContent = t('backup.last');
      } catch {}

    } catch(e){ /* ignore */ }
  }

  // Detect whether a given title equals any built-in localized default
  _isDefaultTitle(txt){
    try {
      const s = String(txt || '').trim();
      for (const k of Object.keys(TT_I18N || {})){
        const v = TT_I18N[k] && TT_I18N[k]['card.title_default'];
        if (v && String(v).trim() === s) return true;
      }
    } catch {}
    return false;
  }

}
customElements.define("thermostat-timeline-card-editor", ThermostatTimelineCardEditor);

// Registrér i “Custom cards”
window.customCards = window.customCards || [];
window.customCards.push({ type: "thermostat-timeline-card", name: "Thermostat Timeline Card", description: "24h tidslinje – transition-baseret set_temperature + smart replan & apply-on-change", version: TT_CARD_VERSION });

function loadCard() {}
loadCard();
