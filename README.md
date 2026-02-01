🌐 URL Shortener Web App

A modern URL Shortener web application built with React (Vite) for the frontend and Node.js + Express + MongoDB for the backend. Users can shorten long URLs, track clicks, and manage their links in a simple and responsive interface. The app is fully deployed on Render (backend) and Netlify (frontend).

💻 Demo

Frontend:  https://loquacious-hummingbird-d344fe.netlify.app/

Backend API:  https://url-shortner-6lrw.onrender.com/api

✨ Features

- Shorten long URLs into concise, shareable links

- Track the number of clicks on each URL

- Responsive design for mobile and desktop

- Frontend and backend deployed separately

- Easy environment configuration for development and production

🛠 Tech Stack

Frontend:

- React (Vite)
- TypeScript

- Axios

- Tailwind CSS

Backend:

- Node.js + Express

- MongoDB (Mongoose)

- nanoid (short URL generator)

- CORS configuration

Deployment:

- Frontend: Netlify

- Backend: Render

📂 Project Structure

url-shortner-app/
├─ client-app/
│  ├─ src/
│  │  ├─ components/       
│  │  ├─ helpers/         
│  │  └─ App.tsx
│  └─ vite.config.ts
├─ server/
│  ├─ routes/              
│  ├─ controllers/         
│  ├─ models/              
│  ├─ config/            
│  └─ server.js            
├─ .env                    
└─ README.md

⚡ Getting Started
Prerequisites

Node.js v18+

npm or yarn

MongoDB Atlas account or local MongoDB

Installation
git clone https://github.com/vidhisingh151/url-shortener.git

cd url-shortener

Backend

cd server-app

npm install

npm start

Frontend

cd client-app

npm install

npm run dev

Open http://localhost:5000
 in your browser.

 🗝 Environment Variables
Backend (server/.env)
PORT=5000
MONGO_URI=<your-mongodb-uri>
Frontend (client-app/.env)
VITE_SERVER_URL=https://url-shortner-6lrw.onrender.com/api


🔗 API Endpoints
| Method | Endpoint        | Description                   |
| ------ | --------------- | ----------------------------- |
| POST   | `/api/shortUrl` | Create a new short URL        |
| GET    | `/api/shortUrl` | Get all short URLs            |
| GET    | `/api/:shortId` | Redirect to original full URL |

🚀 Deployment

Frontend deployed on Netlify

Backend deployed on Render

CORS Configuration

The backend is configured to allow requests from the deployed frontend and localhost during development.

🛠 Future Enhancements

- User authentication and personalized links

- Analytics dashboard with charts

- Custom short URL aliases

- Rate limiting & security enhancements


