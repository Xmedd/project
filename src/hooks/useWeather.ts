import { useState, useEffect } from 'react';
import { WeatherData } from '../types';

const DEFAULT_WEATHER: WeatherData = {
  location: "Dum Dum, IN",
  temperature: 25.03,
  feelsLike: 25.89,
  humidity: 88,
  cloudiness: 40,
  windSpeed: 14.83,
  condition: "Mist"
};

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData>(DEFAULT_WEATHER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you would fetch weather data here
    setWeather(DEFAULT_WEATHER);
  }, []);

  return { weather, loading, error };
};