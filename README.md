# Weather App (Django)

A **Django-based web application** that fetches real-time weather data for a given city using the OpenWeather API and displays a relevant image of the city using the Unsplash API.

## Live Site

You can access the live version of this project at:  
[Live Weather App](https://nyarangi.pythonanywhere.com)

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

4. **Set Up API Keys:**

- Obtain an API key from [OpenWeather](https://openweathermap.org/api) and [Unsplash](https://unsplash.com/developers).
- Replace the placeholders in the `views.py` file with your actual API keys:

  ```python
  OPENWEATHER_API_KEY = "your_openweather_api_key"
  UNSPLASH_API_KEY = "your_unsplash_api_key"

5. **Run Migrations:**
   ```bash
   python manage.py migrate

6. **Start the server:**
   ```bash
   python manage.py runserver

7. **Access the Application:**

Open your browser and navigate to `http://127.0.0.1:8000/` to view the application.

## Usage

1. On the homepage, enter the name of a city in the input field and click "Search."
2. The app will display:
   - Current weather conditions (temperature, description, and weather icon).
3. If no city is entered, the app defaults to Nairobi.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **OpenWeather** for providing the weather data API.
- **Unsplash** for providing high-quality images.
- **Django** and the Python community for their amazing tools and libraries.



