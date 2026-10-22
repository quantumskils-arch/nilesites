export type ServiceArtKind = "design" | "hosting" | "bots" | "momo" | "gbp" | "seo" | "agents";

const bgs: Record<ServiceArtKind, [string, string]> = {
  design: ["#0c1e36", "#123a5c"],
  hosting: ["#0a1a2e", "#0f3d4e"],
  bots: ["#0c1e36", "#1a2f5e"],
  momo: ["#0a1a2e", "#3d2e10"],
  gbp: ["#0c1e36", "#14425a"],
  seo: ["#0a1a2e", "#123048"],
  agents: ["#081220", "#152a4a"],
};

export default function ServiceArt({ kind, className = "" }: { kind: ServiceArtKind; className?: string }) {
  const [c1, c2] = bgs[kind];
  const id = `sa-${kind}`;
  return (
    <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" role="presentation">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <linearGradient id={`${id}-acc`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill={`url(#${id}-bg)`} />
      {/* faint grid */}
      <g stroke="#ffffff" strokeOpacity="0.05">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="400" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="600" y2={i * 60} />
        ))}
      </g>
      {kind === "design" && (
        <g>
          <rect x="120" y="70" width="360" height="250" rx="14" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
          <circle cx="148" cy="94" r="6" fill="#f87171" />
          <circle cx="170" cy="94" r="6" fill="#fbbf24" />
          <circle cx="192" cy="94" r="6" fill="#34d399" />
          <rect x="148" y="120" width="140" height="16" rx="4" fill="url(#sa-design-acc)" opacity="0.9" />
          <rect x="148" y="148" width="200" height="8" rx="3" fill="#94a3b8" opacity="0.5" />
          <rect x="148" y="164" width="170" height="8" rx="3" fill="#94a3b8" opacity="0.35" />
          <rect x="148" y="196" width="130" height="80" rx="8" fill="#1e3a5f" stroke="#60a5fa" strokeOpacity="0.4" />
          <rect x="292" y="196" width="130" height="80" rx="8" fill="#1e3a5f" stroke="#fbbf24" strokeOpacity="0.4" />
          <rect x="160" y="212" width="60" height="8" rx="3" fill="#60a5fa" opacity="0.7" />
          <rect x="160" y="228" width="90" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
          <rect x="304" y="212" width="60" height="8" rx="3" fill="#fbbf24" opacity="0.7" />
          <rect x="304" y="228" width="90" height="6" rx="2" fill="#94a3b8" opacity="0.4" />
          <path d="M420 290 l24 10 -10 4 -4 10 z" fill="#fbbf24" stroke="#0b1526" strokeWidth="2" />
        </g>
      )}
      {kind === "hosting" && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(190, ${100 + i * 70})`}>
              <rect width="220" height="54" rx="10" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
              <circle cx="28" cy="27" r="7" fill={i === 1 ? "#34d399" : "#60a5fa"} />
              <circle cx="28" cy="27" r="12" fill="none" stroke={i === 1 ? "#34d399" : "#60a5fa"} strokeOpacity="0.35" />
              <rect x="52" y="18" width="90" height="7" rx="3" fill="#94a3b8" opacity="0.5" />
              <rect x="52" y="32" width="60" height="6" rx="2" fill="#94a3b8" opacity="0.3" />
              <rect x="160" y="16" width="36" height="22" rx="5" fill="#1e3a5f" stroke="#fbbf24" strokeOpacity="0.5" />
            </g>
          ))}
          <path d="M250 70 q-8 -26 18 -30 q10 -18 32 -8 q16 -12 30 6 q22 2 16 24 q14 10 2 24 h-90 q-16 -6 -8 -16z" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeOpacity="0.85" />
        </g>
      )}
      {kind === "bots" && (
        <g>
          <rect x="230" y="60" width="140" height="270" rx="22" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.6" strokeWidth="2.5" />
          <rect x="278" y="74" width="44" height="8" rx="4" fill="#1e3a5f" />
          <rect x="248" y="100" width="90" height="34" rx="10" fill="#1e3a5f" />
          <rect x="258" y="110" width="60" height="6" rx="2" fill="#94a3b8" opacity="0.6" />
          <rect x="262" y="150" width="90" height="34" rx="10" fill="url(#sa-bots-acc)" opacity="0.9" />
          <rect x="272" y="160" width="60" height="6" rx="2" fill="#0b1526" opacity="0.7" />
          <rect x="248" y="200" width="80" height="30" rx="10" fill="#1e3a5f" />
          <rect x="258" y="210" width="50" height="6" rx="2" fill="#94a3b8" opacity="0.5" />
          <circle cx="300" cy="290" r="14" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          <path d="M294 290 l5 5 9 -10" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M410 120 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6z" fill="#fbbf24" opacity="0.9" />
          <path d="M170 220 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="#60a5fa" opacity="0.8" />
        </g>
      )}
      {kind === "momo" && (
        <g>
          <rect x="150" y="110" width="180" height="110" rx="14" fill="#0b1526" stroke="#fbbf24" strokeOpacity="0.6" strokeWidth="2.5" />
          <rect x="150" y="136" width="180" height="24" fill="#fbbf24" opacity="0.25" />
          <rect x="168" y="176" width="70" height="10" rx="4" fill="#94a3b8" opacity="0.55" />
          <circle cx="296" cy="182" r="12" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="278" cy="182" r="12" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.8" />
          <rect x="360" y="80" width="110" height="190" rx="18" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.55" strokeWidth="2.5" />
          <circle cx="415" cy="150" r="26" fill="none" stroke="#34d399" strokeWidth="3" />
          <path d="M403 150 l9 9 16 -18" stroke="#34d399" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="378" y="196" width="74" height="8" rx="3" fill="#94a3b8" opacity="0.5" />
          <rect x="390" y="214" width="50" height="7" rx="3" fill="#94a3b8" opacity="0.35" />
          <circle cx="180" cy="290" r="20" fill="#1e3a5f" stroke="#fbbf24" strokeOpacity="0.7" strokeWidth="2" />
          <circle cx="222" cy="290" r="20" fill="#1e3a5f" stroke="#60a5fa" strokeOpacity="0.7" strokeWidth="2" />
          <circle cx="264" cy="290" r="20" fill="#1e3a5f" stroke="#34d399" strokeOpacity="0.7" strokeWidth="2" />
        </g>
      )}
      {kind === "gbp" && (
        <g>
          <rect x="140" y="150" width="200" height="130" rx="8" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
          <path d="M130 150 h220 l-20 -36 h-180 z" fill="#1e3a5f" stroke="#60a5fa" strokeOpacity="0.5" strokeWidth="2" />
          <rect x="170" y="190" width="44" height="90" fill="#123048" stroke="#fbbf24" strokeOpacity="0.5" />
          <rect x="240" y="190" width="70" height="50" rx="4" fill="#123048" stroke="#94a3b8" strokeOpacity="0.4" />
          <path d="M400 90 c-30 0 -54 24 -54 54 c0 40 54 100 54 100 s54 -60 54 -100 c0 -30 -24 -54 -54 -54z" fill="url(#sa-gbp-acc)" opacity="0.95" />
          <circle cx="400" cy="144" r="20" fill="#0b1526" />
          <rect x="120" y="310" width="300" height="34" rx="17" fill="#0b1526" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="146" cy="327" r="8" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
          <line x1="152" y1="333" x2="160" y2="341" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="172" y="322" width="120" height="9" rx="4" fill="#94a3b8" opacity="0.45" />
        </g>
      )}
      {kind === "seo" && (
        <g>
          <rect x="130" y="90" width="250" height="180" rx="12" fill="#0b1526" stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="2" />
          <rect x="154" y="210" width="34" height="36" rx="4" fill="#1e3a5f" />
          <rect x="202" y="180" width="34" height="66" rx="4" fill="#2563a8" />
          <rect x="250" y="150" width="34" height="96" rx="4" fill="url(#sa-seo-acc)" opacity="0.9" />
          <rect x="298" y="120" width="34" height="126" rx="4" fill="#fbbf24" opacity="0.9" />
          <path d="M154 170 L219 140 L267 110 L315 84" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
          <path d="M300 84 h22 v22" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="420" cy="230" r="44" fill="#0b1526" stroke="#fbbf24" strokeWidth="3.5" />
          <line x1="452" y1="262" x2="492" y2="302" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" />
        </g>
      )}
      {kind === "agents" && (
        <g>
          <circle cx="300" cy="200" r="90" fill="none" stroke="#60a5fa" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="300" cy="200" r="140" fill="none" stroke="#fbbf24" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="300" cy="200" r="46" fill="#0b1526" stroke="url(#sa-agents-acc)" strokeWidth="3" />
          <circle cx="284" cy="192" r="6" fill="#60a5fa" />
          <circle cx="316" cy="192" r="6" fill="#fbbf24" />
          <path d="M282 216 q18 14 36 0" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="390" cy="200" r="10" fill="#fbbf24" opacity="0.9" />
          <circle cx="210" cy="200" r="8" fill="#60a5fa" opacity="0.9" />
          <circle cx="300" cy="60" r="7" fill="#34d399" opacity="0.9" />
          <circle cx="300" cy="340" r="7" fill="#60a5fa" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}
