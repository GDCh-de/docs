# Infrastruktur

```mermaid
graph TD;
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0[<a href='/GDCh-de/docs/blob/main/Auth0.md'>Auth0</a>] --> App[<a href='https://gdch.app'>App</a>] --> Hygraph --> App;
  ZAM[<a href='/GDCh-de/docs/blob/main/ZAM.md'>ZAM</a>] --> Meta-Dok;
  ZAM --> Sage[<a href='/GDCh-de/docs/blob/main/Sage.md'>Sage</a>] --> DATEV[<a href='/GDCh-de/docs/blob/main/DATEV.md'>DATEV</a>];
  Ventari[<a href='/GDCh-de/docs/blob/main/Ventari.md'>Ventari</a>] --> Sage;
  Hygraph --> Cron[<a href='/GDCh-de/docs/blob/main/CRON.md'>CRON</a>] --> Hygraph;
  ZAM --> Hygraph;
  Hygraph --> OpenData --> Website[<a href='https://www.gdch.de'>Website</a>];
  NCh[<a href='/GDCh-de/docs/blob/main/NCh.md'>NCh</a>] --> Hygraph --> Brevo[<a href='https://developers.brevo.com/docs/getting-started'>Brevo</a>]
```

## Überschrift

Erklärung

[Zurück](README.md)
