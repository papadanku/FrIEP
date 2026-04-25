# FrIEP ("Free IEP")

FrIEP is a comprehensive collection of tools designed to assist school psychologists in streamlining their workflow. It automates the tedious process of scoring psychological assessments within Google Sheets and facilitates the drafting of narrative psychoeducational evaluation reports.

## Components

### 1. Google Apps Scripts (`google_apps_script/`)

A suite of scripts for Google Sheets that automate the scoring and marking of various psychological assessments based on clinical significance rules.

* **Supported Assessments:** ASRS, BASC-3, Conners 4, EDDT, and Vineland 3.
* **Key Feature:** Automatically marks scores (e.g., with asterisks) based on predefined thresholds using efficient batch processing to minimize API calls.

### 2. Psychologist Assistant Skill (`.gemini/skills/psychologist-assistant/`)

A specialized skill for the Gemini CLI that helps draft psychoeducational evaluations and interpret assessment data.

* **Functionality**:
    * **Evaluation Blueprint**: Follows a standardized E1-E7 structure (Coversheet to Eligibility) to ensure comprehensive report drafting.
    * **Score Interpretation**: Includes a specialized `score-interpreter` subagent that converts raw scores into professional narrative interpretations.
* **Templates**: Support for Cognitive (WISC-V, KABC-II, WJ-IV, CTONI-2), Achievement (WJ-IV, YCAT-2), Social-Emotional (BASC-3, EDDT), ADHD/Autism (Conners 4, ASRS), and Adaptive (Vineland 3) assessments.

### 3. Date Calculator (`date_calculator/`)

A lightweight, self-contained single-page HTML application for performing common date calculations without an internet connection.

* **Capabilities:** Calculate duration between dates (e.g., chronological age) and perform date arithmetic (adding/subtracting days, weeks, months, or years).

## Getting Started

### Google Apps Scripts

Copy the code from the `.gs` files in the `google_apps_script/` directory into your Google Sheet's Apps Script editor. Refer to the [Google Apps Script README](google_apps_script/README.md) for detailed setup and customization instructions.

### Psychologist Assistant Skill

This skill is used within the Gemini CLI environment. It leverages LLM capabilities to parse data and map it to the evaluation blueprint and assessment templates. See the [Skill Documentation](.gemini/skills/psychologist-assistant/SKILL.md) for usage details.

### Date Calculator

Simply open `date_calculator/date_calculator.html` in any modern web browser. It is entirely self-contained (HTML/CSS/JS in one file) with zero external dependencies, making it ideal for offline use.

## Philosophy

* **Zero External Dependencies:** All tools are designed to be lightweight, portable, and independent of external libraries or frameworks.
* **Privacy-First:** Data processing happens locally or within your own secure Google/CLI environment.
* **Professional Standards:** Narrative templates and scoring rules are based on established clinical practices and classification tables.
