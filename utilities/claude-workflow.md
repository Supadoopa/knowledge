---
tags:
  - type/guide
  - status/active
  - topic/utilities
updated: 2026-04-05
---

# Claude Workflow

How to use Claude effectively with this vault.

## Core Principle

Claude works best when given focused context. Instead of pasting the entire vault, paste only the relevant note(s) and ask a specific question.

---

## Prompt Templates

### Distill a log entry into atomic notes

```
I have a daily log entry. Please identify the ideas worth keeping as permanent atomic notes and suggest a one-line title and 2–3 sentence summary for each one.

[paste log entry]
```

### Expand a stub atomic note

```
Here is an atomic note stub. Please expand the "Why this matters" and "Related ideas" sections based on what you know about the topic. Keep it concise — under 300 words total.

[paste atomic note]
```

### Draft an output from atomic notes

```
Here are 3–5 atomic notes on a related topic. Please suggest an article outline that connects them into a coherent argument. Give me: title, target audience, one-sentence thesis, and a 5-point outline.

[paste atomic notes]
```

### Suggest backlinks

```
Here is a new atomic note. Here are the titles of my existing commonplace notes. Which existing notes should I link to from this new one, and why?

New note:
[paste note]

Existing note titles:
[paste list of titles]
```

### Morning planning from Top of Mind

```
Here is my current Top of Mind note. What is one high-leverage action I could take today that advances the most important priority? Be specific and brief.

[paste top-of-mind.md]
```

### Weekly review

```
Here are my daily log entries from this week. Please:
1. Summarize the main themes in 3 bullet points.
2. List ideas that recurred more than once — these may be worth making into atomic notes.
3. Identify any open loops (things mentioned but not resolved).

[paste week of logs]
```

---

## Shell Alias for New Daily Note

Add to your `.bashrc` or `.zshrc` to create today's log from the template:

```bash
alias today='cp ~/knowledge/utilities/templates/daily-note.md ~/knowledge/logs/$(date +%Y-%m-%d).md && sed -i "s/{{date}}/$(date +%Y-%m-%d)/g" ~/knowledge/logs/$(date +%Y-%m-%d).md'
```

After sourcing your shell config, run `today` to create and pre-fill today's log.

---

## Workflow Rhythm

| Cadence | Action |
|---------|--------|
| Daily | Create a log entry; capture freely |
| When a log idea matures | Promote it to a Commonplace atomic note |
| When 3+ atomic notes connect | Draft an Output |
| Weekly | Run the weekly review prompt above |
| Monthly | Update [[polaris/top-of-mind\|Top of Mind]] |
| Quarterly | Revisit [[polaris/life-razor\|Life Razor]] |

---

*Related: [[polaris/top-of-mind|Top of Mind]] | [[commonplace/README|Commonplace]] | [[logs/README|Logs]]*
