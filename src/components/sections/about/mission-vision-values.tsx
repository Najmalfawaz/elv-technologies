import { Target, Eye, Heart } from "lucide-react"

export default function MissionVisionValues() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To deliver end-to-end technology solutions that exceed client expectations through innovative design,
              reliable implementation, and future-ready support infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be continue as leading provider of Audio Visual Solutions, ELV Systems, Security & Surveillance, and
              Home Automation technologies in Abu Dhabi and all-over UAE by consistently delivering excellence and
              maximizing value for our clients.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Values</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Treat everyone with respect and dignity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Commit to continuous improvement through training and knowledge sharing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Demonstrate teamwork, honesty, and integrity in all engagements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Maintain a friendly approach and honour every commitment made</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Ensure Quality Assurance across all tasks and project stages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
