import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function OverOnsPage() {
  return (
    <div className="min-h-svh bg-background text-foreground flex flex-col">
      <main className="flex-grow">
        <div id="about-intro" data-section="about-intro">
          <SectionErrorBoundary name="about-intro">
            <AboutTextSplit
              title="Over Ons"
              descriptions={[
                "Wij zijn een gepassioneerd team van digitale experts, toegewijd aan het bouwen van uitzonderlijke online ervaringen voor vooruitstrevende bedrijven.",
                "Onze missie is om ondernemingen te helpen groeien door middel van innovatieve weboplossingen, strategisch design en meetbare resultaten. We geloven in de kracht van technologie om complexe problemen op te lossen."
              ]}
              primaryButton={{ text: "Bekijk onze diensten", href: "/diensten" }}
              secondaryButton={{ text: "Neem contact op", href: "/contact" }}
            />
          </SectionErrorBoundary>
        </div>

        <div id="about-features" data-section="about-features">
          <SectionErrorBoundary name="about-features">
            <AboutFeaturesSplit
              tag="Kernwaarden"
              title="Waar wij voor staan"
              description="Kwaliteit, transparantie en resultaatgerichtheid vormen de basis van alles wat we doen. Dit is wat je van ons kunt verwachten."
              items={[
                { icon: "star", title: "Kwaliteit", description: "Wij leveren alleen het beste werk af, zonder compromissen op het gebied van design of code." },
                { icon: "zap", title: "Snelheid", description: "Onze efficiënte processen zorgen voor een snelle en soepele oplevering van jouw project." },
                { icon: "shield", title: "Betrouwbaarheid", description: "We doen wat we beloven, communiceren helder en staan altijd voor je klaar." }
              ]}
              imageSrc=""
            />
          </SectionErrorBoundary>
        </div>

        <div id="team" data-section="team">
          <SectionErrorBoundary name="team">
            <TeamProfileCards
              tag="Ons Team"
              title="De mensen achter het werk"
              description="Leer de experts kennen die dagelijks met passie werken om jouw digitale ambities waar te maken."
              items={[
                { title: "Jan Jansen", description: "Oprichter & Strateeg", avatarSrc: "https://i.pravatar.cc/150?u=jan", buttonText: "LinkedIn", buttonHref: "#", imageSrc: "" },
                { title: "Piet Pietersen", description: "Lead Developer", avatarSrc: "https://i.pravatar.cc/150?u=piet", buttonText: "LinkedIn", buttonHref: "#", imageSrc: "" },
                { title: "Marie de Vries", description: "UX/UI Designer", avatarSrc: "https://i.pravatar.cc/150?u=marie", buttonText: "LinkedIn", buttonHref: "#", imageSrc: "" },
                { title: "Lisa Bakker", description: "Project Manager", avatarSrc: "https://i.pravatar.cc/150?u=lisa", buttonText: "LinkedIn", buttonHref: "#", imageSrc: "" }
              ]}
            />
          </SectionErrorBoundary>
        </div>
      </main>
    </div>
  );
}