# Infrastruktur

```mermaid
graph TD;
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0 --> App[<a href='https://gdch.app'>gdch.app</a>] --> Hygraph --> App;
  ZAM --> Meta-Dok;
  ZAM --> Sage --> DATEV;
  Ventari --> Sage;
  Hygraph --> Cron --> Hygraph;
  ZAM --> Hygraph;
  Hygraph --> OpenData --> Website[<a href='https://gdch.de'>Website</a>];
  NCh --> Hygraph --> Brevo
```

## Überschrift

Erklärung

[Zurück](README.md)
