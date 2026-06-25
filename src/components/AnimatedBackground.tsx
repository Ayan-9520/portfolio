const AnimatedBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="absolute -left-20 top-20 h-72 w-72 animate-pulse-glow rounded-full bg-primary/15 blur-3xl" />
    <div className="absolute -right-16 bottom-24 h-64 w-64 animate-pulse-glow rounded-full bg-secondary/15 blur-3xl [animation-delay:1.5s]" />
  </div>
);

export default AnimatedBackground;
