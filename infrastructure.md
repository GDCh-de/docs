# Infrastruktur

```mermaid
graph TD;
  Hygraph[<a href='/GDCh-de/docs/blob/main/hygraph.md'>Hygraph</a>] --> Auth0[<a href='/GDCh-de/docs/blob/main/Auth0.md'>Auth0</a>] --> App[<a href='/GDCh-de/docs/blob/main/App.md'>App</a>] --> Hygraph --> App;
  ZAM[<a href='/GDCh-de/docs/blob/main/ZAM.md'>ZAM</a>] --> Meta-Dok[<a href='/GDCh-de/docs/blob/main/Meta-Dok.md'>Meta-Dok</a>];
  ZAM --> Sage[<a href='/GDCh-de/docs/blob/main/Sage.md'>Sage</a>] --> |Rechnungen aus Appbox| DATEV[<a href='/GDCh-de/docs/blob/main/DATEV.md'>DATEV</a>];
  Ventari[<a href='/GDCh-de/docs/blob/main/Ventari.md'>Ventari</a>] --> Sage;
  Hygraph --> Cron[<a href='/GDCh-de/docs/blob/main/CRON.md'>CRON</a>] --> Hygraph;
  ZAM --> Hygraph;
  Hygraph --> OpenData[<a href='/GDCh-de/docs/blob/main/OpenData.md'>OpenData</a>] --> Website[<a href='/GDCh-de/docs/blob/main/Website.md'>Website</a>];
  NCh[<a href='/GDCh-de/docs/blob/main/NCh.md'>NCh</a>] --> |XML| Hygraph --> Brevo[<a href='/GDCh-de/docs/blob/main/Brevo.md'>Brevo</a>]
```

## Überschrift

Erklärung

[Zurück](README.md)
