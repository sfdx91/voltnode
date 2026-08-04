import {
  Globe,
  Cpu,
  ShieldCheck,
  Activity,
  Server,
  Zap,
} from "lucide-react";

import Card from "./ui/Card";
import Grid from "./ui/Grid";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const infrastructure = [
  {
    icon: Globe,
    title: "Global Locations",
    value: "30+ Regions",
    description:
      "Deploy servers close to your players with worldwide coverage.",
  },
  {
    icon: Cpu,
    title: "Enterprise CPUs",
    value: "AMD Ryzen & EPYC",
    description:
      "Latest-generation processors designed for maximum performance.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    value: "Always Enabled",
    description:
      "Enterprise-grade mitigation keeps your servers online 24/7.",
  },
  {
    icon: Activity,
    title: "Network Uptime",
    value: "99.99%",
    description:
      "Reliable infrastructure backed by premium datacenters.",
  },
  {
    icon: Server,
    title: "NVMe Storage",
    value: "Ultra Fast",
    description:
      "High-speed NVMe SSDs dramatically improve loading times.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    value: "< 20 ms",
    description:
      "Optimized routes provide excellent response times.",
  },
];

export default function InfrastructureSection() {
  return (
    <Section id="infrastructure">
      <SectionTitle
        badge="Infrastructure"
        title="Built for Performance"
        description="Premium hardware and enterprise infrastructure engineered for modern game communities."
      />

      <Grid cols={3}>
        {infrastructure.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-bold leading-tight text-white">
                {item.title}
              </h3>

              <p className="mt-2 font-semibold text-cyan-400">
                {item.value}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
