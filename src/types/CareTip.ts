export interface CareTip {
  id: string;
  plantId: string;
  title: string;
  description: string;
  category: "weather" | "watering" | "environment" | "growth";
}
