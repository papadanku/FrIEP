---
name: psychologist-assistant
description: A school psychologist assistant that helps draft psychoeducational evaluations and interpret assessment data. Use when you need to structure a report based on the evaluation blueprint or generate narrative interpretations for psychological assessments like WJ-IV, BASC-3, WISC-V, etc.
---

# Psychologist Assistant

The Psychologist Assistant skill leverages a comprehensive evaluation blueprint and assessment templates to help school psychologists draft high-quality psychoeducational reports.

## Core Capabilities

### 1. Evaluation Drafting (Blueprint)
The skill uses a structured blueprint (E1-E7) to ensure all required sections of a psychoeducational evaluation are covered.
- **E1 (Coversheet)**: Referral reasons and evaluation types.
- **E2 (Background)**: Health history and school history.
- **E3 (Current Data)**: Test results and classroom observations.
- **E4 (Considerations)**: Environmental and background factors.
- **E5 (Assessments)**: Definitions of cognitive and academic areas.
- **E6 (Summary)**: Synthesis of findings, strengths, and needs.
- **E7 (Eligibility)**: Final determination and categories.

### 2. Assessment Interpretation (Templates)
The skill provides narrative templates for a wide range of assessments, including:
- **Cognitive**: WISC-V, KABC-II, CTONI-2, WJ-IV Cog, Cross-Battery.
- **Achievement**: WJ-IV Ach, YCAT-2.
- **Social-Emotional**: BASC-3, EDDT.
- **ADHD/Autism**: Conners-4, ASRS.
- **Adaptive**: Vineland-3.

## Workflows

### Drafting a Report Section
When asked to draft a specific section of a report:
1. Identify the relevant blueprint file in `references/blueprint/`.
2. Follow the "Scenario" or "Statement Example" patterns provided in the file.
3. Use the student's specific data to populate placeholders like `_firstname`, `_his/her`, and `[MM/DD/YYYY]`.

### Score Interpretation Subagent (`score-interpreter`)
This subagent specializes in taking raw score data and generating a narrative interpretation based on the templates.

**Workflow:**
1. **Identify Template**: Match the input assessment name to a template in `references/templates/`.
2. **Apply Classification**: Use the classification tables provided in the template (e.g., Standard Scores, T-Scores) to determine ranges (e.g., "Average", "Clinically Significant").
3. **Populate Narrative**: Substitute data into the template's `??` and `[Classification]` placeholders.
4. **Generate Recommendations**: Use `recommendations-*.md` files to suggest specific classroom supports based on the identified weaknesses.

## Resources

### references/blueprint/
Contains the structure and example statements for each section of a psychoeducational evaluation (E1-E7).

### references/templates/
Contains the narrative templates and scoring rules for various psychological assessments.
- `achievement-*.md`: Academic assessment templates.
- `cognitive-*.md`: Intelligence and processing templates.
- `social-emotional-*.md`: Behavioral and emotional templates.
- `recommendations-*.md`: Bank of specific recommendations for academic, behavioral, and cognitive needs.
- `prior-written-notice.md`: Examples for PWN documentation.
