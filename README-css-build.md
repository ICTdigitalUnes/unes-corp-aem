# Comandi CSS/SCSS nel progetto

Nel progetto sono stati implementati script npm per la gestione automatica della compilazione SCSS e della minificazione CSS, definiti nel file `package.json`.

## Comandi disponibili

### 1. Build sviluppo (dev)
Compila tutti i file `.scss` in `.css` nella rispettiva cartella dei blocchi per lo sviluppo.

```sh
npm run build dev
```
Alias di:
```sh
npm run build:scss
```

- Utilizza `sass` per convertire SCSS in CSS.
- Esempio: `blocks/test/test.scss` → `blocks/test/test.css`

### 2. Watch (osserva SCSS)
Ricompila automaticamente i CSS ogni volta che modifichi uno SCSS.

```sh
npm run watch
```
Alias di:
```sh
npm run watch:scss
```

- Utile in fase di sviluppo: ogni salvataggio di uno SCSS aggiorna il CSS corrispondente.

### 3. Build produzione (prod)
Compila e minifica tutti i CSS per la produzione.

```sh
npm run build prod
```
Alias di:
```sh
npm run minify:css
```

- Utilizza `sass --style=compressed` o strumenti simili per ridurre la dimensione dei file CSS.
- Esempio: `blocks/test/test.css` → CSS minificato.
## Personalizzazione

- Puoi aggiungere altri comandi o concatenare azioni (es: lint, test, deploy) modificando liberamente il file `package.json`.
- Esempio: puoi creare un comando che prima compila SCSS e poi lancia i test, oppure aggiungere step di pulizia, copia file, ecc.


## Note
- I comandi funzionano su tutti i blocchi che hanno file SCSS.
- Assicurati di avere installato le dipendenze (`npm install`) prima di usare questi comandi.
- Puoi personalizzare i comandi nel file `package.json` secondo le esigenze del progetto.

---

Per ulteriori dettagli consulta il file `package.json` o chiedi al team di sviluppo.
