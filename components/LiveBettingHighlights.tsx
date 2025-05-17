import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const LiveBettingHighlights = () => {
  const liveMatches = [
    {
      id: 1,
      league: "Premier League",
      homeTeam: "Chelsea",
      awayTeam: "Manchester City",
      score: "1-2",
      time: "65'",
      odds: {
        home: 5.5,
        draw: 3.2,
        away: 1.6,
      },
    },
    {
      id: 2,
      league: "Bundesliga",
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      score: "2-2",
      time: "78'",
      odds: {
        home: 2.1,
        draw: 2.8,
        away: 4.5,
      },
    },
  ]

  return (
    <div className="space-y-4">
      {liveMatches.map((match) => (
        <Card key={match.id} className="border-primary/20">
          <CardContent className="p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                    LIVE
                  </Badge>
                  <span className="text-sm text-muted-foreground">{match.league}</span>
                </div>
                <span className="text-sm font-medium text-red-500">{match.time}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium">{match.homeTeam}</span>
                <span className="font-bold text-lg">{match.score}</span>
                <span className="font-medium">{match.awayTeam}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <Button variant="outline" className="h-10 border-primary/20 bg-primary/5 hover:bg-primary/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">1</span>
                    <span>{match.odds.home}</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-10 border-primary/20 bg-primary/5 hover:bg-primary/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">X</span>
                    <span>{match.odds.draw}</span>
                  </div>
                </Button>
                <Button variant="outline" className="h-10 border-primary/20 bg-primary/5 hover:bg-primary/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">2</span>
                    <span>{match.odds.away}</span>
                  </div>
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="w-full mt-2">
                +{Math.floor(Math.random() * 50) + 30} live markets
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default LiveBettingHighlights
