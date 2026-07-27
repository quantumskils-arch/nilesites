import CTASection from "@/components/CTASection";
import Link from "next/link";

const projects = [
  {
    title: "Little Steps Kindergarten",
    category: "Education",
    desc: "A complete school website with photo galleries, events calendar, staff directory, and a parent inquiry portal. Built on the Standard plan with MoMo payment integration for school fees.",
    features: ["Multi-page CMS", "Photo gallery", "Events calendar", "MoMo payment", "Mobile responsive"],
    link: null,
  },
  {
    title: "Victory Chapel Church",
    category: "Religious",
    desc: "A full-featured church website with sermon archive, event booking, online donations, and service schedules. Includes WhatsApp bot integration for visitor inquiries.",
    features: ["Sermon archive", "Event booking", "Online donations", "WhatsApp bot", "Blog"],
    link: null,
  },
  {
    title: "Your Business Here",
    category: "Next Project",
    desc: "Ready to be your success story. Let's build a website that grows your business. Contact us to get started.",
    placeholder: true,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real websites built for real Ugandan businesses. Each project is crafted to meet the specific needs of the client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group rounded-2xl overflow-hidden border ${
                  project.placeholder ? "border-dashed border-gray-300 bg-gray-50" : "border-gray-200 bg-white"
                } hover:shadow-lg transition-all`}
              >
                <div
                  className={`aspect-video ${
                    project.placeholder
                      ? "bg-gray-100 flex items-center justify-center"
                      : "bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center"
                  }`}
                >
                  {project.placeholder ? (
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <p className="text-sm text-gray-400">Your project preview here</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <svg className="w-20 h-20 text-primary-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-primary-400 font-medium">Screenshot coming soon</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                    project.placeholder
                      ? "bg-gray-200 text-gray-500"
                      : "bg-primary-50 text-primary-600"
                  }`}>
                    {project.category}
                  </span>
                  <h3 className={`text-xl font-bold mb-2 ${project.placeholder ? 'text-gray-400' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${project.placeholder ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.desc}
                  </p>
                  {"features" in project && project.features && !project.placeholder && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((f) => (
                        <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.placeholder ? (
                    <Link
                      href="/contact"
                      className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Start Your Project &rarr;
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-400">Live site (internal)</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to Be Our Next Success Story?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We&apos;re adding new portfolio projects every month. Industry-specific demos available on request.
            </p>
            <a
              href="https://wa.me/256700000000?text=Hi%20NileSites!%20I'd%20like%20to%20see%20a%20demo%20for%20my%20industry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Request an Industry Demo
            </a>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
