"use client"

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <main className="flex flex-col w-screen min-h-screen items-center justify-center gap-10">
      <Typography.h1>nextjs-shadcn-ui-template</Typography.h1>
      <Button onClick={toggleTheme}>toggle theme</Button>
    </main>
  )
}
