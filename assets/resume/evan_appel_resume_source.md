# Evan Appel — Resume Source Document

> **Purpose.** This is a single source of truth about Evan Appel's background, skills, and working style, written to be fed into Claude (or any LLM) as context when generating tailored resumes for data analyst, data engineer, BI engineer, or analytics engineer roles. It is intentionally longer and more detailed than any single resume should be — the assumption is that future prompts will pull the relevant subset for the target role.
>
> **How to use this document.** When asking Claude to generate a resume, paste this document and the target job description, then ask for the resume. Tell Claude which role family the target falls into (analyst / engineer / analytics engineer / BI engineer) so it knows which framing to lead with. See the *Framing for different role types* section near the end for guidance.
>
> **Last updated:** 2026-05-10

---

## 1. Identity and contact

- **Full name:** Evan Appel
- **Email:** appelew@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/evan-appel-8885569b/
- **GitHub:** https://github.com/EvanWAppel
- **Location:** Las Vegas, Nevada
- **Open to:** Remote, relocation to Seattle/Bellevue area, possibly other locations for the right role
- **Time zone availability:** Pacific by default, willing to work Eastern Time Zone hours for the right role
- **Work authorization:** US citizen, no sponsorship required

---

## 2. Career narrative — the through-line

Evan is a data professional whose distinguishing skill is the productionization of analytics: taking raw, ad hoc, analyst-authored code and refining it into validated, tested, deployable software. He sits at the intersection of analytics and engineering — comfortable with the business-facing language of analysts and the rigor of software engineering — and is especially valuable in environments where those two cultures need to be bridged.

His current role at Credit One Bank is titled Marketing Analyst, but the actual work is meaningfully more senior: he is the formal project lead on a 30-project, 25,000-line SAS-to-Python migration, directs six team members on translation work, and is the bank-wide authority on Python and Git for the business analyst organization. He has been running weekly Python workshops since August 2024 and has personally driven the marketing analytics team's adoption of GitLab CI/CD — capability that did not exist on the team before he arrived. His next promotion at Credit One would put him at officer-level with formal leadership responsibility.

The work that energizes him is bridging work: *"I like taking the rather raw code that analysts produce and refine it into something that can be put into a CI process. I like bridging the gap between folks who understand the business processes and changing their code so that it can be deployed using the production process."* This skill set maps cleanly onto the modern "analytics engineer" role category, but is also legitimately marketable as senior data analyst, BI engineer, or data engineer depending on the framing.

He is a systematic worker who values correctness, documentation, and reproducibility — visible in the 5,000-line internal manual he wrote on his own initiative to guide his team through the SAS-to-Python migration, in his weekly workshops, and in his "feynman" repository of reusable tools and documentation for analysts at the bank. He has broad intellectual curiosity that informs a generalist sensibility useful in cover letters at mission-driven employers.

---

## 3. Work experience

### Credit One Bank — Marketing Analyst
**February 6, 2023 – Present** · Las Vegas, NV

Joined as Product Analyst on February 6, 2023; moved to Marketing Analyst within the same organization. Officially titled Marketing Analyst, but the actual scope of work includes substantial data engineering responsibility (ETL design, pipeline development, CI/CD architecture) and formal project leadership. Ranked highly in the bank's analyst organization; next promotion would be to officer-level / formal leadership role.

**Project lead — SAS-to-Python migration (current major initiative):**
- Formal lead on a 30-project, ~25,000-line SAS-to-Python translation effort migrating the marketing analytics codebase into the bank's Snowflake-based Enterprise Data Platform ahead of an enterprise SAS contract sunset
- Directs the translation work of six team members of varying junior Python skill levels
- Designed the standardized package structure used across all translations: `run.py`, `tests.py`, `requirements.txt`, `.env`, with consistent logger configuration, environment-variable secrets management, and unattended-execution entry points
- Designed the validation methodology: unit tests that compare new Python outputs against legacy SAS outputs on cached fixtures, enabling CI execution without a live database connection
- Designed the two-phase workflow: Priority 1 preserves correctness on existing data shape; Priority 2 optimizes for database-native execution (pushing computation into Snowflake rather than transferring data over the wire)
- Built the marketing analytics team's first GitLab CI/CD pipeline — a capability the team had never had before this project

**Knowledge sharing and team development:**
- Wrote a 5,000-line internal manual on his own initiative (without leadership prompting) covering git workflow, package conventions, validation testing, Polars and Snowflake query optimization, secrets handling, and the merge-gate checklist. Widely distributed and used by analysts across the bank beyond his own team.
- Built and maintains the "feynman" project — a repository of helpful artifacts for analysts at the bank, including documentation, guides, code examples, and tooling for making database calls against bank data objects. Includes notebooks and written articles from the workshop series.
- Has run weekly Python workshops since August 2024. Regular audience of 4–10 people, occasionally 20. Covers a range of coding concepts and proficiency levels.
- Is recognized internally as **the** Python authority for the analyst organization, and the Git/GitLab authority for the business analyst side of the company.
- Has personally driven Git adoption across the analyst organization through demonstrations, group workshops, and one-on-one tutoring — Git was not in widespread use among business analysts at the bank before he advocated for it.

**Tools daily:** Python, Polars, pandas, Snowflake, Snowflake SQL (including Snowpark), SAS, SASPy, Git, GitLab, GitLab CI/CD, Tableau, VS Code, Jupyter

### Coin Cloud — Data Analyst (later ERP Manager, brief)
**January 2021 – December 2022** · Las Vegas, NV

Cryptocurrency ATM company. Data analytics work supporting business operations. Took on the ERP Manager role (NetSuite) for the final month of tenure — mentioned for completeness but not claimed as a deep skill.

**Acting management:** Served as backup manager — when the department head was out, departmental decisions came to Evan.

**Mentoring:** Mentored junior analysts on the team.

**Cash pickup route design (proudest accomplishment):** Owned the weekly cash pickup schedule for the Coin Cloud cryptocurrency ATM fleet. Each week, designed routes for the field pickup agents based on the fullness of individual ATMs. This was an applied analytics problem with real operational and financial stakes — under-collecting on a full ATM meant lost transactions, over-collecting on a near-empty one meant wasted agent time. Useful as a portfolio example of "analytics that drove operations" rather than "analytics that fed a dashboard."

**Tools:** SQL, Python, Tableau, AWS / Redshift, NetSuite (briefly)

### Precision Opinion — Data Analyst (Engineering Department)
**December 2019 – 2021** · Las Vegas, NV

Market research firm. Data analyst for the call center, with concurrent project management responsibility on a custom software build.

**Bespoke timekeeping software project:** Owned project management and requirements gathering for a bespoke timekeeping system built for the call center. Did not write the application code (Kotlin-based); served as the analyst/PM interface between business stakeholders and the engineering team.

**Concurrent analyst work:** Wrote SQL queries for call center management throughout tenure.

**Mentoring:** Mentored analysts on the team.

### Forms Direct — Data Scientist (final title)
**May 2012 – October 2019**

Forms Direct is the start of Evan's professional career. Earlier jobs (bookstores, pet stores, movie theaters) were pre-career and are intentionally excluded from all resumes and the work-history narrative.

Note: final title was Data Scientist, but the work was data analyst in nature. Resume bullets should describe the actual work rather than imply ML/statistics scope.

**Career progression at Forms Direct (longest tenure, ~7.5 years):**
- **Started as Marketing Content Writer** — writing marketing content
- **Managed a small remote team of writers (4)** — first management experience
- **Transitioned into data analyst work for the call center** — learned Excel, SQL, Python, and Mode Analytics in role
- **Joined the engineering team as in-house junior data analyst** — formalized the analyst role
- **Ended as Data Scientist (title)** — though work remained analyst-flavored

The self-directed transition from non-technical to technical work over seven years is a useful narrative in cover letters that ask about how someone came to data.

[FILL IN — Forms Direct location / remote arrangement]

---

## 4. Education

- **University of Nevada, Las Vegas (UNLV)** — Bachelor of Arts, Journalism (major), Sociology (minor) · 2007–2012

---

## 5. Certifications and continuing education

- **Snowflake Hands-On Essentials: Data Warehousing Workshop** (Badge 1)
- **Snowflake Hands-On Essentials: Data Lake Workshop** (Badge 4)
- **Codecademy Data Engineer career path** — in progress, targeted completion summer 2026

---

## 6. Technical skills inventory

Proficiency scale: **Production** (used daily in production work), **Strong** (significant hands-on experience, comfortable in interview), **Working** (have used in real projects, can ramp quickly), **Familiar** (have read about, dabbled, or used in coursework).

### Programming languages
- **Python — Production.** Daily driver. Modular code organization (functions, classes, type hints), unit testing (pytest), data libraries (Polars, pandas, NumPy), database connectors (snowflake-connector-python, Snowpark, SASPy), packaging conventions. Recognized as the Python authority at Credit One Bank for the analyst organization.
- **SQL — Production.** Daily driver. Snowflake SQL primarily. Comfortable with CTEs, window functions, complex joins, aggregations, views, stored procedures, query plan inspection and optimization. Oracle SQL Developer experience.
- **SAS — Strong (read).** Read and translate daily. DATA steps, PROC SQL, macros, ODS. High fluency reading; low interest in writing new SAS.
- **Bash / shell scripting — Working.** Comfortable enough for CI scripts and basic automation.

### Data warehousing and platforms
- **Snowflake — Production.** Daily driver. Snowpark Python, staging, warehouse sizing and cost awareness, GitHub integration via API integration and Git repository objects, Notebooks. Holds Snowflake Hands-On Essentials badges in Data Warehousing and Data Lake.
- **Oracle / Oracle SQL Developer — Working.**
- **Redshift / AWS data services — Working.** From Coin Cloud era.
- **Microsoft SQL Server — Familiar.**
- **Azure Synapse / Data Factory — Familiar.** Conceptual; would ramp on production.
- **Databricks / Microsoft Fabric — Familiar.** Following the lakehouse convergence.

### Transformation and pipeline tools
- **dbt — Working (conceptual).** Has built dbt pipelines with Claude's assistance; primary fluency is in the *conceptual model* — designing data marts for downstream consumers, modular transformations, testing. Has not run dbt at production scale independently. Would ramp on production dbt quickly given the foundation.
- **Polars — Strong.** Lazy evaluation, query plan optimization, comfortable choosing between Polars and Snowflake for a given workload.
- **pandas — Strong.**
- **PySpark / Spark — Familiar.** Conceptual understanding of partitioning, shuffling, columnar formats.

### BI and visualization
- **Tableau — Strong.** Downstream consumer of pipeline output; comfortable building dashboards.
- **Mode Analytics — Lapsed.** Used at Forms Direct through 2019; has not touched since. Worth listing only if a specific JD calls it out.
- **Power BI — Familiar.**

### Version control and CI/CD
- **Git — Production.** Daily driver. Branching, merging, rebasing, pull/merge requests, `git blame`, reset workflows. Recognized authority on Git for the business analyst organization at Credit One; has driven analyst Git adoption through demos, workshops, and one-on-one tutoring.
- **GitLab — Production.** Recognized authority on GitLab for the business analyst organization at Credit One. CI/CD pipelines, merge requests, issue tracking.
- **GitLab CI/CD — Production.** Built the marketing analytics team's first CI/CD pipeline.
- **GitHub — Working.** Maintains personal repos (see *Notable projects*).
- **Azure DevOps — Familiar.**

### Testing and validation
- **pytest — Strong.**
- **Validation methodology — Strong.** Cached fixture strategy, comparing new vs. legacy outputs, designing tests that run without live database connections.

### AI-assisted development
- **Claude (and Claude Code) — Strong daily user.** Uses Claude actively for reading legacy code, validating translations, drafting documentation, building dbt pipelines, and exploratory learning. Has practical opinions on where AI tools accelerate analytics work and where they introduce risk.
- **MCP connections — Working.** Aware of and curious about MCP integrations for analytics workflows.
- **Ollama / local LLMs — Familiar.** Has explored local LLM options including the VS Code Continue extension.

### Other / domain
- **Marketing analytics — Strong.** Embedded in a marketing analytics team at a financial services company for 3+ years. Familiar with funnel concepts, campaign measurement, segmentation. Less fluent in B2B SaaS-specific vocabulary (MQL/SAO, multi-touch attribution model selection, Marketo/Salesforce sync logic) — would ramp on those.
- **Financial services / consumer credit — Strong.** Subprime credit card industry context from Credit One.
- **Cryptocurrency / fintech — Working.** From Coin Cloud.
- **Call center operations analytics — Working.** From Precision Opinion and Forms Direct.

### Project management
- **Requirements gathering and PM — Working.** Owned PM and requirements gathering for the Precision Opinion bespoke timekeeping software build (Kotlin-based, did not write the application code).
- **Project leadership — Strong.** Formal lead on the 30-project SAS-to-Python migration at Credit One, directing six team members.

---

## 7. Software engineering disposition

This is what genuinely differentiates Evan from a typical data analyst, and what hiring managers for engineer-flavored roles will care about.

- **Code organization:** Modular functions and classes; type hints; docstrings; separation of run logic, test logic, and configuration.
- **Testing:** Test-driven validation as a default. Cached fixtures so tests run without live DB connections. Unit tests gating merges.
- **CI/CD:** Built marketing analytics team's first GitLab CI/CD pipeline. Aware of GitHub Actions and Azure DevOps as alternatives.
- **Secrets management:** Environment variables, never committed credentials, distinct local/dev/prod configurations.
- **Logging:** File-based for unattended runs; structured enough to be debuggable post-hoc.
- **Error handling:** Surface failures rather than swallow them. Idempotent design where possible.
- **Documentation:** Written for the next person, not for the author. The 5,000-line internal manual and the "feynman" repository at Credit One are the clearest evidence.
- **Code review:** Comfortable giving and receiving merge request feedback.
- **Async-first work:** Comfortable with documentation, written communication, and async collaboration as primary working modes.

---

## 8. Working style and personal qualities

- **Systematic.** Builds checklists, frameworks, and reference documents for new problem domains. The translation manual is the canonical example.
- **Self-starting.** Wrote the 5,000-line manual without leadership prompting because it was needed. Started weekly Python workshops on his own initiative. Built the "feynman" project on his own. Pattern: identifies a gap, fills it, makes it durable.
- **Mentor-disposed.** Has mentored analysts at Precision Opinion, Coin Cloud, and Credit One. Runs weekly workshops. Drives technical capability across an organization rather than hoarding expertise.
- **Curious across domains.** Broad intellectual interests (history, film, literature, music, linguistics, science) that inform a generalist sensibility.
- **Honest about gaps.** Names what he doesn't know rather than bluff. Pairs well with confidence about what he does know.
- **Self-directed learner.** Transitioned from marketing content writer to data analyst at Forms Direct through self-study. Currently completing the Codecademy Data Engineer path.
- **Acting leadership experience.** Was the backup manager at Coin Cloud (decisions came to him when the department head was out). Formal project lead at Credit One.

---

## 9. Notable projects

### SAS-to-Python migration at Credit One Bank
The headline project. 30 projects, ~25K lines of SAS code, full-team CI/CD migration to Snowflake, year-long effort, Evan as formal lead with six teammates. Useful for any role family.

### Internal translation methodology manual (5,000 lines)
Written for the team on his own initiative; widely adopted across the bank. Covers git workflow, validation testing, query optimization, secrets management, merge-gate checklist. Strong evidence of documentation discipline, systematic thinking, and bottom-up leadership.

### "feynman" repository — internal knowledge base for analysts at Credit One
Repository of reusable artifacts for the bank's analyst organization: documentation, guides, examples, tooling for making database calls against bank data objects, and notebooks/articles from the workshop series. The name suggests Evan thinks of teaching as the test of understanding — useful framing for cover letters.

### Weekly Python workshops at Credit One (since August 2024)
Audience 4–10 regularly, swells to 20. Cross-organization. Multiple proficiency levels covered. Evidence of teaching disposition and recognized expertise.

### Brand team ETL — third-party data consolidation pipeline
ETL that ingests several third-party datasets, consolidates them into a single dataset, and feeds a Tableau dashboard for the brand team. Real production pipeline. **Public repo on GitHub.**

### APR-changing tool for bank documentation
Internal tool for changing APRs in bank documentation. **Public repo on GitHub.** Worth confirming the level of detail safe to share publicly given the financial-services context — strip anything sensitive before public release.

### Hair salon viability analysis (personal)
Did a viability analysis for his sister's hair salon. Real applied analytics on a real small-business decision. **Public repo on GitHub.** Good cover-letter color for "I do data work outside of work" framing.

### Gasoline price tracking tool (personal)
Personal project tracking gasoline prices. **Public repo on GitHub.** Good evidence of self-directed building.

### Precision Opinion bespoke timekeeping software
PM and requirements gathering for a Kotlin-based timekeeping system for the call center. Did not write application code. Useful for roles that value cross-functional collaboration between analysts and engineers.

### Cash pickup route design at Coin Cloud
Owned the weekly cash pickup schedule for the cryptocurrency ATM fleet. Designed routes for field pickup agents each week based on per-ATM fullness data. Real operational analytics — decisions had direct financial and operational consequences. Strong portfolio example for roles emphasizing applied analytics, logistics/operations analytics, or analytics that drives decisions rather than analytics that produces dashboards.

### Snowflake / GitHub integration work at Credit One
Connected Snowflake to a GitHub repository via API integration and Git repository objects, enabling version-controlled SQL and notebook deployment.

---

## 10. Career goals and target roles

Evan is actively job-searching. Target roles in approximate priority order:

1. **Senior Data Analyst** (especially marketing analytics) — strongest title-fit, salary $130K target with $110K floor
2. **Analytics Engineer / Senior Analytics Engineer** — best skill-fit for what he actually does day to day
3. **BI Engineer** — Amazon's variant of analytics engineer, common in Pacific Northwest
4. **Data Engineer / Senior Data Engineer** — viable for roles emphasizing pipelines, productionization, and dimensional modeling over distributed systems / streaming
5. **Marketing Analytics Manager** — stretch to a managerial title, but skill-aligned given his actual project leadership scope

### Geographic preferences
1. Remote
2. Seattle / Bellevue area (relocation acceptable)
3. Las Vegas (limited inventory but home base)

### Salary calibration
- **Current Credit One salary:** $110K
- **Target for next role:** $130K
- **Floor for an exceptional role:** $110K (willing to take a step-laterally for the right opportunity, though this should be deployed late in a negotiation rather than telegraphed up front)

### Roles he is not targeting (poor profile fit)
- **Data Scientist (statistics/ML-forward)** — engineering-forward background, not modeling-forward. The Forms Direct "Data Scientist" title is a naming artifact, not a positioning claim.
- **Backend Software Engineer / Staff Engineer** — different career track. Writes Python for data work, not for backend services. Roles requiring REST/GraphQL API design, web framework experience (Django, Rails, FastAPI in production), or distributed systems are out of scope.
- **Data Platform Engineer (infra-heavy)** — Kafka/streaming/Kubernetes/cloud infra roles are too far a stretch.

---

## 11. Framing for different role types

This section guides how Claude should adapt the same underlying material for different role families.

### For Senior Data Analyst roles (especially marketing analytics)
- **Lead with:** SQL fluency, marketing analytics context, stakeholder partnership, Tableau delivery, ability to translate ambiguous business questions into clear analyses.
- **Bring forward:** Marketing analyst role at Credit One, dashboard work, cross-functional collaboration, the brand team ETL.
- **Soften:** Heaviest engineering jargon (Polars query plans, CI/CD pipeline architecture). Mention them, don't lead with them.
- **Watch for:** Industry-specific vocabulary the target uses (e.g., MQL/SAO for B2B SaaS). Don't fake fluency; acknowledge ramp.

### For Analytics Engineer / Senior Analytics Engineer roles
- **Lead with:** Productionization story, Snowflake fluency, dbt-style modular transformation thinking, Git/CI/CD discipline, the 30-project migration.
- **Bring forward:** The translation manual, the validated package structure, the GitLab CI/CD work, the feynman repository, workshop teaching.
- **Soften:** Title-as-marketing-analyst framing. The work is analytics engineering even if the title isn't yet.
- **Watch for:** dbt depth in the JD. Be honest about working/conceptual proficiency.

### For Data Engineer / Senior Data Engineer roles
- **Lead with:** Pipeline reliability, validation methodology, idempotent design, Snowflake architecture, cost awareness, the migration project's scale (30 projects, 25K lines).
- **Bring forward:** GitLab CI/CD pipelines, secrets management, file-based logging, the brand team ETL as a real production pipeline.
- **Soften:** Marketing analytics context (less central). Tableau (downstream concern).
- **Watch for:** Specific platform requirements (Azure, AWS, Databricks). Be honest about gaps; emphasize transferable engineering practice.

### For BI Engineer roles
- **Lead with:** Tableau, Snowflake, dimensional modeling, working with senior stakeholders, dashboard productionization, the brand team ETL.
- **Bring forward:** Reporting dashboard CI/CD work, downstream consumption of pipeline outputs.
- **Soften:** Pure pipeline / transformation work (less central; still useful as supporting evidence).
- **Watch for:** Amazon-specific BI Engineer JDs which often want dimensional modeling depth and SQL fluency at scale.

### For Marketing Analytics Manager roles
- **Lead with:** Project lead role on the 30-project migration, directing six team members, marketing analytics team experience at Credit One, stakeholder partnership, the documentation/teaching disposition.
- **Bring forward:** Backup-manager experience at Coin Cloud, mentoring track record, workshop series, the bridge-builder framing.
- **Soften:** Individual-contributor framing — the project lead role is real management experience even though the title doesn't say "manager."
- **Watch for:** Years-of-direct-management-experience requirements. If they want 3+ years managing direct reports, this is a stretch — frame as ready-for-next-step rather than as currently-a-manager.

---

## 12. Things that should never go on a resume but are useful as context

- Personal: based in Las Vegas, has interest in the Southern Nevada region, draws as a hobby, has broad reading interests.
- Working preferences: comfortable with substantial detail, organized formats, prefers depth over surface-level summaries, async-friendly.
- Tools used in personal life: Claude (extensively), VS Code, Snowflake (sandbox / certifications), Git.
- Collaborative software project with a Chinese-speaking colleague (Rain) — Evan is not yet comfortable surfacing this in professional contexts. Do not include on resumes or cover letters.

These don't belong on a resume but are useful for cover letters at companies where culture-fit signals matter (mission-driven employers, remote-first companies, AI-forward teams).

---

## 13. Open items to keep this document current

These would meaningfully improve the document when Evan has time to fill them in:

1. **Forms Direct location.** What city / remote arrangement?
2. **GitHub repos final state.** Once the cleanup is done (targeted for next week), update the descriptions and confirm which repos are public-ready.
3. **APR-changing tool sensitivity check.** Confirm what's safe to publish given the financial-services context; strip anything that shouldn't be public.

---

*End of source document.*
