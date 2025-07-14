---
title: "Lesson 2: Installation and Setup"
objective: "To install Redis on your operating system and connect to it using the command-line client redis-cli."
video: "https://www.youtube.com/embed/15korqr3k1E"
---

### Topics

- Installing Redis on Windows (via WSL), macOS, and Linux.
- The redis-cli command-line interface.
- Basic commands: PING, SET, GET, FLUSHALL.
- Using a GUI tool like RedisInsight.

### Example (Connecting with redis-cli)

```bash
# Start the redis server (this may happen automatically via a service)
redis-server

# In a new terminal, connect the client
redis-cli

# Test the connection
127.0.0.1:6379> PING
PONG
```

### Practice Problem

After installing Redis, use redis-cli to set a key my_name to your name. Then, use the GET command to retrieve the value. Finally, use the DEL command to delete the key.
