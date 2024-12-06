import React from 'react';

interface WeatherIconProps {
  condition: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'mist':
        return '🌫️';
      case 'sunny':
        return '☀️';
      case 'cloudy':
        return '☁️';
      case 'rainy':
        return '🌧️';
      default:
        return '🌤️';
    }
  };

  return <span className="text-4xl" role="img" aria-label={condition}>{getIcon()}</span>;
};

export default WeatherIcon;