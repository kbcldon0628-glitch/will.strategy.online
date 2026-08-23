import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Reasons } from "@/components/reasons"
import { Greeting } from "@/components/greeting"
import { Courses } from "@/components/courses"
import { Results } from "@/components/results"
import { Contact } from "@/components/contact"
import { Legal } from "@/components/legal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reasons />
      <Greeting />
      <Courses />
      <Results />
      <Contact />
      <Legal />
      <Footer />
    </main>
  )
}
