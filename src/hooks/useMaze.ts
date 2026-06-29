import { useEffect } from "react";
import { initMaze } from "@/lib/maze";

/** Initializes Maze once when the app mounts (production only). */
export function useMaze(): void {
  useEffect(() => {
    initMaze();
  }, []);
}
