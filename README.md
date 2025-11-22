📡 ULOG3 – Satellite Live Metrics Dashboard

A real-time telemetry visualization dashboard for ULOG3, the world’s first fully functional neuromorphic CubeSat.
This project simulates and visualizes core satellite metrics such as Temperature, Altitude, Pressure, and Orientation, with mission timer and balloon status — all built using HTML, CSS, JavaScript, Chart.js, and Lucide Icons.

🚀 Features
🔸 Real-Time Metric Simulation

Automatically updates every 2 seconds:

Temperature

Altitude

Pressure

Angle (orientation)

Each metric is shown with:

A real-time mini chart

Current value card

Dynamic status indicator

🔸 Mission Timer

Start, stop, and reset mission timer with HH:MM:SS formatting.

🔸 Balloon & Stability Status

Safe

Critical

Ascending

Descending

Determined by generated metric behavior.

🔸 Landing Prediction

Predicts approximate descent time based on current metrics.

🔸 Smooth UI

Card-based design

Lucide icons

JetBrains Mono font

Fully responsive metrics grid

🧠 Technology Stack
Component	Tech
UI	HTML5, CSS3
Charts	Chart.js
Icons	Lucide Icons
Logic	Vanilla JavaScript
Fonts	JetBrains Mono
📂 Project Structure
ULOG3/
 ├── index.html
 ├── script.js
 ├── styles.css
 ├── assets/
 └── README.md

⚙️ How It Works

The dashboard generates a new metric sample every 2 seconds using sinusoidal + random variations:

const variations = {
  temperature: 24.5 + (Math.sin(Date.now() / 10000) * 2) + (Math.random() - 0.5),
  altitude: 1234 + Math.sin(Date.now() / 20000) * 100 + (Math.random() * 20 - 10),
  pressure: 1013 + Math.cos(Date.now() / 15000) * 5 + (Math.random() * 2 - 1),
  angle: 45.2 + Math.sin(Date.now() / 8000) * 10 + (Math.random() * 5 - 2.5)
};


These updates:

UI cards

Individual line charts

Balloon health

Mission timer

Landing prediction

📦 How to Run

Clone the repo:

git clone https://github.com/Seril12/ULOG3


Open the directory:

cd ULOG3


Run the dashboard by opening:

index.html


No installation. No build. Pure HTML/CSS/JS.

📸 Screenshots

(Add your interface screenshots here)

🧭 Future Enhancements

Integrate real satellite telemetry via WebSocket

GPS/velocity charts

Battery and subsystem health tracking

Admin dashboard for mission control

API endpoint for hot metrics

👩‍🚀 Author

Seril Evanjaline S
Ground Station Engineer, ULOG3
Chennai Institute of Technology
