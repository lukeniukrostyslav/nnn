# Life Commander — Product Architecture

## Product
Life Commander — Personal Life Operating System

## Architecture rule
The design phase is completed before functional implementation. The current repository contains the visual prototype and localization architecture. Functional data operations are intentionally deferred until design approval.

## Primary navigation

1. Today
2. Tasks
3. Calendar
4. Habits
5. Goals
6. Projects
7. Notes
8. Finances
9. Journal
10. Routines
11. Analytics
12. Settings

## Core dashboard

- Greeting / date
- Top priorities
- Today's schedule
- Habit progress
- Goal progress
- Active projects
- Personal finance snapshot
- Mood / energy
- Quick note
- Day completion

## Data architecture for later implementation

Local persistence layer:
- IndexedDB for structured data
- localStorage for lightweight preferences
- JSON export/import
- optional encrypted backup package in a later phase

Domain entities:
- Task
- CalendarEvent
- Habit
- HabitEntry
- Goal
- Project
- Note
- JournalEntry
- Routine
- FinanceTransaction
- Category
- UserPreference

Relations:
- Goals -> Projects
- Projects -> Tasks
- Tasks -> CalendarEvents
- Habits -> HabitEntries
- Routines -> Tasks/Habits
- FinanceTransactions -> Categories
- JournalEntries -> mood/energy metrics

## Localization architecture

Supported locales:
- en
- ru
- es
- de
- fr

Rules:
- Every user-visible string must use a localization key.
- No English fallback should be visible in a selected non-English locale.
- Dates, weekdays, month names and number formats must use locale-aware formatting.
- Pluralization must be locale-aware.
- Placeholder, tooltip, aria-label and empty-state strings must also be localized.
- Language switching must update the entire visible interface.
- Localization is part of the product architecture, not a final translation pass.

## Privacy model

- Local-first.
- No mandatory login.
- No mandatory server.
- No required third-party analytics.
- User data belongs to the user.
- Export/import is a first-class feature.

## Design-to-function rule

The prototype must first be reviewed visually by the owner. Only after approval should:
- persistence
- task CRUD
- calendar behavior
- habit tracking
- goals
- projects
- finance calculations
- backup/import
- responsive QA
- accessibility QA
be implemented.

## Release gates

Design approval -> functional implementation -> localization QA -> responsive QA -> data integrity QA -> offline QA -> packaging -> commercial QA.
