---
title: "Lesson 5: Sorted Sets"
objective: "To manage collections of unique strings where each member is associated with a score, allowing for ordered retrieval."
video: "https://www.youtube.com/embed/nPUa2kK-w_s"
---

### Topics

- ZADD to add members with a score.
- ZRANGE and ZREVRANGE to retrieve a range of members, ordered by score.
- ZRANK to find the rank of a member.
- ZRANGEBYSCORE to retrieve members within a score range.
- Use Cases: Leaderboards, priority queues, rate limiting.

### Example (A simple leaderboard)

```bash
# Add scores for three players
ZADD leaderboard 1550 "player_one"
ZADD leaderboard 2100 "player_two"
ZADD leaderboard 1800 "player_three"

# Get the top 2 players
ZREVRANGE leaderboard 0 1 WITHSCORES
```

### Practice Problem

Create a leaderboard for a game. Add three players with scores. Then, write the command to retrieve the rank of a specific player (their position on the leaderboard, starting from 0).
