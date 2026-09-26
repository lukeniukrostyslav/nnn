# Life Commander

Personal Life Operating System — local-first web application.

## Current phase

Functional implementation + total release QA. The repository is past the visual-prototype stage.

Current QA focus:
- functional / UX flows
- data integrity and entity relations
- local persistence and recovery
- localization
- responsive behavior
- accessibility and predictable interactions
- production deployment verification

Commercial packaging and sales work remain intentionally blocked until release QA is complete.

## Languages

English, Russian, Spanish, German, French.

Visible interface strings are localized through the application dictionaries and locale-specific UI helpers in `index.html`.

## Product model

Local-first and offline-capable. No mandatory server, account, subscription or paid API.

User data is stored locally in the browser and can be exported/imported as a JSON backup.

## Main product areas

Today, Tasks, Calendar, Habits, Goals, Projects, Notes, Finances, Journal, Routines, Analytics and Settings.

## Research

- `docs/MARKET_RESEARCH.md`
- `docs/PRICING.md`
- `docs/PRODUCT_ARCHITECTURE.md`

## Release QA status

- B00–B13: 100% (baseline frozen).
- B14.16–B14.20: static QA complete; production/browser verification remains part of B15.
- B15: in progress; production verification is blocked until the latest Git commit is deployed.
- Latest QA commit: `700f4e1477941228f20000dd50dba5d7382fea29`.
- Production deployment currently observed: `4aa9d35b8fd60ccc950bb20cb9df76d7368e8a3c`.
- Commercial packaging remains blocked until B15 release gate passes.

## Release gate

Design -> functional implementation -> localization QA -> responsive QA -> data integrity QA -> offline/persistence QA -> production verification -> commercial packaging.
