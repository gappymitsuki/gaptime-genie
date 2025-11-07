import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Zap, Code2, Sparkles, Loader2, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ThingToDo } from "@/lib/schema";

const Index = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ThingToDo | null>(null);
  const [copied, setCopied] = useState<"json" | "text" | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!url) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to generate a thing to do.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      // Call the Edge Function
      const response = await fetch("/functions/v1/generate-thing-from-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ThingToDo = await response.json();
      setResult(data);
      toast({
        title: "Success!",
        description: "Thing to do generated successfully.",
      });
    } catch (error) {
      console.error("Generation error:", error);
      toast({
        title: "Generation Failed",
        description: error instanceof Error ? error.message : "Failed to generate thing to do",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, type: "json" | "text") => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied!",
      description: `${type === "json" ? "JSON" : "Text"} copied to clipboard.`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  const formatHumanReadable = (thing: ThingToDo): string => {
    const lines: string[] = [];
    lines.push(`Title: ${thing.title}`);
    if (thing.shortTitle) lines.push(`Short Title: ${thing.shortTitle}`);
    lines.push(`\nDescription:\n${thing.description}`);
    lines.push(`\nCategory: ${thing.category}`);
    if (thing.durationMinutes) lines.push(`Duration: ${thing.durationMinutes} minutes`);
    if (thing.minPriceJpy || thing.maxPriceJpy) {
      const priceRange = `¥${thing.minPriceJpy?.toLocaleString() || "?"} - ¥${thing.maxPriceJpy?.toLocaleString() || "?"}`;
      lines.push(`Price Range: ${priceRange}`);
    }
    lines.push(`\nTags: ${thing.tags.join(", ")}`);
    if (thing.location.name) lines.push(`\nLocation: ${thing.location.name}`);
    if (thing.location.address) lines.push(`Address: ${thing.location.address}`);
    if (thing.location.lat && thing.location.lng) {
      lines.push(`Coordinates: ${thing.location.lat}, ${thing.location.lng}`);
    }
    if (thing.languageHints && thing.languageHints.length > 0) {
      lines.push(`\nLanguages: ${thing.languageHints.join(", ")}`);
    }
    lines.push(`\nSource URL: ${thing.sourceUrl}`);
    if (thing.notes) lines.push(`\nNotes: ${thing.notes}`);
    return lines.join("\n");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

        <div className="container relative mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Things to Do
              </span>
              <br />
              Generator
            </h1>

            <p className="mb-8 text-xl text-muted-foreground">
              Generate structured "Things to Do" data from any URL - restaurants, beauty salons, activities, and more.
              Perfect for Gappy and other experience platforms.
            </p>

            {/* Generator Form */}
            <div className="mx-auto max-w-xl">
              <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-left">Generate from URL</CardTitle>
                  <CardDescription className="text-left">
                    Enter any experience URL to generate structured data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="url">Experience URL</Label>
                    <Input
                      id="url"
                      type="url"
                      placeholder="https://example.com/restaurant-or-activity"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      disabled={isLoading}
                      className="font-mono text-sm"
                    />
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={isLoading || !url}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate Things to Do
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-3xl font-bold text-center">Generated Result</h2>

            {/* Quick Preview */}
            <Card className="mb-6 backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{result.title}</span>
                  <span className="text-sm font-normal text-muted-foreground capitalize">
                    {result.category}
                  </span>
                </CardTitle>
                {result.shortTitle && (
                  <CardDescription className="text-base">{result.shortTitle}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{result.description}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                  {result.durationMinutes && (
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{result.durationMinutes} minutes</span>
                    </div>
                  )}
                  {(result.minPriceJpy || result.maxPriceJpy) && (
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-accent" />
                      <span>
                        ¥{result.minPriceJpy?.toLocaleString() || "?"} - ¥{result.maxPriceJpy?.toLocaleString() || "?"}
                      </span>
                    </div>
                  )}
                </div>

                {result.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {result.location.name && (
                  <div className="flex items-start gap-2 text-sm">
                    <ExternalLink className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{result.location.name}</div>
                      {result.location.address && (
                        <div className="text-muted-foreground">{result.location.address}</div>
                      )}
                    </div>
                  </div>
                )}

                {result.notes && (
                  <div className="p-3 bg-accent/10 rounded-md border border-accent/20">
                    <p className="text-sm"><strong>Notes:</strong> {result.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* JSON and Human-Readable Output */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* JSON Output */}
              <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>JSON Output</CardTitle>
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
                  <CardDescription>Structured data in JSON format</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={JSON.stringify(result, null, 2)}
                    readOnly
                    className="font-mono text-xs h-96 bg-muted/50"
                  />
                </CardContent>
              </Card>

              {/* Human-Readable Output */}
              <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Human-Readable</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(formatHumanReadable(result), "text")}
                    >
                      {copied === "text" ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <CardDescription>Formatted text output</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formatHumanReadable(result)}
                    readOnly
                    className="font-mono text-xs h-96 bg-muted/50"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant hover:shadow-glow transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Multi-Domain Support</CardTitle>
              <CardDescription>
                Extract structured data from restaurants, beauty salons, activities, and more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Restaurant listings</li>
                <li>• Beauty & wellness</li>
                <li>• Activities & experiences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant hover:shadow-glow transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Smart Data Extraction</CardTitle>
              <CardDescription>
                AI-powered extraction with automatic categorization and normalization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Category detection</li>
                <li>• Price range extraction</li>
                <li>• Location & map data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant hover:shadow-glow transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Ready-to-Use Output</CardTitle>
              <CardDescription>
                Get both JSON and human-readable formats instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Structured JSON data</li>
                <li>• Human-readable text</li>
                <li>• Copy with one click</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold">Need More Advanced Features?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Check out our full-featured Playground for additional customization options
          </p>
          <Link to="/playground">
            <Button size="lg" variant="outline">
              Open Playground
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
