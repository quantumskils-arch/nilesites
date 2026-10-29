export interface Answer {
  text: string;
  followUp?: string[];
}

export interface KnowledgeEntry {
  keywords: string[];
  answer: Answer;
}

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy"],
    answer: {
      text: "Hello! Welcome to NileSites 👋 I'm the Akiba AI assistant. I can answer questions about our websites, AI agents, pricing, process, and more. What would you like to know?",
      followUp: ["What services do you offer?", "Tell me about AI Agents", "How much does a website cost?", "I want a free website check"],
    },
  },
  {
    keywords: ["what do you do", "services", "what services", "offer", "what can you", "help with", "capabilities"],
    answer: {
      text: "We build professional websites AND run AI agents for Ugandan businesses:\n\n🌐 Web Design & Development — Mobile-responsive, modern sites\n🤖 NileSites AI Agents — watchdogs & Telegram bots (from UGX 80,000/month)\n☁️ Hosting & Domain Setup — SSL, email\n📍 Google Business Profile Setup — Get found on Google Maps\n📈 SEO & Maintenance — Keep your site ranking and fresh\n\nWebsites from UGX 450,000. Which interests you most — a website, or an AI agent?",
      followUp: ["Tell me about AI Agents", "How much does a website cost?", "I want a free website check"],
    },
  },
  {
    keywords: ["ai agents", "agents", "agent", "ai", "watchdog", "website watchdog", "monitoring", "monitor my site", "radar", "competitor", "never sleep"],
    answer: {
      text: "NileSites AI Agents run on a set schedule for your business:\n\n🟢 Website Health Watchdog (LIVE NOW) — weekly 0–100 scorecard on WhatsApp + alert if your site goes down. UGX 150,000 audit, UGX 80,000/month.\n🤖 Akiba Telegram Agent (BUILD TO ORDER) — Telegram bot that answers FAQs and captures order details; messages queue to your phone. From UGX 900,000 + UGX 100,000/month.\n🟡 Custom builds (2–4 weeks) — Competitor Radar, Review Watcher, Proposal-Deck Automation, Shorts Engine. From UGX 500,000.\n\nNo tech skills needed — if you can use Telegram or WhatsApp, you can run agents. See the full team on our AI Agents page!",
      followUp: ["How does the Website Watchdog work?", "I want a free website check", "How much do agents cost?", "Tell me about Akiba AI"],
    },
  },
  {
    keywords: ["free check", "free website check", "check my website", "website check", "health check", "audit", "score my site", "free audit"],
    answer: {
      text: "Yes! We offer a FREE website health check:\n\n🔍 Our watchdog agent scores your site 0–100 (title, speed, mobile view, broken links, security)\n📋 You get the real findings in plain English — no jargon\n💬 The team WhatsApps you the score, usually within the hour\n\nPaste your website address right here in the chat and we'll start the check — your score is WhatsApp'd to your number. If it doesn't start automatically, use the \"Get a Free Website Check\" form on our AI Agents page or WhatsApp us at wa.me/256778030847.",
      followUp: ["How much do agents cost?", "What is the Website Watchdog?", "I want to get started"],
    },
  },
  {
    keywords: ["review watcher", "reviews", "reputation", "proposal deck", "shorts", "tiktok", "reels", "custom build", "custom agent", "inbox", "triage"],
    answer: {
      text: "Our custom-built agents (ready in 2–4 weeks):\n\n⭐ Review & Reputation Watcher — every Google review answered, none missed. UGX 80,000/month.\n🎯 Client & Competitor Radar — rival price/stock alerts + new-lead alerts. From UGX 500,000 + UGX 300,000/month.\n📑 Proposal-Deck Automation — branded quotes out the same day. From UGX 900,000.\n🎬 Shorts Engine — one recording becomes a month of TikTok/Reels/Shorts. From UGX 600,000/month.\n\nTell us which one fits, and we'll scope it on WhatsApp.",
      followUp: ["How much do agents cost?", "I want to get started", "What services do you offer?"],
    },
  },
  {
    keywords: ["website", "web design", "web development", "design", "build", "create", "make a site"],
    answer: {
      text: "Our web design service delivers mobile-responsive, modern websites built for Ugandan businesses. Every site includes:\n\n📱 Mobile-responsive design (looks great on phones)\n⚡ Fast loading (under 3 seconds on 4G)\n✉️ Contact forms with auto-reply\n🖼️ Photo galleries and catalogs\n🔧 Content management system (CMS) for easy updates\n\nFrom 1-page info sites to full multi-page business platforms. Starting at UGX 450,000.",
      followUp: ["How much does a website cost?", "How long does it take?", "Do I need technical skills to manage it?"],
    },
  },
  {
    keywords: ["price", "pricing", "cost", "how much", "how much does it cost", "fee", "payment", "plan", "plans", "package", "packages"],
    answer: {
      text: "Our pricing is simple and transparent:\n\n⚡ Website Rescue Sprint — UGX 350,000\nOne perfect page, live in 5 days. Domain, hosting, Google setup all included. Best if you have no site yet.\n\n🚀 Starter — UGX 450,000\n1–5 page site, mobile responsive, WhatsApp button, basic SEO, 1yr hosting\n\n⭐ Standard — UGX 900,000 (Most Popular)\nUp to 10 pages with CMS, MoMo payments, Google Business setup, gallery, 3 revisions\n\n💎 Premium — UGX 1,500,000\nBooking/inventory systems, e-commerce, custom workflows, unlimited revisions, priority support\n\nAll payable via MTN MoMo or Airtel Money. 50% deposit to start, 50% on completion.\n\n🤖 AI Agents: Watchdog UGX 80,000/month (audit UGX 150,000 once) · Akiba bots from UGX 900,000 · Custom agents from UGX 500,000. See the AI Agents page for the full team.",
      followUp: ["What's the Rescue Sprint?", "What's included in hosting?", "Do you offer payment plans?"],
    },
  },
  {
    keywords: ["rescue", "rescue sprint", "website rescue", "350", "350k", "350,000", "no website", "dead website", "fix my website", "teardown", "free audit", "free check", "health check"],
    answer: {
      text: "The Website Rescue Sprint is our entry offer for businesses with no site (or a dead one):\n\n⚡ UGX 350,000 all-in — one perfect page, live in 5 working days\n✅ Domain + hosting + SSL (year 1)\n✅ Google-ready: local SEO + schema\n✅ WhatsApp click-to-chat button\n✅ 50% to start, 50% on go-live (MoMo / Airtel)\n\nNot happy by day 7? We keep working free until you are.\n\nFull details: nilesites.vercel.app/rescue — or paste your current website link here in the chat and we'll start a free teardown score (WhatsApp'd to your number).",
      followUp: ["How does the free teardown work?", "How is the Sprint different from Starter?", "I want to book the Sprint"],
    },
  },
  {
    keywords: ["hosting", "domain", "host", "server", "uptime", "ssl", "email", "web hosting"],
    answer: {
      text: "All our plans include 1 year of reliable hosting with:\n\n✅ Free SSL certificate (padlock icon for your site)\n✅ Daily backups — never lose your content\n✅ Fast servers optimized for Ugandan visitors\n\nDomain registration is separate — UGX 50,000–100,000/yr depending on extension (.com, .ug, .org, etc). We handle the entire setup for you.",
      followUp: ["What's a domain?", "Can I keep my domain if I leave?", "What happens after the first year?"],
    },
  },
  {
    keywords: ["akiba", "akiba ai", "bot", "chatbot", "telegram bot", "automation", "automated", "ai assistant", "ai bot"],
    answer: {
      text: "Akiba AI is our Telegram bot for Ugandan businesses. It can:\n\n🤖 Answer customer FAQs — day or night\n📝 Take order details and capture leads — messages queue to your phone\n🇺🇬 Speak English\n🔗 Integrate with your website\n\nCustomers message your bot on Telegram. You confirm orders and payment by MoMo/Airtel yourself. Starting at UGX 900,000 + UGX 100,000/month.",
      followUp: ["How is Akiba AI different from a regular chatbot?", "Which businesses can use Akiba AI?", "Can I try Akiba AI?"],
    },
  },
  {
    keywords: ["how long", "timeline", "time", "when", "ready", "delivery", "how fast", "turnaround"],
    answer: {
      text: "Typical timelines:\n\n📄 1-page site: 3–5 days\n🏢 5-page business site: 5–10 days\n🛒 E-commerce or custom system: 2–3 weeks\n\nTimelines depend on content readiness — if you have photos, text, and logo ready, we move faster. We'll give you a specific timeline after our first chat.",
      followUp: ["What do I need to provide?", "How fast can I get a simple site?", "Can I make changes later?"],
    },
  },
  {
    keywords: ["process", "how it works", "how does it work", "steps", "workflow", "what to expect"],
    answer: {
      text: "Here's how we work:\n\n1️⃣ Chat — Tell us about your business on WhatsApp\n2️⃣ Plan — We recommend the right package and features\n3️⃣ Deposit — 50% via MoMo or Airtel Money\n4️⃣ Build — We design and develop your site (5–10 days typically)\n5️⃣ Review — You see the draft, request revisions\n6️⃣ Launch — Final payment, domain setup, site goes live\n7️⃣ Support — Ongoing maintenance available\n\nWe handle everything — you focus on your business.",
      followUp: ["What do I need to provide?", "Can I see examples of your work?", "What if I don't like the design?"],
    },
  },
  {
    keywords: ["payment", "pay", "momo", "mtn", "airtel", "mobile money", "bank", "deposit", "installment"],
    answer: {
      text: "We accept:\n\n📱 MTN Mobile Money — Pay to 256778030847\n📱 Airtel Money — Pay to 256778030847\n🏦 Bank Transfer — Contact us for details\n\nTerms: 50% deposit to start work, 50% on completion before launch. All prices in UGX.",
      followUp: ["Is there a payment plan?", "Do you offer refunds?", "How do I pay the deposit?"],
    },
  },
  {
    keywords: ["maintenance", "update", "support", "after launch", "ongoing", "changes", "revisions", "keep up"],
    answer: {
      text: "We offer ongoing support after your site launches:\n\n🔧 Maintenance Retainer — UGX 50,000/month\nIncludes monthly updates, backups, security patches, and priority support\n\n📄 Content changes — we can update your site as needed\n📈 SEO monitoring — keep your rankings strong\n🆘 Emergency support — when something breaks, we fix it fast\n\nAll plans include revisions during development. Post-launch changes are covered by our retainer or quoted per-task.",
      followUp: ["What if something breaks?", "How do I update my site myself?", "Do you offer emergency support?"],
    },
  },
  {
    keywords: ["portfolio", "examples", "work", "past projects", "showcase", "samples", "previous work"],
    answer: {
      text: "We've built websites for Ugandan businesses including:\n\n🌍 Opportunity Radar — A comprehensive AI-powered opportunity discovery platform\n\nWe'd love to add your business to our portfolio! Check our Portfolio page for details.",
      followUp: ["Can you build a church website?", "Do you work with schools?", "Can I see your work?"],
    },
  },
  {
    keywords: ["church", "church website", "religious", "ministry", "worship", "sermon", "pastor"],
    answer: {
      text: "Yes! We specialize in church websites. Features include:\n\n⛪ Service times — Always visible above the fold\n🎙️ Sermon archive — Audio recordings organized by series\n📅 Events calendar — Services, events, conferences\n📱 WhatsApp integration — Prayer requests, inquiries\n📍 Service locations — Maps and directions\n\nStarting at UGX 450,000.",
      followUp: ["How much for a church site?", "Can I have a building campaign page?", "Do you integrate with giving platforms?"],
    },
  },
  {
    keywords: ["school", "education", "kindergarten", "primary", "secondary", "academy", "college", "university"],
    answer: {
      text: "Absolutely! We build school websites including:\n\n🏫 School profile and history\n📸 Photo galleries of facilities and events\n📅 Academic calendar and term dates\n👨‍👩‍👧 Parent portal for updates\n📋 Online enrollment inquiries\n📢 News and announcements\n\nStarting at UGX 450,000.",
      followUp: ["Can parents pay fees online?", "Do you include a parent portal?", "How much for a school site?"],
    },
  },
  {
    keywords: ["hotel", "lodge", "guest house", "accommodation", "booking", "rooms", "resort", "inn", "b&b", "bed and breakfast"],
    answer: {
      text: "Yes! Our lodge/hotel solutions include:\n\n🏨 Room listings with photos and pricing\n📅 Online booking system\n📍 Location map and nearby attractions\n📞 WhatsApp booking inquiries\n💳 MoMo deposit for reservations\n⭐ Guest reviews and testimonials\n\nStarting at UGX 900,000 (Standard plan with booking features).",
      followUp: ["Can guests book online?", "Do you integrate with booking.com?", "Can I manage room availability?"],
    },
  },
  {
    keywords: ["restaurant", "cafe", "food", "menu", "meal", "dining", "takeaway", "delivery", "eatery"],
    answer: {
      text: "Perfect for restaurants! We build:\n\n🍽️ Digital menus with photos and prices\n🛵 Online ordering for takeaway/delivery\n📞 WhatsApp order management\n📍 Location and hours\n📸 Food gallery\n💳 MoMo payment integration\n\nYour customers browse the menu and order directly from their phone. Starting at UGX 450,000.",
      followUp: ["Can customers order for delivery?", "Do I need a POS system?", "How do orders come through?"],
    },
  },
  {
    keywords: ["shop", "store", "retail", "ecommerce", "e-commerce", "sell online", "online shop", "products", "catalog"],
    answer: {
      text: "We build online stores for Ugandan businesses:\n\n🛍️ Product catalog with categories and search\n🛒 Shopping cart and checkout\n💳 MoMo & Airtel Money payment integration\n📦 Order management dashboard\n🚚 Delivery tracking for customers\n📱 Mobile-first shopping experience\n\nFrom small shops to full e-commerce platforms. Starting at UGX 900,000.",
      followUp: ["Can I manage my own products?", "How do payments work?", "Do you include delivery tracking?"],
    },
  },
  {
    keywords: ["transport", "logistics", "delivery", "courier", "taxi", "bus", "travel", "shipping", "fleet"],
    answer: {
      text: "Transport & logistics solutions:\n\n🚛 Fleet showcase with vehicle details\n📍 Route maps and schedules\n📊 Real-time booking and tracking\n💳 Online payment for bookings\n📞 WhatsApp inquiry automation\n⭐ Customer ratings and reviews\n\nStarting at UGX 900,000.",
      followUp: ["Can customers track their delivery?", "How do bookings work?", "Can I show routes on a map?"],
    },
  },
  {
    keywords: ["car bond", "car bond", "vehicle", "cars", "automobile", "dealership", "car dealer", "auto", "motor"],
    answer: {
      text: "Car bond/dealership websites with:\n\n🚗 Vehicle listings with photos and specs\n💰 Price display and payment plan info\n📞 Test drive booking via WhatsApp\n🔄 Trade-in valuation inquiries\n📋 Financing application forms\n🔍 Search and filter by make/model\n\nStarting at UGX 900,000.",
      followUp: ["Can customers apply for financing online?", "How do I list new cars?", "Can I show payment plans?"],
    },
  },
  {
    keywords: ["salon", "barber", "beauty", "spa", "nail", "hair", "makeup", "cosmetic", "treatment"],
    answer: {
      text: "Salon & spa websites with:\n\n💇 Service menu with pricing\n📅 Online appointment booking\n👩‍🎨 Stylist/artist profiles with portfolios\n📸 Gallery of your work\n💳 MoMo payment for bookings\n📞 WhatsApp inquiry and reminders\n\nStarting at UGX 450,000.",
      followUp: ["Can clients book appointments online?", "Can I send appointment reminders?", "How do I show my stylist's work?"],
    },
  },
  {
    keywords: ["farming", "agriculture", "farm", "agro", "livestock", "crops", "poultry", "organic", "farmer"],
    answer: {
      text: "Agricultural business websites:\n\n🌾 Product listings (crops, livestock, equipment)\n📸 Farm gallery\n📈 Market price updates\n📞 WhatsApp ordering\n🚚 Delivery information\n💳 Direct MoMo payments\n\nStarting at UGX 450,000.",
      followUp: ["Can I sell produce directly?", "Do I need a product catalog?", "How do customers place orders?"],
    },
  },
  {
    keywords: ["real estate", "property", "land", "house", "apartment", "rent", "lease", "mortgage", "estate agent"],
    answer: {
      text: "Real estate websites:\n\n🏠 Property listings with photos and floor plans\n💰 Price and payment terms\n🔍 Search by location, type, budget\n📞 WhatsApp inquiry for viewings\n📋 Mortgage/loan application forms\n🗺️ Location maps with nearby amenities\n\nStarting at UGX 900,000.",
      followUp: ["Can I list properties myself?", "How do inquiries come through?", "Can I include virtual tours?"],
    },
  },
  {
    keywords: ["fitness", "gym", "trainer", "workout", "yoga", "exercise", "sports", "coach", "health club"],
    answer: {
      text: "Fitness & gym websites:\n\n💪 Class schedules and descriptions\n👤 Trainer profiles and certifications\n📅 Online class booking\n💰 Membership plans and pricing\n📞 WhatsApp sign-up and inquiries\n🏋️ Facility gallery\n\nStarting at UGX 450,000.",
      followUp: ["Can members book classes online?", "How do I show membership plans?", "Can I integrate with fitness apps?"],
    },
  },
  {
    keywords: ["ngo", "nonprofit", "charity", "foundation", "community", "donation", "volunteer", "cause", "organization"],
    answer: {
      text: "NGO/nonprofit websites:\n\n🌍 Mission and impact stories\n📸 Photo and video galleries\n💳 Online donation via MoMo\n📢 News and updates blog\n🤝 Volunteer sign-up forms\n📊 Annual reports and impact data\n\nStarting at UGX 450,000.",
      followUp: ["Can we accept donations online?", "How do we recruit volunteers?", "Can we show our impact?"],
    },
  },
  {
    keywords: ["clinic", "hospital", "medical", "doctor", "health", "healthcare", "pharmacy", "dentist", "optician"],
    answer: {
      text: "Healthcare websites:\n\n🏥 Services and departments overview\n👨‍⚕️ Doctor profiles and credentials\n📅 Online appointment booking\n📍 Location and directions\n📞 Emergency contact information\n💊 Health resources and blog\n\nStarting at UGX 450,000.",
      followUp: ["Can patients book appointments?", "Do you include patient forms?", "Can I show doctor profiles?"],
    },
  },
  {
    keywords: ["lawyer", "law firm", "legal", "attorney", "advocate", "solicitor", "barrister", "legal services"],
    answer: {
      text: "Legal/ law firm websites:\n\n⚖️ Practice areas and expertise\n👔 Attorney profiles with experience\n📞 Consultation booking via WhatsApp\n📋 Case inquiry forms\n📰 Legal resources and articles\n📍 Office locations and contact\n\nStarting at UGX 450,000.",
      followUp: ["Can clients book consultations online?", "How do I showcase my practice areas?", "Can I share legal articles?"],
    },
  },
  {
    keywords: ["photography", "photographer", "videography", "videographer", "media", "creative", "portfolio", "photoshoot"],
    answer: {
      text: "Photography/videography portfolio websites:\n\n📸 High-quality image gallery with lightbox\n🎥 Video portfolio and showreels\n📋 Service packages and pricing\n📅 Booking calendar\n📞 WhatsApp inquiry\n⭐ Client testimonials with work samples\n\nStarting at UGX 450,000.",
      followUp: ["Can I show my portfolio in a gallery?", "How do clients book me?", "Can I sell prints?"],
    },
  },
  {
    keywords: ["thank", "thanks", "thank you", "thanks bye", "thank you bye", "helpful", "great", "good", "awesome", "perfect", "appreciate"],
    answer: {
      text: "You're very welcome! 😊 Is there anything else I can help you with? You can also:\n\n📞 Chat with us on WhatsApp for a personalized consultation\n📄 Check our Pricing page for detailed plans\n🖼️ Browse our Portfolio to see past work\n\nOr just keep asking me questions!",
      followUp: ["I'd like to get a quote", "Can I see your pricing?", "Tell me more about your services"],
    },
  },
  {
    keywords: ["bye", "goodbye", "see you", "later", "talk later", "farewell"],
    answer: {
      text: "Thanks for chatting! 🙏 If you ever want to get started, just reach out on WhatsApp at 256778030847 or visit our website anytime.\n\nHave a great day! 🚀",
      followUp: ["Actually, I have one more question", "Let me check pricing first", "I'll come back later"],
    },
  },
  {
    keywords: ["refund", "cancel", "cancellation", "money back", "guarantee", "satisfaction"],
    answer: {
      text: "We want you to love your website. Here's our policy:\n\n✅ During development — we work in stages with your approval. You see everything before we launch.\n✅ Revisions — all plans include revisions during the build process.\n✅ Change of mind — if you cancel before development starts, we refund your deposit in full.\n✅ After launch — once the site is live and you've approved it, the final payment covers the completed work.\n\nWe're transparent. No hidden surprises.",
      followUp: ["What if I don't like the design?", "How many revisions do I get?", "Can I get my deposit back?"],
    },
  },
  {
    keywords: ["contact", "phone", "call", "number", "reach", "location", "office", "kampala", "address"],
    answer: {
      text: "Here's how to reach us:\n\n📱 WhatsApp: wa.me/256778030847 (fastest response, typically < 2 hours)\n📧 Email: hello@nilesites.com\n📍 Location: Kampala, Uganda\n\nWhatsApp is our primary channel. We respond fastest there!",
      followUp: ["I want to start a project", "I'd like a quote", "Tell me about pricing"],
    },
  },
  {
    keywords: ["start", "get started", "begin", "i want", "i need", "sign up", "signup", "hire", "engage", "interested in"],
    answer: {
      text: "Great! Getting started is simple:\n\n1️⃣ Click the WhatsApp button on this page\n2️⃣ Tell us about your business and what you need\n3️⃣ We'll recommend the perfect package\n4️⃣ 50% deposit, we build, you review, we launch!\n\nOr tell me what kind of business you have and I can give you a quick estimate right now.",
      followUp: ["I have a restaurant", "I have a shop", "I have a church"],
    },
  },
  {
    keywords: ["perfect for", "business types", "industries", "what kind of", "who do you work with", "clients"],
    answer: {
      text: "We work with all types of Ugandan businesses! Here are 15 we specialize in:\n\n1. 🏪 Retail shops & supermarkets\n2. 🍽️ Restaurants & cafes\n3. 🏨 Lodges, hotels & guest houses\n4. ⛪ Churches & ministries\n5. 🏫 Schools & educational institutions\n6. 🚗 Car bonds & dealerships\n7. 🚛 Transport & logistics companies\n8. 💇 Salons, barbers & spas\n9. 🌾 Farms & agricultural businesses\n10. 🏠 Real estate & property agents\n11. 💪 Gyms & fitness centers\n12. 🤝 NGOs & nonprofits\n13. 🏥 Clinics & healthcare providers\n14. ⚖️ Law firms & legal practices\n15. 📸 Photographers & creative agencies\n\nWhich one describes your business?",
      followUp: ["I have a restaurant", "I run a church", "I own a shop"],
    },
  },
  {
    keywords: ["free", "trial", "demo", "sample", "test", "try", "see first", "before paying"],
    answer: {
      text: "We'd love to show you what we can do! Here's how you can see our work before committing:\n\n🖼️ Browse our Portfolio page — see real sites we've built\n💬 Chat with us on WhatsApp — we'll share relevant examples\n📞 Hop on a free consultation call — no obligation\n\nWe also offer a discovery phase where we share a design concept before you pay the full deposit.",
      followUp: ["Show me your portfolio", "I want a free consultation", "Can you build X type of site?"],
    },
  },
  {
    keywords: ["seo", "search engine", "google ranking", "rank", "visibility", "keywords", "traffic", "google"],
    answer: {
      text: "SEO (Search Engine Optimization) helps your site appear when people search Google for your services. Our SEO package includes:\n\n🔍 Keyword research — finding what your customers search for\n📝 On-page optimization — titles, descriptions, headings\n📍 Google Business Profile — get on Google Maps\n📊 Monthly performance reports\n🔗 Local SEO — target Kampala and Ugandan searches\n\nAll our sites come with basic SEO. Advanced SEO packages available as add-ons.",
      followUp: ["How long does SEO take?", "Do I need SEO?", "What is Google Business Profile?"],
    },
  },
  {
    keywords: ["google business", "google maps", "google my business", "gmb", "maps", "local search", "find on google"],
    answer: {
      text: "Google Business Profile gets your business on Google Maps and Search. When someone searches \"restaurants near me\" or \"plumber in Kampala\", your business appears with:\n\n📍 Your location on Google Maps\n⭐ Reviews from customers\n📞 Click-to-call button\n🖼️ Photos of your business\n📢 Posts and offers\n\nWe handle verification, optimization, and management. This is included in our Standard and Premium plans!",
      followUp: ["Can I get reviews?", "How long does verification take?", "Is this included in my plan?"],
    },
  },
  {
    keywords: ["mobile money", "momo", "airtel money", "payment gateway", "pay", "checkout", "transaction"],
    answer: {
      text: "We can help you accept payments on your site via MTN MoMo or Airtel Money — you confirm payments yourself and tell the customer the order is confirmed. No order tracking dashboard or transaction history yet; we add that as your business grows.",
      followUp: ["How do I track payments?", "What are the transaction fees?", "Can I use both MoMo and Airtel?"],
    },
  },
  {
    keywords: ["expensive", "too much", "costly", "can't afford", "cheaper", "discount", "reduce price", "lower price", "budget"],
    answer: {
      text: "I understand budget matters. A few honest options:\n\n💡 Start with a free website check — costs nothing and shows exactly what you need\n📦 Starter site (UGX 450,000) covers the essentials; you can add features later\n🤖 Watchdog (UGX 80,000/month) protects what you already have\n💬 Tell us your budget on WhatsApp — we'll scope the most valuable version of it",
      followUp: ["I want a free website check", "How much does a website cost?", "I want to get started"],
    },
  },
  {
    keywords: ["human", "real person", "someone real", "talk to someone", "call me", "phone call", "agent person", "customer care"],
    answer: {
      text: "Of course — I'm just the assistant! 👩🏾‍💻 Chat with a real human right now on WhatsApp: wa.me/256778030847 (typically replies in under 2 hours).\n\nOr tell me your question here and I'll make sure the team sees it with your details.",
      followUp: ["I want to get started", "I want a free website check"],
    },
  },
  {
    keywords: ["oli otya", "gyoli", "gyoli otya", "habari", "hujambo", "mambo", "webale", "tusanyukidde", "osibye", "bye bye"],
    answer: {
      text: "Tusanyukidde! 😊 (I mostly chat in English — drop me a message in English anytime.) I'm the NileSites assistant — I can help with websites, AI agents, and pricing. What do you need?",
      followUp: ["What services do you offer?", "Tell me about AI Agents", "How much does a website cost?"],
    },
  },
  {
    keywords: ["i have a", "my business", "my company", "i run", "i operate", "i own"],
    answer: {
      text: "Tell me what type of business you have and I'll tell you exactly what we can build for you! We work with retail shops, restaurants, hotels, churches, schools, car bonds, transport companies, salons, farms, real estate, gyms, NGOs, clinics, law firms, photographers, and more.\n\nWhat's your business?",
      followUp: ["I have a restaurant", "I run a church", "I own a shop", "I'm a photographer", "I have a hotel"],
    },
  },
];

function normalize(text: string): string {
  return text.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "");
}

function tokenize(text: string): string[] {
  return normalize(text).split(/\s+/).filter(Boolean);
}

// Filler words carry no intent. Single letters/digits match everything
// ("i" hides inside "ai", "monitor", "pricing") and must never score.
const STOPWORDS = new Set([
  "a", "an", "the", "i", "you", "he", "she", "it", "we", "they", "them",
  "me", "him", "her", "us", "my", "your", "his", "our", "their",
  "is", "are", "was", "were", "am", "be", "been", "do", "does", "did",
  "have", "has", "had", "will", "would", "should", "could", "can",
  "what", "who", "how", "when", "where", "which",
  "to", "of", "in", "on", "at", "for", "from", "by", "with", "about",
  "and", "or", "but", "as", "if", "so", "too", "very",
  "this", "that", "these", "those", "there",
  "not", "no", "yes", "please", "just", "like", "get", "got",
]);

function contentTokens(text: string): string[] {
  return tokenize(text).filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

function scoreMatch(query: string, entry: KnowledgeEntry): number {
  const queryTokens = contentTokens(query);
  const queryNorm = normalize(query);
  const entryTokens = entry.keywords.map(k => normalize(k));
  const entryFull = entry.keywords.join(" ").toLowerCase();

  let score = 0;

  for (const qt of queryTokens) {
    for (const et of entryTokens) {
      if (et.includes(qt) || qt.includes(et)) {
        score += 2;
      }
      if (qt === et) {
        score += 3;
      }
    }
  }

  if (queryNorm === entryFull) {
    score += 10;
  }

  if (entryFull.includes(queryNorm)) {
    score += 5;
  }

  if (queryNorm.includes(entryFull)) {
    score += 3;
  }

  const queryLen = queryTokens.length;
  const matchCount = entryTokens.filter(et =>
    queryTokens.some(qt => et.includes(qt) || qt.includes(et))
  ).length;

  if (matchCount >= Math.min(3, queryLen) && queryLen >= 2) {
    score += matchCount * 2;
  }

  return score;
}

export function findBestAnswer(query: string): Answer {
  const trimmed = query.trim();
  if (!trimmed) {
    return { text: "Hi! Ask me anything about NileSites — our services, pricing, process, or anything else. I'm here to help! 😊" };
  }

  let bestScore = 0;
  let secondScore = 0;
  let bestEntry: KnowledgeEntry | null = null;

  for (const entry of knowledge) {
    const score = scoreMatch(trimmed, entry);
    if (score > bestScore) {
      secondScore = bestScore;
      bestScore = score;
      bestEntry = entry;
    } else if (score > secondScore) {
      secondScore = score;
    }
  }

  // Confident match: clears the bar AND stands clear of the runner-up.
  // Close calls and weak matches fall back honestly instead of pitching blindly.
  // Tie-break: an exact word match beats substring containment
  // ("price" means the pricing page, not the budget talk).
  if (bestEntry && bestScore >= 3) {
    if (bestScore - secondScore >= 3) return bestEntry.answer;
    const singleWords = (entry: KnowledgeEntry) =>
      entry.keywords.filter((k) => !k.includes(" ")).map((k) => normalize(k));
    const exacts = (entry: KnowledgeEntry) =>
      contentTokens(trimmed).filter((qt) => singleWords(entry).includes(qt)).length;
    if (
      exacts(bestEntry) > Math.max(...knowledge.filter((e) => e !== bestEntry).map(exacts))
    ) {
      return bestEntry.answer;
    }
  }

  return {
    text: "I'm not sure I understand. Could you try asking differently? Here are things I can help with:\n\n💻 Web design & development\n🤖 AI Agents (watchdog, bots, radar)\n💰 Pricing & packages\n📅 Timeline & process\n💳 Payment options\n\nOr just ask me anything about NileSites!",
      followUp: ["What services do you offer?", "Tell me about AI Agents", "How much does a website cost?", "I want a free website check"],
  };
}
