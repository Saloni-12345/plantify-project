# Plantify 🌿

AI-Powered Plant Disease Detection & Diagnosis System

## 📌 Project Overview

Plantify is a web-based AI application that detects plant diseases using plant leaf images. Users can upload an image of a plant leaf, and the system predicts the disease along with diagnosis-related information using a Deep Learning model.

The project is developed using **React JS** for the frontend and **Python Flask** for the backend. The disease prediction model is built using **TensorFlow** and other Python libraries.

---

# ✨ Features

* 🌱 Plant Disease Detection using AI
* 📷 Upload Leaf Images for Prediction
* 🧠 Deep Learning-Based Disease Classification
* 🌦️ Weather Forecasting Page
* 🖼️ Plant Gallery with Plant Information
* 👨‍💻 About Us Page
* ⚡ Fast and Interactive React Frontend
* 🔗 Flask API Integration

---

# 🛠️ Technologies Used

## Frontend

* React JS
* JavaScript
* HTML5
* CSS3

## Backend

* Python
* Flask

## Deep Learning & Python Libraries

* TensorFlow
* NumPy
* Matplotlib
* JSON
* UUID
* OS

---

# 📂 Project Structure

```bash
src/
│
└── uiPlantifyProject/
    │
    ├── backend/
    │   │
    │   ├── archive/
    │   │   └── New Plant Diseases Dataset(Augmented)/
    │   │       ├── train/
    │   │       ├── valid/
    │   │       └── test/
    │   │
    │   └── server/
    │       │
    │       ├── models/                 # Trained deep learning models
    │       ├── uploadimages/           # Uploaded leaf images
    │       ├── app1.py                 # Flask backend server
    │       └── plant_disease.json      # Disease information data
    │
    └── frontend/
        │
        ├── css/                        # CSS styling files
        ├── images/                     # Static images
        │
        └── userModule/
            │
            ├── about.jsx               # About page
            ├── disease.jsx             # Disease detection page
            ├── gallery.jsx             # Plant gallery page
            ├── homePage.jsx            # Home page
            ├── mainPlantify.jsx        # Main application component
            ├── mainUserComponent.jsx   # User component controller
            ├── navbarPlants.jsx        # Navigation bar
            └── weather.jsx             # Weather forecasting page
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
cd uiPlantifyProject
```

---

# 🚀 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

---

# 🔥 Backend Setup

```bash
cd backend/server
pip install -r requirements.txt
python app1.py
```

Backend server will run on:

```bash
http://127.0.0.1:5000
```

---

# 🧠 How Disease Detection Works

1. User uploads a plant leaf image
2. React frontend sends image to Flask backend
3. TensorFlow model processes the image
4. Model predicts the plant disease
5. Prediction and diagnosis information are displayed to the user

---

# 🌦️ Weather Forecasting Module

The weather module provides weather information for different locations, helping users understand environmental conditions affecting plants and crops.

---

# 🖼️ Gallery Module

The gallery section displays:

* Different plant images
* Plant-related details and information
* Educational content for users

---

# 🎯 Future Enhancements

* 📱 Mobile App Integration
* 🌍 Multi-language Support
* 🤖 AI Chatbot for Farmers
* 📊 Better Disease Accuracy
* ☁️ Cloud Deployment

---

# 🤝 Contribution

Contributions are welcome.

You can:

* Fork the repository
* Create a new branch
* Submit a pull request

---

# 📄 License

This project is developed for educational and research purposes only.

---

# 👩‍💻 Developed Using ❤️

* React JS
* Flask
* TensorFlow
* Python
* Deep Learning
* Artificial Intelligence for Agriculture 🌾
