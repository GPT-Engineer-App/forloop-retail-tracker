# forloop-retail-tracker

Forloop AI scrapes data from different retailers and matches the products with AI in order for trade marketers, e-commerce managers for FMCG companies to have better overview of their online channels.

Make a dashboard for Lindt in Czechia (which is a customer of Forloop) that tracks the following retailers.

Sure, I'll describe the components and layout of the dashboard for recreation purposes:

1. **Overall Layout**:
    - The dashboard contains a main navigation bar at the top with the application name 'Forloop' on the left and two dropdown selections labeled 'Main page' and 'Retailer View' on the right.
    - Below the main navigation bar, there are several sections: Product, Country/Retailer selection tabs, a line chart, a data table, and summary cards.

2. **Product Section**:
    - This section includes a dropdown for selecting a product with an example selected "Lindor tablet milk 100 g".
    - Next to the product dropdown, there are details about the product such as EAN code and Series name. The EAN code for the example product is "DE: 0761040097215", and the Series is "Lindor".
    - On the right of this section, there are additional filters like 'View', 'Number of columns', 'Slider', 'Currency', and 'On sale' with various options.

3. **Country/Retailer Selection Tabs**:
    - Horizontal tabs for country selection with sample countries like Austria, Czechia, Germany, Hungary, Poland, and Slovakia.
    - Below the country tabs, there are retailer selection options with checkboxes.

4. **Line Chart**:
    - A line chart showing sales price trends over time. The X-axis represents dates with markers such as 'den 28 jan', 'den 11 feb', 'den 25 feb', 'den 10 mar', and the Y-axis represents the sales price.
    - Different colored lines represent different retailers, with legend icons showing which color corresponds to which retailer.

5. **Data Table**:
    - Below the line chart, a data table lists EAN, Internal id, Title, % in sale, Retailer, Country, URL, Avg. sales price, Min. sales price, Max. sales price, and Senate Date for each product variation.
    - Each row in the table represents a different retailer or country variation of the product with associated data. For example, the table lists variations like "Lindt - Lindor czekolada mleczna - 100 g" and "LINDOR Tablet Milk 100g".

6. **Summary Cards**:
    - On the right side, there are summary cards that display key metrics:
        - A card with the label "# Retailers" and a number (e.g., 4).
        - A card with the label "Avg. price" and a price (e.g., 66,76).
        - A card with the label "# Stores with promotions" and a percentage (e.g., 0,0%).

7. **Footer**:
    - The dashboard includes a footer with the text "© 2023 Loop Technologies. All rights reserved."

For sample data, you could use mock information for products, pricing trends, and retailer information, just ensuring that the data is structured similarly to what's displayed. The dates on the X-axis of the line chart could be spread across recent months, and the pricing could show fluctuations that typically occur in retail scenarios. The retailers could be fictional, but should represent a range of different pricing strategies as seen in the chart. The summary cards' data should reflect calculated values based on the data presented in the table and chart.



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/forloop-retail-tracker.git
cd forloop-retail-tracker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
