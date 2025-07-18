# 🍳 Click & Cook

Click & Cook is a simple and user-friendly React-based web application that allows users to search for a wide variety of recipes using the [Spoonacular API](https://spoonacular.com/food-api). It’s designed to help users discover new dishes and get inspired in the kitchen.

## 🚀 Live Demo

[Click here to view the live app](https://lailamosbah.github.io/click-and-cook/)

---

## 📌 Features

- 🔍 Search for recipes by keyword (e.g., "pasta", "chicken", etc.)
- 🖼️ Display recipe results with images and titles
- 🌐 Fetch real-time data from the Spoonacular API
- 📱 Fully responsive and clean UI

---

## 🛠️ Built With

- **React.js** – Frontend library for building the UI
- **Vite** – Fast development build tool
- **React Router** – Handle navigation between components
- **Axios** – To fetch data from the API
- **Spoonacular API** – For recipe data
- **GitHub Pages** – Deployment

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/LailaMosbah/click-and-cook.git
cd click-and-cook
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 📁 Deployment

This project is deployed using **GitHub Pages**. To deploy:

```bash
npm run build
npm run deploy
```

Make sure the `vite.config.js` file includes the correct `base`:

```js
base: '/click-and-cook/',
```

---

## 🔗 API Reference

This app uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch recipe data. You can register for a free API key and use endpoints like:

```
https://api.spoonacular.com/recipes/complexSearch
```

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

