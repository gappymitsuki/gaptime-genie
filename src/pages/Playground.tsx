import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { generateFromUrl } from "./api/generate";
import { GenerateResponse } from "@/lib/schema";

const Playground = () => {
  const [url, setUrl] = useState("https://beauty.hotpepper.jp/kr/slnH000042182/?cstt=1");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);
  const [copied, setCopied] = useState<"json" | "markdown" | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to generate an activity.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await generateFromUrl({
        url,
        mvp_mode: true,
      });

      setResult(response);
      toast({
        title: "Success!",
        description: "Activity generated successfully.",
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate activity",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: "json" | "markdown") => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied!",
      description: `${type === "json" ? "JSON" : "Markdown"} copied to clipboard.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Gaptime Activity Generator
          </h1>
          <p className="text-muted-foreground">
            Transform any experience URL into a ready-to-use Gaptime activity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Input URL
              </CardTitle>
              <CardDescription>
                Enter a HotPepper Beauty, Tabelog, or experience page URL
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="url">Experience URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://beauty.hotpepper.jp/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                  className="font-mono text-sm"
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>Generate Activity</>
                )}
              </Button>

              {result && (
                <div className="pt-4 border-t border-border/50">
                  <h3 className="text-sm font-medium mb-2">Source Information</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    <span className="truncate">{result.source.domain}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Generated Output
              </CardTitle>
              <CardDescription>
                Structured JSON and markdown LP block
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!result && !isLoading && (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Enter a URL and click Generate to see results
                </div>
              )}

              {isLoading && (
                <div className="h-64 flex flex-col items-center justify-center gap-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Extracting activity data...</p>
                </div>
              )}

              {result && (
                <div className="space-y-4">
                  {/* Quick Preview */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-lg mb-1">{result.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {result.price && <span>¥{result.price.toLocaleString()}</span>}
                      {result.duration && <span>• {result.duration}</span>}
                    </div>
                  </div>

                  {/* JSON Output */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>JSON Output</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(JSON.stringify(result, null, 2), "json")}
                      >
                        {copied === "json" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Textarea
                      value={JSON.stringify(result, null, 2)}
                      readOnly
                      className="font-mono text-xs h-48 bg-muted/50"
                    />
                  </div>

                  {/* Markdown Output */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Markdown LP Block</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(result.markdown || "", "markdown")}
                      >
                        {copied === "markdown" ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Textarea
                      value={result.markdown}
                      readOnly
                      className="font-mono text-xs h-64 bg-muted/50"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Playground;
