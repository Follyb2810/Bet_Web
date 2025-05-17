"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const PromotionsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const promotions = [
    {
      id: 1,
      title: "Welcome Bonus",
      description: "Get 100% bonus up to $500 on your first deposit",
      cta: "Claim Now",
      link: "/register",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 2,
      title: "Free Bet Club",
      description: "Place 5 bets of $10 or more and get a $10 free bet every week",
      cta: "Join Club",
      link: "/promotions/free-bet-club",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: 3,
      title: "Acca Boost",
      description: "Get up to 50% more on your accumulator bets",
      cta: "Learn More",
      link: "/promotions/acca-boost",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promotions.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promotions.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <Card className={`bg-gradient-to-r ${promotions[currentSlide].color} border-0`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="space-y-2 text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">{promotions[currentSlide].title}</h2>
              <p className="text-muted-foreground">{promotions[currentSlide].description}</p>
            </div>
            <Button asChild>
              <Link href={promotions[currentSlide].link}>{promotions[currentSlide].cta}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-2 gap-1">
        {promotions.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentSlide ? "w-6 bg-primary" : "w-2 bg-muted"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default PromotionsBanner
