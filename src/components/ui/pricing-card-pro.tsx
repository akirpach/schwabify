"use client";

import { Check } from "lucide-react";

export function PricingCardPro() {
  return (
    <div className="w-full max-w-[350px] relative">
      {/* Try it out floating button */}
      <div className="absolute -top-6 -right-6 z-10">
        <div className="relative">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-xl transform -rotate-6 border-2 border-primary">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">Try it out</span>
              <span className="text-[10px] opacity-90">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-secondary/80 via-card/60 to-accent/70 text-card-foreground shadow-lg backdrop-blur-md shadow-primary/20 transition-all duration-300 ease-out hover:shadow-xl hover:scale-[1.01] dark:from-zinc-900/60 dark:via-zinc-800/40 dark:to-zinc-900/70 dark:border-zinc-700/40 dark:shadow-zinc-900/25 dark:hover:shadow-zinc-800/40 h-full relative overflow-hidden flex flex-col border border-primary border-2 p-8">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col space-y-1.5 p-6 relative z-10 bg-transparent">
          <h3 className="dark:text-gray-100 transition-colors duration-200 text-2xl tracking-tight text-gray-900 relative">
            <span className="ralative z-10">
              Schwabify{" "}
              <span className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                Unlimited
              </span>
            </span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200 flex items-baseline gap-2 mt-2 relative z-10">
            <span className="text-primary text-4xl font-bold">$19.99</span>
            <span className="text-gray-600">/month</span>
          </p>
        </div>
        <div className="p-6 pt-0 flex-grow relative z-10 bg-transparent">
          <ul className="space-y-3 mt-4">
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Everything in Free
              </span>
            </li>
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Unlimited templates
              </span>
            </li>
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Advanced analytics
              </span>
            </li>
            <li className="flex items-start text-sm">
              <Check className="lucide lucide-check w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 relative z-10 flex items-center gap-2">
                Priority support
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center p-6 relative mt-auto pt-6 z-10 bg transparent">
          <button
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
            className="w-full py-3 px-6 text-base font-medium bg-primary text-primary-foreground rounded-full text-center hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Start Pro Trial
          </button>
        </div>
      </div>
    </div>
  );
}
