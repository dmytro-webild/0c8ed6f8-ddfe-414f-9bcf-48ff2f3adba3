import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand=""
      description="LDW Studio bouwt premium digitale ervaringen die vertrouwen wekken, leads genereren en business laten groeien."
      primaryButton={{
        text: "Plan een gratis strategiesessie",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Bekijk Portfolio",
        href: "#portfolio",
      }}
      imageSrc="https://storage.googleapis.com/webild/users/user_3Fmc3r09SflhMLNoY1gEspIQETh/uploaded-1782763903672-48r7p02n.png"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      tag="Ons verhaal"
      title="Wij zijn Ldw Studio. Vanuit een passie voor ondernemerschap, design en digitale innovatie zijn wij deze onderneming begonnen."
      description="Met een scherpe blik voor detail geloven wij dat juist de kleinste keuzes het grootste verschil maken. Een fractie in een ontwerp, een vloeiende animatie of de juiste boodschap kan bepalen hoe een merk wordt ervaren. Wij helpen bedrijven hun online uitstraling opnieuw vorm te geven."
      primaryButton={{
        text: "Lees ons verhaal",
        href: "/over-ons",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedSteps
      tag="Services"
      title="Onze Expertise"
      description="Digitale oplossingen die jouw bedrijf transformeren."
      steps={[
        {
          tag: "01",
          title: "Web Design",
          subtitle: "Premium Maatwerk",
          description: "High-converting websites met een focus op luxe en resultaat.",
          imageSrc: "http://img.b2bpic.net/free-photo/analysis-strategy-study-information-business-planning_53876-133682.jpg",
        },
        {
          tag: "02",
          title: "Digital Growth",
          subtitle: "Strategische Marketing",
          description: "Wij helpen jou om beter vindbaar en zichtbaar te zijn.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphics-composition_23-2148991204.jpg",
        },
        {
          tag: "03",
          title: "Branding",
          subtitle: "Visuele Identiteit",
          description: "Een merk dat staat als een huis.",
          imageSrc: "http://img.b2bpic.net/free-photo/illustration-depicting-corporate-job_23-2151889094.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesRevealCardsBento
      tag="Portfolio"
      title="Onze Projecten"
      description="Recent werk voor ambitieuze ondernemers."
      items={[
        {
          title: "High-end Automotive",
          description: "Resultaatgerichte web design transformatie.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345423.jpg",
        },
        {
          title: "Retail Showcase",
          description: "Premium e-commerce ervaring.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3Fmc3r09SflhMLNoY1gEspIQETh/uploaded-1782761578360-8ocli4u8.png",
        },
        {
          title: "Hospitality Portal",
          description: "Digital guest experience strategy.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3Fmc3r09SflhMLNoY1gEspIQETh/uploaded-1782761578362-d4v4jgja.png",
        },
        {
          title: "Construction Case",
          description: "Lead generatie web architectuur.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/golden-smoke-black-screen_23-2148227231.jpg",
        },
        {
          title: "Service Business",
          description: "Premium booking engine experience.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-dark-mode-app-template_23-2150515781.jpg",
        },
        {
          title: "Tech Startup",
          description: "SaaS growth platform design.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/growth-status-technology-online-website-concept_53876-21396.jpg",
        },
        {
          title: "Luxury Estate",
          description: "High-end real estate showcase.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/comparison-different-types-brush-strokes_23-2150105226.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Prijzen"
      title="Investeren in Groei"
      description="Kwaliteit voor ondernemers die vooruit willen."
      plans={[
        {
          tag: "Starter",
          price: "€2.500",
          period: "Vanaf",
          features: [
            "Maatwerk design",
            "Mobile responsive",
            "Basis SEO",
          ],
          primaryButton: {
            text: "Boek Strategiesessie",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tablet-with-blue-icons_1134-57.jpg",
        },
        {
          tag: "Professional",
          price: "€5.000",
          period: "Vanaf",
          features: [
            "Advanced design",
            "SEO Optimalisatie",
            "Priority Support",
          ],
          primaryButton: {
            text: "Boek Strategiesessie",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-asking-question-meeting_482257-115048.jpg",
        },
        {
          tag: "Enterprise",
          price: "€10.000+",
          period: "Op maat",
          features: [
            "Growth Partner",
            "Full Stack Dev",
            "Premium Support",
          ],
          primaryButton: {
            text: "Boek Strategiesessie",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/pink-colored-office-supplies-fruits_23-2148182137.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Impact"
      title="Cijfers die Tellen"
      description="Wij geloven in meetbaar succes."
      metrics={[
        {
          value: "150+",
          description: "Succesvolle Projecten",
        },
        {
          value: "45%",
          description: "Gemiddelde Leadgroei",
        },
        {
          value: "99%",
          description: "Klanttevredenheid",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Testimonials"
      title="Wat Klanten Zeggen"
      description="Resultaten die spreken."
      testimonials={[
        {
          name: "Jan de Vries",
          role: "CEO Bouwgroep",
          quote: "LDW Studio heeft ons online volledig op de kaart gezet.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1671.jpg",
        },
        {
          name: "Marieke Jansen",
          role: "Eigenaar Retail",
          quote: "De verkoop steeg direct na livegang.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1633.jpg",
        },
        {
          name: "Pieter Smit",
          role: "Automotive Consultant",
          quote: "Eindelijk een bureau dat begrijpt hoe groei werkt.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1576.jpg",
        },
        {
          name: "Sarah van den Berg",
          role: "Hotellerie",
          quote: "Strak, modern en zeer effectief design.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84736.jpg",
        },
        {
          name: "Thomas Hoekstra",
          role: "Service Founder",
          quote: "Absolute topklasse in design en marketing.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Support"
      title="Veelgestelde Vragen"
      description="Heb je nog vragen? Wij staan klaar."
      items={[
        {
          question: "Wat is inbegrepen in de strategie sessie?",
          answer: "Een diepgaande analyse van jouw huidige website en groeimogelijkheden.",
        },
        {
          question: "Hoe lang duurt een gemiddeld traject?",
          answer: "Doorgaans 4-8 weken afhankelijk van complexiteit.",
        },
        {
          question: "Werken jullie met Shopify?",
          answer: "Ja, wij bouwen premium Shopify webshops.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact"
      text="Klaar om jouw business naar een hoger niveau te tillen? Plan jouw gratis strategiesessie vandaag nog."
      primaryButton={{
        text: "Plan een gratis strategiesessie",
        href: "#",
      }}
      secondaryButton={{
        text: "Bel direct: +31 06-57251118",
        href: "tel:+310657251118",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
