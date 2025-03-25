# Infrastruktur

```mermaid
graph TD;
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0[<a href='/GDCh-de/docs/blob/main/Auth0.md'>Auth0</a>] --> WebsiteNG[<a href='/GDCh-de/docs/blob/main/WebsiteNG.md'>NG-Website</a>] --> Hygraph --> WebsiteNG;
  Odoo[<a href='/GDCh-de/docs/blob/main/Odoo.md'>Odoo</a>] --> |Ausgangsrechnungen| DATEV[<a href='/GDCh-de/docs/blob/main/DATEV.md'>DATEV</a>];
  Ventari[<a href='/GDCh-de/docs/blob/main/Ventari.md'>Ventari</a>] --> Odoo;
  Hygraph --> Cron[<a href='/GDCh-de/docs/blob/main/CRON.md'>CRON</a>] --> Hygraph;
  Hygraph --> OpenData[<a href='/GDCh-de/docs/blob/main/OpenData.md'>OpenData</a>]
  NCh[<a href='/GDCh-de/docs/blob/main/NCh.md'>NCh</a>] --> |XML| Hygraph --> Brevo[<a href='/GDCh-de/docs/blob/main/Brevo.md'>Brevo</a>]
```

## Änderungen Website

- **WebsiteNG**: neue Website der GDCh basierend auf Next.js

Für die Funktionalität der aktuellen Website und der App zusammen, macht bestimmte Funktionen der Open-Data-Plattform überflüssig.

## Änderungen Odoo

- **Odoo**: ERP-System der GDCh

Odoo als ERP-System ersetzt Meta-Dok, ZAM und Sage.

- ~~**ZAM**: zentrales Adressmanagement der Firma Lauer und Karrenbauer~~
- ~~**Meta-Dok**: Dokumentenmanagement, veraltet~~
- **Auth0**: Authentifizierung und Autorisierung
- ~~**App**: interne Anwendung~~
- ~~**Sage**: Buchhaltungssoftware~~
- **Ventari**: Auftragsmanagementsoftware
- **OpenData**: OpenData-Portal der GDCh
- **NCh**: Nachrichten-aus-der-Chemie-Importer (unser Mitgliedermagazin)
- **Brevo**: E-Mail-Marketing-Tool
- **CRON**: Cron-Job (Minijobs) für die automatische Verarbeitung von Daten
- ~~**Website**: (noch) Website der GDCh~~

[Zurück](README.md)
