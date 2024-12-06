import React from 'react';
import { WeatherData } from '../types';

interface WeatherWidgetProps {
  data: WeatherData;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
      <div className="flex items-center justify-center space-x-4">
        <div className="text-4xl">🌤️</div>
        <div>
          <p className="text-lg font-semibold">{data.location}</p>
          <p className="text-sm text-gray-600">
            Temperature: {data.temperature}°C, Feels like: {data.feelsLike}°C
          </p>
          <p className="text-sm text-gray-600">
            Humidity: {data.humidity}%, Wind Speed: {data.windSpeed}km/hr
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;