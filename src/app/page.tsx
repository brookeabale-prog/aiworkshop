import { ThemeToggle } from "./theme-toggle";

const EMAIL = "Brookeabale@gmail.com";

const experience = [
  {
    role: "Vice President of Development",
    org: "MXD Capital",
    location: "Oklahoma City, OK",
    dates: "October 2021 – 2025",
    bullets: [
      "Coordinated acquisition and predevelopment across mixed-use and multifamily developments encompassing 1,300+ multifamily units, nearly 200 single-family residential row homes, and 146,000 sq. ft. of retail and office space.",
      "Managed four concurrent predevelopment efforts, coordinating approximately twelve outside firms at once across civil, structural, MEP, geotechnical, and environmental engineering; architecture, interior design, and landscape architecture; general contracting and cost estimating; land use counsel, title, lenders, and equity investors; and city planning, permitting, and utility staff — integrating vendor tasks and reviewing deliverables against project milestones.",
      "Prepared the complete tax increment financing application for the Broadway Lofts project in Edmond, assembling the financial, market, and project documentation required for municipal review.",
      "Led site planning and market analysis on a mixed-use development, identifying and managing project risks and surfacing market conditions that shaped delivery decisions.",
      "Built financial pro forma models and presentation materials supporting capital raising, translating technical project detail into decision-ready documentation for lenders and investors.",
    ],
  },
  {
    role: "Planning & Development Coordinator",
    org: "Cornerstone Development",
    location: "Oklahoma City, OK",
    dates: "January 2014 – October 2021",
    bullets: [
      "Coordinated planning, design, and implementation on residential multifamily and commercial projects totaling more than $475 million and 1,200 units.",
      "Managed all phases of The National, a $300 million adaptive reuse of the historic First National Bank building (Marriott Autograph Collection) — 146 hotel keys, 193 residences, five food and beverage venues, and a retail concourse — coordinating design, procurement, FF&E installation, and delivery through occupancy.",
      "Served as project liaison for planning, construction, and design of urban multifamily units and 25,000 sq. ft. of retail across five mixed-use projects.",
      "Contributed to a project delivered under a layered public financing structure — federal and state historic tax credits, New Markets Tax Credits, tax increment financing, and a federally-backed Section 108 loan drawn against Community Development Block Grant funds — where National Park Service preservation standards directly governed design and construction decisions.",
      "Produced feasibility studies built on 110 comparative case studies from across the United States to support development due diligence and project go/no-go decisions.",
      "Prepared supporting materials for city council and planning commission proceedings on behalf of project leadership.",
      "Analyzed and marketed the investment offering for a $232 million building acquisition, preparing supporting financial and market documentation.",
      "Coordinated investor relations reporting across a 2,000-unit multifamily portfolio with CS Management, maintaining recurring status communication with stakeholders.",
    ],
  },
  {
    role: "Principal & Licensed Real Estate Broker",
    org: "CityGates Real Estate LLC",
    location: "Oklahoma City, OK",
    dates: "2025 – Present",
    bullets: [
      "Operate an independent brokerage and rental property portfolio, coordinating vendors, contractors, and maintenance workflows and administering contracts, compliance requirements, and scheduled reporting across concurrent property and transaction files.",
      "Built and implemented process improvements for maintenance intake, vendor routing, and recurring status reporting, reducing manual tracking across concurrent property and transaction files.",
    ],
  },
];

const expertise = [
  "Project Lifecycle Coordination",
  "Scope & Work Plan Development",
  "Milestone & Schedule Tracking",
  "Vendor Task Integration & Deliverable Review",
  "Contract Administration",
  "Public Finance Applications (TIF, Historic Tax Credits, NMTC)",
  "Regulatory & Funder Compliance",
  "Risk Identification & Mitigation",
  "Status Reporting & Communication Plans",
  "Municipal & Entitlement Coordination",
  "Budget Development & Financial Modeling",
  "Feasibility Studies & Due Diligence",
  "Investor & Funder Reporting",
];

const software = [
  "Microsoft Excel",
  "Word",
  "PowerPoint",
  "Outlook",
  "Adobe Creative Cloud",
  "Integra Demographic Software",
  "Airtable",
  "Project tracking and workflow automation platforms",
];

const education = [
  {
    degree: "Master of City & Regional Planning",
    school: "University of Oklahoma",
    location: "Norman, OK",
    dates: "December 2015",
    note: "Specialization in Community & Economic Development | 4.0 / 4.0 GPA, Honors",
  },
  {
    degree: "Bachelor of Business Administration, Finance",
    school: "University of Central Oklahoma",
    location: "Edmond, OK",
    dates: "December 2013",
    note: "Minor in Real Estate | 3.97 / 4.0 GPA, Summa Cum Laude",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <ThemeToggle />

      <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Brooke Bale
        </h1>
        <p className="mt-2 text-lg font-semibold text-zinc-700 dark:text-zinc-300">
          Project Coordination • Contract &amp; Vendor Delivery • Community &amp;
          Economic Development
        </p>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Oklahoma City, OK · Available for full-time remote work with travel to
          Alaska
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
            >
              {EMAIL}
            </a>
          </li>
        </ul>
      </header>

      <section aria-labelledby="summary" className="pt-8">
        <h2 id="summary" className="text-xl font-semibold">
          Professional Summary
        </h2>
        <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
          Project coordination professional with over ten years delivering
          complex, multi-phase capital projects from scoping and funding through
          approval, implementation, and closeout. Experience concentrated in
          publicly-financed development, where compliance requirements and
          funder standards directly govern scope, schedule, and delivery
          decisions. Routinely coordinates a dozen or more outside firms
          simultaneously across engineering, architecture, construction, legal,
          and lending. Master&apos;s-trained in City &amp; Regional Planning with a
          specialization in Community &amp; Economic Development.
        </p>
      </section>

      <section aria-labelledby="experience" className="pt-8">
        <h2 id="experience" className="text-xl font-semibold">
          Experience
        </h2>
        <div className="mt-4 space-y-8">
          {experience.map((job) => (
            <article key={job.org}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold">
                  {job.role}, {job.org}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.location} · {job.dates}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills" className="pt-8">
        <h2 id="skills" className="text-xl font-semibold">
          Skills
        </h2>
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Areas of Expertise
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-zinc-700 sm:grid-cols-2 dark:text-zinc-300">
            {expertise.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Software
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            {software.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-300 px-3 py-1 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="education" className="pt-8">
        <h2 id="education" className="text-xl font-semibold">
          Education
        </h2>
        <div className="mt-4 space-y-6">
          {education.map((item) => (
            <article key={item.degree}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold">{item.degree}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.dates}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.school}, {item.location}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-12 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Brooke Bale</p>
      </footer>
    </main>
  );
}