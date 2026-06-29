export const MAZE_API_KEY = "08008874-e394-447a-b784-c987dcb811d0";

const MAZE_LOADER_URL = "https://snippet.maze.co/maze-universal-loader.js";

let initialized = false;

declare global {
  interface Window {
    mazeUniversalSnippetApiKey?: string;
  }
}

function mazeLoaderScriptPresent(): boolean {
  return Boolean(
    document.querySelector(`script[src^="${MAZE_LOADER_URL}"]`),
  );
}

/**
 * Official Maze Universal Snippet — idempotent, production-only.
 * @see https://maze.co
 */
export function initMaze(): void {
  if (!import.meta.env.PROD) {
    return;
  }

  if (
    initialized ||
    window.mazeUniversalSnippetApiKey ||
    mazeLoaderScriptPresent()
  ) {
    initialized = true;
    return;
  }

  const m = window;
  const a = document;
  const z = MAZE_LOADER_URL;
  const e = MAZE_API_KEY;

  let t: string | null = null;

  try {
    t = m.sessionStorage.getItem("maze-us");
  } catch {
    // sessionStorage may be unavailable
  }

  if (!t) {
    t = String(new Date().getTime());
    try {
      m.sessionStorage.setItem("maze-us", t);
    } catch {
      // sessionStorage may be unavailable
    }
  }

  const u =
    document.currentScript ||
    (function () {
      const w = document.getElementsByTagName("script");
      return w[w.length - 1];
    })();
  const v = u && "nonce" in u ? u.nonce : undefined;

  const s = a.createElement("script");
  s.src = `${z}?apiKey=${e}`;
  s.async = true;
  if (v) {
    s.setAttribute("nonce", v);
  }
  a.getElementsByTagName("head")[0]?.appendChild(s);
  m.mazeUniversalSnippetApiKey = e;

  initialized = true;
}
