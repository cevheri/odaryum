// Utility helpers used across the app
// - Keep functions pure and focused

export function cn(...classes: Array<string | undefined | null | false>): string {
  // Merge conditional className values into a single string
  return classes.filter(Boolean).join(" ");
}

export function randomItemFromArray<T>(items: T[]): T {
  // Return a single random item from an array (throws on empty)
  if (items.length === 0) throw new Error("Array is empty");
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function formatSeconds(totalSeconds: number): string {
  // Format seconds as mm:ss for display
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function wait(ms: number): Promise<void> {
  // Simple delay utility for simulating async states
  return new Promise((resolve) => setTimeout(resolve, ms));
}


