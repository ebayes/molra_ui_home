import { Badge } from "@/components/Badge"
import TeamGallery from "@/components/ui/TeamGallery"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>about map of life</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            We are scientists, engineers, and environmentalists using AI and eDNA to enhance our understanding of the rainforest ecosystem.
          </Balancer>
        </h1>
        {/* 
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Data is changing every aspect of running a business, and it is
          happening now. <br /> Database is at the core of this revolution.
        </p>
        */}
      </section>
      <TeamGallery />
      {/* <Benefits /> */}
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We are an international team with background in biodiversity science, 
            biodiversity monitoring, survey technologies, machine learning, and 
            taxonomic identification. Our XPRIZE solution leverages careful groundwork 
            for quantitatively linking up geographic scales of observation with 
            human-in-the-loop machine learning to deliver comprehensive local biodiversity 
            information and support conservation insights. 
          </p>
          <p className="text-lg leading-8">
          Our general framework offers strong scalability and flexible extension to new 
          survey hardware and links in identification experts in innovative and effective ways.
          </p>
          <p
            className={cx(
              "w-fit font-handwriting text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – the Map of Life XPrize team
          </p>
        </div>

      </section>
    </div>
  )
}
