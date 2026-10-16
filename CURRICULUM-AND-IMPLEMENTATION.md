# BrightSteps Classes 3–5 — Curriculum and implementation plan

## Product brief
- Curriculum: CBSE/NCERT-aligned core; compare against the learner’s current school syllabus before treating any unit as complete coverage.
- Classes: 3, 4, 5, switchable in-app.
- Languages: bilingual English/Hindi lessons and UI.
- Daily target: 120 minutes in five blocks: 35 min concept learning, 30 min guided practice, 25 min exam questions, 20 min spaced revision/reading, 10 min recall and error log. Include short screen-free movement/water breaks.
- Learners: separate on-device profiles; current starter profiles Rajat, Learner 2 and Learner 3; more can be added.
- Offline: HTML, curriculum data, manifest, service worker and progress storage are bundled. Online links are optional reference links only.
- Priority: exam preparation, competency questions, mixed mock tests, explanations, revision and weak-topic recommendations.

## Current source package inventory
- 101 original bilingual learning units: 3 grades × 7 areas, with 3–6 units per area (Maths, English, Hindi, World Around Us / Science & Social Studies, GK & Reasoning, Computing & Digital Safety, Art/Health/Life Skills).
- Each unit has a bilingual explanation, worked example, one core MCQ, answer and explanation.
- Practice mode tracks attempts and estimated mastery locally; unit completion, 21-day checklists, learner profiles, mixed mock assessment and JSON progress export are included.
- The 21-day schedule rotates units and designates weekly review / mixed-practice days. It is a planning scaffold, not a guarantee that every textbook chapter is covered.

## Daily learning routine (120 minutes)
1. 35 min — teach a new concept and worked example.
2. 30 min — guided practice, hints, explain aloud.
3. 25 min — exam-style independent questions.
4. 20 min — spaced revision, reading, vocabulary or error correction.
5. 10 min — retrieval practice, reflection and error log.

## 21-day sequence
- Days 1–5: diagnostic baseline, core concepts, vocabulary/reading, number sense, foundational science/world knowledge.
- Day 6: mixed practice; analyse errors and reteach weak concepts.
- Day 7: weekly review and short mock test.
- Days 8–12: next concepts; increase multi-step questions and written explanations.
- Day 13: mixed application and corrections.
- Day 14: weekly review and mock test.
- Days 15–19: higher-order reasoning, comprehension, word problems, science/social application and exam technique.
- Day 20: cumulative practice, targeted revision and confidence check.
- Day 21: final mixed assessment, compare with baseline, create a personalised next-step plan.

## Assessment design target
- Mix recall, understanding, application, reasoning and text/data interpretation.
- Use multiple-choice, short written response, reading comprehension, word problems, diagrams/observations and explain-your-reasoning prompts.
- Every assessed item should be checked for one unambiguous answer, age-appropriate wording, bilingual equivalence and a useful explanation.
- Target mastery only after multiple attempts across spaced sessions; current percentage is a rough practice estimate, not a validated score.

## Important coverage and quality limits
This release is an expanded working foundation, not yet a complete substitute for all NCERT textbooks, all school-specific chapter lists, or a large validated question bank. It includes 101 units and one core MCQ per unit; generated mock tests remix these core items and therefore are not yet deep, non-repeating exam banks. Before claiming full syllabus coverage, map every current 2026–27 prescribed textbook chapter and learning outcome for each class, then add multiple verified questions per outcome, answer keys, rubric-based written tasks and human review. Do not bundle copyrighted textbook chapters or copied exam papers unless permitted; link to official resources instead.

## Implementation stages
1. **This package:** offline-first shell, curriculum unit schema, bilingual learning, profiles, 21-day checklist, mock tests, progress export.
2. **Content expansion:** chapter-by-chapter NCERT/CBSE mapping, 10–20 original questions per outcome, multiple difficulty bands, written-answer rubrics and distractor explanations.
3. **QA:** automated schema checks; verify every answer key; bilingual review; test grade/profile switching, progress isolation, offline launch, PWA installation and Android layout/accessibility.
4. **Deployment:** upload files to the existing `siddhantmaurya25-ai/Bright-steps` repository root (not a nonexistent `www` folder), keep Vercel root deployment, run GitHub Actions to build a debug APK, test the APK on an Android phone, then deploy the verified web build.

## Official references
- NCERT textbook portal: https://ncert.nic.in/textbook.php
- NCERT syllabus: https://ncert.nic.in/syllabus.php
- CBSE SAFAL (competency-based assessment for Grades 3 and 5): https://cbseacademic.nic.in/safal/index.html
- CBSE competency-based education: https://cbseacademic.nic.in/cbe/index.html

Check the current official syllabus and school’s annual plan before relying on this for a specific exam. Class 3 and 4 subject names can vary by textbook and school; this package uses a broad “World Around Us / Science & Social Studies” area to keep topics organised while the exact mapping is completed.
