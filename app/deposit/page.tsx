"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet, Bitcoin, DollarSign } from "lucide-react"

export default function DepositPage() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle deposit logic here
    console.log("Deposit form submitted:", { amount, paymentMethod })
  }

  const presetAmounts = [10, 25, 50, 100, 200, 500]

  return (
    <div className="container max-w-md mx-auto px-4 py-12">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Deposit Funds</CardTitle>
          <CardDescription className="text-center">Add money to your account to start betting</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="card">
                <CreditCard className="h-4 w-4 mr-2" />
                Card
              </TabsTrigger>
              <TabsTrigger value="bank">
                <Wallet className="h-4 w-4 mr-2" />
                Bank
              </TabsTrigger>
              <TabsTrigger value="crypto">
                <Bitcoin className="h-4 w-4 mr-2" />
                Crypto
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    type="number"
                    min="5"
                    placeholder="Enter amount"
                    className="pl-9"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {presetAmounts.map((preset) => (
                  <Button key={preset} type="button" variant="outline" onClick={() => setAmount(preset.toString())}>
                    ${preset}
                  </Button>
                ))}
              </div>

              <TabsContent value="card" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" required />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bank" className="space-y-4 mt-4">
                <RadioGroup defaultValue="instant">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="instant" id="instant" />
                    <Label htmlFor="instant">Instant Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ach" id="ach" />
                    <Label htmlFor="ach">ACH Transfer (1-3 business days)</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <Label htmlFor="accountName">Account Holder Name</Label>
                  <Input id="accountName" required />
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4 mt-4">
                <RadioGroup defaultValue="btc">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="btc" id="btc" />
                    <Label htmlFor="btc">Bitcoin (BTC)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eth" id="eth" />
                    <Label htmlFor="eth">Ethereum (ETH)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="usdt" id="usdt" />
                    <Label htmlFor="usdt">Tether (USDT)</Label>
                  </div>
                </RadioGroup>
              </TabsContent>

              <Button type="submit" className="w-full">
                Deposit ${amount || "0"}
              </Button>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-xs text-muted-foreground">
            All transactions are secure and encrypted. By making a deposit, you agree to our terms and conditions.
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
