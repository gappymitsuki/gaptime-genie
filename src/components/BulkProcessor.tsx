import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { ThingToDo } from "@/lib/schema";

interface BulkResult {
  url: string;
  status: "pending" | "processing" | "success" | "error";
  data?: ThingToDo;
  error?: string;
}

interface BulkProcessorProps {
  onComplete: (results: BulkResult[]) => void;
}

export function BulkProcessor({ onComplete }: BulkProcessorProps) {
  const [urls, setUrls] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<BulkResult[]>([]);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const parseUrls = (text: string): string[] => {
    return text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0 && line.startsWith("http"));
  };

  const processUrl = async (url: string): Promise<BulkResult> => {
    try {
      const response = await fetch("/functions/v1/generate-thing-from-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: ThingToDo = await response.json();

      return {
        url,
        status: "success",
        data,
      };
    } catch (error) {
      return {
        url,
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };

  const handleProcess = async () => {
    const urlList = parseUrls(urls);

    if (urlList.length === 0) {
      toast({
        title: "No URLs",
        description: "Please enter at least one URL",
        variant: "destructive",
      });
      return;
    }

    if (urlList.length > 10) {
      toast({
        title: "Too Many URLs",
        description: "Maximum 10 URLs allowed per batch",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    const initialResults: BulkResult[] = urlList.map(url => ({
      url,
      status: "pending",
    }));
    setResults(initialResults);

    const finalResults: BulkResult[] = [];

    for (let i = 0; i < urlList.length; i++) {
      const url = urlList[i];

      // Update status to processing
      setResults(prev =>
        prev.map(r => (r.url === url ? { ...r, status: "processing" as const } : r))
      );

      const result = await processUrl(url);
      finalResults.push(result);

      // Update result
      setResults(prev => prev.map(r => (r.url === url ? result : r)));

      // Update progress
      setProgress(((i + 1) / urlList.length) * 100);

      // Small delay between requests to avoid rate limiting
      if (i < urlList.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setIsProcessing(false);
    onComplete(finalResults);

    const successCount = finalResults.filter(r => r.status === "success").length;
    toast({
      title: "Batch Complete",
      description: `${successCount}/${urlList.length} URLs processed successfully`,
    });
  };

  const getStatusIcon = (status: BulkResult["status"]) => {
    switch (status) {
      case "processing":
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />;
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 rounded-full border-2 border-gray-300" />;
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Bulk URL Processing</CardTitle>
          <CardDescription>
            Enter multiple URLs (one per line) to process them in batch. Maximum 10 URLs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="https://example.com/restaurant-1&#10;https://example.com/activity-1&#10;https://example.com/beauty-salon-1"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
            disabled={isProcessing}
            className="font-mono text-sm min-h-[150px]"
          />

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {parseUrls(urls).length} URLs detected
            </div>
            <Button
              onClick={handleProcess}
              disabled={isProcessing || parseUrls(urls).length === 0}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Process All</>
              )}
            </Button>
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <Progress value={progress} />
              <div className="text-sm text-center text-muted-foreground">
                {Math.round(progress)}% complete
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Processing Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border bg-card"
                >
                  {getStatusIcon(result.status)}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-mono truncate">{result.url}</div>
                    {result.data && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {result.data.title}
                      </div>
                    )}
                    {result.error && (
                      <div className="text-xs text-red-500 mt-1">{result.error}</div>
                    )}
                  </div>
                  {result.status === "success" && result.data && (
                    <Badge variant="outline" className="capitalize">
                      {result.data.category}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
