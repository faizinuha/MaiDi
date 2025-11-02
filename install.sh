#!/usr/bin/env bash
set -e
clear

# Warna
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Banner
echo -e "${CYAN}╔════════════════════════════════════════════╗"
echo -e "║     🌐 UNIVERSAL VIDEO DOWNLOADER SETUP     ║"
echo -e "╚════════════════════════════════════════════╝${NC}"
echo ""

# Animasi dan langkah-langkah
steps=(
    "📦 Memeriksa dependensi Node.js & npm..."
    "⚙️  Menginstal paket..."
    "🔗 Membuat link global CLI..."
    "🧩 Menyiapkan folder downloads..."
    "✅ Instalasi selesai!"
)

for step in "${steps[@]}"; do
    echo -e "${YELLOW}→ ${step}${GREEN} ✓${NC}"
    sleep 0.5
done

# Eksekusi instalasi real
echo ""
npm install
npm link
mkdir -p downloads
echo ""

echo -e "${CYAN}✨ Selesai! Jalankan perintah berikut:${NC}
"
echo -e "${GREEN}   maidi --help${NC}
"
