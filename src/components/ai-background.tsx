export function AiBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="grid-pattern absolute inset-0 opacity-80" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/70"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${16 + ((index * 29) % 62)}%`,
            animation: `float ${4 + (index % 5)}s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
