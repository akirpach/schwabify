import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      company: "Alpha Capital",
      rating: 5,
      text: "SchwabifyAI has revolutionized how we interact with Schwab's API. The real-time analytics are game-changing.",
    },
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      company: "Swift Trading",
      rating: 5,
      text: "Lightning-fast execution and comprehensive data. This is exactly what I needed for my trading strategy.",
    },
    {
      name: "Jennifer Park",
      role: "Investment Advisor",
      company: "Wealth Partners",
      rating: 5,
      text: "The risk assessment tools and portfolio insights have made our client meetings much more productive.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Traders Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied traders who've transformed their
            Schwab experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "{testimonial.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

