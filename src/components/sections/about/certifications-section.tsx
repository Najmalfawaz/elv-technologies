import { Award, Shield, FileCheck } from "lucide-react"

export default function CertificationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Certifications</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
              We are certified to the highest standards, reflecting our commitment to quality, safety, environmental
              responsibility, and regulatory compliance. Our ISO certifications demonstrate adherence to globally
              recognized frameworks for quality assurance, environmental stewardship, and occupational health & safety
              management.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 space-y-4 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">ISO Certificates</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Certified for quality management, environmental responsibility, and occupational health & safety
                standards.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 space-y-4 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Authority Certificates</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Licensed by Abu Dhabi Monitoring and Control Centre (MCC) and accredited by Telecommunications and
                Digital Government Regulatory Authority (TRA/TDRA).
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 space-y-4 hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Insurance & ICV</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Comprehensive insurance coverage and In-Country Value (ICV) certification reflecting our commitment to
                strengthening the UAE's local economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
