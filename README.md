# Quiz Goal

Free football quizzes. No backend, no database, no API key. Plain HTML, CSS and
JavaScript, deployable as a static site on Vercel. Same theme as Mini Game Arcade
(yellow #FFC900, teal #23A094, pink #FF90E8).

## Quizzes (Phase 2: 20)

- Premier League Legends Quiz (`premier-league-legends.html`) - Premier League
- Champions League Glory Quiz (`champions-league-glory.html`) - Champions League
- World Cup History Quiz (`world-cup-history.html`) - World Cup
- Football Legends Quiz (`football-legends.html`) - Famous Players
- Football History Quiz (`football-history.html`) - Football History
- Real Madrid Records Quiz (`real-madrid-records.html`) - Clubs and Records
- Manchester United Records Quiz (`manchester-united-records.html`) - Clubs and Records
- Barcelona Records Quiz (`barcelona-records.html`) - Clubs and Records
- Club Records Quiz (`club-records.html`) - Clubs and Records
- Premier League Records Quiz (`premier-league-records.html`) - Premier League
- Premier League Stars Quiz (`premier-league-stars.html`) - Premier League
- Premier League Champions Quiz (`premier-league-champions.html`) - Premier League
- Champions League Finals Quiz (`champions-league-finals.html`) - Champions League
- Champions League Stars Quiz (`champions-league-stars.html`) - Champions League
- World Cup Winners Quiz (`world-cup-winners.html`) - World Cup
- World Cup Goals Quiz (`world-cup-goals.html`) - World Cup
- Messi and Ronaldo Quiz (`messi-ronaldo-quiz.html`) - Famous Players
- Football Goalkeepers Quiz (`football-goalkeepers.html`) - Famous Players
- Football Rules Quiz (`football-rules-quiz.html`) - Football History
- Football Firsts Quiz (`football-firsts-quiz.html`) - Football History

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
