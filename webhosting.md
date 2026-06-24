# Webhosting-Infrastruktur

Verwaltete Hosting-Accounts ohne Root-Zugriff. Im Unterschied zu den [VPS/Root-Servern](servers.md) sind Systemkonfiguration und Betriebssystem durch den Anbieter verwaltet.

---

## netcup Webhosting

**Anbieter:** [netcup](https://www.netcup.de) · Kundennummer: **263220**

| Paket-ID      | Produkt                | Kosten/Monat | Nächste Abrechnung | Dienst      |
| ------------- | ---------------------- | ------------ | ------------------ | ----------- |
| Hosting242872 | Webhosting 4000 NUE iv | 8,10 €       | 17.06.2027         | JCF-Website |

### Hosting242872 — JCF-Website

- **Produkt:** Webhosting 4000 NUE iv
- **Beschreibung:** Webhosting für die JCF-Website unter [jcf.io](https://jcf.io).
- **Kein SSH-Zugang über die Server-SSH-Konfiguration.**

---

## Uberspace

**Anbieter:** [Uberspace](https://uberspace.de) · [Dashboard](https://dashboard.uberspace.de/meta)  
**SSH:** `ssh <user>@<user>.uber.space`

### Übersicht

| Benutzer   | Host           | Angelegt   | Speicher | Preis/Monat | Dienst                       |
| ---------- | -------------- | ---------- | -------- | ----------- | ---------------------------- |
| `analytic` | neso (U8)      | 2026-06-15 | 10 GB    | 6,00 €      | Matomo Analytics             |
| `f2chem`   | sinope (U8)    | —          | 10 GB    | 6,00 €      | AG Fluorchemie (f2chem.de)   |
| `gdch`     | shoemaker (U7) | 2019-04-03 | 10 GB    | 6,00 €      | Mitgliederstatistik          |
| `gdchgit`  | mueller (U7)   | 2020-11-25 | 10 GB    | 6,00 €      | Cron / Hygraph-Migrator      |
| `gdchlink` | prospero (U8)  | 2026-06-15 | 10 GB    | 6,00 €      | YOURLS-Kurzlinks (gdch.link) |
| `gdchuber` | libra (U7)     | 2024-02-19 | 10 GB    | 5,00 €      | Next.js Long-Running-API     |
| `jpodcast` | larissa (U8)   | 2026-06-15 | 20 GB    | 9,00 €      | WordPress-Podcast (JCF)      |
| `umfrage`  | prospero (U8)  | 2026-06-11 | 10 GB    | 6,00 €      | LimeSurvey                   |

**Gesamtkosten/Monat:** ca. **50,00 €**

### `analytic` — Matomo Analytics

- **Host:** neso (U8)
- **Angelegt:** 2026-06-15
- **Domains:** `analytics.gdch.app`, `analytic.uber.space`
- **Beschreibung:** Matomo-Instanz für Web-Analytics.
- **SSH:** `ssh analytic@analytic.uber.space`

---

### `f2chem` — AG Fluorchemie

- **Host:** sinope (U8)
- **Domains:** `f2chem.de`, `www.f2chem.de`, `f2chem.uber.space`
- **Beschreibung:** Website der Arbeitsgemeinschaft Fluorchemie unter [f2chem.de](https://f2chem.de).
- **Kontakt:** Frank Kemnitz von Heyden — [frank.kemnitz@vonheyden.de](mailto:frank.kemnitz@vonheyden.de)
- **SSH:** `ssh f2chem@f2chem.uber.space`

---

### `gdch` — Mitgliederstatistik

- **Host:** shoemaker (U7)
- **Angelegt:** 2019-04-03
- **Domains:** `statistik.gdch.app`, `wasserchemische-gesellschaft.de`, `wasserchemische-lehre.de`, `mta-sts.gdch.de`, `gdch.uber.space`
- **Beschreibung:** Mitgliederstatistik-Tool unter `statistik.gdch.app`. Hostet außerdem die Domains `wasserchemische-gesellschaft.de` und `wasserchemische-lehre.de`.
- **SSH:** `ssh gdch@gdch.uber.space`

---

### `gdchgit` — Cron / Hygraph-Migrator

- **Host:** mueller (U7)
- **Angelegt:** 2020-11-25
- **Domains:** `uber.gdch.app`, `mta-sts.ag-jlc.de`, `gdchgit.uber.space`
- **Beschreibung:** Läuft ein Cron-Daemon (`supervisorctl: cron`) sowie der Hygraph-Migrator. Unter `uber.gdch.app` werden Front-end-Skripte für gdch.de ausgeliefert.
- **SSH:** `ssh gdchgit@gdchgit.uber.space`

---

### `gdchlink` — YOURLS-Kurzlinks

- **Host:** prospero (U8)
- **Angelegt:** 2026-06-15
- **Domains:** `gdch.link`, `www.gdch.link`, `gdchlink.uber.space`
- **Beschreibung:** [YOURLS](https://yourls.org)-Kurzlink-Plattform für `gdch.link`.
- **SSH:** `ssh gdchlink@gdchlink.uber.space`

---

### `gdchuber` — Next.js Long-Running-API

- **Host:** libra (U7)
- **Angelegt:** 2024-02-19
- **Domains:** `uberapi.gdch.app`, `gdchuber.uber.space`
- **Beschreibung:** Verarbeitung von lang laufenden API-Requests in Next.js über `uberapi.gdch.app` (Uberspace als Laufzeitumgebung für zeitintensive Anfragen).
- **SSH:** `ssh gdchuber@gdchuber.uber.space`

---

### `jpodcast` — WordPress-Podcast (JCF)

- **Host:** larissa (U8)
- **Angelegt:** 2026-06-15
- **Domains:** `podcast.jcf.io`, `www.podcast.jcf.io`, `jpodcast.uber.space`
- **Beschreibung:** WordPress-Podcast-Instanz mit [Podlove](https://podlove.org) für den JCF-Podcast unter `podcast.jcf.io`.
- **Kontakt:** Christian Stemmle — [c.stemmle@jcf.io](mailto:c.stemmle@jcf.io)
- **SSH:** `ssh jpodcast@jpodcast.uber.space`

---

### `umfrage` — LimeSurvey

- **Host:** prospero (U8)
- **Angelegt:** 2026-06-11
- **Domains:** `umfrage.gdch.de`, `www.umfrage.gdch.de`, `umfrage.uber.space`
- **Beschreibung:** [LimeSurvey](https://www.limesurvey.org)-Instanz für Online-Umfragen unter `umfrage.gdch.de`.
- **SSH:** `ssh umfrage@umfrage.uber.space`

---

[Zurück](README.md)
