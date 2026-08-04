import Button from "./ui/Button";
import Card from "./ui/Card";
import Grid from "./ui/Grid";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const games = [
  {
    name: "Counter-Strike 1.6",
    icon: "🎯",
    description: "Classic competitive FPS with ReHLDS support.",
    price: "From €2.99/mo",
    players: "32 Slots",
  },
  {
    name: "Counter-Strike 2",
    icon: "💥",
    description: "High-performance Source 2 dedicated servers.",
    price: "From €6.99/mo",
    players: "Competitive",
  },
  {
    name: "Minecraft Java",
    icon: "⛏️",
    description: "Modpacks, Paper, Fabric, Forge and more.",
    price: "From €4.99/mo",
    players: "Unlimited",
  },
  {
    name: "Minecraft Bedrock",
    icon: "🧱",
    description: "Fast Bedrock hosting with instant setup.",
    price: "From €4.99/mo",
    players: "Unlimited",
  },
  {
    name: "Rust",
    icon: "🛢️",
    description: "Dedicated Rust servers with premium hardware.",
    price: "From €9.99/mo",
    players: "500 Players",
  },
  {
    name: "Palworld",
    icon: "🐉",
    description: "Deploy your Palworld server in seconds.",
    price: "From €8.99/mo",
    players: "32 Players",
  },
  {
    name: "Left 4 Dead 2",
    icon: "🧟",
    description: "Co-op zombie servers with low latency.",
    price: "From €3.99/mo",
    players: "8 Players",
  },
  {
    name: "Terraria",
    icon: "🌳",
    description: "Easy multiplayer hosting for Terraria.",
    price: "From €2.99/mo",
    players: "Unlimited",
  },
];

export default function GamesSection() {
  return (
    <Section id="games">
      <SectionTitle
        badge="Supported Games"
        title="Choose your game"
        description="Launch high-performance servers with instant deployment, enterprise hardware and global infrastructure."
      />

      <Grid cols={4}>
        {games.map((game) => (
          <Card key={game.name}>
              <div className="mb-6 text-5xl leading-none">{game.icon}</div>

              <h3 className="text-xl font-bold leading-tight text-white">
                {game.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {game.description}
              </p>

              <div className="mt-8 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Starting at
                  </span>

                  <span className="font-semibold text-cyan-400">
                    {game.price}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Capacity
                  </span>

                  <span className="text-white">
                    {game.players}
                  </span>
                </div>
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
