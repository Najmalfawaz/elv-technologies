'use client'

import { Tabs } from "@/components/ui/tabs"
import { solutions } from "@/data/solutions"
import Link from "next/link"

export function SolutionsTabs() {
  const tabs = solutions.map((solution) => ({
    title: solution.title,
    value: solution.title.toLowerCase().replace(/ /g, "-"),
    content: (
      <div className="w-full overflow-hidden relative h-[20rem] md:h-[20rem] rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
        <p className="text-2xl md:text-4xl mb-4 text-center">{solution.title}</p>
        <p className="text-sm md:text-base font-normal max-w-lg text-center">
          {solution.description}
        </p>
        <Link href={`/solutions/${solution.title.toLowerCase().replace(/ /g, "-")}`}>
            <button className="mt-6 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
              Learn More
            </button>
        </Link>
      </div>
    ),
  }))

  return (
    <div className="h-auto md:h-[35rem] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-20 mb-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground w-full">Our Solutions</h2>
      <Tabs tabs={tabs} defaultTab={tabs[0].value} />
    </div>
  )
}
