"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Menu, Clock, User, LogIn, UserPlus, Wallet, Trophy, BarChart3 } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
// import { ThemeToggle } from "@/components/theme-toggle"

const Navigation = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "In-Play", href: "/in-play", icon: Clock },
    { name: "Sports", href: "/sports", icon: Trophy },
    { name: "Casino", href: "/casino", icon: BarChart3 },
    { name: "Profile", href: "/profile", icon: User },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-2 py-3 text-lg rounded-md hover:bg-accent ${
                      isActive(item.href) ? "bg-accent" : ""
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
                <div className="border-t my-4 pt-4">
                  <Link
                    href="/deposit"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-2 py-3 text-lg rounded-md hover:bg-accent"
                  >
                    <Wallet className="h-5 w-5" />
                    Deposit
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">BetMaster</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/login">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/deposit">
              <Wallet className="h-4 w-4 mr-2" />
              Deposit
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Home, Menu, Clock, User, LogIn, UserPlus, Wallet, Trophy, BarChart3 } from "lucide-react"

// const Navigation = () => {
//   const pathname = usePathname()
//   const [isOpen, setIsOpen] = useState(false)

//   const isActive = (path: string) => pathname === path

//   const navItems = [
//     { name: "Home", href: "/", icon: Home },
//     { name: "In-Play", href: "/in-play", icon: Clock },
//     { name: "Sports", href: "/sports", icon: Trophy },
//     { name: "Casino", href: "/casino", icon: BarChart3 },
//     { name: "Profile", href: "/profile", icon: User },
//   ]

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//               <nav className="flex flex-col gap-4 mt-8">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`flex items-center gap-2 px-2 py-3 text-lg rounded-md hover:bg-accent ${
//                       isActive(item.href) ? "bg-accent" : ""
//                     }`}
//                   >
//                     <item.icon className="h-5 w-5" />
//                     {item.name}
//                   </Link>
//                 ))}
//                 <div className="border-t my-4 pt-4">
//                   <Link
//                     href="/deposit"
//                     onClick={() => setIsOpen(false)}
//                     className="flex items-center gap-2 px-2 py-3 text-lg rounded-md hover:bg-accent"
//                   >
//                     <Wallet className="h-5 w-5" />
//                     Deposit
//                   </Link>
//                 </div>
//               </nav>
//             </SheetContent>
//           </Sheet>

//           <Link href="/" className="flex items-center gap-2">
//             <span className="font-bold text-xl">BetMaster</span>
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
//                 isActive(item.href) ? "text-primary" : "text-muted-foreground"
//               }`}
//             >
//               <item.icon className="h-4 w-4" />
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2">
//           <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
//             <Link href="/login">
//               <LogIn className="h-4 w-4 mr-2" />
//               Login
//             </Link>
//           </Button>
//           <Button size="sm" asChild>
//             <Link href="/register">
//               <UserPlus className="h-4 w-4 mr-2" />
//               Register
//             </Link>
//           </Button>
//           <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
//             <Link href="/deposit">
//               <Wallet className="h-4 w-4 mr-2" />
//               Deposit
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navigation
