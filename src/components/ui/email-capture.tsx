"use client";

import { useState } from "react";
import { Button } from "./button";
import { addEmailSubscriber } from "../../lib/supabase";

interface EmailCaptureProps {
  onSubmit?: (email: string) => Promise<void> | void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  source?: string;
}

export function EmailCapture({ 
  onSubmit, 
  placeholder = "Enter your email address",
  buttonText = "Join Waitlist",
  className = "",
  source = "landing-page"
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError("");
    setIsSuccess(false);
    
    // Validate email
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get user agent and basic client info
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : undefined;
      
      // Submit to Supabase
      await addEmailSubscriber(email, source, userAgent);
      
      // Call custom onSubmit if provided
      if (onSubmit) {
        await onSubmit(email);
      }
      
      // Success state
      setIsSuccess(true);
      setEmail(""); // Reset form
      
      // Success message stays visible (no auto-hide)
      
    } catch (error: any) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isSuccess) {
    return (
      <div className={`text-center relative z-30 ${className}`}>
        <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
          <div className="bg-gray-50/90 rounded-xl px-2 py-0 drop-shadow-2xl text-primary font-bold text-xl">
            ✓ Thank you! You've been added to the waitlist.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center relative z-30 ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="flex items-start justify-center gap-4 max-w-lg mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 text-lg border rounded-full shadow-sm bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
                error ? "border-red-300 focus:ring-red-500" : "border-gray-300"
              }`}
            />
            {/* Reserved space for error message to prevent layout shift */}
            <div className="h-8 mt-2">
              {error && (
                <p className="text-red-500 text-lg text-center font-medium">{error}</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="text-secondary-foreground hover:secondary-foreground-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap h-[52px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-0"
          >
            {isSubmitting ? "Joining..." : buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
}