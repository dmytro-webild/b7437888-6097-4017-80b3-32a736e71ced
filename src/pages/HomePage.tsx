import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Luxury AI Automation"
      title="Stop Losing Customers to Slow Responses"
      description="Modern AI-powered systems that help businesses respond faster, qualify enquiries, automate communication, and stay available 24/7."
      primaryButton={{
        text: "Book a Free Review",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-workspace-with-advanced-technology-enhance-efficiency_482257-125614.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-sunglasses_1163-5525.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="Efficiency is the bridge between aspiration and reality. In the modern service economy, being present is not enough—you must be responsive."
      author="Nazar Ulyanov"
      role="Founder, AutoClient Solutions"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-bearded-black-man-wool-suit_613910-15972.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Our Automation Suite"
      title="Precision Business Solutions"
      description="Premium systems designed to scale your operational capacity while maintaining a white-glove client experience."
      items={[
        {
          title: "24/7 Intelligent Response",
          description: "Ensure no enquiry goes unacknowledged with AI systems that manage your communication around the clock.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/messy-office-workplace-workplace-workspace-concept_185193-109628.jpg",
        },
        {
          title: "Lead Qualification",
          description: "Automated protocols to filter and prioritize high-value enquiries, so your team focuses on closing.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252445.jpg",
        },
        {
          title: "CRM Integration",
          description: "Seamlessly bridge your client communication across Instagram, WhatsApp, and Facebook into one source of truth.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",
        },
        {
          title: "Strategic Audits",
          description: "Deep analysis of your current manual processes to uncover hidden friction points and missed revenue.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-examining-company-performance_482257-121856.jpg",
        },
        {
          title: "Operational Excellence",
          description: "Refining your client onboarding and internal processes to ensure professional, scalable consistency.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/artificial-intelligence-technology-simulating-human-brain-used-by-engineer_482257-122157.jpg",
        },
        {
          title: "Scalable Infrastructure",
          description: "Build foundations that grow with your business, supporting high volumes without compromising premium quality.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ring-binder_23-2149568988.jpg",
        },
        {
          title: "Conversion Engineering",
          description: "Optimized communication workflows designed to convert more enquiries into booked appointments.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/global-communications-connection-discussion-interaction-concept_53876-21186.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Proven Impact"
      title="Scalable Performance Data"
      description="The metrics that drive your business growth, enabled by AutoClient."
      metrics={[
        {
          value: "400%",
          title: "Faster Response Time",
          features: [
            "Average response speed",
            "Immediate client touchpoints",
          ],
        },
        {
          value: "65%",
          title: "Lead Conversion Rate",
          features: [
            "Automated qualification flows",
            "Better sales targeting",
          ],
        },
        {
          value: "24/7",
          title: "Operational Availability",
          features: [
            "Never miss an enquiry",
            "Always-on communication",
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Client Success"
      title="Luxury Partners"
      description="Entrepreneurs and consultants who elevated their growth through automation."
      testimonials={[
        {
          name: "Sarah Johnson",
          role: "CEO",
          company: "Elite Dental",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-man-writing-document-bicycle-shop_23-2147892642.jpg",
        },
        {
          name: "Michael Chen",
          role: "Founder",
          company: "Prime Realty",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-businesswoman_23-2148012909.jpg",
        },
        {
          name: "Emily Rodriguez",
          role: "Owner",
          company: "Serene Spa",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-agents-collaborating-track-lost-customers-shipments_482257-117820.jpg",
        },
        {
          name: "David Kim",
          role: "Consultant",
          company: "Growth Partners",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/view-student-cute-woman-smiling-camera_197531-33567.jpg",
        },
        {
          name: "Lisa Wang",
          role: "Owner",
          company: "Zen Clinic",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-bearded-male-small-cafe-with-lot-flowers-coffee-machine_613910-8899.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By"
      title="Industry Leaders"
      description="Businesses trusting us with their communication infrastructure."
      names={[
        "DentalClinic Group",
        "Elite Realty",
        "Wellness Studio",
        "Consulting Agency",
        "Luxury Spa",
        "Growth Ventures",
        "Premium Clinics",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Queries"
      title="Frequently Asked Questions"
      description="Everything you need to know about integrating AI automation into your luxury business."
      items={[
        {
          question: "Is AI automation 'robotic' or impersonal?",
          answer: "Our solutions are designed to sound human and maintain your unique brand voice, ensuring every interaction feels premium and personal.",
        },
        {
          question: "Which channels do you support?",
          answer: "We integrate with WhatsApp, Instagram, Facebook, and your existing email/website forms for unified client management.",
        },
        {
          question: "Is my data secure?",
          answer: "We prioritize enterprise-grade security, ensuring your client information and business data remain protected and private.",
        },
        {
          question: "Can this work for my small business?",
          answer: "Yes, our systems are scalable, designed for small-to-medium service businesses aiming for high-end growth and operational excellence.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-office-chair-modern-glass-building-generated-by-ai_188544-13768.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Begin Your Transformation"
      text="Ready to respond faster and scale your business with luxury AI systems?"
      primaryButton={{
        text: "Book a Free Review",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contact Nazar",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
