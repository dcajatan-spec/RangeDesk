# RangeDesk

Range planner and risk calculator for weekday and weekend trading. Plain HTML, CSS and JavaScript, no build step. Works offline and installs as an app.

## Publish on GitHub Pages
1. Create a new repository on GitHub (for example `rangedesk`).
2. Upload everything in this folder (`index.html`, `manifest.webmanifest`, `sw.js`, `icons/`) to the repository root.
3. Go to Settings, then Pages. Set Source to "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute your app is live at `https://YOUR-USERNAME.github.io/rangedesk/`.

## Install it
- Android or desktop Chrome and Edge: open the link and use "Install app".
- iPhone: open in Safari, tap Share, then "Add to Home Screen".

## Updating
After you change files, raise the version in `sw.js` (`var V="rangedesk-v1"` to `v2`) so installed copies refresh.
