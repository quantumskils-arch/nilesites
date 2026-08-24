#!/usr/bin/env python3
"""Generate NileSites OG banner (1200x630) + favicon + icon using PIL."""
from PIL import Image, ImageDraw, ImageFont

NAVY = (10, 22, 40, 255)
NAVY2 = (14, 24, 53, 255)
GOLD = (212, 163, 74, 255)
GOLD_L = (224, 184, 74, 255)
WHITE = (255, 255, 255, 255)
GRAY = (156, 163, 175, 255)
FONT_DIR = "/usr/share/fonts/truetype/dejavu/"

def font(size, bold=True):
    return ImageFont.truetype(FONT_DIR + ("DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"), size)

# --- OG banner 1200x630 ---
img = Image.new("RGB", (1200, 630), NAVY)
d = ImageDraw.Draw(img)

# subtle radial glow top-left
glow = Image.new("RGB", (1200, 630), NAVY)
gd = ImageDraw.Draw(glow)
for i in range(120, 0, -4):
    a = int(14 * (i / 120))
    gd.ellipse([-200 + i, -200 + i, 400 - i, 400 - i], fill=(GOLD[0], GOLD[1], GOLD[2], 0))
img = Image.blend(img, glow, 0.15)
d = ImageDraw.Draw(img)

# gold wave lines (Nile motif)
for y, alpha in [(560, 90), (580, 60), (600, 35)]:
    d.rounded_rectangle([0, y, 1200, y + 3], radius=2, fill=(GOLD[0], GOLD[1], GOLD[2], alpha))
# small wave curves
for i, (x0, y0) in enumerate([(40, 545), (60, 528), (80, 545)]):
    d.arc([x0, y0, x0 + 90, y0 + 40], 180, 360, fill=(GOLD[0], GOLD[1], GOLD[2], 70), width=3)

# logo square
d.rounded_rectangle([90, 92, 170, 172], radius=18, fill=GOLD)
d.text((130, 104), "N", font=font(52), fill=NAVY, anchor="mm")

# brand
d.text((200, 132), "NileSites", font=font(58), fill=WHITE, anchor="lm")
# gold underline
d.rounded_rectangle([202, 178, 440, 184], radius=3, fill=GOLD)

# headline
d.text((90, 260), "Websites that grow", font=font(72), fill=WHITE, anchor="lm")
d.text((90, 345), "your business.", font=font(72), fill=GOLD_L, anchor="lm")

# tagline
d.text((90, 440), "Premium web design for Ugandan businesses — starting at UGX 450,000", font=font(30), fill=GRAY, anchor="lm")
d.text((90, 490), "Hosting · SEO · WhatsApp bots · Mobile money included", font=font(30), fill=GRAY, anchor="lm")

img.save("/home/ubuntu/nilesites/public/og.png", "PNG")
print("og.png OK")

# --- favicon (icon) 512 ---
icon = Image.new("RGB", (512, 512), NAVY)
id_ = ImageDraw.Draw(icon)
id_.rounded_rectangle([32, 32, 480, 480], radius=96, fill=GOLD)
id_.text((256, 236), "N", font=font(300), fill=NAVY, anchor="mm")
# small wave
id_.arc([120, 320, 280, 400], 180, 360, fill=NAVY, width=22)
id_.arc([230, 320, 390, 400], 180, 360, fill=NAVY, width=22)
icon.save("/home/ubuntu/nilesites/public/icon.png", "PNG")
print("icon.png OK")

# favicon 32
fav = icon.resize((32, 32), Image.LANCZOS)
fav.save("/home/ubuntu/nilesites/public/favicon.png", "PNG")
print("favicon.png OK")
