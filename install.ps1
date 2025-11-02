Clear-Host
$ErrorActionPreference = "Stop"

# Banner
Write-Host -ForegroundColor Cyan "╔════════════════════════════════════════════╗"
Write-Host -ForegroundColor Cyan "║     🌐 UNIVERSAL VIDEO DOWNLOADER SETUP     ║"
Write-Host -ForegroundColor Cyan "╚════════════════════════════════════════════╝"
Write-Host ""

# Animasi dan langkah-langkah
$steps = @(
    "📦 Memeriksa dependensi Node.js & npm...",
    "⚙️  Menginstal paket...",
    "🔗 Membuat link global CLI...",
    "🧩 Menyiapkan folder downloads...",
    "✅ Instalasi selesai!"
)

foreach ($step in $steps) {
    Write-Host -ForegroundColor Yellow -NoNewline "→ $step"
    Start-Sleep -Milliseconds 500
    Write-Host -ForegroundColor Green " ✓"
}

# Eksekusi real
Write-Host ""
npm install
npm link
if (!(Test-Path "downloads")) { New-Item -ItemType Directory -Path "downloads" | Out-Null }
Write-Host ""

Write-Host -ForegroundColor Cyan "✨ Selesai! Jalankan perintah berikut:`n"
Write-Host -ForegroundColor Green "   univ --help`n"
