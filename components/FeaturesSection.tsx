import {
  Rocket,
  ShieldCheck,
  Cpu,
  Globe,
  HardDrive,
  Database,
} from "lucide-react";

import Card from "./ui/Card";
import Grid from "./ui/Grid";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const features = [
  {
    icon: Rocket,
    title: "Instant Deployment",
    description:
      "Launch your server in seconds with our fully automated deployment platform.",
  },
  {
    icon: Cpu,
    title: "Ryzen & EPYC CPUs",
    description:
      "Powered by enterprise AMD processors delivering maximum performance.",
  },
  {
    icon: ShieldCheck,
    title: "Premium DDoS Protection",
    description:
      "Advanced protection keeps your servers online against network attacks.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Deploy in multiple worldwide locations with consistently low latency.",
  },
  {
    icon: HardDrive,
    title: "NVMe SSD Storage",
    description:
      "Ultra-fast NVMe storage for shorter loading times and better responsiveness.",
  },
  {
    icon: Database,
    title: "Automatic Backups",
    description:
      "Protect your worlds and configurations with scheduled backups.",
  },
];

export default function FeaturesSection() {
  return (
    <Section id="features">
      <SectionTitle
        badge="Why Choose VoltNode"
        title="Enterprise Infrastructure"
        description="Premium hardware, automated deployment and enterprise-grade reliability designed for modern game communities."
      />

      <Grid cols={3}>
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-bold leading-tight text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
