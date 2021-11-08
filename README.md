# NVE-Design-Tokens

Design tokens for digitale løsninger fra NVE

## Oppdatere verdier

### Style dictionary

Design systemet benytter seg av style dictionary [](https://sass-lang.com/guide) for å bevare en sannhet for alle verdier. Ved å kjøre `style-dictionary build` i hovedmappen oppdateres variablene i css arket men endringene publiseres ikke. Dette gjøres manuelt i etterkant.

### SASS loader

For å oppdatere stilarket med riktige variabler kjøres `sass src/nveDesignSystem/index.scss src/nveDesignSystem/styles.css` i mappen `dsdev`. Dette generer nytt stilark.
