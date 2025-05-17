import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import PromotionsBanner from "../components/PromotionsBanner";
import FeaturedMatches from "../components/FeaturedMatches";
import LiveBettingHighlights from "../components/LiveBettingHighlights";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <PromotionsBanner />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="live">Live Now</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
            <TabsContent value="featured" className="space-y-4">
              <FeaturedMatches />
            </TabsContent>
            <TabsContent value="live" className="space-y-4">
              <LiveBettingHighlights />
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Upcoming matches would be populated here */}
                    <p className="text-muted-foreground">
                      Check back soon for upcoming matches
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Popular Leagues</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Premier League",
                  "La Liga",
                  "NBA",
                  "NFL",
                  "UFC",
                  "Tennis",
                ].map((league) => (
                  <Button
                    key={league}
                    variant="outline"
                    className="h-12 justify-start"
                  >
                    {league}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">New to BetMaster?</h2>
              <p className="text-muted-foreground mb-4">
                Join now and get a 100% bonus on your first deposit up to $500!
              </p>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Already have an account? Log in</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Bet Slip</h2>
              <div className="text-center py-8">
                <p className="text-muted-foreground">Your bet slip is empty</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on any odds to add selections
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Live Scores</h2>
              <div className="space-y-4">
                {/* Live scores would be populated here */}
                <p className="text-muted-foreground">
                  No live matches currently in progress
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
