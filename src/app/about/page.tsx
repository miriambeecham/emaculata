import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Emaculata",
  description:
    "Learn about Brad Jackson and Emaculata's climate risk consulting expertise.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg text-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            How do you quantify climate risk? Get reliable answers from an
            expert.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/profile/Brad_Jackson_Profile.jpg"
                  alt="Brad Jackson"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-forest mt-6 text-center">
                Brad Jackson
              </h2>
              <p className="text-gray-500 text-center">
                Founder &amp; Principal Consultant
              </p>
            </div>
            <div className="md:col-span-2 space-y-5 text-lg leading-relaxed">
              <p>
                Brad Jackson is a highly respected climate advisory consultant
                based in Australia, with over 15 years of experience in
                sustainability and climate risk management. He is deeply
                embedded in the country&apos;s climate and meteorology community,
                with strong professional connections across leading research
                institutions, government agencies, and industry networks. His
                relationships with top climate scientists, policy-makers, and
                meteorologists enable him to stay at the forefront of emerging
                climate trends and regulatory shifts, ensuring his clients
                benefit from the latest insights and data-driven strategies.
              </p>
              <p>
                Brad holds a Master&apos;s degree in Environmental Science from the
                Australian National University and has collaborated with organizations
                across sectors such as energy, finance, and real estate to build
                climate resilience into their operations. With a practical
                approach and an extensive network, Brad empowers businesses and
                investors to drive positive environmental impact while achieving
                long-term success in the rapidly evolving landscape of climate
                risk and opportunity in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
