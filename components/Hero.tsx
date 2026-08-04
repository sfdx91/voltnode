import HeroDashboard from "./HeroDashboard";
import Button from "./ui/Button";
import Section from "./ui/Section";

const stats = [
  { value: "99.99%", label: "Network Uptime" },
  { value: "30+", label: "Global Locations" },
  { value: "24/7", label: "Premium Support" },
];

export default function Hero() {
  return (
    <Section className="overflow-hidden">
      <div className="absolute left-1/2 top-0 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            ⚡ Enterprise Game Hosting Platform
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.045em] text-white md:text-6xl xl:text-7xl">
            Deploy your
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Game Server
            </span>
            in Seconds.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-7 text-slate-400">
            Premium game hosting powered by enterprise hardware, instant deployment,
            DDoS protection and a modern control panel designed for gamers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>Deploy Server</Button>
            <Button href="#pricing" variant="secondary">View Pricing</Button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-2xl font-bold leading-none text-white sm:text-3xl">{stat.value}</h3>
                <p className="mt-2 text-sm leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:justify-self-end">
          <HeroDashboard />
        </div>
      </div>
    </Section>
  );
}
