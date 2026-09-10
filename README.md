# Tshepo Marvin Sekobile | Portfolio

## Overview

This responsive portfolio presents Tshepo Marvin Sekobile's background, skills, projects, and contact details. It is a static HTML and CSS website designed to demonstrate semantic structure, responsive layouts, accessible form controls, and practical front-end styling.

## Issues Found

The starter code contained incomplete styling, incorrect or inconsistent markup, excessive page spacing, missing image placement, weak mobile behavior, duplicate CSS declarations, low-contrast text, a misspelled Projects section class, and form fieldsets without legends. Navigation links also did not initially jump directly to the Skills table.

## Fixes Implemented

- Built a two-column index hero with a responsive portrait image.
- Removed unnecessary full-height spacing from inner pages and added a sticky footer layout.
- Added project and contact imagery with responsive sizing and blended presentation.
- Corrected navigation targets, responsive breakpoints, table zebra striping, and text contrast.
- Added form legends, labels, required validation, radio choices, a select menu, and a message textarea.
- Removed duplicate CSS rules and corrected the `seection` typo.

## HTML Structure

Each page uses `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `form`, `fieldset`, and `footer` elements according to purpose. The About page contains the profile and Skills table; Projects uses semantic project articles; Contact uses labeled fieldsets; and the index contains the hero and calls to action.

## CSS Approach

`styles.css` uses custom properties for colors, spacing-related values, borders, and radii. CSS Grid controls hero, About, Projects, and Contact layouts; Flexbox handles navigation, buttons, cards, and footer content. Reusable selectors style buttons, cards, forms, tables, images, hover states, and the `@media (max-width: 760px)` responsive layout.

## Accessibility

Images have descriptive `alt` text. Form controls have associated labels, required validation, helpful input types, and visually hidden legends for fieldsets. Semantic landmarks improve navigation, table headings identify columns, and color contrast was improved for muted text.

## View Locally

Open `index.html` directly in a browser, or run a local server from the project folder:

## Screenshots

Available page captures are stored in [`screenshot`](screenshot/):

- [Home](screenshots/homepage-before.png)
- [Home](screenshots/homepage-after.png)
- [About and Skills](screenshots/about-before.png)
- [Contact and form](screenshot/form-before.png)
- [Projects](screenshot/projects-before.png)

The Contact capture documents the form, the About capture documents the Skills table, and the page captures provide navigation/page-state evidence. Hover states are implemented in CSS through selectors such as `.nav-link:hover`, `.btn-primary:hover`, and `.project-card:hover`. The supplied captures also provide a before/after reference against the starter layout.

## Reflection

The main challenge was tracing shared CSS behavior across four pages while preserving the intended design. I solved this by locating the owning selectors, making small scoped changes, checking HTML/CSS diagnostics after edits, and using `git diff --check` to catch formatting issues. Semantic replacements and reusable CSS rules reduced duplication while keeping the pages consistent.
