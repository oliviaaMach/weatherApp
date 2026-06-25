# Weather App

A responsive weather dashboard built with React, TypeScript and Vite.

The app lets you search for a city, view current weather, hourly forecast, a five day forecast, weather details and saved favorite cities. It also includes light/dark mode, Swedish/English language support and Celsius/Fahrenheit temperature units.

## Features

- Search weather by city
- Current weather overview
- Hourly forecast
- Five day forecast
- Weather details
- Favorite cities with saved local data
- Map view for the selected location
- Light and dark mode
- Swedish and English UI
- Celsius and Fahrenheit support
- Responsive layout with mobile bottom navigation

## Tech Stack

- React
- TypeScript
- Open-Meteo API
- LocalStorage

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
  components/
  hooks/
  i18n/
  pages/
  services/
  styles/
  types/
  utils/
```

## Deployment

The app is built with Vite and deployed to GitHub Pages through GitHub Actions.

Vite uses this base path:

```ts
base: "/weatherApp/"
```

The production files are generated in:

```txt
dist/
```

## Data

Weather data is provided by the Open-Meteo API.
