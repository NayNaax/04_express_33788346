# My Express + EJS Starter

A small Express app that shows server-side rendering with EJS, simple routing, static files, and reusable page partials.

-   Entry point: [index.js](index.js)
-   Routes: [routes/main.js](routes/main.js)
-   Views (EJS): [views/pages](views/pages) with shared partials in [views/partials](views/partials)
-   Static assets: [public](public) (e.g., [public/css/style.css](public/css/style.css))
-   Package config: [package.json](package.json)

## Quick start

1. Install dependencies

```sh
npm install
```

2. Run the server

```sh
node index.js
```

3. Open the app
   http://localhost:8000

To change the port, edit the `const port = 8000;` line in [index.js](index.js).

## What this project demonstrates

-   Express 5 routing in [routes/main.js](routes/main.js)
-   EJS views with partials (header/footer)
    -   Pages live in [views/pages](views/pages)
    -   Partials live in [views/partials](views/partials)
-   Static file hosting from [public](public)

## Routes

-   GET `/` → renders [views/pages/index.ejs](views/pages/index.ejs)
-   GET `/about` → renders [views/pages/about.ejs](views/pages/about.ejs)
-   GET `/contact` → renders [views/pages/contact.ejs](views/pages/contact.ejs)
-   GET `/date` → renders [views/pages/date.ejs](views/pages/date.ejs) with a formatted date
-   GET `/welcome/:name` → renders [views/pages/welcome.ejs](views/pages/welcome.ejs) with a `name` param (example: `/welcome/Nayem`)
-   GET `/chain` → demonstrates multiple handlers (logs, then responds)
-   GET `/file` → sends a text file from [routes/a.txt](routes/a.txt)

All route handlers are defined in [routes/main.js](routes/main.js).

## Views and partials

-   Pages:
    -   [views/pages/index.ejs](views/pages/index.ejs)
    -   [views/pages/about.ejs](views/pages/about.ejs)
    -   [views/pages/contact.ejs](views/pages/contact.ejs)
    -   [views/pages/date.ejs](views/pages/date.ejs)
    -   [views/pages/welcome.ejs](views/pages/welcome.ejs)
-   Partials:
    -   [views/partials/header.ejs](views/partials/header.ejs)
    -   [views/partials/footer.ejs](views/partials/footer.ejs)

Partials are included in pages like:

```ejs
<%- include('../partials/header') %>
...page content...
<%- include('../partials/footer') %>
```

## Project structure

```
.
├─ index.js
├─ package.json
├─ public/
│  └─ css/
│     └─ style.css
├─ routes/
│  ├─ main.js
│  └─ a.txt
└─ views/
   ├─ pages/
   │  ├─ index.ejs
   │  ├─ about.ejs
   │  ├─ contact.ejs
   │  ├─ date.ejs
   │  └─ welcome.ejs
   └─ partials/
      ├─ header.ejs
      └─ footer.ejs
```
