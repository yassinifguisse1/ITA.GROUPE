"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Check } from "lucide-react";

const benefits = [
  "7-day free trial",
  "No credit card required",
  "Cancel anytime",
  "Access to all features"
];

export default function FitnessCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
            <Smartphone className="h-8 w-8 text-white" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of users who have transformed their lives. Download our app and get access to personalized workouts, expert guidance, and a supportive community.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all group text-lg h-14"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 border-2 border-white text-white hover:bg-white/10 text-lg h-14"
            >
              Watch Demo
            </Button>
          </div>

          {/* App Download Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/80">Download on the</div>
                <div className="font-bold text-white">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/80">Get it on</div>
                <div className="font-bold text-white">Google Play</div>
              </div>
            </div>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-white/70 pt-4">
            Trusted by over 500,000 fitness enthusiasts worldwide
          </p>
        </div>
      </div>
    </section>
  );
}