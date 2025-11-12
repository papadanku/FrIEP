# Project Overview: frIEP ("Free IEP")

frIEP is a collection of Google Apps Script files designed to automate data processing and score marking within Google Sheets for psychological assessments. The project aims to streamline the process of evaluating and highlighting clinically significant scores for various assessments.

It includes scripts tailored for:
*   ASRS (Adult ADHD Self-Report Scale)
*   BASC-3 (Behavior Assessment System for Children, Third Edition)
*   Conners 4 (Conners Fourth Edition)
*   Vineland 3 (Vineland Adaptive Behavior Scales, Third Edition)

The scripts provide functionalities to move data between specified ranges within Google Sheets and to highlight scores based on predefined clinical significance criteria using asterisks (e.g., `*`, `**`, `***`).

## Directory Overview

*   **`google_apps_script/`**: This directory contains the core Google Apps Script files (`.gs`) that implement the automation logic for each psychological assessment.
*   **`gemini/`**: This directory holds instructions and evaluation templates specifically designed for the Gemini CLI agent. These files guide the agent's understanding and interaction with this project, particularly for evaluation tasks.
*   **`_config.yml`**: A configuration file, likely used for GitHub Pages, indicating the project's documentation or website uses the Cayman theme.
*   **`LICENSE`**: Contains the licensing information for the frIEP project.
*   **`README.md`**: Provides a detailed human-readable overview of the project, including comprehensive installation and usage instructions for the Google Apps Scripts.

## Key Files in `google_apps_script/`

*   **`asrs.gs`**: Contains the Google Apps Script logic for processing and marking scores related to the ASRS assessment.
*   **`basc.gs`**: Contains the Google Apps Script logic for processing and marking scores related to the BASC-3 assessment.
*   **`conners.gs`**: Contains the Google Apps Script logic for processing and marking scores related to the Conners 4 assessment.
*   **`core.gs`**: This file likely contains shared utility functions or core functionalities utilized across multiple assessment scripts. (Note: The `README.md` mentions `shared.gs`, but `core.gs` is present in the directory listing, suggesting it serves a similar purpose for shared code.)
*   **`vnl.gs`**: Contains the Google Apps Script logic for processing and marking scores related to the Vineland 3 assessment.

## Usage

### For Google Apps Scripts (within Google Sheets)

The scripts in `google_apps_script/` are designed to be integrated directly into Google Sheets as Google Apps Script projects. There is no traditional installation; instead, you copy and paste the code into the Apps Script editor associated with your Google Sheet.

**General Steps:**
1.  Open your target Google Sheet.
2.  Navigate to `Extensions > Apps Script` to open the Apps Script editor.
3.  Create new `.gs` files in the editor (e.g., `asrs.gs`, `basc.gs`, `conners.gs`, `core.gs`, `vnl.gs`).
4.  Copy the content from the corresponding files in this repository into the newly created script files in the Apps Script editor.
5.  Save the Apps Script project.
6.  Select and run the desired main function (e.g., `asrsMain`, `bascMain`) from the dropdown in the Apps Script editor. Grant authorization if prompted.

**Customization:**
*   **Assessment-Specific Logic:** Modify `rangeArray` or `switch` statements within individual assessment scripts to adjust target cells or sheet names.
*   **Score Marking Criteria:** Adjust regular expressions and asterisk patterns within `findAndReplace` calls to change how scores are highlighted based on clinical significance.
*   **Shared Utilities:** The `core.gs` (or equivalent shared utility file) can be modified to change global text replacement behavior.

### For Gemini CLI Agent

This `GEMINI.md` file serves as a primary instructional context for the Gemini CLI agent. The agent should refer to this document to:
*   Understand the overall purpose and architecture of the frIEP project.
*   Identify the location and function of key code files, particularly within `google_apps_script/`.
*   Grasp the intended usage and customization points of the Google Apps Scripts.
*   Utilize the `gemini/evaluation_templates/` for specific tasks or to generate responses related to psychological assessment automation.

The agent's goal is to assist users in developing, maintaining, or extending the functionality of these Google Apps Scripts, or to provide insights based on the assessment logic contained within them.

## Instructions

@./gemini/instructions.md

## Knowledge

@./gemini/evaluation_templates/assessment_academic.md

@./gemini/evaluation_templates/assessment_adaptive.md

@./gemini/evaluation_templates/assessment_adhd.md

@./gemini/evaluation_templates/assessment_autism.md

@./gemini/evaluation_templates/assessment_cognitive.md

@./gemini/evaluation_templates/assessment_pwn.md

@./gemini/evaluation_templates/assessment_social_emotional.md

@./gemini/evaluation_templates/evaluation_summary.md
