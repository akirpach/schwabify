"use client";

import { FileLock, Columns3Cog, ChartSpline } from "lucide-react";

import { Button } from "../ui/button";
import { FeatureCard } from "../ui/feature-card";
import { FeatureGrid } from "../ui/feature-grid";

export function Template() {
  return (
    <section id="template">
      <div className="relative overflow-hidden bg-white">
        <div id="template-section" className="relative pt-4 pb-20 sm:pt-16 sm:pb-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-8xl font-bold text-groy-900 mb-6 sm:mb-8 tracking-tight leadning-tight">
                Design{" "}
                <span className="text-card-foreground underline">custom</span>{" "}
                <span className="text-primary">spreadsheets</span> for your{" "}
                <span style={{ color: "#009DDB" }}>trading</span> data
              </h1>
            </div>
          </div>
          <p className="text-2xl md:text-2xl max-w-3xl mx-auto mb-8 text-center font-bold">
            You can customize spreadsheets to accomodate any trading strategy.
            <br />
            Check out one of our customer's favorite template:
          </p>

          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <img
                src="/template/template-spreadsheet.png"
                alt="Customer favorite template spreadsheet"
                className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-center mt-8 mb-1">
            <Button
              size="lg"
              onClick={() => {
                const emailForm = document.getElementById('ag grid');
                if (emailForm) {
                  emailForm.scrollIntoView({ behavior: 'smooth' });
                  // Add emphasis animation to the email input after scrolling
                  setTimeout(() => {
                    const emailInput = emailForm.querySelector('input[type="email"]') as HTMLElement;
                    if (emailInput) {
                      emailInput.classList.add('animate-pulse');
                      emailInput.style.transform = 'scale(1.05)';
                      emailInput.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
                      emailInput.style.transition = 'all 0.3s ease';
                      
                      // Remove animation after 2 seconds
                      setTimeout(() => {
                        emailInput.classList.remove('animate-pulse');
                        emailInput.style.transform = 'scale(1)';
                        emailInput.style.boxShadow = '';
                      }, 2000);
                    }
                  }, 500); // Wait for scroll to complete
                }
              }}
              className="text-secondary-foreground hover:secondary-foreground-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Get Access
            </Button>
            <p className="mt-3 text-sm text-primary">
              Unlock spreadsheet benefits • Apply 100+ custom functions
            </p>
          </div>
          <FeatureGrid>
            <FeatureCard
              icon={<FileLock className="w-6 h-6" />}
              title="Three Legged Workflow"
              description="Integrated Schwab's OAuth 2 protocol (IETF) enabling client-server authentication using LMS. You data is never stored on our servers"
            />
            <FeatureCard
              icon={<Columns3Cog className="w-6 h-6" />}
              title="Fully Customizable"
              description="Build exactly the data table you need. Filter by date, symbol, trade type, or any parameter that matters to you"
            />
            <FeatureCard
              icon={<ChartSpline className="w-6 h-6" />}
              title="Equity & Options Support"
              description="Complete coverage for both equity and options trading data with specialized formatting for each asset type"
            />
          </FeatureGrid>
        </div>
      </div>
    </section>
  );
}