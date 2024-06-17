import { GlobalDatabase } from "@/components/ui/GlobalDatabase"
import Hero from "@/components/ui/Hero"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      {/* <LogoCloud /> */}
      <GlobalDatabase />
      {/* <CodeExample /> */}
      {/* 
      <Features />
      <Cta /> */}
    </main>
  )
}
