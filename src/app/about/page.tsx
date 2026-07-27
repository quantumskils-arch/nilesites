import CTASection from "@/components/CTASection";

const values = [
  {
    title: "African-Built, African-Priced",
    desc: "We understand the Ugandan market because we're part of it. Our pricing reflects local realities, not Silicon Valley rates.",
  },
  {
    title: "No Technical Jargon",
    desc: "We communicate in plain language. You shouldn't need to know what 'CMS' or 'SSL' means to get a website for your business.",
  },
  {
    title: "End-to-End Service",
    desc: "From the first conversation to the final launch and beyond — we handle everything. You focus on running your business.",
  },
  {
    title: "Fast Turnaround",
    desc: "Starter websites in 3–5 days. We know you can't wait weeks to get online.",
  },
];

const team = [
  { name: "Zaq", role: "Founder & Lead Developer", initials: "Z" },
  { name: "Kod", role: "Technical Lead (AI & Automation)", initials: "K" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About NileSites</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;re a Ugandan web agency on a mission to make professional websites accessible and affordable 
              for every business in Uganda. No inflated prices. No unnecessary complexity. Just great websites 
              that help you grow.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                NileSites was founded in 2026 after we noticed a gap in the Ugandan web market: most agencies 
                charge UGX 3–7 million for a basic website, or deliver poor-quality work that doesn&apos;t work on mobile phones.
              </p>
              <p>
                We saw small businesses — schools, shops, churches, farmers — being left behind because they couldn&apos;t 
                justify those prices. Yet every business needs an online presence today. Customers search Google 
                and WhatsApp before they call.
              </p>
              <p>
                So we built NileSites: professional websites at honest prices. We keep our overhead low, use 
                modern tools that don&apos;t require expensive licenses, and pass the savings to you.
              </p>
              <p>
                Every site we build is mobile-responsive, fast-loading on Uganda&apos;s networks, and designed to 
                convert visitors into customers. No fluff. No upselling. Just a website that works.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary-600">{member.initials}</span>
                  </div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
