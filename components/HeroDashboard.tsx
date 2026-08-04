export default function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-cyan-500/8 blur-2xl" />

      <div className="glass glow rounded-2xl p-6 sm:p-8">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              VoltNode Cloud
            </p>

            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Network Status
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>

            <span className="text-sm font-medium text-green-300">
              Operational
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-3">

          <Stat
            title="CPU Usage"
            value="14%"
            color="text-cyan-400"
          />

          <Stat
            title="Memory"
            value="31%"
            color="text-cyan-400"
          />

          <Stat
            title="Active Servers"
            value="1,248"
            color="text-white"
          />

          <Stat
            title="Players Online"
            value="18,542"
            color="text-white"
          />

          <Stat
            title="Latency"
            value="11 ms"
            color="text-cyan-400"
          />

          <Stat
            title="Uptime"
            value="99.99%"
            color="text-green-400"
          />

        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">
              Global Nodes
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              30+
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">
              DDoS Protection
            </p>

            <h3 className="mt-2 text-2xl font-bold text-cyan-400">
              Enabled
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}

type StatProps = {
  title: string;
  value: string;
  color?: string;
};

function Stat({
  title,
  value,
  color = "text-white",
}: StatProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-500/30 hover:bg-white/[0.05]">
      <span className="text-slate-400">
        {title}
      </span>

      <span className={`font-semibold ${color}`}>
        {value}
      </span>
    </div>
  );
}
