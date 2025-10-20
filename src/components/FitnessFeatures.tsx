"use client";

import { Activity, Calendar, TrendingUp, Users, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Daily Challenges",
    description: "Complete daily workout challenges before 9:00 AM to stay consistent and build healthy habits.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Activity,
    title: "Personalized Plans",
    description: "Get customized workout plans tailored to your fitness level, goals, and available time.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your weight, calories, and physical activity statistics with detailed analytics.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Join yoga groups, balance sessions, and other fitness classes led by expert trainers.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Quick Workouts",
    description: "Access 5-minute exercises you can do anywhere, anytime - no equipment required.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and achieve your fitness goals with milestone tracking and motivational insights.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export default function FitnessFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Achieve Your Goals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to keep you motivated, track your progress, and reach your fitness potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}