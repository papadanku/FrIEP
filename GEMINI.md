# Project Overview: FrIEP ("Free IEP")

FrIEP is a comprehensive collection of tools designed to assist school psychologists in streamlining their workflow. It automates the tedious process of scoring psychological assessments within Google Sheets and facilitates the drafting of narrative evaluation reports.

## Components Overview

The FrIEP project comprises three main components, each addressing a specific aspect of a school psychologist's tasks:

### 1. Google Apps Scripts (`google_apps_script/`)

This directory contains a suite of Google Apps Scripts designed for integration with Google Sheets. Their primary function is to automate the scoring and marking of various psychological assessments based on predefined clinical significance rules.

*   **Purpose:** To automatically process raw scores for assessments like ASRS, BASC-3, Conners 4, EDDT, and Vineland 3, applying clinical significance markings directly within Google Sheets.
*   **Key Functionality:**
    *   **Automated Scoring:** Scripts read assessment data from specified cell ranges and apply rules to mark scores (e.g., with asterisks for significant findings).
    *   **Shared Utilities:** The `core.gs` file provides common functions like `findAndReplace` which applies marking rules to cell ranges efficiently.
    *   **Spreadsheet Event Handling:** Includes `onOpen` and `onSpreadsheetChange` functions to automatically format cells (e.g., setting vertical alignment) when a spreadsheet is opened or modified.
*   **Usage:** These scripts are intended to be copied and pasted into the Google Apps Script editor associated with a Google Sheet. They can then be run as macros to process assessment data. Customization options are available for adjusting target cells and score marking rules directly within the `.gs` files.

### 2. Psychologist Writer Skill (`.agents/skills/psychologist-writer/`)

This component is a specialized skill for the Gemini CLI agent, designed to generate narrative sections for psychoeducational reports. It leverages a collection of Markdown templates to produce consistent and standardized report content.

*   **Purpose:** To assist in drafting psychoeducational report narratives by populating predefined templates with student-specific data and score classifications, ensuring consistency and adherence to reporting standards.
*   **Key Functionality:**
    *   **Data Ingestion:** Processes unstructured input (student name, rater names, scores) to structure variables for template population.
    *   **Template Selection:** Utilizes Markdown templates (e.g., `assessment_academic.md`, `assessment_adhd.md`) stored in `assets/templates/` to generate report sections.
    *   **Score Classification:** Interprets numeric scores (Standard Scores, T-Scores, Percentile Ranks) and converts them into descriptive categories (e.g., "Average," "Clinically Significant") based on embedded classification tables within the templates.
    *   **Narrative Generation:** Substitutes placeholder variables (e.g., `_firstname`, `SS: ??`) in templates with actual data and classifications, formatting the output as a coherent narrative.
*   **Available Templates:** A variety of templates cover different assessment areas, such as academic, adaptive, ADHD, autism, cognitive, and social-emotional assessments, as well as general evaluation summaries.
*   **Usage:** Intended to be activated and used via the Gemini CLI, where users provide student data and specify the desired template to generate report sections.

### 3. Date Calculator (`date_calculator/`)

A lightweight, self-contained single-page HTML application designed for performing common date calculations.

*   **Purpose:** To provide a fast and reliable way to calculate the duration between two dates or to find a future or past date by adding/subtracting a specified duration, without requiring external software or an internet connection.
*   **Key Functionality:**
    *   **Duration Calculator Mode:** Determines the exact period (years, months, days) between a start and end date.
    *   **Date Arithmetic Mode:** Calculates a new date by adding or subtracting a specified amount of time (days, weeks, months, years) from a base date.
    *   **User-Friendly Interface:** Features "Set Today" buttons, client-side validation, and a responsive design.
*   **Technology Stack:** Built using HTML5 for structure, CSS3 for styling (all self-contained), and Vanilla JavaScript (ES6+) for all logic and DOM manipulation. No external libraries or frameworks are used.
*   **Usage:** Can be used offline by simply opening the `date_calculator.html` file in any modern web browser.

## Building and Running

### Google Apps Scripts

1.  **Open Google Sheet:** Open the desired Google Sheet in your web browser.
2.  **Access Apps Script:** Go to `Extensions > Apps Script` from the Google Sheet menu.
3.  **Create New Script Files:** For each `.gs` file in the `google_apps_script/` directory, create a new script file in the Apps Script editor (e.g., `asrs.gs`, `core.gs`).
4.  **Copy Code:** Copy the code from the corresponding `.gs` file in this repository and paste it into the newly created script file in the Apps Script editor.
5.  **Run as Macros:** In your Google Sheet, go to `Extensions > Macros > Import Macro` and add the functions ending with "Main" (e.g., `asrsMain`, `eddtMain`, `bascMain`). These can then be run directly from the Macros menu.

### Psychologist Writer Skill

This is a Gemini CLI skill. No explicit "build" step is required.

1.  **Activate Skill:** The skill is activated within the Gemini CLI environment.
2.  **Generate Reports:** Provide student data and specify the desired template to the Gemini CLI agent. The agent will use the skill to generate the narrative sections of the psychoeducational report. Refer to the `SKILL.md` for detailed usage instructions and placeholder variables.

### Date Calculator

No build step is required.

1.  **Open in Browser:** Simply open the `date_calculator/date_calculator.html` file in any modern web browser. The application is entirely self-contained within this single HTML file.

## Development Conventions

### Google Apps Scripts

*   **Code Structure:** Scripts are organized by assessment type (e.g., `asrs.gs`, `basc.gs`) with `core.gs` containing shared utility functions.
*   **Customization:**
    *   **Target Cells:** Edit `getRange()` calls within individual assessment scripts (e.g., `'B18:E33'`) to modify the cell ranges processed.
    *   **Scoring Rules:** The `rules` array in each script defines score ranges (`min`, `max`) and suffixes (e.g., `*`, `**`) for marking. These can be adjusted to match specific criteria.
    *   **Shared Functions:** Changes to the `findAndReplace` function (in `core.gs`) will affect how text is replaced across all other scripts.

### Psychologist Writer Skill

*   **Template Format:** Report narratives are defined in Markdown files (`.md`) located in `assets/templates/`.
*   **Placeholders:** Templates utilize specific placeholder variables (e.g., `_firstname`, `SS: ??`, `??`) which are dynamically replaced by the Gemini CLI agent with student data and score classifications. Adhering to this placeholder convention is crucial for proper narrative generation.

### Date Calculator

*   **Self-Contained:** All HTML, CSS, and JavaScript are embedded within `date_calculator.html`, making it a highly portable and dependency-free tool.
*   **Vanilla JavaScript:** The application relies solely on vanilla JavaScript (ES6+) for its logic, avoiding external libraries or frameworks for simplicity and performance.
*   **Responsive Design:** CSS is used to ensure a consistent and user-friendly experience across various device sizes.