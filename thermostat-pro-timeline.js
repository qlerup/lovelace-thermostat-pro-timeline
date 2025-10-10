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
    'editor.select_entities': 'Select thermostat entities',
    'editor.add_entity': 'Add entity',
    'editor.entity_placeholder': 'Select an entity',
    'editor.drag_reorder': 'Drag to reorder',
    'editor.remove': 'Remove',
    'editor.default_c': 'Default °C',
  'editor.row_height_px': 'Row height (px)',
  'editor.max_c': 'Max °C',
    'editor.auto_apply.title': 'Automatisk anvendelse',
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
    'editor.clear_store_confirm': 'This will delete all stored schedules. Continue?'
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
    'editor.select_entities': 'Vælg termostat-entities',
    'editor.add_entity': 'Tilføj entitet',
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
    'editor.clear_store_confirm': 'Dette vil slette alle gemte tidsplaner. Vil du fortsætte?'
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
    'editor.select_entities': 'Välj termostat-entiteter',
    'editor.add_entity': 'Lägg till entitet',
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
    'editor.clear_store_confirm': 'Detta tar bort alla sparade scheman. Vill du fortsätta?'
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
    'editor.select_entities': 'Velg termostat-entiteter',
    'editor.add_entity': 'Legg til entitet',
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
    'editor.clear_store_confirm': 'Dette vil slette alle lagrede tidsplaner. Fortsette?'
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
    'editor.select_entities': 'Thermostat-Entitäten auswählen',
    'editor.add_entity': 'Entität hinzufügen',
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
    'editor.clear_store_confirm': 'Dadurch werden alle gespeicherten Zeitpläne gelöscht. Fortfahren?'
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
    'editor.select_entities': 'Seleccionar entidades del termostato',
    'editor.add_entity': 'Agregar entidad',
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
    'editor.clear_store_confirm': 'Esto eliminará todos los horarios guardados. ¿Continuar?'
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
    'editor.select_entities': 'Sélectionner des entités thermostat',
    'editor.add_entity': 'Ajouter une entité',
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
    'editor.clear_store_confirm': 'Cela supprimera tous les plannings enregistrés. Continuer ?'
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
    'editor.select_entities': 'Valitse termostaatti-entiteetit',
    'editor.add_entity': 'Lisää entiteetti',
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
    'editor.clear_store_confirm': 'Tämä poistaa kaikki tallennetut aikataulut. Jatketaanko?'
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
    'da',
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
      now_update_ms: 60000,   // kun til UI 'nu'-stregen
      storage_entity: "sensor.thermostat_timeline",     // fx sensor.thermostat_timeline
      storage_enabled: false, // default: off -> only local per user
      show_top_now: false,
      now_extend_px: 76,
      auto_apply: true,        // sæt automatisk setpoint via climate.set_temperature
      apply_on_edit: true,     // NYT: anvend straks hvis den ønskede temp *nu* ændres af en redigering
      apply_on_default_change: true, // NYT: anvend straks hvis Standard °C ændrer den ønskede temp *nu*,
      labels: {},
      merges: {}               // { [primary_eid]: [linked_eid, ...] }
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
    };

    if (this._initialized) {
      this._ensureSchedules();
      this._startUiTimer();
      if (!this._inlineEditing && !this._editing) this._render();
      this._scheduleNextApply();
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
          this._lastVersion = Number(st.state || 0) || 0;
          try { localStorage.setItem("thermostat_timeline_store", JSON.stringify(this._schedules)); } catch {}
          return;
        }
      } catch (e) { /* fallback */ }
    }
    try { const raw = localStorage.getItem("thermostat_timeline_store") || ""; this._schedules = raw ? JSON.parse(raw) : {}; }
    catch { this._schedules = {}; }
  }

  async _saveStore() {
    try { localStorage.setItem("thermostat_timeline_store", JSON.stringify(this._schedules)); } catch {}
    if (!this._config?.storage_enabled || !this._storageAvailable()) return;
    this._saving = true;
    try { await this._hass.callService("thermostat_timeline", "set_store", { schedules: this._schedules }); }
    catch (e) { console.error("thermostat-timeline: save failed", e); }
    finally { setTimeout(() => { this._saving = false; }, 600); }
  }

  _debouncedSaveStore() { if (this._saveTimer) clearTimeout(this._saveTimer); this._saveTimer = setTimeout(() => this._saveStore(), this._saveDebounceMs); }

  // ---------- Helpers ----------
  _sortBlocks(entity) { const r = this._schedules[entity]; r.blocks.sort((a,b)=>a.startMin - b.startMin || a.endMin - b.endMin); }
  _neighbors(entity, id) { const r = this._schedules[entity]; const i = r.blocks.findIndex(b=>b.id===id); if (i === -1) return {left:null, right:null, index:-1}; return { left: r.blocks[i-1] || null, right: r.blocks[i+1] || null, index:i }; }
  _applyNoOverlapResize(entity, b, edge, proposed) { this._sortBlocks(entity); const {left, right} = this._neighbors(entity, b.id); if (edge === "left") { let ns = this._clamp(Math.floor(proposed), 0, b.endMin - 5); if (left) ns = Math.max(ns, left.endMin); b.startMin = ns; } else if (edge === "right") { let ne = this._clamp(Math.ceil(proposed), b.startMin + 5, 1440); if (right) ne = Math.min(ne, right.startMin); b.endMin = ne; } this._sortBlocks(entity); }
  _label(min) { if (!Number.isFinite(min)) return "00:00"; const m = ((Math.floor(min) % 1440) + 1440) % 1440; const hh=Math.floor(m/60), mm=Math.round(m%60); return `${String(hh).padStart(2,"0")}:${String(mm).padStart(2,"0")}`; }
  _getNowMin(){ const d=new Date(); return d.getHours()*60 + d.getMinutes(); }
  _clamp(v,a,b){ if (isNaN(v)) return a; return Math.min(Math.max(v,a),b); }
  _prettyName(eid){ const st=this._hass?.states?.[eid]; if (st?.attributes?.friendly_name) return st.attributes.friendly_name; const base=(eid||"").split(".")[1]||eid||""; return base.replace(/_/g," ").replace(/\b\w/g,(m)=>m.toUpperCase()); }
  _isCompactScale(){ try { const isCoarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches; const isLandscape = window.matchMedia && window.matchMedia('(orientation: landscape)').matches; const w = window.innerWidth || 0; return (isCoarse && isLandscape) || (w > 600 && w < 1100 && isLandscape); } catch (e) { return false; } }

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

  _desiredTempFor(eid, nowMin){ const primary = this._groupPrimaryOf(eid); const row = this._schedules[primary]; if (!row) return null; const hit = (row.blocks||[]).find(b => nowMin >= b.startMin && nowMin < b.endMin); return Number(hit ? hit.temp : row.defaultTemp); }

  _nextBoundaryDate(){ const now = new Date(); const nowMin = this._getNowMin(); let bestT = null; let bestDelta = Infinity; for (const eid of (this._config.entities || [])){ const row = this._schedules[eid]; if (!row) continue; const times = []; for (const b of (row.blocks||[])) { times.push(b.startMin, b.endMin); } for (const t of times){ let delta = (t - nowMin + 1440) % 1440; if (delta === 0) delta = 1; if (delta < bestDelta){ bestDelta = delta; bestT = t; } } } if (bestT == null) { return new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0); } const dayOffset = (bestT >= nowMin) ? 0 : 1; const target = new Date(now.getFullYear(), now.getMonth(), now.getDate()+dayOffset, Math.floor(bestT/60), bestT%60, 0, 0); if (target.getTime() - now.getTime() <= 250) target.setTime(target.getTime() + 60000); return target; }

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
        .header{display:flex;align-items:center;gap:.75rem;padding:12px var(--pad-x);border-bottom:1px solid var(--divider-color)}
        .title{font-weight:600;font-size:1rem;color:var(--primary-text-color)}
        .scale{position:relative;padding:8px var(--pad-x);z-index:12;margin-bottom:6px;border-bottom:1px solid var(--divider-color)}
        .scale-inner{position:relative;height:48px;display:block}
        .rows{padding:0 var(--pad-x);position:relative}
        .tick{position:absolute;width:0}
        .tick.full{top:6px;bottom:8px;border-left:1px solid var(--divider-color)}
        .tick.short{top:22px;bottom:8px;border-left:1px solid var(--divider-color);opacity:1}
        .tick label{position:absolute;bottom:14px;left:50%;transform:translate(-50%,0);user-select:none;font-weight:500;font-size:.75rem;color:var(--secondary-text-color)}
        .row{border-bottom:1px solid var(--divider-color)}
        .row-head{display:flex;align-items:center;justify-content:space-between;padding:8px 0;background:transparent}
        .row-head .meta{display:flex;align-items:center;gap:.5rem;font-size:.8rem;color:var(--secondary-text-color)}
        .row-head input[type=number]{width:64px;padding:4px 6px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color);font-size:.8rem}
        .btn{cursor:pointer;border:1px solid var(--divider-color);border-radius:10px;padding:6px 10px;font-size:.8rem;background:var(--card-background-color);color:var(--primary-text-color)}
        .btn.primary{background:var(--primary-color);color:var(--text-primary-color, #fff);border-color:var(--primary-color)}
        .btn.ghost{background:var(--card-background-color);color:var(--primary-text-color)}
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
        <div class="header"><div class="title"></div></div>
        <div class="scale"><div class="scale-inner"></div></div>
        <div class="rows"></div>
        <div class="footer"><div class="label-end"><span>00:00</span><span>00:00</span></div></div>
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
      </ha-card>`;    this._applyCardI18n();


    this._ensureSchedules();
    this._startUiTimer();
  }

  _ensureSchedules() {
    for (const eid of this._config.entities) {
      if (!this._schedules[eid]) this._schedules[eid] = { defaultTemp: this._config.default_temp, blocks: [] };
    }
  }

  _startUiTimer() {
    if (this._uiTimer) clearInterval(this._uiTimer);
    this._uiTimer = setInterval(() => { if (!this._inlineEditing && !this._editing) this._render(); }, this._config.now_update_ms);
  }

  _render() {
    const qs = (s) => this.shadowRoot.querySelector(s);
    const titleEl = qs('.title');
    const rowsEl = qs('.rows');
    const scaleEl = qs('.scale-inner');
    if (!rowsEl || !scaleEl || !titleEl) return;

    titleEl.textContent = this._config.title || "Termostat Tidslinje";

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
        l.textContent = (i === 24) ? '00:00' : `${String(i).padStart(2, '0')}:00`;
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
  inline.max = String(this._config.max_temp ?? 25);
      inline.value = String(row.defaultTemp ?? this._config.default_temp);
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
  v = isNaN(v) ? row.defaultTemp : this._clamp(v, 5, this._config.max_temp ?? 25);
        this._inlineTempDraft = v;
      });
      inline.addEventListener('change', async (e) => {
        const before = this._desiredNowSnapshot();
        let v = parseFloat(e.target.value);
  v = isNaN(v) ? this._config.default_temp : this._clamp(v, 5, this._config.max_temp ?? 25);
        row.defaultTemp = v;
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
      unit.textContent = '°C';
      meta.append(unit);
      head.append(meta);
      const addBtn = document.createElement('button');
      addBtn.className = 'btn primary';
      addBtn.textContent = '+ ' + this._t('ui.add_block');
      addBtn.addEventListener('click', () => this._openNewEditor(eid));
      head.append(addBtn);
      rowEl.append(head);
      const track = document.createElement('div');
      track.className = 'track';
      track.style.setProperty('--row-height', `${this._config.row_height}px`);
      for (const b of row.blocks) {
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
        pillTemp.textContent = `${b.temp} °C`;
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

    // Editor modal events
    const overlay = qs('.overlay');
    const edSave = qs('.ed-save');
    const edCancel = qs('.ed-cancel');
    const edDelete = qs('.ed-delete');
    if (edSave) edSave.addEventListener('click', () => this._saveEditor());
    if (edCancel) edCancel.addEventListener('click', () => this._closeEditor());
    if (edDelete) edDelete.addEventListener('click', () => this._deleteFromEditor());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) this._closeEditor(); });
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
  if (edTemp) { edTemp.value = String(b.temp); edTemp.max = String(this._config?.max_temp ?? 25); }
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
  _closeEditor(){ this._editing = null; this.shadowRoot.querySelector(".overlay")?.classList.remove("open"); }

  _deleteFromEditor(){ if (!this._editing) return; const { entity, blockId }=this._editing; if (!blockId) { this._closeEditor(); return; } this._deleteBlock(entity, blockId); this._closeEditor(); }

  _openNewEditor(entity){ this._editing = { entity, blockId: null }; const row = this._schedules[entity]; if (!row) return; const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to"); const overlay = this.shadowRoot.querySelector(".overlay"); const now = this._getNowMin(); const start = this._clamp(Math.round(now), 0, 1380); const end = this._clamp(start + 60, start + 15, 1440); if (edTemp) edTemp.value = String(row.defaultTemp ?? 20); if (edFrom) edFrom.value = this._toTimeInput(start); if (edTo)   edTo.value   = this._toTimeInput(end); const title = this.shadowRoot.querySelector('.modal h3'); if (title) title.textContent = this._t('ui.add_block'); const delBtn = this.shadowRoot.querySelector('.ed-delete'); if (delBtn) delBtn.style.display = 'none'; const err = this.shadowRoot.querySelector(".ed-error"); if (err) { err.style.display = "none"; err.textContent = ""; } overlay.classList.add('open');
    if (edTemp) edTemp.max = String(this._config?.max_temp ?? 25);
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

  async _saveEditor(){ const errElGlobal = this.shadowRoot?.querySelector('.ed-error'); try { if (!this._editing) return; const { entity, blockId } = this._editing; const row = this._schedules[entity]; if (!row) return; let b = null; if (blockId) b = row.blocks.find(x => x.id === blockId); const edTemp = this.shadowRoot.querySelector(".ed-temp"); const edFrom = this.shadowRoot.querySelector(".ed-from"); const edTo   = this.shadowRoot.querySelector(".ed-to");
    const rawFrom = String(edFrom.value || "");
    const rawTo = String(edTo.value || "");
    let start = this._fromTimeInput(rawFrom);
    let end = this._fromTimeInput(rawTo);
    // Treat end time 00:00 as end of day (24:00 -> 1440 minutes)
    if (rawTo === '00:00') end = 1440;
  let tempRaw = String(edTemp.value || "").replace(",", "."); let temp = parseFloat(tempRaw);
  if (isNaN(start)) start = 0; if (isNaN(end)) end = 60; if (isNaN(temp)) temp = row.defaultTemp || 20;
  const maxLimit = this._config?.max_temp ?? 25; if (Number.isFinite(maxLimit)) temp = Math.min(temp, maxLimit);
    start = this._clamp(Math.floor(start), 0, 1439); end   = this._clamp(Math.ceil(end),   1, 1440);
    if (end <= start) end = this._clamp(start + 15, start + 1, 1440);
    const others = (row.blocks || []).filter(x => !b || x.id !== b.id); const overlap = others.find(o => !(end <= o.startMin || start >= o.endMin)); if (overlap) { const overlapStart = Math.max(start, overlap.startMin); const overlapEnd = Math.min(end, overlap.endMin); const errEl = this.shadowRoot.querySelector('.ed-error'); if (errEl) { const msg = this._t('ui.overlap_msg').replace('{start}', this._label(overlapStart)).replace('{end}', this._label(overlapEnd)); const canFixStart = overlap.endMin < end; const canFixEnd = overlap.startMin > start; let actionLabel = this._t('ui.auto_fix'); let suggestedStart = null, suggestedEnd = null; if (canFixStart && (!canFixEnd || (end - overlap.endMin) <= (overlap.startMin - start))) { suggestedStart = overlap.endMin; actionLabel = this._t('ui.fix_start_to').replace('{time}', this._label(suggestedStart)); } else if (canFixEnd) { suggestedEnd = overlap.startMin; actionLabel = this._t('ui.fix_end_to').replace('{time}', this._label(suggestedEnd)); } errEl.innerHTML = `<div>${msg}</div>` + ((suggestedStart !== null || suggestedEnd !== null) ? `<div style="margin-top:8px; display:flex; gap:8px; justify-content:flex-end;"><button class="btn ghost ed-fix-cancel" type="button">${this._t('ui.cancel')}</button><button class="btn primary ed-fix-apply" type="button">${actionLabel}</button></div>` : `<div style=\"margin-top:8px; display:flex; gap:8px; justify-content:flex-end;\"><button class=\"btn ghost ed-fix-cancel\" type=\"button\">${this._t('ui.cancel')}</button></div>`); errEl.style.display = 'block'; const apply = errEl.querySelector('.ed-fix-apply'); const cancel = errEl.querySelector('.ed-fix-cancel'); if (cancel) cancel.addEventListener('click', () => { errEl.style.display='none'; errEl.textContent=''; }); if (apply) apply.addEventListener('click', () => { if (suggestedStart !== null) { edFrom.value = this._toTimeInput(suggestedStart); } else if (suggestedEnd !== null) { edTo.value = this._toTimeInput(suggestedEnd); } errEl.style.display='none'; errEl.textContent=''; setTimeout(() => { this._saveEditor(); }, 50); }); } return; } const before = this._desiredNowSnapshot(); if (!b) { const id = Math.random().toString(36).slice(2,9); b = { id, startMin: start, endMin: end, temp }; row.blocks.push(b); } else { b.temp = temp; b.startMin = start; b.endMin = end; } this._applyNoOverlapResize(entity, b, "left", b.startMin); this._applyNoOverlapResize(entity, b, "right", b.endMin); await this._saveStore(); this._render(); this._closeEditor(); if (this._config.apply_on_edit) await this._applyIfDesiredChanged(before); this._scheduleNextApply(); } catch (e) { console.error('[thermostat-timeline] _saveEditor error', e); if (errElGlobal) { errElGlobal.style.display = 'block'; errElGlobal.textContent = 'Fejl: ' + (e && e.message ? e.message : String(e)); } }}

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
      if (tempLab) tempLab.textContent = t('ui.temperature') + ' (°C)';
      // Buttons
      const del = this.shadowRoot && this.shadowRoot.querySelector('.ed-delete');
      if (del) del.textContent = t('ui.delete');
      const cancel = this.shadowRoot && this.shadowRoot.querySelector('.ed-cancel');
      if (cancel) cancel.textContent = t('ui.cancel');
      const save = this.shadowRoot && this.shadowRoot.querySelector('.ed-save');
      if (save) save.textContent = t('ui.save');
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
    } catch (e) { /* ignore */ }
  }

}
customElements.define("thermostat-timeline-card", ThermostatTimelineCard);

/* ----------------- CONFIG EDITOR ----------------- */
class ThermostatTimelineCardEditor extends HTMLElement {
  setConfig(config) { this._config = { ...ThermostatTimelineCard.getStubConfig(), ...(config||{}) }; this._render(); }
  set hass(hass) { this._hass = hass; this._lang = ttGetLangFromHass(hass); // Avoid clobbering inputs while user is typing
  const ae = this.shadowRoot && this.shadowRoot.activeElement;
  if (ae && (ae.classList?.contains("def") || ae.classList?.contains("rowh") || ae.classList?.contains("title"))) return;
  this._render(); this._applyEditorI18n(); }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._openCount = 0;
    this._pendingEmit = false;
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
            <div style="display:flex; gap:8px; align-items:center;">
              <ha-entity-picker class="storage" style="flex:1;" label="sensor.thermostat_timeline" include-domains='["sensor"]'></ha-entity-picker>
              <button type="button" class="remove-btn clear-store"><ha-icon icon="mdi:delete"></ha-icon><span>Clear storage</span></button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="label">Vælg termostat-entities</div>
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
      this._applyEditorI18n();
    });
  qs(".def")  ?.addEventListener("change", e => { let raw=String(e.target.value||"").replace(",","."); let v=Number(raw); const mx = Number(this._config?.max_temp ?? 25); v=isNaN(v)?20:Math.max(5,Math.min(mx,v)); this._upd("default_temp",v); qs(".def").value=String(v); });
    qs(".rowh") ?.addEventListener("change", e => { let v=Number(e.target.value); v=isNaN(v)?64:Math.max(40,Math.min(120,Math.round(v))); this._upd("row_height",v); qs(".rowh").value=String(v); });
    qs(".add-entity-btn")?.addEventListener("click", () => this._addEntity());
    qs(".auto")?.addEventListener("change", e => this._upd("auto_apply", e.target.checked));
    qs(".applyedit")?.addEventListener("change", e => this._upd("apply_on_edit", e.target.checked));
    qs(".applydef")?.addEventListener("change", e => this._upd("apply_on_default_change", e.target.checked));
  qs('.maxc')?.addEventListener('change', e => { let v=Number(e.target.value); v=isNaN(v)?25:Math.max(5,Math.min(50,Math.round(v))); this._upd('max_temp',v); const mx=this.shadowRoot.querySelector('.maxc'); if(mx) mx.value=String(v); });
    qs('.clear-store')?.addEventListener('click', async () => {
      const msg = this._t('editor.clear_store_confirm');
      if (!confirm(msg)) return;
      try {
        // Clear local store
        try { localStorage.removeItem('thermostat_timeline_store'); } catch {}
        // Clear global sensor store if enabled
        if (this._config.storage_enabled && this._hass && this._config.storage_entity) {
          await this._hass.callService('thermostat_timeline', 'set_store', { schedules: {} });
        }
        // Reset in-memory schedules and notify
        this._config = { ...this._config };
        this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config }, bubbles: true, composed: true }));
      } catch (e) { console.warn('clear-store failed', e); }
    });
  }

  connectedCallback(){ this._render(); }

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
    if (t)  t.value  = this._config.title ?? "";
  if (d && d !== this.shadowRoot.activeElement) d.value = String(this._config.default_temp ?? 20);
  if (mx && mx !== this.shadowRoot.activeElement) mx.value = String(this._config.max_temp ?? 25);
    if (rh && rh !== this.shadowRoot.activeElement) rh.value = String(this._config.row_height ?? 64);
    if (se) { se.hass = this._hass; se.value = this._config.storage_entity || ""; }
    if (seEn) {
      seEn.checked = !!this._config.storage_enabled;
      if (se) se.disabled = !seEn.checked;
    }
    this._applyEditorI18n();
    if (au) { au.checked = !!this._config.auto_apply; }
    if (aed){ aed.checked = !!this._config.apply_on_edit; }
    if (adf){ adf.checked = !!this._config.apply_on_default_change; }

    const wrap = this.shadowRoot.querySelector(".entities");
    if(!wrap) return;

    const want = (this._config.entities || []).length;
    while (wrap.children.length > want) wrap.removeChild(wrap.lastElementChild);
    while (wrap.children.length < want) wrap.append(this._makeEntityRow(wrap.children.length));

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

    const onMove = (ev)=>{
      const y = ev.clientY;
      ghost.style.top = (y - rect.height/2) + 'px';

      // find element under pointer within this shadowRoot
      let el = this.shadowRoot && this.shadowRoot.elementFromPoint(ev.clientX, ev.clientY);
      // climb to row in the same wrap
      while (el && el !== wrap && !el.classList?.contains('inline')) el = el.parentElement;
      if (!el || el===placeholder || el===wrap) return;
      const targetRect = el.getBoundingClientRect();
      const before = (ev.clientY - targetRect.top) < targetRect.height/2;
      if (before) wrap.insertBefore(placeholder, el);
      else wrap.insertBefore(placeholder, el.nextSibling);
    };

    const onUp = (ev)=>{
      window.removeEventListener('mousemove', onMove, true);
      window.removeEventListener('mouseup', onUp, true);
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
      this._emit(true);
    };

    window.addEventListener('mousemove', onMove, true);
    window.addEventListener('mouseup', onUp, true);
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
    const toggle = ()=>{ line.classList.toggle('open'); };
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
        linkWrap.append(linkPicker);
      } catch {}
    };

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

  // Pointer-driven drag & drop is disabled; use native DnD via handle only
  /* _startPointerDnd(line, idx){
    const wrap = line.parentElement;
    if (!wrap) return;
    if (this._pointerDndActive) return;
    this._pointerDndActive = true;

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

    const onMove = (ev)=>{
      const y = ev.clientY;
      ghost.style.top = (y - rect.height/2) + 'px';

      // find element under pointer within this shadowRoot
      let el = this.shadowRoot && this.shadowRoot.elementFromPoint(ev.clientX, ev.clientY);
      // climb to row in the same wrap
      while (el && el !== wrap && !el.classList?.contains('inline')) el = el.parentElement;
      if (!el || el===placeholder || el===wrap) return;
      const targetRect = el.getBoundingClientRect();
      const before = (ev.clientY - targetRect.top) < targetRect.height/2;
      if (before) wrap.insertBefore(placeholder, el);
      else wrap.insertBefore(placeholder, el.nextSibling);
    };

    const onUp = (ev)=>{
      window.removeEventListener('mousemove', onMove, true);
      window.removeEventListener('mouseup', onUp, true);
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
      this._emit(true);
    };

    window.addEventListener('mousemove', onMove, true);
    window.addEventListener('mouseup', onUp, true);
  } */

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
        if (clrBtn) clrBtn.textContent = t('editor.clear_store');
      }

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
      if (def) def.setAttribute('label', t('editor.default_c'));
      const rowh = root.querySelector('ha-textfield.rowh');
      if (rowh) rowh.setAttribute('label', t('editor.row_height_px'));
  const maxc = root.querySelector('ha-textfield.maxc');
  if (maxc) maxc.setAttribute('label', t('editor.max_c'));

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

    } catch(e){ /* ignore */ }
  }

}
customElements.define("thermostat-timeline-card-editor", ThermostatTimelineCardEditor);

// Registrér i “Custom cards”
window.customCards = window.customCards || [];
window.customCards.push({ type: "thermostat-timeline-card", name: "Thermostat Timeline Card", description: "24h tidslinje – transition-baseret set_temperature + smart replan & apply-on-change" });

function loadCard() {}
loadCard();
