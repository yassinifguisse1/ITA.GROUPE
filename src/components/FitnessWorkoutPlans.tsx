"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Flame, Users, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Yoga Group",
    date: "25 Nov",
    time: "14:00-15:00",
    room: "A5 room",
    trainer: "Tiffany Way",
    difficulty: "Medium",
    duration: "60 min",
    calories: "200 kcal",
    color: "from-orange-400 to-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    title: "Balance",
    date: "28 Nov",
    time: "18:00-19:30",
    room: "A2 room",
    trainer: "Mike Chen",
    difficulty: "Light",
    duration: "90 min",
    calories: "150 kcal",
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    title: "HIIT Training",
    date: "26 Nov",
    time: "06:00-07:00",
    room: "Studio B",
    trainer: "Sarah Johnson",
    difficulty: "Hard",
    duration: "60 min",
    calories: "450 kcal",
    color: "from-pink-400 to-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20"
  }
];

export default function FitnessWorkoutPlans() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Your Personalized
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Workout Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose from a variety of expertly designed workout sessions tailored to your fitness level and schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer ${plan.bgColor}`}
            >
              {/* Header */}
              <div className={`p-6 pb-4 bg-gradient-to-br ${plan.color}`}>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 hover:bg-white">
                    {plan.difficulty}
                  </Badge>
                  <div className="text-right">
                    <div className="text-white font-medium text-sm">{plan.date}</div>
                    <div className="text-white/90 text-xs">{plan.time}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-white/90 text-sm">{plan.room}</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Trainer */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Trainer</div>
                    <div className="font-medium">{plan.trainer}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span>{plan.calories}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full rounded-full group/btn" variant="outline">
                  Join Session
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}