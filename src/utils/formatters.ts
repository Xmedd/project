import { format } from 'date-fns';

export const formatDateTime = (date: Date): string => {
  return format(date, 'EEE MMM dd yyyy HH:mm:ss a');
};

export const formatTemperature = (temp: number): string => {
  return `${temp.toFixed(1)}°C`;
};

export const formatWindSpeed = (speed: number): string => {
  return `${speed.toFixed(2)}km/hr`;
};