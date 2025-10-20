# 🧠 Planora — Smart AI Travel Planner & Tour Guide

### 🌍 Overview  
**Planora** is an intelligent **AI-powered tour guide and travel planner** built using **TypeScript**.  
It crafts **personalized itineraries**, suggests **nearby attractions**, and checks **live weather conditions** to ensure safe and enjoyable trips — all based on how users describe their ideal holidays.

Just tell it *how* you want to spend your time (e.g., “I want a relaxing 3-day trip with nature and food”), and Planora will handle the rest — from destination suggestions to complete day-by-day plans.

---

## 🚀 Features 

- 🧭 **AI Trip Planning** — Creates personalized travel itineraries using AI-driven recommendations.  
- ☀️ **Weather Awareness** — Analyzes live weather data to ensure the destination is safe to visit.  
- 📍 **Nearby Discovery** — Suggests nearby attractions, restaurants, and experiences.  
- 💬 **Natural Language Input** — Users describe their travel style; AI translates it into a trip plan.  
- 🧑‍💻 **Powered by TypeScript** — Strongly typed and scalable backend for reliability and maintainability.  
- 🌐 **API Integration Ready** — Works seamlessly with Google Places, OpenWeather, and AI APIs.  

---

## 🧱 Tech Stack  

| Category | Technology |
|-----------|-------------|
| **Language** | TypeScript |
| **Backend** | Node.js + Express |
| **AI Engine** | OpenAI / Gemini API |
| **Database** | MongoDB / PostgreSQL |
| **APIs Used** | Google Maps, OpenWeather |
| **Deployment** | AWS Lambda / Vercel / Render |

---

## ⚙️ Installation & Setup  

```bash
# Clone this repository
git clone https://github.com/procoderr45/Planora.git

# Navigate into the project folder
cd Planora

# Install dependencies
npm install

# Add environment variables in .env file
OPENAI_API_KEY=your_api_key
WEATHER_API_KEY=your_api_key
GOOGLE_PLACES_API_KEY=your_api_key

# Run the development server
npm run dev
