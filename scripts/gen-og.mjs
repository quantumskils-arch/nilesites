import sharp from "sharp";

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0e1835"/>
      <stop offset="55%" stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#0a1628"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#eccd70"/>
      <stop offset="50%" stop-color="#d4a34a"/>
      <stop offset="100%" stop-color="#b8893a"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="10%" r="60%">
      <stop offset="0%" stop-color="#d4a34a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#d4a34a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- wave lines (Nile motif) -->
  <g fill="none" stroke="#d4a34a" stroke-width="3" opacity="0.5">
    <path d="M0 540 Q 150 510 300 540 T 600 540 T 900 540 T 1200 540"/>
    <path d="M0 565 Q 150 535 300 565 T 600 565 T 900 565 T 1200 565" opacity="0.35"/>
    <path d="M0 590 Q 150 560 300 590 T 600 590 T 900 590 T 1200 590" opacity="0.2"/>
  </g>

  <rect x="70" y="70" width="64" height="64" rx="14" fill="#d4a34a"/>
  <text x="102" y="115" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="800" fill="#0a1628" text-anchor="middle">N</text>

  <text x="150" y="112" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="800" fill="#ffffff">NileSites</text>

  <text x="70" y="290" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Websites that grow</text>
  <text x="70" y="380" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="url(#gold)">your business.</text>

  <rect x="70" y="410" width="140" height="6" rx="3" fill="url(#gold)"/>

  <text x="70" y="480" font-family="Inter, Arial, sans-serif" font-size="30" fill="#9ea4c0">Premium web design for Ugandan businesses · Starting at UGX 450,000</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("OG image written");
