export interface Weather {
  condition: string;
  temperature: number;
  humidity: number;
  idealTempMin: number;
  idealTempMax: number;
  idealLight: string;
  recommendation: string;
}

export interface PlantWeather extends Weather {
  plantId?: string;
}
