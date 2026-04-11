---
name: psychologist-writer
description: Generates psychoeducational report narratives. Accepts student data (name, rater names, scores) to populate templates from assessment_academic, assessment_adaptive, assessment_adhd, assessment_autism, assessment_cognitive, assessment_pwn, evaluation_summary, assessment_social_emotional, and assessment_social_emotional. Use for drafting report sections, classifying scores (SS, T-Scores, PR), and applying specific intervention recommendations.
---

# Psychologist Writer

## Overview
This skill assists in generating psychoeducational report narratives by populating predefined templates with student-specific data and score classifications. It ensures consistency and adherence to reporting standards.

## Usage

The primary function of this skill is to receive student data and generate a formatted section of a psychoeducational evaluation report.

### Data Ingestion & Structuring
Provide unstructured input (e.g., a list of scores, rater names, or text). The skill will parse this to identify and structure the following variables:
*   Student Name: `_firstname`
*   Rater Names: `_rater1`, `_rater2`, `_rater3`
*   Assessment Scores: Standard Scores (SS), T-Scores, Percentile Ranks (PR)

### Template Selection
Specify the desired assessment template. These templates are stored in the `assets/templates/` directory. You can list available templates by inspecting the `assets/templates` directory.

### Score Classification
The templates contain embedded score classification tables (e.g., SS ranges for WJ-IV, T-Score ranges for BASC-3). The skill will use these to convert numeric scores into corresponding descriptive categories (e.g., "95" becomes "Average," "70" becomes "Clinically Significant").

### Narrative Generation
The skill will substitute all placeholder variables in the selected template (`_firstname`, `_rater1`, `??`, `SS: ??`, `T-Score = ??`) with the actual, corresponding student data and descriptive classifications.

## Templates Available

The following templates are available in `assets/templates/`:
*   `assessment_academic.md` (Woodcock-Johnson IV Tests of Achievement)
*   `assessment_adaptive.md` (Vineland Adaptive Behavior Scales)
*   `assessment_adhd.md` (Conners Fourth Edition)
*   `assessment_autism.md` (Autism Spectrum Rating Scales)
*   `assessment_cognitive.md` (Cross-Battery Assessment, KABC-II NU)
*   `assessment_pwn.md` (Prior Written Notice Templates)
*   `assessment_social_emotional.md` (Behavior Assessment System for Children)
*   `evaluation_summary.md` (Testing Environment Templates, Summary, Educational Implications, Recommendations)

## Placeholder Variables

The templates use the following placeholder variables:
*   `_firstname`: Student's first name.
*   `_rater1`, `_rater2`, `_rater3`: Names of the raters (e.g., mother, general education teacher, special education teacher).
*   `??`: Generic placeholder for information to be filled in (e.g., descriptive range, specific details).
*   `SS: ??`: Placeholder for Standard Score and its descriptive range.
*   `T-Score = ??`: Placeholder for T-Score and its descriptive range.

## Output Format

The final output will strictly adhere to the following:
1.  Start with the template's markdown heading (e.g., `## Template: Woodcock-Johnson 4 Tests of Achievement`).
2.  The output will be the completed narrative text only.
3.  The student's name (`_firstname`) will be bolded every time it appears.
4.  All numeric scores (SS, T-Score, PR) within the text will be bolded (e.g., (SS: **95**)).
5.  No placeholder variables will be left in the final output.
6.  If generating a section with recommendations, intervention suggestions will be formatted as a bulleted list.

## Example Usage

To generate a narrative for a Woodcock-Johnson 4 Tests of Achievement report for "John Doe" with a Basic Reading Skills Standard Score of 95 (Average):

```
User: Generate a Woodcock-Johnson 4 report for John Doe. Basic Reading Skills SS: 95.
```
The skill would then retrieve the `assessment_academic.md` template, replace `_firstname` with "John Doe", "Basic Reading Skills SS: ??" with "Basic Reading Skills score fell in the **Average** range (SS: **95**)", and so on for other relevant sections if provided.

## Resources

This skill includes templates in the `assets/templates/` directory. These are Markdown files containing the structured narratives and score classification information.
