import React from 'react';
import Header from './components/layout/Header';
import CategoryTabs from './components/navigation/CategoryTabs';
import LinkGrid from './components/links/LinkGrid';
import WeatherWidget from './components/weather/WeatherWidget';
import { useWeather } from './hooks/useWeather';
import { LIFESTYLE_LINKS, TECH_LINKS } from './data/categories';

function App() {
  const { weather, loading, error } = useWeather();

  return (
    <div className="min-h-screen bg-emerald-50">
      <Header />
      <CategoryTabs />
      
      <main className="container mx-auto py-6 px-4">
        <div className="space-y-8">
          <LinkGrid category="LIFESTYLE" links={LIFESTYLE_LINKS} />
          <LinkGrid category="TECHNOLOGY" links={TECH_LINKS} />
          
          {!loading && !error && <WeatherWidget data={weather} />}
          {error && (
            <div className="text-red-500 text-center p-4">
              {error}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;