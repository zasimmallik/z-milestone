# ✨ Z-Milestone: Personal Milestone Tracker ✨

A personalized dashboard application built with **React** and **Vite**, designed to help you track your **personal and professional goals** with a sleek, modern interface.  
It provides a comprehensive overview of your **missions, milestones, daily routines, and fitness progress** — all in one place.

---

## 🌟 Key Features

- 🕒 **Real-time Clock & Calendar**  
  Beautiful glowing clock and a feature-rich calendar to keep track of important dates.

- 🎯 **Dynamic Milestone Tracking**  
  Set milestones and view countdown timers for each one dynamically.

- 🚀 **Comprehensive Mission Roadmap**  
  Visualize your long-term goals through an interactive mission & milestone roadmap.

- 💪 **Fitness Progress Monitoring**  
  Track workouts, health metrics, and visualize your progress with detailed charts.

- 📅 **Daily Routine Management**  
  Organize your life with structured daily and weekly schedules.

- 🎨 **Modern UI with Glassmorphism**  
  Powered by Tailwind CSS + DaisyUI for a beautiful, customizable interface.

- 📱 **Responsive Design**  
  Works seamlessly across all devices — desktop, tablet, and mobile.

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite  
- **Styling:** Tailwind CSS, DaisyUI, PostCSS  
- **Linting:** ESLint  

---

## 🎯 Project Structure

```bash
z-milestone/
│
├── public/
│   ├── All Z-MISSION-And-Milestone.json
│   ├── dailyRoutine.json
│   ├── fitness.json
│   ├── milestones.json
│   ├── Smallmilestone.json
│   ├── Z-MISSION.json
│   └── ZR-MISSION.json
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Shared/
│   │   │   ├── Calendar.jsx
│   │   │   ├── Clock.jsx
│   │   │   ├── Tasks.jsx
│   │   │   └── tooltip.jsx
│   │   │
│   │   ├── Milestones/
│   │   │   ├── DynamicMilestone.jsx
│   │   │   ├── Smallmilestone.jsx
│   │   │   ├── All Z-MISSION-And-Milestone.jsx
│   │   │   ├── Z-MISSION.jsx
│   │   │   └── ZR-MISSION.jsx
│   │   │
│   │   ├── Fitness/
│   │   │   └── Fitness-Progress.jsx
│   │   │
│   │   └── Routine/
│   │       └── DAILY-ROUTINE.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   └── timeUtils.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js

👤 Author
Zasim Mallik
GitHub: @zasimmallik