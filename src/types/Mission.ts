export interface Mission {
  id: string;
  plantId: string;
  title: string;
  description: string;
  observationOptions: string[];
  completed: boolean;
  completedAt?: string;
}
