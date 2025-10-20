"use client";

import { Card } from "@/components/ui/card";
import { Activity, Flame, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Activity,
    label: "Weekly Activity",
    value: "5.2",
    unit: "hours",
    change: "+12%",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: Flame,
    label: "Calories Burned",
    value: "2,845",
    unit: "kcal",
    change: "+8%",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  },
  {
    icon: TrendingUp,
    label: "Current Weight",
    value: "68.5",
    unit: "kg",
    change: "-2.3kg",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    icon: Target,
    label: "Goal Progress",
    value: "78",
    unit: "%",
    change: "+15%",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  }
];

export default function FitnessStats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Track Your Progress
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Every Step of the Way
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Monitor your fitness journey with comprehensive statistics and insights that help you stay motivated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`p-6 ${stat.bgColor} border-2 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="text-3xl font-bold">
                  {stat.value}
                  <span className="text-lg text-muted-foreground ml-1">{stat.unit}</span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${parseInt(stat.value) % 100}%` }}
                ></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats Summary */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border-2">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold">109 km</div>
                <div className="text-sm text-muted-foreground">Distance This Year</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-2xl font-bold">45 days</div>
                <div className="text-sm text-muted-foreground">Active Streak</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">Workouts Completed</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}