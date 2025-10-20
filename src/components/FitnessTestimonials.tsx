"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra Glam",
    location: "Denmark, Copenhagen",
    rating: 5,
    text: "This app completely transformed my fitness routine! The daily challenges keep me motivated and the personalized plans are perfect for my busy schedule. Lost 12kg in 3 months!",
    weight: "Start: 65.3kg → Current: 53.3kg",
    image: "bg-gradient-to-br from-purple-400 to-purple-600"
  },
  {
    name: "James Mitchell",
    location: "USA, New York",
    rating: 5,
    text: "The yoga groups and balance classes are amazing! Having expert trainers guide you through exercises makes such a difference. My flexibility has improved dramatically.",
    stats: "109 km run this year",
    image: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    name: "Maria Santos",
    location: "Brazil, São Paulo",
    rating: 5,
    text: "I love the progress tracking features! Seeing my statistics and improvements each week keeps me motivated. The app is intuitive and the workouts are effective.",
    stats: "740 kcal daily average",
    image: "bg-gradient-to-br from-pink-400 to-pink-600"
  }
];

export default function FitnessTestimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Real Results from
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Real People
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who have transformed their lives with our fitness platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.image} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg truncate">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{testimonial.location}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Stats */}
              {testimonial.weight && (
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                  <div className="text-xs font-medium text-green-700 dark:text-green-400">
                    {testimonial.weight}
                  </div>
                </div>
              )}
              {testimonial.stats && (
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                  <div className="text-xs font-medium text-blue-700 dark:text-blue-400">
                    {testimonial.stats}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-sm text-muted-foreground">App Store Rating</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                500K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}