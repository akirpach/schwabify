import { PricingCardFree } from "../ui/pricing-card-free";
import { PricingCardPro } from "../ui/pricing-card-pro";

export function Pricing() {
  return (
    <section id="pricing-section" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your trading needs
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
            <PricingCardFree />
            <PricingCardPro />
          </div>
        </div>
      </div>
    </section>
  );
}
