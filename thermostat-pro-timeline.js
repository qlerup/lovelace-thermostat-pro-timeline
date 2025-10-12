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

    // GUI editor panel
    'editor.title_label': 'Title',
  'editor.storage_entity': 'Storage entity',
  'editor.add_entity': 'Add room',
    'editor.entity_placeholder': 'Select an entity',
    'editor.drag_reorder': 'Drag to reorder',
    'editor.remove': 'Remove',
    'editor.default_c': 'Default °C',
  'editor.row_height_px': 'Row height (px)',
  'editor.max_c': 'Max °C',
  'editor.auto_apply.title': 'Automatic apply',
    'editor.auto_apply.desc':
      'When enabled, the card will try to set the temperature on selected climate entities so it matches the planned value for “right now”.',
    'editor.apply_edit.title': 'On editing',
    'editor.apply_edit.desc':
      'When you change timeline blocks and the change affects the current time, the new temperature is applied immediately.',
    'editor.apply_default.title': 'On Default °C change',
    'editor.apply_default.desc':
      'When “Default °C” changes and it affects the current period, the new temperature is applied immediately.',
    'editor.merge_label': 'Merge with (add extra thermostat)',
    'editor.display_name_optional': 'Display name (optional)',
    'editor.merged_with': 'Merged with'
    , 'editor.store_enable.title': 'Enable shared storage',
    'editor.store_enable.desc': 'When enabled, schedules are saved to the selected sensor so they are shared across all users/dashboards. When disabled, schedules are saved only in your browser.',
    'editor.clear_store': 'Clear storage',
    'editor.clear_store_confirm': 'This will delete all stored schedules. Continue?',
    'editor.migrate_to_store': 'Transfer browser data to storage',
    'editor.migrate_confirm': 'Transfer your browser-saved schedules to the selected storage sensor? This will overwrite any existing schedules in storage.',
    'editor.no_local_data': 'No local browser data found.',
    'editor.clear_all': 'Clear all data',
    'editor.clear_all_confirm': 'This will delete both storage and local browser schedules. Continue?',
  'editor.clear_storage_only': 'Clear storage data only',
    'editor.clear_storage_only_confirm': 'This will delete schedules from the selected storage sensor. Continue?',
  'editor.clear_local_only': 'Clear local data only',
    'editor.clear_local_only_confirm': 'This will delete schedules saved in your browser only. Continue?'
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
  , 'week.enable.desc': 'Enable per-weekday scheduling. When off, the same plan is used every day.'
    , 'editor.timefmt.title': 'Time format'
    , 'editor.timefmt.desc': 'Choose 24-hour or 12-hour (AM/PM) display for times on the card.'
    , 'editor.tempfmt.title': 'Temperature unit'
    , 'editor.tempfmt.desc': 'Choose Celsius (°C) or Fahrenheit (°F) for display in the card and editors.'
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

    // GUI editor panel
    'editor.title_label': 'Titel',
  'editor.storage_entity': 'Lager-entitet',
  'editor.add_entity': 'Tilføj rum',
    'editor.entity_placeholder': 'Vælg en entitet',
    'editor.drag_reorder': 'Træk for at ændre rækkefølge',
    'editor.remove': 'Fjern',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Rækkens højde (px)',
  'editor.max_c': 'Maks °C',
    'editor.auto_apply.title': 'Automatisk anvendelse',
    'editor.auto_apply.desc':
      'Når slået til forsøger kortet automatisk at sætte temperaturen på de valgte climate-entities, så den matcher den planlagte værdi for “lige nu”.',
    'editor.apply_edit.title': 'Ved redigering',
    'editor.apply_edit.desc':
      'Når du ændrer blokke i tidslinjen, og ændringen påvirker den aktuelle tid, anvendes den nye temperatur med det samme.',
    'editor.apply_default.title': 'Ved Standard °C ændring',
    'editor.apply_default.desc':
      'Når “Standard °C” ændres og det påvirker temperaturen for nuværende tidsrum, anvendes den nye temperatur straks.',
    'editor.merge_label': 'Flet med (tilføj ekstra termostat)',
    'editor.display_name_optional': 'Visningsnavn (valgfrit)',
    'editor.merged_with': 'Flettet med',
    'editor.store_enable.title': 'Aktivér delt lager',
    'editor.store_enable.desc': 'Når slået til, gemmes tidsplanen i den valgte sensor og deles mellem alle brugere/dashboards. Når slået fra, gemmes den kun lokalt i din browser.',
    'editor.clear_store': 'Ryd lager',
    'editor.clear_store_confirm': 'Dette vil slette alle gemte tidsplaner. Vil du fortsætte?',
    'editor.migrate_to_store': 'Overfør browserdata til lager',
    'editor.migrate_confirm': 'Overfør dine browser-gemte tidsplaner til den valgte sensor? Dette overskriver eksisterende planer i lageret.',
    'editor.no_local_data': 'Ingen lokale browserdata blev fundet.',
    'editor.clear_all': 'Ryd al data',
    'editor.clear_all_confirm': 'Dette sletter både lager og lokale/browser tidsplaner. Vil du fortsætte?',
  'editor.clear_storage_only': 'Ryd kun lagerdata',
    'editor.clear_storage_only_confirm': 'Dette sletter tidsplaner fra den valgte lagersensor. Vil du fortsætte?',
  'editor.clear_local_only': 'Ryd kun lokale data',
    'editor.clear_local_only_confirm': 'Dette sletter kun tidsplaner gemt i din browser. Vil du fortsætte?'
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
  , 'week.enable.desc': 'Aktivér plan per ugedag. Når slået fra, bruges samme plan hver dag.'
    , 'editor.timefmt.title': 'Tidsformat'
    , 'editor.timefmt.desc': 'Vælg 24-timers eller 12-timers (AM/PM) visning for tider på kortet.'
    , 'editor.tempfmt.title': 'Temperaturenhed'
    , 'editor.tempfmt.desc': 'Vælg Celsius (°C) eller Fahrenheit (°F) til visning i kortet og editorer.'
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

    'editor.title_label': 'Titel',
  'editor.storage_entity': 'Lagringsentitet',
  'editor.add_entity': 'Lägg till rum',
    'editor.entity_placeholder': 'Välj en entitet',
    'editor.drag_reorder': 'Dra för att ändra ordning',
    'editor.remove': 'Ta bort',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Radhöjd (px)',
  'editor.max_c': 'Max °C',
    'editor.auto_apply.title': 'Automatisk tillämpning',
    'editor.auto_apply.desc': 'När det är aktiverat försöker kortet automatiskt ställa in temperaturen på valda climate-entiteter så att den matchar det planerade värdet för ”just nu”.',
    'editor.apply_edit.title': 'Vid redigering',
    'editor.apply_edit.desc': 'När du ändrar tidslinjeblock och ändringen påverkar aktuell tid, tillämpas den nya temperaturen omedelbart.',
    'editor.apply_default.title': 'Vid ändring av Standard °C',
    'editor.apply_default.desc': 'När ”Standard °C” ändras och det påverkar den aktuella perioden, tillämpas den nya temperaturen omedelbart.',
    'editor.merge_label': 'Flet med (vælg en ekstra radiatortermostat)',
    'editor.display_name_optional': 'Visningsnamn (valgfrit)',
    'editor.merged_with': 'Sammanslagen med',
    'editor.store_enable.title': 'Aktivera delad lagring',
    'editor.store_enable.desc': 'När det är aktiverat sparas scheman i vald sensor och delas mellan alla användare/dashboard. När det är av sparas de endast lokalt i din webbläsare.',
    'editor.clear_store': 'Rensa lagring',
    'editor.clear_store_confirm': 'Detta tar bort alla sparade scheman. Vill du fortsätta?',
    'editor.migrate_to_store': 'Överför webbläsardata till lagring',
    'editor.migrate_confirm': 'Överför dina webbläsar-sparade scheman till vald sensor? Detta skriver över befintliga scheman i lagringen.',
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
    'week.enable.desc': 'Aktivera schema per veckodag. När det är av, används samma schema varje dag.'
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

    'editor.title_label': 'Tittel',
  'editor.storage_entity': 'Lagringsentitet',
  'editor.add_entity': 'Legg til rom',
    'editor.entity_placeholder': 'Velg en entitet',
    'editor.drag_reorder': 'Dra for å endre rekkefølge',
    'editor.remove': 'Fjern',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Radhøyde (px)',
  'editor.max_c': 'Maks °C',
    'editor.auto_apply.title': 'Automatisk bruk',
    'editor.auto_apply.desc': 'Når aktivert forsøker kortet å sette temperaturen på valgte climate-entiteter slik at den samsvarer med planlagt verdi for «nå».',
    'editor.apply_edit.title': 'Ved redigering',
    'editor.apply_edit.desc': 'Når du endrer blokker i tidslinjen og endringen påvirker aktuell tid, tilpasses den nye temperaturen umiddelbart.',
    'editor.apply_default.title': 'Ved Standard °C-endring',
    'editor.apply_default.desc': 'Når «Standard °C» endres og det påvirker gjeldende periode, brukes den nye temperaturen umiddelbart.',
    'editor.merge_label': 'Flet med (vælg en ekstra radiatortermostat)',
    'editor.display_name_optional': 'Visningsnavn (valgfrit)',
    'editor.merged_with': 'Flettet med',
    'editor.store_enable.title': 'Aktiver delt lagring',
    'editor.store_enable.desc': 'Når aktivert lagres tidsplanen i valgt sensor og deles mellom alle brukere/dashboards. Når av, lagres den kun lokalt i nettleseren.',
    'editor.clear_store': 'Tøm lagring',
    'editor.clear_store_confirm': 'Dette vil slette alle lagrede tidsplaner. Fortsette?',
    'editor.migrate_to_store': 'Overfør nettleserdata til lagring',
    'editor.migrate_confirm': 'Overfør nettleserlagrede tidsplaner til valgt sensor? Dette overskriver eksisterende tidsplaner i lagringen.',
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
    'week.enable.desc': 'Aktiver plan per ukedag. Når av, brukes samme plan hver dag.'
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

    'editor.title_label': 'Titel',
  'editor.storage_entity': 'Speicherentität',
  'editor.add_entity': 'Raum hinzufügen',
    'editor.entity_placeholder': 'Entität auswählen',
    'editor.drag_reorder': 'Zum Neuordnen ziehen',
    'editor.remove': 'Entfernen',
    'editor.default_c': 'Standard °C',
  'editor.row_height_px': 'Zeilenhöhe (px)',
  'editor.max_c': 'Max °C',
    'editor.auto_apply.title': 'Automatisch anwenden',
    'editor.auto_apply.desc': 'Wenn aktiviert, versucht die Karte, die Temperatur der ausgewählten climate-Entitäten automatisch so einzustellen, dass sie dem geplanten Wert für „jetzt“ entspricht.',
    'editor.apply_edit.title': 'Beim Bearbeiten',
    'editor.apply_edit.desc': 'Wenn Sie Blöcke der Zeitlinie ändern und die Änderung die aktuelle Zeit betrifft, wird die neue Temperatur sofort angewendet.',
    'editor.apply_default.title': 'Bei Änderung von Standard °C',
    'editor.apply_default.desc': 'Wenn „Standard °C“ geändert wird und dies den aktuellen Zeitraum betrifft, wird die neue Temperatur sofort angewendet.',
    'editor.merge_label': 'Mit zusammenführen (zusätzlichen Thermostat hinzufügen)',
    'editor.display_name_optional': 'Anzeigename (optional)',
    'editor.merged_with': 'Zusammengeführt mit',
    'editor.store_enable.title': 'Geteilten Speicher aktivieren',
    'editor.store_enable.desc': 'Wenn aktiviert, werden Pläne im ausgewählten Sensor gespeichert und mit allen Benutzern/Dashboards geteilt. Wenn deaktiviert, wird nur lokal im Browser gespeichert.',
    'editor.clear_store': 'Speicher leeren',
    'editor.clear_store_confirm': 'Dadurch werden alle gespeicherten Zeitpläne gelöscht. Fortfahren?',
    'editor.migrate_to_store': 'Browserdaten in Speicher übertragen',
    'editor.migrate_confirm': 'Ihre im Browser gespeicherten Pläne in den ausgewählten Sensor übertragen? Vorhandene gespeicherte Pläne werden überschrieben.',
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
    'week.enable.desc': 'Pro-Wochentag-Plan aktivieren. Wenn aus, wird jeden Tag derselbe Plan verwendet.'
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

    'editor.title_label': 'Título',
  'editor.storage_entity': 'Entidad de almacenamiento',
  'editor.add_entity': 'Añadir habitación',
    'editor.entity_placeholder': 'Selecciona una entidad',
    'editor.drag_reorder': 'Arrastrar para reordenar',
    'editor.remove': 'Eliminar',
    'editor.default_c': 'Predeterminado °C',
  'editor.row_height_px': 'Altura de fila (px)',
  'editor.max_c': 'Máx °C',
    'editor.auto_apply.title': 'Aplicar automáticamente',
    'editor.auto_apply.desc': 'Cuando está activado, la tarjeta intentará establecer la temperatura en las entidades climate seleccionadas para que coincida con el valor planificado para “ahora mismo”.',
    'editor.apply_edit.title': 'Al editar',
    'editor.apply_edit.desc': 'Cuando cambias bloques de la línea de tiempo y el cambio afecta a la hora actual, la nueva temperatura se aplica inmediatamente.',
    'editor.apply_default.title': 'Al cambiar Predeterminado °C',
    'editor.apply_default.desc': 'Cuando “Predeterminado °C” cambia y afecta al período actual, la nueva temperatura se aplica inmediatamente.',
    'editor.merge_label': 'Combinar con (añadir termostato extra)',
    'editor.display_name_optional': 'Nombre para mostrar (opcional)',
    'editor.merged_with': 'Combinado con',
    'editor.store_enable.title': 'Habilitar almacenamiento compartido',
    'editor.store_enable.desc': 'Al activarlo, los horarios se guardan en el sensor seleccionado y se comparten entre todos los usuarios/tableros. Al desactivarlo, se guardan solo localmente en tu navegador.',
    'editor.clear_store': 'Vaciar almacenamiento',
    'editor.clear_store_confirm': 'Esto eliminará todos los horarios guardados. ¿Continuar?',
    'editor.migrate_to_store': 'Transferir datos del navegador al almacenamiento',
    'editor.migrate_confirm': '¿Transferir los horarios guardados en tu navegador al sensor seleccionado? Esto sobrescribirá los horarios existentes en el almacenamiento.',
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
    'week.enable.desc': 'Habilitar programación por día. Si está desactivado, se usa el mismo plan todos los días.'
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

    'editor.title_label': 'Titre',
  'editor.storage_entity': 'Entité de stockage',
  'editor.add_entity': 'Ajouter une pièce',
    'editor.entity_placeholder': 'Sélectionnez une entité',
    'editor.drag_reorder': 'Glisser pour réorganiser',
    'editor.remove': 'Supprimer',
    'editor.default_c': 'Par défaut °C',
  'editor.row_height_px': 'Hauteur de ligne (px)',
  'editor.max_c': 'Max °C',
    'editor.auto_apply.title': 'Application automatique',
    'editor.auto_apply.desc': 'Lorsqu’il est activé, la carte essaie de régler la température des entités climate sélectionnées pour qu’elle corresponde à la valeur prévue pour « maintenant »',
    'editor.apply_edit.title': 'Lors de l’édition',
    'editor.apply_edit.desc': 'Quand vous modifiez des blocs de la chronologie et que la modification affecte l’heure actuelle, la nouvelle température est appliquée immédiatement.',
    'editor.apply_default.title': 'Lors d’un changement de °C par défaut',
    'editor.apply_default.desc': 'Lorsque « °C par défaut » change et que cela affecte la période en cours, la nouvelle température est appliquée immédiatement.',
    'editor.merge_label': 'Fusionner avec (ajouter un thermostat supplémentaire)',
    'editor.display_name_optional': 'Nom d’affichage (facultatif)',
    'editor.merged_with': 'Fusionné avec',
    'editor.store_enable.title': 'Activer le stockage partagé',
    'editor.store_enable.desc': 'Lorsque activé, les plannings sont enregistrés dans le capteur sélectionné et partagés entre tous les utilisateurs/tableaux de bord. Lorsque désactivé, ils sont enregistrés uniquement localement dans votre navigateur.',
    'editor.clear_store': 'Vider le stockage',
    'editor.clear_store_confirm': 'Cela supprimera tous les plannings enregistrés. Continuer ?',
    'editor.migrate_to_store': 'Transférer les données du navigateur vers le stockage',
    'editor.migrate_confirm': 'Transférer vos plannings enregistrés dans le navigateur vers le capteur sélectionné ? Cela remplacera les plannings existants dans le stockage.',
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
    'week.enable.desc': 'Activer la planification par jour de semaine. Désactivé : même plan chaque jour.'
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

    'editor.title_label': 'Otsikko',
  'editor.storage_entity': 'Tallennusentiteetti',
  'editor.add_entity': 'Lisää huone',
    'editor.entity_placeholder': 'Valitse entiteetti',
    'editor.drag_reorder': 'Vedä järjestelläksesi',
    'editor.remove': 'Poista',
    'editor.default_c': 'Oletus °C',
  'editor.row_height_px': 'Rivin korkeus (px)',
  'editor.max_c': 'Maksi °C',
    'editor.auto_apply.title': 'Automaattinen käyttö',
    'editor.auto_apply.desc': 'Kun käytössä, kortti yrittää asettaa valittujen climate-entiteettien lämpötilan vastaamaan suunniteltua arvoa tälle hetkelle.',
    'editor.apply_edit.title': 'Muokkauksen yhteydessä',
    'editor.apply_edit.desc': 'Kun muutat aikajanan lohkoja ja muutos koskee nykyhetkeä, uusi lämpötila otetaan käyttöön heti.',
    'editor.apply_default.title': 'Kun Oletus °C muuttuu',
    'editor.apply_default.desc': 'Kun ”Oletus °C” muuttuu ja se vaikuttaa meneillään olevaan ajanjaksoon, uusi lämpötila otetaan käyttöön heti.',
    'editor.merge_label': 'Yhdistä (lisää toinen termostaatti)',
    'editor.display_name_optional': 'Näyttönimi (valinnainen)',
    'editor.merged_with': 'Yhdistetty kohteeseen',
    'editor.store_enable.title': 'Ota jaettu tallennus käyttöön',
    'editor.store_enable.desc': 'Kun käytössä, aikataulut tallennetaan valittuun sensoriin ja jaetaan kaikille käyttäjille/näkymille. Kun pois päältä, ne tallennetaan vain paikallisesti selaimeen.',
    'editor.clear_store': 'Tyhjennä tallennus',
    'editor.clear_store_confirm': 'Tämä poistaa kaikki tallennetut aikataulut. Jatketaanko?',
    'editor.migrate_to_store': 'Siirrä selaindata tallennukseen',
    'editor.migrate_confirm': 'Siirretäänkö selaimeen tallennetut aikataulut valittuun sensoriin? Tämä korvaa nykyiset aikataulut tallennuksessa.',
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
    'week.enable.desc': 'Ota viikonpäiväkohtainen aikataulu käyttöön. Kun pois päältä, käytetään samaa aikataulua joka päivä.'
  },
};
const TT_LANG_ALIAS = { no: 'nb' };
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

class ThermostatTimelineCard extends HTMLElement {
  static getConfigElement() { return document.createElement("thermostat-timeline-card-editor"); }
  static getStubConfig() {
    return {
      title: "Termostat Tidslinje",
      entities: [],
      row_height: 64,
      default_temp: 20,
      max_temp: 25,
  temp_unit: null, // 'C' | 'F' | null(auto from HA)
  time_12h: null,
      now_update_ms: 60000,   // kun til UI 'nu'-stregen
      storage_entity: "sensor.thermostat_timeline",     // fx sensor.thermostat_timeline
      storage_enabled: false, // default: off -> only local per user
      show_top_now: false,
      now_extend_px: 76,
      auto_apply: true,        // sæt automatisk setpoint via climate.set_temperature
      apply_on_edit: true,     // NYT: anvend straks hvis den ønskede temp *nu* ændres af en redigering
      apply_on_default_change: true, // NYT: anvend straks hvis Standard °C ændrer den ønskede temp *nu*,
      labels: {},
      merges: {},              // { [primary_eid]: [linked_eid, ...] }
  weekdays_enabled: false,
  weekdays_mode: 'weekday_weekend' // 'weekday_weekend' | 'weekday_sat_sun' | 'all_7'
    };
  }

  // ---------- Home Assistant hook ----------
  set hass(hass) {
    this._hass = hass; this._lang = ttGetLangFromHass(hass);

    // Hent fra sensor hvis version ændret
    if (this._config?.storage_enabled && this._config?.storage_entity) {
      const st = this._hass.states?.[this._config.storage_entity];
      const ver = Number(st?.state || 0);
      if (!Number.isNaN(ver) && ver !== this._lastVersion && !this._saving) {
        this._lastVersion = ver;
        this._loadStore(true).then(() => {
          // Overstyr ikke draft-værdi mens man skriver
          if (this._inlineEditing && this._inlineEntity && this._inlineTempDraft !== null) {
            const row = this._schedules[this._inlineEntity] || { defaultTemp: this._config.default_temp, blocks: [] };row.defaultTemp = this._inlineTempDraft;
            this._schedules[this._inlineEntity] = row;
          }
          this._ensureSchedules();
          if (!this._inlineEditing && !this._editing) this._render();
          this._scheduleNextApply();
        });
      }
    }

    if (!this._initialized) {
      this._initialized = true;
      this._init();
      this._loadStore(true).then(() => {
        this._ensureSchedules();
        this._render();
        // Ved load sætter vi korrekt setpoint én gang
        this._applyCurrentSetpoints(true);
        this._scheduleNextApply();
      });
    } else {
      if (!this._inlineEditing && !this._editing) this._render();
    }
  }

  // ---------- Config ----------
  setConfig(config) {
    if (!config || !Array.isArray(config.entities)) throw new Error("Config skal have 'entities: [climate.xxx, ...]'.");
    let rowh = Number(config.row_height ?? 64); rowh = isNaN(rowh) ? 64 : Math.max(40, Math.min(120, Math.round(rowh)));
    let deft = Number(config.default_temp ?? 20); deft = isNaN(deft) ? 20 : Math.max(5, Math.min(35, deft));
  let nowms = Number(config.now_update_ms ?? 60000); nowms = isNaN(nowms) ? 60000 : Math.max(200, nowms);
  let maxt = Number(config.max_temp ?? 25); maxt = isNaN(maxt) ? 25 : Math.max(5, Math.min(50, maxt));
    const showTop = Boolean(config.show_top_now ?? false);
    let extendPx = Number(config.now_extend_px ?? 76); extendPx = isNaN(extendPx) ? 76 : Math.max(48, Math.min(140, Math.round(extendPx)));

    this._config = {
      title: config.title ?? "Termostat Tidslinje",
      entities: config.entities,
      row_height: rowh,
      default_temp: deft,
  max_temp: maxt,
      temp_unit: (config.temp_unit === undefined || config.temp_unit === null || config.temp_unit === 'auto')
        ? (this._detectPreferF() ? 'F' : 'C')
        : (String(config.temp_unit).toUpperCase()==='F'?'F':'C'),
      time_12h: (config.time_12h === undefined || config.time_12h === null || config.time_12h === 'auto')
        ? this._detectPrefer12h()
        : !!config.time_12h,
      now_update_ms: nowms,
      storage_entity: (config.storage_entity || "").trim(),
      storage_enabled: !!(config.storage_enabled ?? false),
      show_top_now: showTop,
      now_extend_px: extendPx,
      auto_apply: config.auto_apply ?? true,
      apply_on_edit: config.apply_on_edit ?? true,
      apply_on_default_change: config.apply_on_default_change ?? true,
      labels: { ...(config.labels || {}) },
      merges: { ...(config.merges || {}) },
      weekdays_enabled: !!(config.weekdays_enabled ?? false),
  weekdays_mode: (config.weekdays_mode || 'weekday_weekend')
    };

    if (this._initialized) {
      this._ensureSchedules();
      this._startUiTimer();
      if (!this._inlineEditing && !this._editing) this._render();
      this._scheduleNextApply();
      // Persist shared settings to storage so other users/dashboards pick them up
      this._debouncedSaveStore();
    }
  }

  getCardSize() { return 3 + (this._config?.entities?.length || 0) * 2; }

  // ---------- Lifecycle ----------
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._initialized = false;
    this._config = ThermostatTimelineCard.getStubConfig();

    // Data
    this._schedules = {};          // { [entity_id]: { defaultTemp:number, blocks:[{id,startMin,endMin,temp}] } }

    // UI state
    this._uiTimer = null;          // kun til at flytte "nu"-stregen
    this._transitionTimer = null;  // timer til næste setpoint-ændring
    this._active = null;           // { entity, id }
    this._lastTap = { t: 0, target: null };
    this._editing = null;          // { entity, blockId }

    // Inline edit hard-lock
    this._inlineEditing = false;   // er et inline input aktivt?
    this._inlineEntity = null;     // hvilken entitys Standard-felt?
    this._inlineTempDraft = null;  // den værdi man er i gang med at skrive

    // Sync/debounce
    this._saving = false;
    this._saveTimer = null;
    this._saveDebounceMs = 300;
    this._lastVersion = 0;

    // Auto apply guard
    this._lastApplied = {}; // { [entity_id]: { min:number, temp:number } }

    // Weekday modal state
    this._weeklyOpen = false;
    this._weeklyEntity = null;
    this._weeklyDraft = null; // { mode, days: { mon:[], ... } }
    this._weeklyDayKey = null;
    this._weeklyOverlayHiddenForEditor = false;
  }

  disconnectedCallback() {
    if (this._uiTimer) clearInterval(this._uiTimer);
    if (this._transitionTimer) clearTimeout(this._transitionTimer);
    if (this._saveTimer) clearTimeout(this._saveTimer);
  }

  // ---------- Storage (sensor attributes + fallback) ----------
  _storageAvailable() { const eid = this._config?.storage_entity; return !!(this._config?.storage_enabled && eid && this._hass?.states?.[eid]); }

  async _loadStore(preferSensor = true) {
    if (preferSensor && this._config?.storage_enabled && this._storageAvailable()) {
      try {
        const st = this._hass.states[this._config.storage_entity];
        const attrs = st?.attributes || {};
        if (attrs.schedules && typeof attrs.schedules === "object") {
          this._schedules = JSON.parse(JSON.stringify(attrs.schedules));
          // Optional shared settings
          if (attrs.settings && typeof attrs.settings === 'object') {
            try {
              const s = attrs.settings;
              if (s.time_12h !== undefined) this._config.time_12h = !!s.time_12h;
              if (s.temp_unit) this._config.temp_unit = String(s.temp_unit).toUpperCase()==='F'?'F':'C';
            } catch {}
          }
          this._lastVersion = Number(st.state || 0) || 0;
          try { localStorage.setItem("thermostat_timeline_store", JSON.stringify({ schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit } })); } catch {}
          return;
        }
      } catch (e) { /* fallback */ }
    }
    try {
      const raw = localStorage.getItem("thermostat_timeline_store") || "";
      if (!raw) { this._schedules = {}; return; }
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.schedules) {
        this._schedules = parsed.schedules || {};
        const s = parsed.settings || {};
        if (s.time_12h !== undefined) this._config.time_12h = !!s.time_12h;
        if (s.temp_unit) this._config.temp_unit = String(s.temp_unit).toUpperCase()==='F'?'F':'C';
      } else {
        // backward compat: schedules stored directly
        this._schedules = parsed || {};
      }
    }
    catch { this._schedules = {}; }
  }

  async _saveStore() {
    try { localStorage.setItem("thermostat_timeline_store", JSON.stringify({ schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit } })); } catch {}
    if (!this._config?.storage_enabled || !this._storageAvailable()) return;
    this._saving = true;
    try { await this._hass.callService("thermostat_timeline", "set_store", { schedules: this._schedules, settings: { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit } }); }
    catch (e) { console.error("thermostat-timeline: save failed", e); }
    finally { setTimeout(() => { this._saving = false; }, 600); }
  }

  _debouncedSaveStore() { if (this._saveTimer) clearTimeout(this._saveTimer); this._saveTimer = setTimeout(() => this._saveStore(), this._saveDebounceMs); }

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
  _getNowMin(){ const d=new Date(); return d.getHours()*60 + d.getMinutes(); }
  _clamp(v,a,b){ if (isNaN(v)) return a; return Math.min(Math.max(v,a),b); }
  _prettyName(eid){ const st=this._hass?.states?.[eid]; if (st?.attributes?.friendly_name) return st.attributes.friendly_name; const base=(eid||"").split(".")[1]||eid||""; return base.replace(/_/g," ").replace(/\b\w/g,(m)=>m.toUpperCase()); }
  _isCompactScale(){ try { const isCoarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches; const isLandscape = window.matchMedia && window.matchMedia('(orientation: landscape)').matches; const w = window.innerWidth || 0; return (isCoarse && isLandscape) || (w > 600 && w < 1100 && isLandscape); } catch (e) { return false; } }
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
  _isF(){ return (this._config?.temp_unit||'C')==='F'; }
  _unitSymbol(){ return this._isF()? '°F' : '°C'; }
  _toDisplayTemp(c){ return this._isF()? Math.round((c*9/5+32)*10)/10 : c; }
  _fromDisplayTemp(v){ return this._isF()? ( (v-32)*5/9 ) : v; }
  _maxDisplay(){ const c = Number(this._config?.max_temp ?? 25); return this._toDisplayTemp(c); }
  _todayFullName(){ try { const lang = ttGetLangFromHass(this._hass || this._lang || 'en'); const s = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(new Date()); return s.charAt(0).toUpperCase()+s.slice(1); } catch { const names = { mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday', sun:'Sunday' }; return names[this._todayKey()] || 'Today'; } }

  // --- Weekday helpers ---
  _weekdayNames(){ return ['mon','tue','wed','thu','fri','sat','sun']; }
  _todayKey(){ const d=new Date(); const idx=((d.getDay()+6)%7); return this._weekdayNames()[idx]; }
  _ensureWeeklyStruct(row){ if (!row.weekly) { row.weekly = { mode: this._config?.weekdays_mode || 'same_all', days: {} }; } const names=this._weekdayNames(); for (const k of names){ if (!Array.isArray(row.weekly.days[k])) row.weekly.days[k] = []; }
    return row;
  }
  _getBlocksForDay(row, dayKey){ if (!this._config?.weekdays_enabled || !row?.weekly) return row?.blocks || []; const days = row.weekly.days || {}; return Array.isArray(days[dayKey]) ? days[dayKey] : (row.blocks||[]); }
  _weeklyEditableKeys(mode){ const all = this._weekdayNames(); if (!mode) mode = 'weekday_weekend'; if (mode==='weekday_weekend') return ['weekdays','weekend']; if (mode==='weekday_sat_sun') return ['weekdays','sat','sun']; if (mode==='all_7') return all; return ['weekdays','weekend']; }
  _effectiveDayKey(sel){ if (sel==='weekdays') return 'mon'; if (sel==='weekend') return 'sat'; return sel || 'mon'; }

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

  _desiredTempFor(eid, nowMin){ const primary = this._groupPrimaryOf(eid); const row = this._schedules[primary]; if (!row) return null; let blocks = row.blocks||[]; if (this._config?.weekdays_enabled && row.weekly){ const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey); }
    const hit = (blocks||[]).find(b => nowMin >= b.startMin && nowMin < b.endMin); return Number(hit ? hit.temp : row.defaultTemp); }

  _nextBoundaryDate(){ const now = new Date(); const nowMin = this._getNowMin(); let bestT = null; let bestDelta = Infinity; for (const eid of (this._config.entities || [])){
      const row = this._schedules[eid]; if (!row) continue; const times = [];
      // If weekdays enabled, use today's blocks for boundary detection
      let blocks = row.blocks||[];
      if (this._config?.weekdays_enabled && row.weekly){ const dayKey = this._todayKey(); blocks = this._getBlocksForDay(row, dayKey) || []; }
      for (const b of blocks) { times.push(b.startMin, b.endMin); }
      for (const t of times){ let delta = (t - nowMin + 1440) % 1440; if (delta === 0) delta = 1; if (delta < bestDelta){ bestDelta = delta; bestT = t; } }
    }
    if (bestT == null) { return new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0); }
    const dayOffset = (bestT >= nowMin) ? 0 : 1; const target = new Date(now.getFullYear(), now.getMonth(), now.getDate()+dayOffset, Math.floor(bestT/60), bestT%60, 0, 0); if (target.getTime() - now.getTime() <= 250) target.setTime(target.getTime() + 60000); return target; }

  _scheduleNextApply(){ if (this._transitionTimer) clearTimeout(this._transitionTimer); if (!this._config?.auto_apply) return; const when = this._nextBoundaryDate(); const delay = Math.max(500, when.getTime() - Date.now()); this._transitionTimer = setTimeout(async () => { await this._applyCurrentSetpoints(true); this._scheduleNextApply(); }, delay); }

  async _applyCurrentSetpoints(force=false){ if (!this._config?.auto_apply || !this._hass) return; const nowMin = this._getNowMin(); const targets = this._allTargetEntities(); for (const eid of targets){
    let desired = this._desiredTempFor(eid, nowMin);
    const mx = this._config?.max_temp ?? 25; if (Number.isFinite(mx)) desired = Math.min(desired, mx);
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
  async _applyIfDesiredChanged(beforeSnap){ if (!this._config?.auto_apply) return; const after = this._desiredNowSnapshot(); const nowMin = this._getNowMin(); for (const eid of Object.keys(after)){ let a = after[eid]; const b = beforeSnap[eid]; if (a == null) continue; const mx=this._config?.max_temp ?? 25; if (Number.isFinite(mx)) a = Math.min(a, mx); if (b == null || Math.abs(a - b) > 0.049){ try { await /* guarded */ (async()=>{ try { const __args = { entity_id: eid, temperature: a }; const __eid = __args.entity_id; if (typeof __eid==='string' && __eid.includes('.') && __eid.split('.')[0]==='climate' && this._hass?.states?.[__eid]) { this._hass.callService('climate','set_temperature', { entity_id: eid, temperature: a }); } } catch(e){ console.warn('set_temperature skipped/failed', e); } })(); this._lastApplied[eid] = { min: nowMin, temp: a }; } catch(e){ console.warn('thermostat-timeline: set_temperature (on-change) failed for', eid, e); } } }
  }

  // ---------- UI ----------
  _init() {
    this.shadowRoot.innerHTML = `
      <meta charset="UTF-8">
      <style>
        :host { display:block; }
    .card{ --pad-x:16px; background: var(--card-background-color); color: var(--primary-text-color); border-radius: var(--ha-card-border-radius, 12px); box-shadow: var(--ha-card-box-shadow, none); overflow:hidden }
  .header{display:grid;align-items:center;grid-template-columns: 1fr auto 1fr;gap:.75rem;padding:12px var(--pad-x);border-bottom:1px solid var(--divider-color)}
  .title{font-weight:600;font-size:1rem;color:var(--primary-text-color)}
  .header .spacer{}
  .weekday-full{ text-align:center; font-weight:700; font-size:1.15rem; color:var(--primary-text-color)}
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
        .btn{cursor:pointer;border:1px solid var(--divider-color);border-radius:10px;padding:6px 10px;font-size:.8rem;background:var(--card-background-color);color:var(--primary-text-color)}
        .btn.primary{background:var(--primary-color);color:var(--text-primary-color, #fff);border-color:var(--primary-color)}
        .btn.ghost{background:var(--card-background-color);color:var(--primary-text-color)}
  .btn[disabled]{ opacity:.5; cursor:not-allowed }
        .track{position:relative;height:var(--row-height,64px);user-select:none;background:transparent}
        .block{position:absolute;top:6px;bottom:6px;border:1px solid var(--divider-color);border-radius:10px;background:var(--secondary-background-color, rgba(0,0,0,.05));display:flex;align-items:center;gap:10px;padding:0 10px;cursor:pointer;box-sizing:border-box}
        .block.active{outline:2px solid var(--primary-color)}
        .pill{font-size:.78rem;padding:2px 8px;border-radius:999px;border:1px solid var(--divider-color);background:var(--secondary-background-color, rgba(0,0,0,.05));color:inherit;white-space:nowrap}
        .now{position:absolute;top:var(--now-extend-top,-76px);bottom:0;width:2px;background:var(--primary-color);opacity:.9;z-index:18;pointer-events:none}
        .now-top{position:absolute;top:6px;bottom:6px;width:3px;background:var(--primary-color);border-radius:2px;z-index:40;pointer-events:none}
        .footer{height:28px;position:relative;border-top:1px solid var(--divider-color)}
        .label-end{position:absolute;left:var(--pad-x);right:var(--pad-x);top:4px;display:flex;justify-content:space-between;font-size:.7rem;color:var(--secondary-text-color)}
        .overlay{position:fixed;inset:0;display:none;place-items:center;background:rgba(0,0,0,.32);z-index:9999}
        .overlay.open{display:grid}

  .modal{width:min(80vw,320px);max-width:320px;border-radius:8px;padding:10px;background:var(--card-background-color);color:var(--primary-text-color);border:1px solid var(--divider-color)}
  /* Wider weekday editor */
  .modal-week{ width: min(95vw, 640px); max-width: 640px; position: relative; }
  /* Indent scale and track so ticks/blocks are not against the edge */
  .modal-week .week-scale{ margin: 0 16px; }
  .modal-week .week-track{ margin: 0 16px; }
  /* Inline tooltip for weekly blocks */
  .wk-tooltip{ position:absolute; z-index:10000; pointer-events:none; padding:6px 8px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); font-size:.85rem; box-shadow: var(--ha-card-box-shadow, 0 2px 6px rgba(0,0,0,.2)); }
  /* Hide temp pill inside weekly preview blocks for cleaner look */
  .modal-week .week-track .block .pill{ display:none; }
  .modal-week .week-scale-inner .mer{ display:block; font-size:.65rem; color: var(--secondary-text-color); text-align:center; }
        .modal h3{margin:0 0 10px;font-size:1rem}
        .grid{display:grid;grid-template-columns:auto auto;gap:6px}
        .grid>div{display:grid;gap:6px;align-items:start}
        .grid .time-inline{display:flex;flex-direction:row;align-items:center;gap:2px}
        .grid .time-inline label{margin:0;width:18px;flex:0 0 18px}
        .grid .time-inline input[type=time]{flex:0 0 120px;min-width:120px}
        .grid>div.time-right{justify-content:flex-end}
      
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
              <div class="time-inline"><label>Fra</label><input class="ed-from" type="time" step="60" /></div>
              <div class="time-inline time-right"><label>Til</label><input class="ed-to" type="time" step="60" /></div>
              <div class="rowfull"><label>Temperatur (°C)</label><input class="ed-temp" type="number" step="0.5" min="0" max="50" /></div>
            </div>
            <div class="ed-error" role="alert" aria-live="assertive" style="color:var(--error-color); display:none; margin-top:8px; font-size:.95rem;"></div>
            <div class="actions"><button class="btn ghost danger ed-delete" type="button">Slet</button><button class="btn ghost ed-cancel" type="button">Annullér</button><button class="btn primary ed-save" type="button">Gem</button></div>
          </div>
        </div>
        <div class="overlay overlay-week" part="overlay">
          <div class="modal modal-week" role="dialog" aria-modal="true" aria-label="Ugedage">
            <h3 class="week-title">Ugedags-tidsplan</h3>
            <div style="display:grid; gap:10px;">
              <div style="display:grid; gap:4px;">
                <label style="font-size:.85rem; color: var(--secondary-text-color);" class="week-mode-label">Mode</label>
                <select class="week-mode" style="padding:6px; border-radius:8px; border:1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);">
                  <option value="weekday_weekend">Weekdays same, weekend same (2)</option>
                  <option value="weekday_sat_sun">Weekdays + Saturday + Sunday (3)</option>
                  <option value="all_7">All days (7)</option>
                </select>
              </div>
              <div class="week-days" style="display:flex; gap:6px; flex-wrap:wrap;"></div>
              <div class="week-toolbar" style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
                <div class="week-note" style="font-size:.85rem; color: var(--secondary-text-color);"></div>
                <button class="btn primary wk-add" type="button">+ Add block</button>
              </div>
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
      </ha-card>`;    this._applyCardI18n();


    this._ensureSchedules();
    this._startUiTimer();
  }

  _ensureSchedules() {
    for (const eid of this._config.entities) {
      if (!this._schedules[eid]) this._schedules[eid] = { defaultTemp: this._config.default_temp, blocks: [] };
      if (this._config?.weekdays_enabled) this._ensureWeeklyStruct(this._schedules[eid]);
    }
  }

  _startUiTimer() {
    if (this._uiTimer) clearInterval(this._uiTimer);
    this._uiTimer = setInterval(() => { if (!this._inlineEditing && !this._editing) this._render(); }, this._config.now_update_ms);
  }

  _render() {
    const qs = (s) => this.shadowRoot.querySelector(s);
  const titleEl = qs('.title');
  const dayFull = qs('.weekday-full');
    const rowsEl = qs('.rows');
    const scaleEl = qs('.scale-inner');
    if (!rowsEl || !scaleEl || !titleEl) return;

    titleEl.textContent = this._config.title || "Termostat Tidslinje";
    // Update weekday full label (centered)
    try {
      if (this._config?.weekdays_enabled && dayFull) {
        dayFull.textContent = this._todayFullName();
        dayFull.style.display = '';
      } else if (dayFull) {
        dayFull.style.display = 'none';
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
      // merged/linked entities should not be shown in the card UI
      const inline = document.createElement('input');
      inline.type = 'number';
      inline.step = '0.5';
    inline.min = '5';
  inline.max = String(this._maxDisplay());
    inline.value = String(this._toDisplayTemp(row.defaultTemp ?? this._config.default_temp));
      inline.addEventListener('focus', () => {
        this._inlineEditing = true;
        this._inlineEntity = eid;
        this._inlineTempDraft = Number(inline.value);
      });
      inline.addEventListener('blur', () => {
        this._inlineEditing = false;
        this._inlineEntity = null;
        this._inlineTempDraft = null;
        this._render();
      });
  inline.addEventListener('input', (e) => {
    let v = parseFloat(e.target.value);
  v = isNaN(v) ? this._toDisplayTemp(row.defaultTemp) : this._clamp(v, 5, this._maxDisplay());
    this._inlineTempDraft = v; // display units
      });
      inline.addEventListener('change', async (e) => {
        const before = this._desiredNowSnapshot();
    let v = parseFloat(e.target.value);
  v = isNaN(v) ? this._toDisplayTemp(this._config.default_temp) : this._clamp(v, 5, this._maxDisplay());
    row.defaultTemp = this._fromDisplayTemp(v);
        this._schedules[eid] = row;
        this._debouncedSaveStore();
        this._inlineEditing = false;
        this._inlineEntity = null;
        this._inlineTempDraft = null;
        this._render();
        if (this._config.apply_on_default_change) await this._applyIfDesiredChanged(before);
        this._scheduleNextApply();
      });
      meta.append(inline);
  const unit = document.createElement('span');
  unit.textContent = this._unitSymbol();
      meta.append(unit);
      head.append(meta);
      const buttonsWrap = document.createElement('div');
      buttonsWrap.style.display = 'flex';
      buttonsWrap.style.gap = '6px';
      const addBtn = document.createElement('button');
      addBtn.className = 'btn primary';
      addBtn.textContent = '+ ' + this._t('ui.add_block');
      addBtn.addEventListener('click', () => this._openNewEditor(eid));
      buttonsWrap.append(addBtn);
      if (this._config?.weekdays_enabled) {
        const weekBtn = document.createElement('button');
        weekBtn.className = 'btn ghost';
        weekBtn.textContent = this._t('week.button');
        weekBtn.addEventListener('click', () => this._openWeeklyEditor(eid));
        buttonsWrap.append(weekBtn);
      }
      head.append(buttonsWrap);
      rowEl.append(head);
      const track = document.createElement('div');
      track.className = 'track';
      track.style.setProperty('--row-height', `${this._config.row_height}px`);
  // Use today's blocks if weekdays enabled
  const dayKey = this._todayKey();
  const showBlocks = this._config?.weekdays_enabled ? (this._getBlocksForDay(row, dayKey) || []) : (row.blocks || []);
  for (const b of showBlocks) {
        const pctStart = (b.startMin / 1440) * 100;
        const pctWidth = ((b.endMin - b.startMin) / 1440) * 100;
        const bl = document.createElement('div');
        bl.className = 'block';
        bl.style.left = `${pctStart}%`;
        bl.style.width = `${pctWidth}%`;
        if (this._active?.entity === eid && this._active?.id === b.id) bl.classList.add('active');
        const pillTime = document.createElement('span');
        pillTime.className = 'pill';
        pillTime.textContent = `${this._label(b.startMin)} - ${this._label(b.endMin)}`;
        bl.append(pillTime);
        const pillTemp = document.createElement('span');
        pillTemp.className = 'pill';
  pillTemp.textContent = `${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
        bl.append(pillTemp);
        track.append(bl);
        
        // Open editor only on double interaction:
        // - Desktop: double-click
        // - Touch/iPad: double-tap within 350ms on the same block
        const openEditor = () => this._openEditor(eid, b.id);

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
    overlay.addEventListener('click', (e) => { if (e.target === overlay) this._closeEditor(); });
    // Week overlay events
    const wov = qs('.overlay-week');
    const wsave = qs('.wk-save');
    const wcancel = qs('.wk-cancel');
    if (wsave) wsave.addEventListener('click', () => this._weeklySaveAll());
    if (wcancel) wcancel.addEventListener('click', () => this._closeWeeklyEditor());
    if (wov) wov.addEventListener('click', (e) => { if (e.target === wov) this._closeWeeklyEditor(); });
  }

  _openEditor(entity, blockId) {
    if (!blockId) return this._openNewEditor(entity);
    this._editing = { entity, blockId };
    const row = this._schedules[entity];
    if (!row) return;
    const b = row.blocks.find(x => x.id === blockId);
    if (!b) return;
    const edTemp = this.shadowRoot.querySelector(".ed-temp");
    const edFrom = this.shadowRoot.querySelector(".ed-from");
    const edTo = this.shadowRoot.querySelector(".ed-to");
    const overlay = this.shadowRoot.querySelector(".overlay");
    const title = this.shadowRoot.querySelector('.modal h3');
    const delBtn = this.shadowRoot.querySelector('.ed-delete');
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max = String(this._maxDisplay()); }
    if (edFrom) edFrom.value = this._toTimeInput(b.startMin);
    if (edTo) edTo.value = this._toTimeInput(b.endMin);
    if (title) title.textContent = this._t('ui.edit_block');
    if (delBtn) delBtn.style.display = '';
    const err = this.shadowRoot.querySelector(".ed-error");
    if (err) { err.style.display = "none"; err.textContent = ""; }

    overlay.classList.add("open");
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

  }
  _closeEditor(){
    this._editing = null;
    this.shadowRoot.querySelector(".overlay")?.classList.remove("open");
    // If we hid the weekday modal for editing, restore it now
    if (this._weeklyOverlayHiddenForEditor && this._weeklyDraft) {
      this._weeklyOverlayHiddenForEditor = false;
      const wov = this.shadowRoot.querySelector('.overlay-week');
      if (wov) wov.classList.add('open');
      this._renderWeeklyModal();
    }
  }

  _deleteFromEditor(){ if (!this._editing) return; const { entity, blockId, weeklyDay }=this._editing; if (!blockId) { this._closeEditor(); return; }
    if (weeklyDay && this._weeklyDraft) {
      const arr = this._weeklyDraft.days?.[weeklyDay] || [];
      const idx = arr.findIndex(x=>x.id===blockId);
      if (idx>=0) arr.splice(idx,1);
      this._renderWeeklyModal();
      this._closeEditor();
      return;
    }
    this._deleteBlock(entity, blockId); this._closeEditor(); }

  _openNewEditor(entity){ this._editing = { entity, blockId: null }; const row = this._schedules[entity]; if (!row) return; const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to"); const overlay = this.shadowRoot.querySelector(".overlay"); const now = this._getNowMin(); const start = this._clamp(Math.round(now), 0, 1380); const end = this._clamp(start + 60, start + 15, 1440); if (edTemp) edTemp.value = String(this._toDisplayTemp(row.defaultTemp ?? 20)); if (edFrom) edFrom.value = this._toTimeInput(start); if (edTo)   edTo.value   = this._toTimeInput(end); const title = this.shadowRoot.querySelector('.modal h3'); if (title) title.textContent = this._t('ui.add_block'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); if (delBtn) delBtn.style.display = 'none'; const err = this.shadowRoot.querySelector(".ed-error"); if (err) { err.style.display = "none"; err.textContent = ""; } overlay.classList.add('open');
    if (edTemp) edTemp.max = String(this._maxDisplay());
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
    // Deep copy as draft
    this._weeklyDraft = JSON.parse(JSON.stringify(row.weekly));
    this._weeklyDayKey = this._todayKey();
    this._weeklyOpen = true;
    const ov = this.shadowRoot.querySelector('.overlay-week');
    if (ov) ov.classList.add('open');
    this._renderWeeklyModal();
  }
  _closeWeeklyEditor(){ this._weeklyOpen = false; this._weeklyEntity = null; this._weeklyDraft = null; this._weeklyDayKey = null; this.shadowRoot.querySelector('.overlay-week')?.classList.remove('open'); }
  _weeklySaveAll(){ try { if (!this._weeklyEntity || !this._weeklyDraft) { this._closeWeeklyEditor(); return; } const entity = this._weeklyEntity; const row = this._schedules[entity]; if (!row) { this._closeWeeklyEditor(); return; }
      // Normalize by mode: propagate grouped days
      const mode = this._weeklyDraft.mode || 'same_all';
      const d = this._weeklyDraft.days || {};
      const applyGroup = (keys, srcKey)=>{ const src = JSON.parse(JSON.stringify(d[srcKey]||[])); for (const k of keys){ d[k] = JSON.parse(JSON.stringify(src)); } };
      if (mode === 'weekday_weekend') {
        applyGroup(['tue','wed','thu','fri'], 'mon');
        applyGroup(['sun'], 'sat');
      } else if (mode === 'weekday_sat_sun') {
        applyGroup(['tue','wed','thu','fri'], 'mon');
      } // all_7 -> keep individual
      row.weekly = { mode, days: d };
      this._schedules[entity] = row;
      const before = this._desiredNowSnapshot();
      this._saveStore();
      this._closeWeeklyEditor();
      if (this._config.apply_on_edit) this._applyIfDesiredChanged(before);
      this._scheduleNextApply();
    } catch(e){ console.warn('weekly save failed', e); this._closeWeeklyEditor(); }
  }
  _renderWeeklyModal(){ try {
      const modeSel = this.shadowRoot.querySelector('.week-mode');
      const titleEl = this.shadowRoot.querySelector('.week-title');
    const note = this.shadowRoot.querySelector('.week-note');
      const daysWrap = this.shadowRoot.querySelector('.week-days');
      const track = this.shadowRoot.querySelector('.week-track');
    const scale = this.shadowRoot.querySelector('.week-scale-inner');
    const addBtn = this.shadowRoot.querySelector('.wk-add');
    const modalWeek = this.shadowRoot.querySelector('.modal-week');
      if (!this._weeklyDraft || !daysWrap || !track) return;
      // i18n
      if (titleEl) titleEl.textContent = this._t('week.editor.title');
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
        modeSel.onchange = () => { this._weeklyDraft.mode = modeSel.value; this._renderWeeklyModal(); };
      }
      // Build group/day buttons reflecting mode grouping
      daysWrap.innerHTML = '';
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
      for (const it of items){
        const b = document.createElement('button'); b.type='button'; b.className='btn ghost'; b.textContent = it.label;
        b.addEventListener('click', ()=>{ this._weeklyDayKey = it.key; this._renderWeeklyModal(); });
        if (it.key === this._weeklyDayKey) b.classList.add('primary');
        daysWrap.append(b);
      }
      // Toolbar actions
      if (addBtn) {
        addBtn.onclick = () => this._openWeeklyBlockEditor(null);
        // Localize label with + prefix already handled globally
      }
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
        // double-click to edit (prevent bubbling to track handler)
        div.addEventListener('dblclick', (ev)=>{ try { ev.stopPropagation(); ev.preventDefault(); } catch {} this._openWeeklyBlockEditor(b.id); });
        // Hover -> show tooltip with full time range + temp (no click needed)
        const showTip = ()=>{
          const txt = `${this._label(b.startMin)} - ${this._label(b.endMin)} • ${this._toDisplayTemp(b.temp)} ${this._unitSymbol()}`;
          if (tooltip){
            tooltip.textContent = txt;
            const box = div.getBoundingClientRect();
            const cont = modalWeek?.getBoundingClientRect();
            const left = box.left + box.width/2 - (cont?.left||0);
            const top = (box.top - (cont?.top||0)) - 8; // a little above
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            tooltip.style.transform = 'translate(-50%,-100%)';
            tooltip.style.display = '';
          }
        };
        const hideTip = ()=>{ if (tooltip) tooltip.style.display='none'; };
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
  track.addEventListener('mouseleave', ()=>{ const tip = this.shadowRoot.querySelector('.wk-tooltip'); if (tip) tip.style.display='none'; });
    } catch(e){ console.warn('render weekly modal failed', e); }
  }
  _openWeeklyBlockEditor(blockId, atMin=null){ if (!this._weeklyDraft) return; const day = this._effectiveDayKey(this._weeklyDayKey || 'mon'); const arr = this._weeklyDraft.days?.[day] || []; if (!blockId){
      // open new
      const start = Number.isFinite(atMin) ? this._clamp(Math.round(atMin),0,1380) : this._clamp(Math.round(this._getNowMin()),0,1380);
      const end = this._clamp(start+60, start+15, 1440);
      const row = this._schedules[this._weeklyEntity] || { defaultTemp: this._config.default_temp };
      const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error');
      this._editing = { entity: this._weeklyEntity, blockId: null, weeklyDay: day };
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(row.defaultTemp||20)); edTemp.max= String(this._maxDisplay()); }
      if (edFrom) edFrom.value = this._toTimeInput(start);
      if (edTo) edTo.value = this._toTimeInput(end);
      if (title) title.textContent = this._t('ui.add_block'); if (delBtn) delBtn.style.display='none'; if (err){ err.style.display='none'; err.textContent=''; }
      // Hide weekday overlay while editing to avoid double-popups
      const wov = this.shadowRoot.querySelector('.overlay-week'); if (wov) wov.classList.remove('open'); this._weeklyOverlayHiddenForEditor = true;
      overlay.classList.add('open');
    } else {
  const b = arr.find(x=>x.id===blockId);
      if (!b) return;
      const edTemp = this.shadowRoot.querySelector('.ed-temp'); const edFrom = this.shadowRoot.querySelector('.ed-from'); const edTo = this.shadowRoot.querySelector('.ed-to'); const overlay = this.shadowRoot.querySelector('.overlay'); const title = this.shadowRoot.querySelector('.modal h3'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); const err = this.shadowRoot.querySelector('.ed-error');
      this._editing = { entity: this._weeklyEntity, blockId, weeklyDay: day };
  if (edTemp) { edTemp.value = String(this._toDisplayTemp(b.temp)); edTemp.max= String(this._maxDisplay()); }
      if (edFrom) edFrom.value = this._toTimeInput(b.startMin);
      if (edTo) edTo.value = this._toTimeInput(b.endMin);
      if (title) title.textContent = this._t('ui.edit_block'); if (delBtn) delBtn.style.display=''; if (err){ err.style.display='none'; err.textContent=''; }
      const wov = this.shadowRoot.querySelector('.overlay-week'); if (wov) wov.classList.remove('open'); this._weeklyOverlayHiddenForEditor = true;
      overlay.classList.add('open');
    }
  }

  async _saveEditor(){ const errElGlobal = this.shadowRoot?.querySelector('.ed-error'); try { if (!this._editing) return; const { entity, blockId, weeklyDay } = this._editing; const row = this._schedules[entity]; if (!row) return; let b = null; let sourceBlocks = row.blocks; if (weeklyDay && this._weeklyDraft) { sourceBlocks = (this._weeklyDraft.days?.[weeklyDay] || []); b = blockId ? sourceBlocks.find(x=>x.id===blockId) : null; } else { if (blockId) b = row.blocks.find(x => x.id === blockId); }
    const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to");
    const rawFrom = String(edFrom.value || "");
    const rawTo = String(edTo.value || "");
    let start = this._fromTimeInput(rawFrom);
    let end = this._fromTimeInput(rawTo);
    // Treat end time 00:00 as end of day (24:00 -> 1440 minutes)
    if (rawTo === '00:00') end = 1440;
  let tempRaw = String(edTemp.value || "").replace(",", "."); let temp = parseFloat(tempRaw);
  if (isNaN(start)) start = 0; if (isNaN(end)) end = 60; if (isNaN(temp)) temp = row.defaultTemp || 20;
  const maxLimit = this._maxDisplay(); if (Number.isFinite(maxLimit)) temp = Math.min(temp, maxLimit);
    start = this._clamp(Math.floor(start), 0, 1439); end   = this._clamp(Math.ceil(end),   1, 1440);
    if (end <= start) end = this._clamp(start + 15, start + 1, 1440);
    const others = (sourceBlocks || []).filter(x => !b || x.id !== b.id); const overlap = others.find(o => !(end <= o.startMin || start >= o.endMin)); if (overlap) { const overlapStart = Math.max(start, overlap.startMin); const overlapEnd = Math.min(end, overlap.endMin); const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const msg = this._t('ui.overlap_msg').replace('{start}', this._label(overlapStart)).replace('{end}', this._label(overlapEnd)); const canFixStart = overlap.endMin < end; const canFixEnd = overlap.startMin > start; let actionLabel = this._t('ui.auto_fix'); let suggestedStart = null, suggestedEnd = null; if (canFixStart && (!canFixEnd || (end - overlap.endMin) <= (overlap.startMin - start))) { suggestedStart = overlap.endMin; actionLabel = this._t('ui.fix_start_to').replace('{time}', this._label(suggestedStart)); } else if (canFixEnd) { suggestedEnd = overlap.startMin; actionLabel = this._t('ui.fix_end_to').replace('{time}', this._label(suggestedEnd)); } errEl.innerHTML = `<div>${msg}</div>` + ((suggestedStart !== null || suggestedEnd !== null) ? `<div style="margin-top:8px; display:flex; gap:8px; justify-content:flex-end;"><button class="btn ghost ed-fix-cancel" type="button">${this._t('ui.cancel')}</button><button class="btn primary ed-fix-apply" type="button">${actionLabel}</button></div>` : `<div style=\"margin-top:8px; display:flex; gap:8px; justify-content:flex-end;\"><button class=\"btn ghost ed-fix-cancel\" type=\"button\">${this._t('ui.cancel')}</button></div>`); errEl.style.display = 'block'; const apply = errEl.querySelector('.ed-fix-apply'); const cancel = errEl.querySelector('.ed-fix-cancel'); if (cancel) cancel.addEventListener('click', () => { errEl.style.display='none'; errEl.textContent=''; }); if (apply) apply.addEventListener('click', () => { if (suggestedStart !== null) { edFrom.value = this._toTimeInput(suggestedStart); } else if (suggestedEnd !== null) { edTo.value = this._toTimeInput(suggestedEnd); } errEl.style.display='none'; errEl.textContent=''; setTimeout(() => { this._saveEditor(); }, 50); }); } return; }
  temp = this._fromDisplayTemp(temp);
  const before = this._desiredNowSnapshot();
    if (weeklyDay && this._weeklyDraft) {
      if (!b) {
        const id = Math.random().toString(36).slice(2,9);
        b = { id, startMin: start, endMin: end, temp };
        sourceBlocks.push(b);
      } else {
        b.temp = temp; b.startMin = start; b.endMin = end;
      }
      // sort and adjust neighbors only within this day list
      sourceBlocks.sort((a,bx)=>a.startMin - bx.startMin || a.endMin - bx.endMin);
      // Close editor and re-render weekly preview; no immediate apply
      this._closeEditor();
      this._renderWeeklyModal();
      return;
    }
    // Normal (non-weekly) save
    if (!b) { const id = Math.random().toString(36).slice(2,9); b = { id, startMin: start, endMin: end, temp }; row.blocks.push(b); } else { b.temp = temp; b.startMin = start; b.endMin = end; } this._applyNoOverlapResize(entity, b, "left", b.startMin); this._applyNoOverlapResize(entity, b, "right", b.endMin); await this._saveStore(); this._render(); this._closeEditor(); if (this._config.apply_on_edit) await this._applyIfDesiredChanged(before); this._scheduleNextApply(); } catch (e) { console.error('[thermostat-timeline] _saveEditor error', e); if (errElGlobal) { errElGlobal.style.display = 'block'; errElGlobal.textContent = 'Fejl: ' + (e && e.message ? e.message : String(e)); } }}

  _toTimeInput(min){ if (!Number.isFinite(min)) min = 0; const m = ((Math.floor(min) % 1440) + 1440) % 1440; const hh=Math.floor(m/60), mm=Math.floor(m%60); return `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}`; }
  _fromTimeInput(str){ const m=/(\d{1,2}):(\d{2})$/.exec(str||""); if(!m) return 0; const h=Math.max(0,Math.min(23,parseInt(m[1],10))); const mi=Math.max(0,Math.min(59,parseInt(m[2],10))); return h*60+mi; }

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
        // Weekdays button text in rows is set during render via this._t('week.button')
      } catch {}
    } catch (e) { /* ignore */ }
  }

}
customElements.define("thermostat-timeline-card", ThermostatTimelineCard);

/* ----------------- CONFIG EDITOR ----------------- */
class ThermostatTimelineCardEditor extends HTMLElement {
  setConfig(config) { this._config = { ...ThermostatTimelineCard.getStubConfig(), ...(config||{}) }; this._render(); }
  set hass(hass) { this._hass = hass; this._lang = ttGetLangFromHass(hass); // Avoid clobbering inputs while user is typing
  const ae = this.shadowRoot && this.shadowRoot.activeElement;
  if (this._suspendRender) return;
  if (ae) {
    try {
      if (ae.classList?.contains("def") || ae.classList?.contains("rowh") || ae.classList?.contains("title") || ae.classList?.contains('label-input')) return;
      if (ae.closest && ae.closest('ha-entity-picker')) return;
    } catch {}
  }
  this._render(); this._applyEditorI18n(); }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  this._openCount = 0;
    this._pendingEmit = false;
  this._openRows = new Set();
  this._suspendRender = false;
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
         .label-input { width:100%; max-width:440px; }
  /* entity picker width constraint */
  .inline ha-entity-picker { width: 100%; min-width: 250px; max-width: 440px; overflow: hidden; text-overflow: ellipsis; }
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
        </style>
      <div class="wrap">
        <div class="row"><div class="label">Titel</div><ha-textfield class="title" label="Titel"></ha-textfield></div>
        <div class="row">
          <div class="label">Storage entity</div>
          <div style="display:grid; gap:6px; max-width:480px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
              <div style="display:grid; gap:2px;">
                <div class="store-title" style="font-weight:600;">Enable shared storage</div>
                <div class="store-desc" style="font-size:.85rem; color:var(--secondary-text-color);">When enabled, schedules are shared via the selected sensor.</div>
              </div>
              <ha-switch class="store-enable"></ha-switch>
            </div>
            <div class="store-controls" style="display:flex; gap:8px; align-items:center; flex-wrap: wrap;">
              <ha-entity-picker class="storage" style="flex:1;" label="sensor.thermostat_timeline" include-domains='["sensor"]'></ha-entity-picker>
              <button type="button" class="remove-btn migrate-to-store"><ha-icon icon="mdi:upload"></ha-icon><span>Transfer browser data to storage</span></button>
              <button type="button" class="remove-btn clear-store"><ha-icon icon="mdi:database-off"></ha-icon><span>Clear storage only</span></button>
              <button type="button" class="remove-btn clear-all"><ha-icon icon="mdi:delete"></ha-icon><span>Clear all data</span></button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="entities"></div>
          <button class="add-entity-btn" type="button"><ha-icon icon="mdi:plus"></ha-icon><span>Tilføj entity</span></button>
        </div>
        
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
  grid-template-columns: repeat(3, 1fr);
  gap:10px;
  margin-bottom: 6px;
}
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
    <ha-textfield class="def" type="number" label="Standard °C" min="5" max="35"></ha-textfield>
    <ha-textfield class="rowh" type="number" label="Rækkens højde (px)" min="40" max="120"></ha-textfield>
    <ha-textfield class="maxc" type="number" label="Max °C" min="5" max="50"></ha-textfield>
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
</div>

<!-- Bottom action: clear local only -->
<div class="row">
  <button class="remove-btn clear-local-only" type="button"><ha-icon icon="mdi:delete-outline"></ha-icon><span>Clear local only</span></button>
  <div class="label" style="opacity:.8;">&nbsp;</div>
  <!-- spacer to align with grid -->
  
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
      // Show/hide storage controls when shared storage is toggled
      try {
        const ctrls = this.shadowRoot.querySelector('.store-controls');
        if (ctrls) ctrls.style.display = on ? 'flex' : 'none';
      } catch {}
      this._applyEditorI18n();
      // On enabling shared storage: offer to migrate local browser data to storage
      try {
        if (on) {
          const localRaw = localStorage.getItem('thermostat_timeline_store');
          const hasLocal = !!(localRaw && localRaw.length > 2);
          const target = this._config.storage_entity;
          if (hasLocal && target) {
            const ok = confirm(this._t('editor.migrate_confirm'));
            if (ok) {
              const schedules = JSON.parse(localRaw || '{}');
              if (this._hass) {
                this._hass.callService('thermostat_timeline', 'set_store', { schedules });
              }
            }
          }
        }
      } catch {}
    });
  qs(".def")  ?.addEventListener("change", e => {
      let raw=String(e.target.value||"").replace(",",".");
      let vDisp=Number(raw);
      // Convert from display units to Celsius for storage
      let vC = isNaN(vDisp)? (this._config?.default_temp ?? 20) : this._fromDisplayTemp(vDisp);
      const mxC = Number(this._config?.max_temp ?? 25);
      vC = Math.max(5, Math.min(mxC, vC));
      this._upd("default_temp", vC);
      // reflect display value after clamp
      const input = qs(".def"); if (input) input.value = String(this._toDisplayTemp(vC));
    });
    qs(".rowh") ?.addEventListener("change", e => { let v=Number(e.target.value); v=isNaN(v)?64:Math.max(40,Math.min(120,Math.round(v))); this._upd("row_height",v); qs(".rowh").value=String(v); });
    qs(".add-entity-btn")?.addEventListener("click", () => this._addEntity());
    qs(".auto")?.addEventListener("change", e => this._upd("auto_apply", e.target.checked));
    qs(".applyedit")?.addEventListener("change", e => this._upd("apply_on_edit", e.target.checked));
    qs(".applydef")?.addEventListener("change", e => this._upd("apply_on_default_change", e.target.checked));
  qs('.maxc')?.addEventListener('change', e => {
      let raw=String(e.target.value||"").replace(",",".");
      let vDisp=Number(raw);
      let vC = isNaN(vDisp)? (this._config?.max_temp ?? 25) : this._fromDisplayTemp(vDisp);
      vC = Math.max(5, Math.min(50, Math.round(vC)));
      this._upd('max_temp', vC);
      const mxEl=this.shadowRoot.querySelector('.maxc'); if(mxEl) mxEl.value=String(this._toDisplayTemp(vC));
    });
    // Weekdays enable (mode selection removed from editor)
    qs('.week-enable')?.addEventListener('change', e => {
      const on = !!e.target.checked; this._upd('weekdays_enabled', on);
    });
    // Clear storage only
    qs('.clear-store')?.addEventListener('click', async () => {
      const msg = this._t('editor.clear_storage_only_confirm');
      if (!confirm(msg)) return;
      try {
        if (this._hass && this._config.storage_entity) {
          await this._hass.callService('thermostat_timeline', 'set_store', { schedules: {} });
        } else {
          alert(this._t('editor.storage_entity'));
          return;
        }
      } catch (e) { console.warn('clear-storage-only failed', e); }
    });

    // Clear all data (storage + local)
    qs('.clear-all')?.addEventListener('click', async () => {
      const msg = this._t('editor.clear_all_confirm');
      if (!confirm(msg)) return;
      try {
        try { localStorage.removeItem('thermostat_timeline_store'); } catch {}
        if (this._hass && this._config.storage_entity) {
          await this._hass.callService('thermostat_timeline', 'set_store', { schedules: {} });
        }
      } catch (e) { console.warn('clear-all failed', e); }
    });

    // Clear local only (bottom)
    qs('.clear-local-only')?.addEventListener('click', async () => {
      const msg = this._t('editor.clear_local_only_confirm');
      if (!confirm(msg)) return;
      try { localStorage.removeItem('thermostat_timeline_store'); } catch {}
    });
    qs('.migrate-to-store')?.addEventListener('click', async () => {
      try {
        const target = this._config.storage_entity;
        if (!target) { alert(this._t('editor.storage_entity')); return; }
        const raw = localStorage.getItem('thermostat_timeline_store') || '';
        if (!raw) { alert(this._t('editor.no_local_data')); return; }
        const ok = confirm(this._t('editor.migrate_confirm'));
        if (!ok) return;
        const parsed = JSON.parse(raw || '{}');
        const schedules = parsed.schedules || parsed || {};
        const settings = parsed.settings || { time_12h: this._config.time_12h, temp_unit: this._config.temp_unit };
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
  }

  // --- Local helpers for unit/time conversions (editor context) ---
  _isF(){ try { return (this._config?.temp_unit||'C')==='F'; } catch { return false; } }
  _unitSymbol(){ return this._isF() ? '°F' : '°C'; }
  _toDisplayTemp(c){ try { return this._isF() ? Math.round((Number(c)*9/5+32)*10)/10 : Number(c); } catch { return c; } }
  _fromDisplayTemp(v){ try { return this._isF() ? ((Number(v)-32)*5/9) : Number(v); } catch { return Number(v); } }

  connectedCallback(){
    this._render();
    try {
      // Suspend render while interacting with any entity picker to avoid closing dropdowns
      this.shadowRoot.addEventListener('focusin', (e)=>{
        try { if (e.target?.closest && e.target.closest('ha-entity-picker')) this._suspendRender = true; } catch {}
      });
      this.shadowRoot.addEventListener('focusout', ()=>{
        setTimeout(()=>{ this._suspendRender = false; }, 100);
      });
      this.shadowRoot.addEventListener('value-changed', (e)=>{
        try { if (e.target?.tagName?.toLowerCase() === 'ha-entity-picker') { this._suspendRender = false; } } catch {}
      });
    } catch {}
  }

  _render(){
    if(!this._hass || !this.shadowRoot || !this._config) return;
    if(this._openCount > 0) return;

  const t = this.shadowRoot.querySelector(".title");
  const d = this.shadowRoot.querySelector(".def");
  const mx= this.shadowRoot.querySelector('.maxc');
    const rh= this.shadowRoot.querySelector(".rowh");
  const se= this.shadowRoot.querySelector(".storage");
  const seEn = this.shadowRoot.querySelector('.store-enable');
    const au= this.shadowRoot.querySelector(".auto");
    const aed= this.shadowRoot.querySelector(".applyedit");
    const adf= this.shadowRoot.querySelector(".applydef");
  const wek = this.shadowRoot.querySelector('.week-enable');
    if (t)  t.value  = this._config.title ?? "";
  if (d && d !== this.shadowRoot.activeElement) d.value = String(this._toDisplayTemp(this._config.default_temp ?? 20));
  if (mx && mx !== this.shadowRoot.activeElement) mx.value = String(this._toDisplayTemp(this._config.max_temp ?? 25));
    if (rh && rh !== this.shadowRoot.activeElement) rh.value = String(this._config.row_height ?? 64);
    if (se) { se.hass = this._hass; se.value = this._config.storage_entity || ""; }
    if (seEn) {
      const enabled = !!this._config.storage_enabled;
      seEn.checked = enabled;
      if (se) se.disabled = !enabled;
      // Ensure controls visibility matches toggle
      try {
        const ctrls = this.shadowRoot.querySelector('.store-controls');
        if (ctrls) ctrls.style.display = enabled ? 'flex' : 'none';
      } catch {}
    }
    this._applyEditorI18n();
    if (au) { au.checked = !!this._config.auto_apply; }
    if (aed){ aed.checked = !!this._config.apply_on_edit; }
    if (adf){ adf.checked = !!this._config.apply_on_default_change; }
  if (wek){ wek.checked = !!this._config.weekdays_enabled; }
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

    for (let i=0;i<want;i++){
      const row = wrap.children[i];
      const picker = row.querySelector("ha-entity-picker");
      if (picker) {
        picker.hass = this._hass;
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
        const shown = labels[eid] || friendly || 'Vælg en entitet';
        if (titleEl) titleEl.textContent = shown;
        if (nameInp && nameInp !== this.shadowRoot.activeElement) nameInp.value = labels[eid] || '';
        // Build merged subtitle text
        if (subEl) {
          const linked = (this._config.merges?.[eid] || []).map(id => (
            this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1] || id)
          ));
          subEl.textContent = linked.length ? `${this._t('editor.merged_with')}: ${linked.join(', ')}` : '';
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
      } catch {}
     }
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

    _makeEntityRow(idx){
    const line = document.createElement("div"); line.className = "inline";

    // Summary bar (collapsed row header)
    const summary = document.createElement('div');
    summary.className = 'summary';
    const sumLeft = document.createElement('div'); sumLeft.className = 'summary-left';
    const expander = document.createElement('button'); expander.className = 'expander'; expander.innerHTML = `<ha-icon icon="mdi:chevron-down"></ha-icon>`; sumLeft.append(expander);
    // Title and subtitle container
    const textWrap = document.createElement('div'); textWrap.className = 'summary-text';
    const titleSpan = document.createElement('span'); titleSpan.className = 'summary-title'; titleSpan.textContent = 'Vælg en entitet';
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

    const pick = document.createElement("ha-entity-picker");
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

    const nameInp = document.createElement("ha-textfield");
    nameInp.className = "label-input";
    nameInp.setAttribute("label", this._t('editor.display_name_optional'));
    nameInp.addEventListener("change", (e)=>{
      const eid = this._config.entities[idx];
      if (!eid) return;
      const labels = { ...(this._config.labels || {}) };
      const val = (e.target.value || "").trim();
      if (val) labels[eid] = val; else delete labels[eid];
      this._config.labels = labels;
      this._emit();
    });

    // Merge/Link section
  const linkWrap = document.createElement('div');
  linkWrap.style.display = 'grid';
  linkWrap.style.gap = '6px';
  // Visible label for merge/link section
  const linkLabel = document.createElement('div');
  linkLabel.className = 'label';
  linkLabel.textContent = this._t('editor.merge_label') || 'Flet med (tilføj ekstra termostat)';

    const linkPicker = document.createElement('ha-entity-picker');
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
          });
          chip.append(txt, rm);
          chips.append(chip);
        }
        // Update subtitle after chip changes
        try {
          const subEl = line.querySelector('.summary-sub');
          const linkedNames = links.map(id => this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1]||id));
          if (subEl) subEl.textContent = linkedNames.length ? `${this._t('editor.merged_with')}: ${linkedNames.join(', ')}` : '';
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
      }
      this._config.entities[idx] = newPrimary;
      // Move open-state key from old -> new entity id
      try {
        const oldKey = oldPrimary || `#idx:${idx}`;
        const newKey = newPrimary || `#idx:${idx}`;
        if (this._openRows.has(oldKey)) { this._openRows.delete(oldKey); this._openRows.add(newKey); }
      } catch {}
      try { nameInp.value = (this._config.labels || {})[newPrimary] || ""; } catch {}
      if (this._openCount > 0) this._pendingEmit = true; else this._emit(true);
      refreshChips();
      // Also update subtitle on primary change
      try {
        const subEl = line.querySelector('.summary-sub');
        const linkedNames = (this._config.merges?.[this._config.entities[idx]] || []).map(id => this._hass?.states?.[id]?.attributes?.friendly_name || (id.split('.')[1]||id));
        if (subEl) subEl.textContent = linkedNames.length ? `${this._t('editor.merged_with')}: ${linkedNames.join(', ')}` : '';
      } catch {}
    });

    return line;
  }

  // (Removed unused pointer-driven drag & drop prototype)

  _addEntity(){ this._config.entities = [...(this._config.entities||[]), ""]; this._emit(true); }
  _upd(key,val){ this._config[key] = val; this._emit(); }
  _emit(repaint=false){ if (this._openCount > 0) { this._pendingEmit = true; return; } this.dispatchEvent(new CustomEvent("config-changed", { detail:{ config:this._config }, bubbles:true, composed:true })); if (repaint) this._render(); }

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
      if (titleField) titleField.setAttribute('label', t('editor.title_label'));

      // Storage entity (use the .storage picker to find its label robustly)
      const storagePicker = root.querySelector('.storage');
      if (storagePicker) {
        const storageLabel = storagePicker.closest('.row')?.querySelector('.label');
        if (storageLabel) storageLabel.textContent = t('editor.storage_entity');
        // toggle texts
        const stTitle = root.querySelector('.store-title');
        const stDesc = root.querySelector('.store-desc');
        if (stTitle) stTitle.textContent = t('editor.store_enable.title');
        if (stDesc) stDesc.textContent = t('editor.store_enable.desc');
        const clrBtn = root.querySelector('.clear-store span');
        if (clrBtn) clrBtn.textContent = t('editor.clear_storage_only');
        const clrAllBtn = root.querySelector('.clear-all span');
        if (clrAllBtn) clrAllBtn.textContent = t('editor.clear_all');
        const migBtn = root.querySelector('.migrate-to-store span');
        if (migBtn) migBtn.textContent = t('editor.migrate_to_store');
      }
      const clrLocalBtn = root.querySelector('.clear-local-only span');
      if (clrLocalBtn) clrLocalBtn.textContent = t('editor.clear_local_only');

      // Entities section label (use the .entities container to find its label robustly)
      const entitiesWrap = root.querySelector('.entities');
      if (entitiesWrap) {
        const entitiesLabel = entitiesWrap.closest('.row')?.querySelector('.label');
        if (entitiesLabel) entitiesLabel.textContent = t('editor.select_entities');
      }

      // Add entity button text
      const addBtn = root.querySelector('.add-entity-btn span');
      if (addBtn) addBtn.textContent = t('editor.add_entity');

      // Settings labels
      const def = root.querySelector('ha-textfield.def');
      if (def) {
        const lbl = t('editor.default_c');
        def.setAttribute('label', lbl.replace('°C', this._unitSymbol()));
      }
      const rowh = root.querySelector('ha-textfield.rowh');
      if (rowh) rowh.setAttribute('label', t('editor.row_height_px'));
  const maxc = root.querySelector('ha-textfield.maxc');
  if (maxc) {
        const lblm = t('editor.max_c');
        maxc.setAttribute('label', lblm.replace('°C', this._unitSymbol()));
      }

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
      // Time format section (always last)
      try {
        const tfTitle = root.querySelector('.timefmt-title'); if (tfTitle) tfTitle.textContent = t('editor.timefmt.title');
        const tfDesc = root.querySelector('.timefmt-desc'); if (tfDesc) tfDesc.textContent = t('editor.timefmt.desc');
      } catch {}
      // Temperature unit section
      try {
        const tuTitle = root.querySelector('.tempfmt-title'); if (tuTitle) tuTitle.textContent = t('editor.tempfmt.title');
        const tuDesc = root.querySelector('.tempfmt-desc'); if (tuDesc) tuDesc.textContent = t('editor.tempfmt.desc');
      } catch {}

    } catch(e){ /* ignore */ }
  }

}
customElements.define("thermostat-timeline-card-editor", ThermostatTimelineCardEditor);

// Registrér i “Custom cards”
window.customCards = window.customCards || [];
window.customCards.push({ type: "thermostat-timeline-card", name: "Thermostat Timeline Card", description: "24h tidslinje – transition-baseret set_temperature + smart replan & apply-on-change" });

function loadCard() {}
loadCard();
