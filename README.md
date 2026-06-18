# Playwright TypeScript UI tests

The project verifies REGON validation in the GUS (Statistics Poland) Internet
REGON Database search:

<https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx>

## Prerequisites

- Node.js 18 or newer

## Installation

```bash
npm install
npx playwright install chromium
```

## Running tests

```bash
npm test
```

The default target is the public GUS REGON search. To run against another
environment, set `BASE_URL`:

```powershell
$env:BASE_URL = "https://example.test/search"
npm test
```

Useful commands:

```bash
npm run test:headed
npm run test:ui
npm run report
```

## Test scenario

The test selects the REGON search option, enters the checksum-invalid
nine-digit number `123456789`, submits the form, and verifies the validation
message:

`Wprowadzony numer REGON jest nieprawidłowy.`
