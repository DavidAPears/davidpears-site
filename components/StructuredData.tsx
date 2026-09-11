/**
 * Schema.org Person data, for search engines rather than readers.
 *
 * Nothing here renders. It is how Google connects a name to a job title, a
 * city, a set of skills and a person's other profiles, which is what builds a
 * knowledge panel for someone's name.
 */

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Pears",
  url: "https://davidpears.com",
  image: "https://davidpears.com/brand/david-pears.jpg",
  jobTitle: "Co-founder & CTO",
  description:
    "Hands-on engineering leader in Stockholm. Co-founder and CTO at NaviSavi, leading front-end and React Native development across four products.",
  email: "mailto:davidapears@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "NaviSavi",
    url: "https://navisavitravel.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressCountry: "SE",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "CodeClan" },
    { "@type": "CollegeOrUniversity", name: "University of Lincoln" },
  ],
  knowsAbout: [
    "React Native",
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Expo",
    "Mobile app development",
    "Front-end architecture",
    "Engineering leadership",
    "Fractional CTO",
    "Technical advisory",
    "GraphQL",
    "REST APIs",
    "AWS",
    "PostgreSQL",
    "Stripe",
    "Video streaming",
  ],
  sameAs: ["https://www.linkedin.com/in/davepears/", "https://github.com/DavidAPears"],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Static object under our control, so there is nothing to escape.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }}
    />
  );
}
