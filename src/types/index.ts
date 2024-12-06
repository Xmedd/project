export interface Category {
  id: string;
  title: string;
  links: Link[];
}

export interface Link {
  id: string;
  title: string;
  url: string;
  logo: string;
}

export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  cloudiness: number;
  windSpeed: number;
  condition: string;
}