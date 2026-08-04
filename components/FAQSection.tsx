"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Card from "./ui/Card";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const faq = [
  {
    question: "How long does server deployment take?",
    answer:
      "Most servers are deployed automatically in less than 30 seconds after your order is completed.",
  },
  {
    question: "Do you provide DDoS protection?",
    answer:
      "Yes. Every server includes enterprise-grade DDoS protection at no additional cost.",
  },
  {
    question: "Can I upload my own mods or plugins?",
    answer:
      "Absolutely. You have full access to your server through the control panel, FTP and file manager.",
  },
  {
    question: "Can I upgrade my server later?",
    answer:
      "Yes. You can upgrade your RAM, CPU or storage at any time without losing your files.",
  },
  {
    question: "Where are your servers located?",
    answer:
      "VoltNode offers multiple worldwide locations with low latency and enterprise connectivity.",
  },
  {
    question: "Do you use Pterodactyl Panel?",
    answer:
      "Yes. VoltNode is powered by Pterodactyl, providing a modern, fast and intuitive game server management experience.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionTitle
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before deploying your first server."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {faq.map((item, index) => (
          <Card key={item.question} hover={false}>
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
              >
                <span className="pr-6 text-lg font-semibold leading-7 text-white sm:text-xl">
                  {item.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180 text-cyan-400" : "text-slate-400"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                  ? "mt-5 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="leading-8 text-slate-400">
                  {item.answer}
                </p>
              </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
