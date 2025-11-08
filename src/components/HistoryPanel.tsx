import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Trash2, Download, FileJson, FileSpreadsheet } from "lucide-react";
import { ThingToDo } from "@/lib/schema";
import {
  getHistory,
  getFavorites,
  removeFromHistory,
  toggleFavorite,
  clearHistory,
  exportToCSV,
  exportToJSON,
  downloadFile,
  HistoryItem,
} from "@/lib/storage";
import { useToast } from "@/hooks/use-toast";

interface HistoryPanelProps {
  onSelect: (thingToDo: ThingToDo) => void;
}

export function HistoryPanel({ onSelect }: HistoryPanelProps) {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites, setFavorites] = useState<HistoryItem[]>([]);
  const { toast } = useToast();

  const refreshData = () => {
    setHistory(getHistory());
    setFavorites(getFavorites());
  };

  useEffect(() => {
    refreshData();

    // Listen for storage events
    const handleStorageChange = () => {
      refreshData();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
    refreshData();
    toast({
      title: "Updated",
      description: "Favorite status updated",
    });
  };

  const handleRemove = (id: string) => {
    removeFromHistory(id);
    refreshData();
    toast({
      title: "Removed",
      description: "Item removed from history",
    });
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      clearHistory();
      refreshData();
      toast({
        title: "Cleared",
        description: "All history has been cleared",
      });
    }
  };

  const handleExportCSV = (items: HistoryItem[]) => {
    const csv = exportToCSV(items);
    downloadFile(csv, `things-to-do-${Date.now()}.csv`, "text/csv");
    toast({
      title: "Exported",
      description: "Data exported to CSV",
    });
  };

  const handleExportJSON = (items: HistoryItem[]) => {
    const json = exportToJSON(items);
    downloadFile(json, `things-to-do-${Date.now()}.json`, "application/json");
    toast({
      title: "Exported",
      description: "Data exported to JSON",
    });
  };

  const renderItem = (item: HistoryItem) => (
    <Card key={item.id} className="mb-4 hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader onClick={() => onSelect(item.thingToDo)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{item.thingToDo.title}</CardTitle>
            <CardDescription className="mt-1">
              {item.thingToDo.description.substring(0, 100)}...
            </CardDescription>
          </div>
          <Badge variant="outline" className="ml-2 capitalize">
            {item.thingToDo.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {item.thingToDo.durationMinutes && (
              <Badge variant="secondary">{item.thingToDo.durationMinutes} min</Badge>
            )}
            {item.thingToDo.minPriceJpy && (
              <Badge variant="secondary">¥{item.thingToDo.minPriceJpy.toLocaleString()}</Badge>
            )}
            {item.thingToDo.tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite(item.id);
              }}
            >
              <Heart
                className={`h-4 w-4 ${item.isFavorite ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(item.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {new Date(item.createdAt).toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="all">
              All History ({history.length})
            </TabsTrigger>
            <TabsTrigger value="favorites">
              Favorites ({favorites.length})
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExportCSV(history)}
              disabled={history.length === 0}
            >
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExportJSON(history)}
              disabled={history.length === 0}
            >
              <FileJson className="h-4 w-4 mr-2" />
              JSON
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleClearAll}
              disabled={history.length === 0}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          {history.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No history yet. Start generating some Things to Do!
              </CardContent>
            </Card>
          ) : (
            <div className="max-h-[600px] overflow-y-auto">
              {history.map(renderItem)}
            </div>
          )}
        </TabsContent>

        <TabsContent value="favorites">
          {favorites.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No favorites yet. Click the heart icon to add favorites!
              </CardContent>
            </Card>
          ) : (
            <div className="max-h-[600px] overflow-y-auto">
              {favorites.map(renderItem)}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
