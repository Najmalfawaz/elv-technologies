import { Presentation, Monitor, Music, Video, Radio, LaptopMinimal as TvMinimal } from "lucide-react"

export function AudioVisualSolutions() {
  const solutions = [
    {
      icon: Music,
      title: "Music Systems and BGM Solutions",
      description: "Professional background music and zoned audio control for hospitality venues",
      features: [
        "Multi-zone music distribution",
        "Independent volume and source control",
        "Integration with streaming services",
        "Discreet speaker integration",
        "Emergency announcement capability",
      ],
      applications: ["Hotels and resorts", "Restaurants and cafés", "Bars and lounges", "Serviced apartments"],
    },
    {
      icon: TvMinimal,
      title: "Indoor Video Wall",
      description: "High-resolution LED video walls for corporate and mission-critical environments",
      features: [
        "Fine pixel-pitch LED panels",
        "Professional calibration",
        "Seamless system integration",
        "Consistent colour performance",
        "Scalable configurations",
      ],
      applications: ["Boardrooms", "Control rooms", "Auditoriums", "Experience centres"],
    },
    {
      icon: Video,
      title: "Conference Room Solutions",
      description: "Professional AV systems for seamless collaboration and meetings",
      features: [
        "Video conferencing systems",
        "Interactive displays",
        "Wireless content sharing",
        "Centralized AV control",
        "Teams/Zoom integration",
      ],
      applications: ["Small meeting rooms", "Executive boardrooms", "Training rooms", "Huddle spaces"],
    },
    {
      icon: Presentation,
      title: "Meeting and Boardroom",
      description: "Executive-grade AV solutions for professional and confidential meetings",
      features: [
        "Large-format displays",
        "Ceiling microphones",
        "High-fidelity audio systems",
        "Secure video conferencing",
        "Professional installation",
      ],
      applications: ["Executive boardrooms", "Leadership environments", "High-level meetings"],
    },
    {
      icon: Monitor,
      title: "Digital Signage",
      description: "Dynamic visual content for effective business communication",
      features: [
        "Commercial displays and LED screens",
        "Content management systems",
        "Real-time information updates",
        "Remote management",
        "Network scalability",
      ],
      applications: ["Retail stores", "Corporate offices", "Hotels", "Malls", "Hospitals"],
    },
    {
      icon: Radio,
      title: "LED Screen",
      description: "High-impact indoor and outdoor LED displays",
      features: [
        "Fine pixel-pitch technology",
        "Professional calibration",
        "Weather-resistant outdoor options",
        "Media server integration",
        "Robust mounting systems",
      ],
      applications: ["Corporate offices", "Retail spaces", "Events", "Public areas"],
    },
  ]

  return (
    <section id="audio-visual" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Audio Visual Solutions</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Advancements in audio-visual technology are reshaping how organizations collaborate, train, and
              communicate. We provide end-to-end audio-visual solutions in the UAE, covering system design,
              installation, integration, and commissioning.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all border border-gray-200"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">{solution.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
