"use client";

const items = [
  "RAW",
  "REAL",
  "REVITALIZING",
  "SUPER RAW JUICES",
  "SMOOTHIES",
  "JUICES",
  "FRESH DAILY",
  "CAPE TOWN",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y-4 border-leaf-deep bg-pulp py-3"
    >
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-display text-lg tracking-widest text-cream"
          >
            {item}
            <span className="inline-block h-2 w-2 rounded-full bg-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}
