import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Trading?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of traders who are already taking control of their
          Schwab data with SchwabifyAI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
          >
            Start Free Trial
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
