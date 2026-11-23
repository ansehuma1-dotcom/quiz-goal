# Quiz Goal

Free football quizzes. No backend, no database, no API key. Plain HTML, CSS and
JavaScript, deployable as a static site on Vercel. Same theme as Mini Game Arcade
(yellow #FFC900, teal #23A094, pink #FF90E8).

## Quizzes (Phase 1: 5)

- Premier League Legends Quiz (`premier-league-legends.html`)
- Champions League Glory Quiz (`champions-league-glory.html`)
- World Cup History Quiz (`world-cup-history.html`)
- Football Legends Quiz (`football-legends.html`)
- Football History Quiz (`football-history.html`)

Each quiz: 10 questions, 4 options, instant right/wrong feedback, final score
out of 10, share score, best score saved in the browser only.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy on Vercel

See `DEPLOYMENT.md`. Project root: this folder. No build command, no framework.

## Adding a quiz (Phase 2 pattern)

1. Add the 10 questions to `build_site.py` in `QUIZZES` (with a fact for each answer).
2. Run `python3 ../build_site.py`, test the new page locally.
3. Add the quiz to the homepage list, sitemap and this README.
4. Only link a quiz once it is finished and tested.
