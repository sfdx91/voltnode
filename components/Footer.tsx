import Section from "./ui/Section";

const hosting = ["Minecraft", "Counter-Strike 2", "Counter-Strike 1.6", "Rust", "Palworld"];
const company = ["About Us", "Network", "Status", "Contact", "Terms"];
const support = ["Client Area", "Knowledge Base", "Discord", "Open Ticket", "System Status"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section as="footer" className="border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-2xl font-black text-black shadow-lg shadow-cyan-500/20">
              V
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">VoltNode</h2>
              <p className="text-sm text-slate-400">Enterprise Game Hosting</p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-400">
            Premium game hosting powered by enterprise AMD hardware, ultra-fast NVMe
            storage and global low-latency infrastructure.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-green-300">All Systems Operational</span>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <FooterColumn title="Hosting" items={hosting} />
          <FooterColumn title="Company" items={company} />
          <FooterColumn title="Support" items={support} />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
        <p>© {year} VoltNode. All rights reserved.</p>
        <p>Powered by Next.js • React • Pterodactyl</p>
      </div>
    </Section>
  );
}

type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-slate-400 transition-colors duration-200 hover:text-cyan-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
