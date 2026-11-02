# Requirements — idea to finished piece

## R1 Idea intake
User story: As a creator, I want to type one idea or paste one URL so I don't have to write a brief.
- WHEN the user submits text ≤ 500 chars or one http(s) URL THE SYSTEM SHALL create a job and show its id within 2 s.
- IF the input is empty or over the limit THE SYSTEM SHALL reject it with an inline message.

## R2 Planning
- WHEN a job starts THE SYSTEM SHALL produce an outline (title, hook, 3–5 sections, one key quote per section) validated against `schemas/outline`.
- IF the input is a URL THE SYSTEM SHALL fetch and summarize it with the browser stage before planning.

## R3 Writing and illustration
- THE SYSTEM SHALL write each section in the user's chosen language (zh or en).
- THE SYSTEM SHALL draw one illustration per section as code (SVG), never a stock or generated photo.

## R4 Critic loop
- WHEN a draft is complete THE SYSTEM SHALL score it on clarity, accuracy-to-source and visual consistency (0–10 each).
- IF any score < 7 THE SYSTEM SHALL revise once, at most twice, then ship the best version with its scores shown.

## R5 Outputs
- THE SYSTEM SHALL render a long PNG (1080 px wide) and a 1080×1920 MP4 of ≤ 30 s with captions.
- THE SYSTEM SHALL offer both as downloads plus copyable plain text. It SHALL NOT post anywhere.

## R6 Operating-table view
- WHILE a job runs THE SYSTEM SHALL show each stage as a stitched "body part" lighting up, with live logs and elapsed time.

## R7 Cost guard
- THE SYSTEM SHALL cap each job at a configurable token budget (default 60k) and stop with a clear message when exceeded.
