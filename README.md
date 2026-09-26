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

## Release gate

Design -> functional implementation -> localization QA -> responsive QA -> data integrity QA -> offline/persistence QA -> production verification -> commercial packaging.
