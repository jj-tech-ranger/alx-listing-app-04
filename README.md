# 🏠 ALX Listing App

## 📘 Overview
The **ALX Listing App** is an Airbnb-style project designed to help learners understand how to build and structure scalable frontend applications using **Next.js**, **TypeScript**, and **Tailwind CSS**.

This milestone focuses on setting up the **project foundation**, including folder structure, TypeScript integration, reusable components, and asset management.

---

## 🧱 Project Structure
alx-listing-app/
├── pages/ # Next.js pages (using Pages Router)
│ └── index.tsx
├── components/ # Reusable UI components
│ └── common/
│ ├── Card.tsx
│ └── Button.tsx
├── interfaces/ # TypeScript interfaces
│ └── index.ts
├── constants/ # Reusable constants and configurations
│ └── index.ts
├── public/
│ └── assets/ # Images and SVGs used across the project
│ ├── placeholder.jpg
│ └── logo.svg
└── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Open the app in your browser
http://localhost:3000

🧩 Tech Stack

Next.js – React framework for server-side rendering and routing

TypeScript – Provides static typing for better code reliability

Tailwind CSS – Utility-first CSS framework for styling

ESLint – Ensures consistent and clean code

📁 Folder Descriptions
🧱 components/

Contains reusable UI components used throughout the project.

common/Card.tsx → Displays property information (image, title, description).

common/Button.tsx → Reusable button for various actions like “Book Now” or “Learn More”.

🧩 interfaces/

Defines TypeScript interfaces for component props and project data models.

⚙️ constants/

Stores reusable constants such as API URLs, configuration settings, and static text values.

🖼️ public/assets/

Contains images, icons, and other static files accessible via /assets/....

✅ Verification

After setup:

Run:

npm run dev


Visit:

http://localhost:3000


You should see:

A welcome message

Several Card components with property details

A Button styled with Tailwind CSS

👨‍💻 Author

Waqo Dida Godana
GitHub: Waqo-Dida-Godana

🏁 Conclusion

This project serves as the foundation for building a full-featured Airbnb-style listing app.
It demonstrates:

Proper Next.js project setup

Clean TypeScript integration

Responsive UI with Tailwind CSS

Maintainable and scalable component-based architecture