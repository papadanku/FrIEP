# FrIEP ("Free IEP") - Project Context

FrIEP is a toolkit designed for school psychologists to automate assessment scoring in Google Sheets and streamline the drafting of psychoeducational reports using AI-driven templates.

## Project Overview

The project consists of three primary components:
1.  **Google Apps Scripts (`google_apps_script/`)**: Automates the scoring and marking (e.g., adding significance asterisks) for various psychological assessments within Google Sheets.
2.  **Psychologist Assistant Skill (`.gemini/skills/psychologist-assistant/`)**: A specialized Gemini CLI skill that uses standardized blueprints and narrative templates to draft evaluation report sections.
3.  **Date Calculator (`date_calculator/`)**: A self-contained HTML/JS utility for calculating chronological age and other date-related durations.

## Components & Usage

### 1. Google Apps Scripts
-   **Purpose**: Automated marking and formatting of assessment data in Google Sheets.
-   **Key Files**:
    -   `core.gs`: Shared utility functions (e.g., `findAndReplace`) and spreadsheet triggers (`onOpen`, `onSpreadsheetChange`).
    -   `basc.gs`, `asrs.gs`, `conners.gs`, `eddt.gs`, `vnl.gs`: Assessment-specific logic and ranges.
-   **Setup**: Manual copy-paste of `.gs` files into the Google Apps Script editor.
-   **Execution**: Functions ending in `Main` are intended to be run as Macros.

### 2. Psychologist Assistant Skill
-   **Purpose**: AI-powered drafting of psychoeducational reports.
-   **Structure**:
    -   `references/blueprint/`: Standardized structure (E1-E7) for evaluation reports.
    -   `references/templates/`: Narrative templates for Cognitive, Achievement, Social-Emotional, and Adaptive assessments.
-   **Workflows**:
    -   **Evaluation Drafting**: Mapping data to the E1-E7 blueprint.
    -   **Score Interpretation**: Converting raw scores to narrative classifications (e.g., "Average", "At-Risk") using the `score-interpreter` subagent.
-   **Placeholders**: Uses `_firstname`, `_his/her`, `??` (for scores), and `[Classification]` (for ranges).

### 3. Date Calculator
-   **Purpose**: Offline-capable tool for calculating age and date arithmetic.
-   **Usage**: Open `date_calculator/date_calculator.html` in any modern web browser.
-   **Tech**: Single-file Vanilla JS, CSS3, and HTML5. No external dependencies.

## Development Conventions

### General
-   **Zero Dependencies**: All tools are designed to be portable and independent of external libraries/frameworks.
-   **Privacy**: All processing occurs locally (Date Calculator) or within the user's secure environments (Google/Gemini CLI).

### Google Apps Scripting
-   **API Efficiency**: Minimize calls to the Google Sheets API. Always read ranges into memory, process, and write back in a single `setValues()` call (see `core.gs`).
-   **Naming**: Entry point functions must end with `Main` (e.g., `bascMain`).
-   **Triggers**: Use `onOpen` to ensure consistent formatting (e.g., vertical alignment) across all sheets.

### Narrative Templates
-   **Placeholders**: Always adhere to the established placeholder naming convention:
    -   `_firstname`, `_lastname`, `_his/her`, `_he/she`, `_him/her`.
    -   `??` for numerical scores.
    -   `[Classification]` for descriptive ranges.
-   **Blueprint Alignment**: Follow the E1-E7 section headers exactly as defined in `references/blueprint/`.

## Key Files Summary
-   `GEMINI.md`: This context file.
-   `README.md`: High-level user-facing documentation.
-   `_config.yml`: GitHub Pages configuration (Cayman theme).
-   `.gemini/agents/score-interpreter.md`: Logic for the score interpretation subagent.
