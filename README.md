# ASK JEWELLERS

A responsive, static catalogue for imitation jewellery sales and rentals. The catalogue links to product detail views using query URLs and can be hosted on GitHub Pages.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Publish with GitHub Pages

Push this folder to a GitHub repository, then open **Settings → Pages** and select **Deploy from a branch**, the branch you pushed, and the repository root (`/`). GitHub Pages will publish `index.html` and the bundled assets.

## Sections and interactions

- Home, product catalogue, rental steps, about, and FAQs
- Product details display fixed selling prices and UI-only Buy Now and Rent Now buttons
- The enquiry form is a front-end demonstration and does not send or store submissions

Product detail URLs use `?product=<product-id>`. The three current listings use supplied photos, with fixed prices of ₹12,500, ₹25,500, and ₹29,500. Buy and rent buttons are presentation-only. Rental availability and terms must be confirmed separately. The site identifies the items as imitation jewellery and does not promise gold content, stock, deposits, or delivery terms.
