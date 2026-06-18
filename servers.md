# Server-Infrastruktur (netcup)

**Anbieter:** [netcup](https://www.netcup.de) · Kundennummer: **263220**  
**Standort:** Nürnberg  
**Primärer User:** `max`  
**SSH-Port (alle Server):** `58963`

## Server-Übersicht

| Hostname          | Alias       | Produkt                | Server-ID            | Kosten/Monat | Nächste Abrechnung | Dienst            |
| ----------------- | ----------- | ---------------------- | -------------------- | ------------ | ------------------ | ----------------- |
| `api.gdch.de`     | `api`       | VPS 1000 G11 12M       | v2202501251170310079 | 8,10 €       | 22.06.2026         | Go-API            |
| `c3.gdch.app`     | `primary`   | RS 4000 G12 ip 12M NUE | v2202603251170440703 | 43,81 €      | 12.03.2027         | Strapi (Primär)   |
| `c2.gdch.app`     | `secondary` | VPS 1000 G12 12M NUE   | v2202601251170427384 | 11,41 €      | 20.01.2027         | Strapi (Sekundär) |
| `s1.gdch.app`     | `staging`   | VPS 1000 G12 12M NUE   | v2202601251170427782 | 11,41 €      | 22.01.2027         | Strapi (Staging)  |
| `access.gdch.app` | `access`    | VPS 500 G12 12M        | v2202602251170432790 | 5,66 €       | 10.02.2027         | E-Paper-Zugang    |
| `cloud.gdch.app`  | `cloud`     | VPS 500 G12 12M NUE    | v2202606251170469328 | 6,81 €       | 11.06.2027         | Nextcloud         |

**Gesamtkosten/Monat:** ca. **87,20 €**

---

## Server-Details

### `api.gdch.de` — Go-API

- **Alias:** `api`
- **Produkt:** VPS 1000 G11 12M (VPS x86)
- **Server-ID:** `v2202501251170310079`
- **Beschreibung:** Go-API für Article- und Event-Kontext für KI. Proof of Concept – wird voraussichtlich durch das [Strapi MCP](Strapi.md) abgelöst.
- **SSH:** `ssh api` / `ssh -p 58963 max@api.gdch.de`

---

### `c3.gdch.app` — Strapi Primär

- **Alias:** `primary`
- **Produkt:** RS 4000 G12 ip 12M NUE (Root Server)
- **Server-ID:** `v2202603251170440703`
- **Beschreibung:** Primärer [Strapi](Strapi.md)-Produktionsserver.
- **Repository:** [GDCh-de/cms](https://github.com/GDCh-de/cms)
- **SSH:** `ssh primary` / `ssh -p 58963 max@c3.gdch.app`

---

### `c2.gdch.app` — Strapi Sekundär

- **Alias:** `secondary`
- **Produkt:** VPS 1000 G12 12M NUE (VPS x86)
- **Server-ID:** `v2202601251170427384`
- **Beschreibung:** Sekundärer [Strapi](Strapi.md)-Produktionsserver.
- **Repository:** [GDCh-de/cms](https://github.com/GDCh-de/cms)
- **SSH:** `ssh secondary` / `ssh -p 58963 max@c2.gdch.app`

---

### `s1.gdch.app` — Strapi Staging

- **Alias:** `staging`
- **Produkt:** VPS 1000 G12 12M NUE (VPS x86)
- **Server-ID:** `v2202601251170427782`
- **Beschreibung:** Staging-Umgebung für [Strapi](Strapi.md).
- **SSH:** `ssh staging` / `ssh -p 58963 max@s1.gdch.app`

---

### `access.gdch.app` — E-Paper-Zugang

- **Alias:** `access`
- **Produkt:** VPS 500 G12 12M (VPS x86)
- **Server-ID:** `v2202602251170432790`
- **Beschreibung:** Access-Server für GDCh-Mitglieder zum Zugriff auf E-Paper-Ausgaben des Mitgliedermagazins [_Nachrichten aus der Chemie_](NCh.md).
- **SSH:** `ssh access` / `ssh -p 58963 max@access.gdch.app`

---

### `cloud.gdch.app` — Nextcloud

- **Alias:** `cloud`
- **Produkt:** VPS 500 G12 12M NUE (VPS x86)
- **Server-ID:** `v2202606251170469328`
- **Beschreibung:** Nextcloud-Instanz für interne Dateiablage und Zusammenarbeit.
- **SSH:** `ssh cloud` / `ssh -p 58963 max@cloud.gdch.app`

---

## SSH-Konfiguration (`~/.ssh/config`)

```ssh-config
Host api.gdch.de api
    HostName api.gdch.de
    Port 58963

Host c3.gdch.app primary
    HostName c3.gdch.app
    Port 58963

Host c2.gdch.app secondary
    HostName c2.gdch.app
    Port 58963

Host s1.gdch.app staging
    HostName s1.gdch.app
    Port 58963

Host access.gdch.app access
    HostName access.gdch.app
    Port 58963

Host cloud.gdch.app cloud
    HostName cloud.gdch.app
    Port 58963
```

[Zurück](README.md)
