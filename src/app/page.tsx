import Image from "next/image";
import Link from "next/link";

function Section({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${dark ? "bg-dark-bg text-white" : "bg-white text-gray-800"} ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function RiskCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-forest-light mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-white/80">
            <span className="text-forest-light mt-1 flex-shrink-0">&#9656;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-start pt-24 md:pt-32">
        <Image
          src="/images/emaculata_2024.jpg"
          alt="Sustainable future landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/80 via-dark-bg/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Engineers of a sustainable future
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Helping businesses understand, quantify, and mitigate climate risk.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-forest-light text-dark-bg px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* External weather tools */}
      <section className="bg-cream pt-4 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://zoom.earth/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-forest hover:text-forest transition-colors shadow-md"
          >
            Zoom Earth
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://reg.bom.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-forest hover:text-forest transition-colors shadow-md"
          >
            Bureau of Meteorology (BOM)
            <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Climate Change Business Impact */}
      <Section className="pt-8 md:pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
          Climate Change &amp; Your Business
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Primarily, we investigate and report on environmental impact issues
              relating to the Environment Protection and Biodiversity Act, as
              well as provide information on climate outlooks and projections,
              tailored specifically to your location or the location of your
              business interests.
            </p>
            <p>
              With climate change increasing the risk to the day to day
              operations of your business, being on the front foot in
              understanding and adapting to these changes will be essential for
              your business&apos; survival and growth.
            </p>
            <p>
              We are able to deliver this information on site, or remotely. We
              will also offer, soon, seasonal climate outlook information
              nationally via subscription.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/emaculata_Bureau_of_Meteorology_2024_Max_Temp_Nov.png"
              alt="Bureau of Meteorology 2024 Maximum Temperature November"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Agricultural Vulnerabilities */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/emaculata_common_use_drought.jpg"
              alt="Drought conditions affecting agriculture"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agricultural Sector Vulnerabilities
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Agriculture is on the front lines of climate change impact. From
              crop yield disruptions to shifting temperature zones, the risks
              are immediate and growing.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <RiskCard
            title="Crop Yield Disruptions"
            items={[
              "Changing precipitation patterns reduce predictable planting and harvesting cycles",
              "Increased frequency of extreme weather events (droughts, floods) can destroy entire crop seasons",
              "Shifting temperature zones may render traditional crop varieties unsuitable for historical growing regions",
            ]}
          />
          <RiskCard
            title="Precipitation Changes"
            items={[
              "Shifting rainfall patterns affecting irrigation needs",
              "Increased drought frequency and severity",
              "Flash flooding damaging crops and infrastructure",
            ]}
          />
          <RiskCard
            title="Extreme Weather Events"
            items={[
              "More intense storms, hailstorms, and cyclones",
              "Heatwaves reducing livestock productivity",
              "Bushfire risk to agricultural land",
            ]}
          />
          <RiskCard
            title="Temperature Zone Shifts"
            items={[
              "Traditional growing regions becoming unsuitable",
              "New pest and disease pressures in warmer climates",
              "Changes to pollination cycles and biodiversity",
            ]}
          />
        </div>
      </Section>

      {/* Profit Challenges */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
          Agricultural Profit Specific Challenges
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-lg leading-relaxed">
            <h3 className="text-xl font-semibold text-forest">
              Productivity Decline
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-forest font-bold mt-1">&#9656;</span>
                Reduced crop yields from heat stress and water scarcity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest font-bold mt-1">&#9656;</span>
                Increased pest and disease pressures in changing ecological conditions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest font-bold mt-1">&#9656;</span>
                Livestock productivity diminished by heat stress and reduced grazing quality
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/emaculata_common_use_Lightening.jpg"
              alt="Lightning storm over landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Supply Chain, Operations, Financial */}
      <Section dark>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Broader Business Risks
        </h2>
        <p className="text-lg text-white/90 text-center mb-10 max-w-3xl mx-auto italic">
          Climate change is not just an environmental issue, but a fundamental
          business risk that requires proactive strategic planning, investment in
          resilience, and adaptive capabilities across all sectors.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RiskCard
            title="Supply Chain Risks"
            items={[
              "Water shortages impact manufacturing and agricultural production",
              "Increased raw material volatility due to climate-related production challenges",
              "Higher transportation costs from infrastructure damage and extreme weather events",
            ]}
          />
          <RiskCard
            title="Direct Operational Costs"
            items={[
              "Physical damage to facilities from more frequent and intense storms",
              "Increased energy costs for cooling/heating due to temperature extremes",
              "Potential relocation expenses for high-risk geographical areas",
            ]}
          />
          <RiskCard
            title="Financial & Investment Risks"
            items={[
              "Investors increasingly screening companies for climate resilience",
              "Potential devaluation of assets in high-risk climate zones",
              "Increased compliance and adaptation costs reducing profit margins",
            ]}
          />
          <RiskCard
            title="Regulatory & Compliance Pressures"
            items={[
              "Mandatory emissions reporting",
              "Carbon pricing mechanisms",
              "Increased sustainability disclosure requirements",
              "Potential penalties for non-compliance with environmental standards",
            ]}
          />
          <RiskCard
            title="Insurance & Risk Management"
            items={[
              "Increased insurance premiums in climate-vulnerable sectors / regions",
              "Potential reduced insurability for high-risk assets",
              "More complex risk modeling and management strategies required",
            ]}
          />
          <RiskCard
            title="Technology & Adaptation Costs"
            items={[
              "Required upgrades to climate-resistant technologies",
              "Development of alternative production methods",
              "Research and development for climate adaptation strategies",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="relative aspect-[21/6] rounded-lg overflow-hidden mb-10">
          <Image
            src="/images/wind-energy.png"
            alt="Wind energy turbines"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/40" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
          Let&apos;s Discuss Your Climate Risk
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Let&apos;s set up some time to discuss how we can help mitigate the
          risks you face.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-forest-light text-dark-bg px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-colors"
        >
          Get In Touch
        </Link>
      </Section>
    </>
  );
}
