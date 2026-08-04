import Link from "next/link";

import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/30">
              <span className="text-xl font-black text-cyan-400">V</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-white">VoltNode</h1>
              <p className="text-xs text-slate-400">Enterprise Game Hosting</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <a href="#games" className="transition hover:text-cyan-400">Games</a>
            <a href="#features" className="transition hover:text-cyan-400">Features</a>
            <a href="#infrastructure" className="transition hover:text-cyan-400">Locations</a>
            <a href="#pricing" className="transition hover:text-cyan-400">Pricing</a>
            <a href="#faq" className="transition hover:text-cyan-400">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button variant="secondary">Client Area</Button>
            </div>
            <button className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 transition">Deploy Server</button>
          </div>
        </div>
      </Container>
    </header>
  );
}
