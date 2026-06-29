import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Over Ons",
    "href": "#about"
  },
  {
    "name": "Diensten",
    "href": "#services"
  },
  {
    "name": "Portfolio",
    "href": "#portfolio"
  },
  {
    "name": "Prijzen",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  { name: "Over Ons", href: "/over-ons" },

];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="LDW STUDIO"
      ctaButton={{
        text: "Gratis Strategiesessie",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Navigatie",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Diensten",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacybeleid",
              href: "#",
            },
            {
              label: "Algemene Voorwaarden",
              href: "#",
            },
            {
              label: "Cookiebeleid",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "info@ldwstudio.nl",
              href: "mailto:info@ldwstudio.nl",
            },
            {
              label: "Nieuwaal, NL",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 LDW Studio. Alle rechten voorbehouden."
      rightText="Design by LDW Studio"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
