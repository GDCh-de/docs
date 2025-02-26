# Infrastruktur

```mermaid
graph TD;
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0 --> App[<a href='https://gdch.app'>gdch.app</a>] --> Hygraph --> App;
  ZAM --> Meta-Dok;
  ZAM --> Sage --> DATEV[<a href='/GDCh-de/docs/blob/main/DATEV.md'>DATEV</a>];
  Ventari --> Sage;
  Hygraph --> Cron[<a href='/GDCh-de/docs/blob/main/CRON.md'>CRON</a>] --> Hygraph;
  ZAM --> Hygraph;
  Hygraph --> OpenData --> Website[<a href='https://www.gdch.de'>Website</a>];
  NCh[<a href='[https://www.gdch.de/publikationen/nachrichten-aus-der-chemie.html'>NCh</a>] --> Hygraph --> Brevo[<a href='/GDCh-de/docs/blob/main/Brevo.md'>Brevo</a>]
```

## Überschrift

Erklärung

[Zurück](README.md)
