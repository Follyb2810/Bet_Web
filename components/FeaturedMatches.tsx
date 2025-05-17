import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FeaturedMatches = () => {
  const matches = [
    {
      id: 1,
      league: "Premier League",
      homeTeam: "Arsenal",
      awayTeam: "Liverpool",
      time: "Today, 20:00",
      odds: {
        home: 2.1,
        draw: 3.4,
        away: 3.2,
      },
    },
    {
      id: 2,
      league: "La Liga",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      time: "Tomorrow, 21:00",
      odds: {
        home: 1.9,
        draw: 3.5,
        away: 3.8,
      },
    },
    {
      id: 3,
      league: "Serie A",
      homeTeam: "Inter",
      awayTeam: "Juventus",
      time: "Saturday, 19:45",
      odds: {
        home: 2.3,
        draw: 3.2,
        away: 3.0,
      },
    },
  ]

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <Card key={match.id}>
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{match.league}</span>
                <span className="text-sm text-muted-foreground">{match.time}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium">{match.homeTeam}</span>
                <span className="text-sm text-muted-foreground">vs</span>
                <span className="font-medium">{match.awayTeam}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <Button variant="outline" className="h-10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">1</span>
                    <span>{match.odds.home}</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">X</span>
                    <span>{match.odds.draw}</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">2</span>
                    <span>{match.odds.away}</span>
                  </div>
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="w-full mt-2">
                +{Math.floor(Math.random() * 30) + 10} more markets
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeaturedMatches
