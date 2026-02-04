# Day 8 – Express Middleware & Request/Response

## What is Middleware?
Middleware is a function that runs **before** the final request handler.

Request flow:
Client → Middleware → Route → Response

## Why Middleware?
- Logging
- Authentication
- Validation
- Parsing JSON

## Express Request Object (req)
- req.query → query parameters
- req.params → URL parameters
- req.body → request body

## Express Response Object (res)
- res.send()
- res.json()
- res.status()
