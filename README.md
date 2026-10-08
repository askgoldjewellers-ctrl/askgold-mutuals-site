# AskGold Mutuals

A responsive, static replica of the AskGold Mutuals website. It uses hash-based navigation, so all pages work on GitHub Pages without server-side routing.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Publish with GitHub Pages

Push this folder to a GitHub repository, then open **Settings → Pages** and select **Deploy from a branch**, the branch you pushed, and the repository root (`/`). GitHub Pages will publish `index.html` and the bundled assets.

## Pages and interactions

- Home, plans, and in-page sections
- About, sign up, sign in, and cart
- Add/remove plans in a cart saved in the browser
- Cookie-consent choice saved in the browser

Account forms are front-end demonstrations only. They do not create accounts, submit personal information, or process payments. Connect a secure backend and payment provider before accepting real customers.
