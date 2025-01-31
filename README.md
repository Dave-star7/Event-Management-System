# Weather App (Django)

A **Django-based web application** that fetches real-time weather data for a given city using the OpenWeather API and displays a relevant image of the city using the Unsplash API.

## Features

- **Real-time Weather Data:** Fetches current weather conditions (temperature, description, and icon) for any city using the OpenWeather API.
- **City Image:** Displays a relevant image of the searched city using the Unsplash API.
- **User-Friendly Interface:** Simple and intuitive interface for users to input a city name and view weather details.
- **Default City:** If no city is provided, the app defaults to Nairobi.

## Technologies Used

### Backend
- **Django**: Python-based web framework for building the application.
- **OpenWeather API**: Provides real-time weather data.
- **Unsplash API**: Fetches high-quality images of cities.

### Frontend
- **HTML/CSS**: For creating a responsive and engaging user interface.
- **Bootstrap**: For styling the frontend (optional).

### Tools
- **Requests**: For making API calls to OpenWeather and Unsplash.
- **python-dotenv**: For managing environment variables (optional).

## Setup Instructions

### Prerequisites
1. **Python 3.x** (Latest version recommended)
2. **Django** (To run the backend)
3. **Requests library** (For API calls)
4. **API keys for OpenWeather and Unsplash** (For fetching weather data and images)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Set up a virtual environment:**
   ```bash
   python -m venv myenv
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt

4. **Set up API keys:**
   Obtain an API key from OpenWeather and Unsplash.
   Replace the placeholders in the views.py file with your actual API keys:
