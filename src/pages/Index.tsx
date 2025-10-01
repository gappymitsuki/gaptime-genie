import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="container relative mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              MVP Ready
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Gaptime Activity
              </span>
              <br />
              Generator
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground">
              Transform any experience URL into a structured activity with AI-powered extraction.
              From HotPepper to ready-to-use JSON in seconds.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/playground">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Try Playground
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                Works with HotPepper Beauty, Tabelog, Gurunavi, and generic experience pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Domain-specific adapters</li>
                <li>• Structured data extraction</li>
                <li>• Fallback heuristics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-elegant hover:shadow-glow transition-shadow">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Smart Normalization</CardTitle>
              <CardDescription>
                Automatic price detection, duration snapping, and MVP policy enforcement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Duration snap to 15/30/45/60/90 min</li>
                <li>• Minimum price extraction</li>
                <li>• Walk-in friendly disclaimers</li>
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
                Generate both structured JSON and markdown LP blocks instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zod schema validation</li>
                <li>• Verb-leading titles</li>
                <li>• Markdown LP generation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Generate Activities?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start transforming experience URLs into structured activities now
          </p>
          <Link to="/playground">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
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
