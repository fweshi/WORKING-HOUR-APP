# WORKING-HOUR-APP
# Express + EJS Working-Hours Access Control

## Overview
This project is an Express + EJS web app that restricts access to all routes based on working hours. Access is only allowed during **Mon–Fri (9:00 AM–4:59 PM)** and denied outside that window.

## Working-Hours Rules
Access is granted only if:
- The day is **Monday–Friday** (`new Date().getDay()` returns **1–5**)
- The hour is within **9:00–16:59** (`hour >= 9 && hour < 17`)

## Denied Response
If access is denied, the app responds with:
```html  
<h1>Sorry, we are closed. Visit us during working hours (Mon-Fri, 9AM - 5PM).</h1>  
