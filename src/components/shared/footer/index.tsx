import Link from "next/link"
import SocialLinks from "@/components/ui/social-links"

const navigation = {
  solutions: [
    { name: "Security and Surveillance", href: "/solutions/security-&-surveillance" },
    { name: "Access Control & Time Attendance", href: "/solutions/access-control" },
    { name: "Gate Barrier System", href: "/solutions/gate-barrier" },
    { name: "Nurse Call System", href: "/solutions/nurse-call" },
    { name: "Queue Management System", href: "/solutions/queue-management" },
    { name: "Disabled Toilet Alarm System", href: "/solutions/disabled-toilet-alarm" },
  ],
  audioVisual: [
    { name: "Music and BGM System", href: "/solutions/music-bgm" },
    { name: "Indoor Video Wall", href: "/solutions/indoor-video-wall" },
    { name: "Conference Room", href: "/solutions/conference-room" },
    { name: "Meeting Room & Board Room", href: "/solutions/meeting-room" },
    { name: "Digital Signage", href: "/solutions/digital-signage" },
    { name: "LED Screen", href: "/solutions/led-screen" },
    { name: "Control Systems", href: "/solutions/control-systems" },
  ],
  network: [
    { name: "Structured Cabling Solutions", href: "/solutions/structured-cabling" },
    { name: "Wireless Network Solutions", href: "/solutions/wireless-network" },
    { name: "Audio Video Intercom", href: "/solutions/av-intercom" },
    { name: "2 - Way Radio Solutions", href: "/solutions/2-way-radio" },
    { name: "IP Phone", href: "/solutions/ip-phone" },
    { name: "IPTV / SMATV", href: "/solutions/iptv-smatv" },
    { name: "IT Equipment’s", href: "/solutions/it-equipments" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-10"
              src="/logo.png" 
              alt="ELV Technology Solutions"
            />
            <p className="text-sm text-gray-400">
              ELV Technology Solutions one of the best ELV & Audio-Visual Integrators in Abu Dhabi.
            </p>
            <div className="flex space-x-6">
              <SocialLinks />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">ELV Systems</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Audio Visual Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.audioVisual.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Network and Communications</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.network.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
              <p className="mt-2 text-sm text-gray-400">ELV Technology Solutions- Sole Proprietorship LLC</p>
              <p className="text-sm text-gray-400">P.O. Box 36815 Grand Outlet Building, M01, Al Danah E18_02 Al Falah St., Abu Dhabi, UAE</p>
              <p className="text-sm text-gray-400">info@etssmart.com</p>
              <p className="text-sm text-gray-400">+971 2 441 8186</p>
            </div>
            <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Our Location</h3>
                <div className="mt-4">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.071989855584!2d54.3722693150096!3d24.4829369842369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e664e4d58189b%3A0x8c7d7c11f0787d15!2sELV%20Technology%20Solutions!5e0!3m2!1sen!2sae!4v1676463499351!5m2!1sen!2sae"
                        width="100%" 
                        height="200" 
                        style={{ border:0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} ELV Technology Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
