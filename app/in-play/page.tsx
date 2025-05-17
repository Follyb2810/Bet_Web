import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function InPlayPage() {
  const sportsCategories = ["Football", "Basketball", "Tennis", "Cricket", "Baseball", "Ice Hockey"]

  const liveMatches = [
    {
      id: 1,
      sport: "Football",
      league: "Premier League",
      homeTeam: "Chelsea",
      awayTeam: "Manchester City",
      score: "1-2",
      time: "65'",
      markets: 45,
    },
    {
      id: 2,
      sport: "Basketball",
      league: "NBA",
      homeTeam: "LA Lakers",
      awayTeam: "Chicago Bulls",
      score: "78-82",
      time: "Q3 4:20",
      markets: 32,
    },
    {
      id: 3,
      sport: "Tennis",
      league: "ATP Masters",
      homeTeam: "R. Nadal",
      awayTeam: "N. Djokovic",
      score: "4-6, 6-3, 2-1",
      time: "Set 3",
      markets: 28,
    },
    {
      id: 4,
      sport: "Football",
      league: "Bundesliga",
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      score: "2-2",
      time: "78'",
      markets: 42,
    },
    {
      id: 5,
      sport: "Cricket",
      league: "IPL",
      homeTeam: "Mumbai Indians",
      awayTeam: "Chennai Super Kings",
      score: "145-3",
      time: "15.2 overs",
      markets: 36,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Live Betting</h1>
          <p className="text-muted-foreground">Bet on matches happening right now</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="w-full md:w-[200px] pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex w-full overflow-x-auto">
          <TabsTrigger value="all" className="flex-shrink-0">
            All
          </TabsTrigger>
          {sportsCategories.map((sport) => (
            <TabsTrigger key={sport} value={sport.toLowerCase()} className="flex-shrink-0">
              {sport}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {liveMatches.map((match) => (
            <Card key={match.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                          LIVE
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {match.sport} • {match.league}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-red-500">{match.time}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">{match.homeTeam}</span>
                      <span className="font-bold text-lg">{match.score}</span>
                      <span className="font-medium">{match.awayTeam}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">{match.markets} markets available</span>
                      <Button size="sm" variant="ghost">
                        View all markets
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-px bg-muted border-l md:w-[250px]">
                    <div className="bg-background p-3 flex flex-col items-center justify-center">
                      <span className="text-xs text-muted-foreground mb-1">1</span>
                      <Button variant="outline" size="sm" className="w-full">
                        2.10
                      </Button>
                    </div>
                    <div className="bg-background p-3 flex flex-col items-center justify-center">
                      <span className="text-xs text-muted-foreground mb-1">X</span>
                      <Button variant="outline" size="sm" className="w-full">
                        3.25
                      </Button>
                    </div>
                    <div className="bg-background p-3 flex flex-col items-center justify-center">
                      <span className="text-xs text-muted-foreground mb-1">2</span>
                      <Button variant="outline" size="sm" className="w-full">
                        2.80
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {sportsCategories.map((sport) => (
          <TabsContent key={sport} value={sport.toLowerCase()} className="space-y-4 mt-4">
            {liveMatches
              .filter((match) => match.sport === sport)
              .map((match) => (
                <Card key={match.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                              LIVE
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {match.sport} • {match.league}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-red-500">{match.time}</span>
                        </div>

                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium">{match.homeTeam}</span>
                          <span className="font-bold text-lg">{match.score}</span>
                          <span className="font-medium">{match.awayTeam}</span>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-muted-foreground">{match.markets} markets available</span>
                          <Button size="sm" variant="ghost">
                            View all markets
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-px bg-muted border-l md:w-[250px]">
                        <div className="bg-background p-3 flex flex-col items-center justify-center">
                          <span className="text-xs text-muted-foreground mb-1">1</span>
                          <Button variant="outline" size="sm" className="w-full">
                            2.10
                          </Button>
                        </div>
                        <div className="bg-background p-3 flex flex-col items-center justify-center">
                          <span className="text-xs text-muted-foreground mb-1">X</span>
                          <Button variant="outline" size="sm" className="w-full">
                            3.25
                          </Button>
                        </div>
                        <div className="bg-background p-3 flex flex-col items-center justify-center">
                          <span className="text-xs text-muted-foreground mb-1">2</span>
                          <Button variant="outline" size="sm" className="w-full">
                            2.80
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            {liveMatches.filter((match) => match.sport === sport).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No live {sport} matches currently in progress</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
