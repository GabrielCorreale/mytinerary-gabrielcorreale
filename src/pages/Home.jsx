import Hero from "../components/Hero"
import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <div className="img_background flex flex-wrap md:flex-nowrap">
      <Hero />
      <Carousel />
    </div>
  )
}