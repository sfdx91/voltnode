"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import Button from "./ui/Button";
import Card from "./ui/Card";
import Grid from "./ui/Grid";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const plans = [
  {
    name: "Starter",
    monthly: 2.99,
    yearly: 2.39,
    description: "Perfect for small communities.",
    featured: false,
    features: [
      "2 GB DDR5 RAM",
      "Ryzen CPU",
      "NVMe SSD",
      "DDoS Protection",
      "Instant Setup",
      "24/7 Support",
    ],
  },
  {
    name: "Pro",
    monthly: 8.99,
    yearly: 7.19,
    description: "Our most popular hosting plan.",
    featured: true,
    features: [
      "8 GB DDR5 RAM",
      "Ryzen 9 9950X",
      "NVMe SSD",
      "Priority Support",
      "Automatic Backups",
      "Unlimited Slots",
    ],
  },
  {
    name: "Enterprise",
    monthly: 24.99,
    yearly: 19.99,
    description: "Maximum performance for large projects.",
    featured: false,
    features: [
      "32 GB DDR5 RAM",
      "AMD EPYC",
      "Dedicated Resources",
      "Premium Support",
      "Unlimited Backups",
      "Custom Configuration",
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section id="pricing">
      <SectionTitle
        badge="Pricing"
        title="Simple & Transparent Pricing"
        description="Choose the perfect hosting plan for your community."
      />

      <div className="mb-8 flex justify-center sm:mb-10">
        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1.5">
          <button
            type="button"
            onClick={() => setYearly(false)}
            aria-pressed={!yearly}
            className={`rounded-lg px-4 py-2.5 text-sm transition sm:px-5 ${
              !yearly
                ? "bg-cyan-500 font-semibold text-black"
                : "text-slate-400"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setYearly(true)}
            aria-pressed={yearly}
            className={`rounded-lg px-4 py-2.5 text-sm transition sm:px-5 ${
              yearly
                ? "bg-cyan-500 font-semibold text-black"
                : "text-slate-400"
            }`}
          >
            Yearly (-20%)
          </button>
        </div>
      </div>

      <Grid cols={3}>
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.featured ? "border-cyan-400/50" : ""}
          >

              <div className="flex flex-wrap items-center justify-between gap-3">
  <h3 className="text-xl font-bold leading-tight text-white">{plan.name}</h3>
  {plan.featured && (
    <span className="shrink-0 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
      MOST POPULAR
    </span>
  )}
</div>

<p className="mt-3 text-slate-400">{plan.description}</p>

              <div className="mt-8">

                <span className="text-4xl font-black leading-none tracking-[-0.04em] text-white sm:text-5xl">
                  €
                  {yearly
                    ? plan.yearly.toFixed(2)
                    : plan.monthly.toFixed(2)}
                </span>

                <span className="ml-2 text-slate-400">
                  /month
                </span>

              </div>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-3">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="text-slate-300">
                      {feature}
                    </span>
                  </div>

                ))}

              </div>

              <div className="mt-auto pt-8">

                <Button fullWidth>
                  Deploy Server
                </Button>

              </div>

          </Card>
        ))}
      </Grid>
    </Section>
  );
}
