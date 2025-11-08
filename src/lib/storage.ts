import { ThingToDo } from "./schema";

export interface HistoryItem {
  id: string;
  thingToDo: ThingToDo;
  createdAt: string;
  isFavorite: boolean;
}

const HISTORY_KEY = "thingsToDo_history";
const FAVORITES_KEY = "thingsToDo_favorites";
const MAX_HISTORY = 50;

// Generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Get all history
export function getHistory(): HistoryItem[] {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to get history:", e);
    return [];
  }
}

// Add to history
export function addToHistory(thingToDo: ThingToDo): HistoryItem {
  const history = getHistory();

  const newItem: HistoryItem = {
    id: generateId(),
    thingToDo,
    createdAt: new Date().toISOString(),
    isFavorite: false,
  };

  // Add to beginning and limit to MAX_HISTORY
  const updatedHistory = [newItem, ...history].slice(0, MAX_HISTORY);

  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
  } catch (e) {
    console.error("Failed to save history:", e);
  }

  return newItem;
}

// Remove from history
export function removeFromHistory(id: string): void {
  const history = getHistory();
  const filtered = history.filter(item => item.id !== id);

  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error("Failed to remove from history:", e);
  }
}

// Clear all history
export function clearHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error("Failed to clear history:", e);
  }
}

// Toggle favorite
export function toggleFavorite(id: string): void {
  const history = getHistory();
  const updated = history.map(item =>
    item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
  );

  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to toggle favorite:", e);
  }
}

// Get favorites
export function getFavorites(): HistoryItem[] {
  return getHistory().filter(item => item.isFavorite);
}

// Export to CSV
export function exportToCSV(items: HistoryItem[]): string {
  const headers = [
    "Title",
    "Short Title",
    "Description",
    "Category",
    "Duration (min)",
    "Min Price (JPY)",
    "Max Price (JPY)",
    "Tags",
    "Location Name",
    "Address",
    "Latitude",
    "Longitude",
    "Languages",
    "Source URL",
    "Notes",
    "Created At",
  ];

  const rows = items.map(item => {
    const thing = item.thingToDo;
    return [
      thing.title,
      thing.shortTitle || "",
      thing.description,
      thing.category,
      thing.durationMinutes || "",
      thing.minPriceJpy || "",
      thing.maxPriceJpy || "",
      thing.tags.join("; "),
      thing.location.name || "",
      thing.location.address || "",
      thing.location.lat || "",
      thing.location.lng || "",
      thing.languageHints?.join("; ") || "",
      thing.sourceUrl,
      thing.notes || "",
      item.createdAt,
    ];
  });

  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
  ].join("\n");

  return csvContent;
}

// Export to JSON
export function exportToJSON(items: HistoryItem[]): string {
  return JSON.stringify(items, null, 2);
}

// Download file
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
