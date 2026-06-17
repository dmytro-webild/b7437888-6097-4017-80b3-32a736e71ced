import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
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
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Social Proof",
    "href": "#social-proof"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="AutoClient"
      logoImageSrc="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=100&auto=format&fit=crop"
      ctaButton={{
        text: "Book a Free Review",
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
          title: "AutoClient",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Success",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Book Review",
              href: "#contact",
            },
            {
              label: "Email: nazar@autoclient.solutions",
              href: "mailto:nazar@autoclient.solutions",
            },
          ],
        },
      ]}
      leftText="© 2024 AutoClient Solutions. All rights reserved."
      rightText="Designed by Nazar Ulyanov"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
