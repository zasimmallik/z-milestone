✨ Z-Milestone: Personal Milestone Tracker ✨
Z-Milestone is a personalized dashboard application built with React and Vite, designed to help you track your personal and professional goals with a sleek, modern interface. It provides a comprehensive overview of your missions, milestones, daily routines, and fitness progress, all in one place.

✨ Features
Real-time Clock and Calendar: A beautiful, glowing clock displays the current time, and a full-featured calendar helps you keep track of dates.

Dynamic Milestone Tracking: Set your key milestones and see the time remaining for each one with a dynamic countdown.

Comprehensive Mission Roadmap: Visualize your long-term goals with a detailed roadmap of all your missions and milestones.

Fitness Progress Monitoring: Track your fitness journey with detailed metrics and progress bars to visualize your gains.

Daily Routine Management: Keep your life organized with a clear and concise display of your daily and weekly routines.

Themed and Customizable UI: The application is styled with Tailwind CSS and DaisyUI, featuring a "glassmorphism" effect for a modern aesthetic.

Responsive Design: The application is fully responsive and works beautifully on all devices.

🛠️ Technologies Used
Frontend: React, Vite

Styling: Tailwind CSS, DaisyUI, PostCSS

Linting: ESLint

📂 Project Structure
z-milestone/
├── public/
│   ├── All Z-MISSION-And-Milestone.json
│   ├── dailyRoutine.json
│   ├── fitness.json
│   ├── milestones.json
│   ├── Smallmilestone.json
│   ├── Z-MISSION.json
│   └── ZR-MISSION.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── All Z-MISSION-And-Milestone.jsx
│   │   ├── Calendar.jsx
│   │   ├── Clock.jsx
│   │   ├── DAILY-ROUTINE.jsx
│   │   ├── DynamicMilestone.jsx
│   │   ├── Fitness-Progress.jsx
│   │   ├── Smallmilestone.jsx
│   │   ├── Tasks.jsx
│   │   ├── Z-MISSION.jsx
│   │   └── ZR-MISSION.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── timeUtils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js

📊 Data Sources
The application's data is fetched from JSON files located in the public directory. This makes it easy to update your goals and routines by simply editing the corresponding JSON file.

All Z-MISSION-And-Milestone.json: Contains the data for the main mission and milestone roadmap.

dailyRoutine.json: Stores the daily and weekly schedules.

fitness.json: Holds the fitness goals and progress data.

milestones.json, Smallmilestone.json, Z-MISSION.json, ZR-MISSION.json: Contain data for the various milestone components.

✍️ Author
Zasim Mallik

GitHub: @zasimmallik