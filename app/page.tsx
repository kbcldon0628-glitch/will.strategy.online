import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Greeting } from "@/components/greeting"
import { Courses } from "@/components/courses"
import { Results } from "@/components/results"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Legal } from "@/components/legal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Greeting />
      <Courses />
      <Results />
      <Testimonials />
      <Contact />
      <Legal />
      <Footer />
    </main>
  )
}
