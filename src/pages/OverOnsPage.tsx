import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Gratis Strategiesessie", href: "/gratis-strategiesessie" }}
      />
      
      <main className="flex-grow">
        <AboutTextSplit
          title="Over Ons"
          descriptions={[
            "Wij zijn een gepassioneerd team van digitale experts, toegewijd aan het bouwen van uitzonderlijke online ervaringen voor vooruitstrevende bedrijven.",
            "Onze missie is om ondernemingen te helpen groeien door middel van innovatieve weboplossingen, strategisch design en meetbare resultaten. We geloven in de kracht van technologie om complexe problemen op te lossen."
          ]}
          primaryButton={{ text: "Bekijk onze diensten", href: "/diensten" }}
          secondaryButton={{ text: "Neem contact op", href: "/contact" }}
        />

        <AboutFeaturesSplit
          tag="Kernwaarden"
          title="Waar wij voor staan"
          description="Kwaliteit, transparantie en resultaatgerichtheid vormen de basis van alles wat we doen. Dit is wat je van ons kunt verwachten."
          items={[
            { icon: "star", title: "Kwaliteit", description: "Wij leveren alleen het beste werk af, zonder compromissen op het gebied van design of code." },
            { icon: "zap", title: "Snelheid", description: "Onze efficiënte processen zorgen voor een snelle en soepele oplevering van jouw project." },
            { icon: "shield", title: "Betrouwbaarheid", description: "We doen wat we beloven, communiceren helder en staan altijd voor je klaar." }
          ]}
        />

        <TeamProfileCards
          tag="Ons Team"
          title="De mensen achter het werk"
          description="Leer de experts kennen die dagelijks met passie werken om jouw digitale ambities waar te maken."
          items={[
            { title: "Jan Jansen", description: "Oprichter & Strateeg", avatarSrc: "https://i.pravatar.cc/150?u=jan" },
            { title: "Piet Pietersen", description: "Lead Developer", avatarSrc: "https://i.pravatar.cc/150?u=piet" },
            { title: "Marie de Vries", description: "UX/UI Designer", avatarSrc: "https://i.pravatar.cc/150?u=marie" },
            { title: "Lisa Bakker", description: "Project Manager", avatarSrc: "https://i.pravatar.cc/150?u=lisa" }
          ]}
        />
      </main>

      <FooterSimple
        brand="Webild"
        columns={[
          {
            title: "Bedrijf",
            items: [
              { label: "Over Ons", href: "/over-ons" },
              { label: "Diensten", href: "/diensten" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Klantenservice",
            items: [
              { label: "FAQ", href: "/faq" },
              { label: "Klachtenprocedure", href: "/klachtenprocedure" },
              { label: "Klantportaal Login", href: "/klantportaal" }
            ]
          }
        ]}
        copyright="© 2024 Webild. Alle rechten voorbehouden."
        links={[
          { label: "Privacybeleid", href: "/privacybeleid" },
          { label: "Cookiebeleid", href: "/cookiebeleid" },
          { label: "Algemene Voorwaarden", href: "/algemene-voorwaarden" }
        ]}
      />
    </div>
  );
}