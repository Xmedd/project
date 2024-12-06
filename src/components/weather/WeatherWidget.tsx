import React from 'react';
import { WeatherData } from '../../types';
import WeatherIcon from './WeatherIcon';
import { formatTemperature, formatWindSpeed } from '../../utils/formatters';

interface WeatherWidgetProps {
  data: WeatherData;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mt-4">
      <div className="flex items-center justify-center space-x-4">
        <WeatherIcon condition={data.condition} />
        <div>
          <p className="text-lg font-semibold">{data.location}</p>
          <p className="text-sm text-gray-600">
            Temperature: {formatTemperature(data.temperature)}, 
            Feels like: {formatTemperature(data.feelsLike)}
          </p>
          <p className="text-sm text-gray-600">
            Humidity: {data.humidity}%, 
            Wind Speed: {formatWindSpeed(data.windSpeed)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;