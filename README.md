### Setup
Run the following commands:
```bash
npm install
npm run webpack
```
And open `src/client/index.html` in the browser.

This app uses my private heroku backend by default. This can be configured in `src/client/app/ideas/ideasActions.js` at `line 12`.

Main packages used are
- redux
- material-ui
- react-select
- react-stickynode
- whatwg-fetch