import weatherData from "@/data/weather.json";
import type { Weather } from "@/types/Weather";

interface WeatherDataFile {
  default: Weather;
  plants: Record<string, Weather>;
}

const data = weatherData as WeatherDataFile;

export function getDefaultWeather(): Weather {
  return data.default;
}

export function getWeatherForPlant(plantId: string): Weather {
  return data.plants[plantId] ?? data.default;
}
