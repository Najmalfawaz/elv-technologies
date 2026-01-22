
import { Video, Presentation, Speaker, Tv, PenTool, Building, Briefcase, School, Store } from "lucide-react";

export function AudioVisualSolutions() {
  const subsections = [
    {
      icon: Video,
      title: "Video Conferencing Systems",
      description: "Connect and collaborate with seamless video conferencing solutions for any room size.",
      features: [
        "HD video and crystal-clear audio",
        "Wireless content sharing",
        "Integration with Zoom, Teams, and more",
        "Scalable for small to large rooms",
      ],
    },
    {
      icon: Presentation,
      title: "Projectors & Displays",
      description: "Deliver impactful presentations with high-brightness projectors and professional displays.",
      features: [
        "4K resolution and laser projectors",
        "Large format commercial displays",
        "Video walls for immersive experiences",
        "Interactive screens for engagement",
      ],
    },
    {
      icon: Speaker,
      title: "Sound Systems",
      description: "Ensure your message is heard clearly with professional audio and sound reinforcement.",
      features: [
        "Ceiling and wall-mounted speakers",
        "Wireless microphone systems",
        "Digital signal processors (DSPs)",
        "Background music and paging systems",
      ],
    },
    {
      icon: Tv,
      title: "Digital Signage",
      description: "Engage customers and employees with dynamic content on vibrant digital displays.",
      features: [
        "Centralized content management",
        "Scheduled content playback",
        "Interactive digital signage",
        "Wayfinding and information displays",
      ],
    },
    {
      icon: PenTool,
      title: "Interactive Whiteboards",
      description: "Transform collaboration in classrooms and boardrooms with interactive technology.",
       features: [
        "Multi-touch interactivity",
        "Digital annotation and whiteboarding",
        "Seamless software integration",
        "Enhanced learning and brainstorming",
      ],
    },
  ];

  const applications = [
    { icon: Briefcase, name: "Boardrooms & Meeting Rooms" },
    { icon: Building, name: "Auditoriums & Event Spaces" },
    { icon: School, name: "Classrooms & Training Centers" },
    { icon: Store, name: "Retail & Hospitality" },
  ];

  return (
    <section id="audio-visual" className="py-20 bg-white">
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

          {/* Subsections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {subsections.map((subsection, index) => {
                const Icon = subsection.icon
                return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{subsection.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{subsection.description}</p>
                <ul className="space-y-3">
                  {subsection.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>

            {/* Applications */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((app, index) => {
                const Icon = app.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                    <p className="text-sm font-medium text-gray-800">{app.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
