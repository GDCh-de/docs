# Infrastruktur

```mermaid
graph TD;
  ZAM[<a href='/GDCh-de/docs/blob/main/ZAM.md'>ZAM</a>] --> Meta-Dok[<a href='/GDCh-de/docs/blob/main/Meta-Dok.md'>Meta-Dok</a>];
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0[<a href='/GDCh-de/docs/blob/main/Auth0.md'>Auth0</a>] --> App[<a href='/GDCh-de/docs/blob/main/App.md'>App</a>] --> Hygraph --> App;
  ZAM --> Sage[<a href='/GDCh-de/docs/blob/main/Sage.md'>Sage</a>] --> |Ausgangsrechnungen| DATEV[<a href='/GDCh-de/docs/blob/main/DATEV.md'>DATEV</a>];
  Ventari[<a href='/GDCh-de/docs/blob/main/Ventari.md'>Ventari</a>] --> Sage;
  Hygraph --> Cron[<a href='/GDCh-de/docs/blob/main/CRON.md'>CRON</a>] --> Hygraph;
  ZAM --> Hygraph;
  Hygraph --> OpenData[<a href='/GDCh-de/docs/blob/main/OpenData.md'>OpenData</a>] --> Website[<a href='/GDCh-de/docs/blob/main/Website.md'>Website</a>];
  NCh[<a href='/GDCh-de/docs/blob/main/NCh.md'>NCh</a>] --> |XML| Hygraph --> Brevo[<a href='/GDCh-de/docs/blob/main/Brevo.md'>Brevo</a>]
```

## Erklärungen

- **ZAM**: zentrales Adressmanagement der Firma Lauer und Karrenbauer
- **Meta-Dok**: Dokumentenmanagement, veraltet
- **Auth0**: Authentifizierung und Autorisierung
- **App**: interne Anwendung
- **Sage**: Buchhaltungssoftware
- **Ventari**: Auftragsmanagementsoftware
- **OpenData**: OpenData-Portal der GDCh
- **NCh**: Nachrichten-aus-der-Chemie-Importer (unser Mitgliedermagazin)
- **Brevo**: E-Mail-Marketing-Tool
- **CRON**: Cron-Job (Minijobs) für die automatische Verarbeitung von Daten
- **Website**: (noch) Website der GDCh

[Zurück](README.md)
